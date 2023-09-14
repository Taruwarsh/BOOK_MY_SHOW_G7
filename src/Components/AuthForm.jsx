import {
  Box,
  Button,
  Dialog,
  FormLabel,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link, useNavigate } from "react-router-dom";
import uniqid from 'uniqid'
import axios from "axios";
import Swal from "sweetalert2";

const labelStyle = { mt: 1, mb: 1 };
const AuthForm = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSignup, setIsSignup] = useState(false);            // means user not sign up initially 

  const {name, email, password } = inputs;

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // onSubmit({ inputs, signup: isSignup });
    if(!isSignup){
      axios.post('https://localhost:7005/api/Users',inputs)
        .then((res)=> {
          setIsSignup(!isSignup);
        })
    }
    else{
      axios.post('https://localhost:7005/api/Users/login',{'email':email,'password':password})
        .then((res)=> {
          console.log(res);
          localStorage.token = uniqid();
          Swal.fire("Congrats", "You have Login Successfully.", "success");
          navigate('/');
          window.location.href = '/';
        })
        .catch((err)=> {
          console.log(err);
          navigate('/');
          Swal.fire("Oops!", "Invalid Credentials!", "error");
        })
    }
  };
  return (
    <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
      <Box sx={{ ml: "auto", padding: 1 }}>
        <IconButton LinkComponent={Link} to="/">
          <CloseRoundedIcon />
        </IconButton>
      </Box>
      <Typography variant="h4" textAlign={"center"}>
        {isSignup ? "Login" : "Signup"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          padding={6}
          display={"flex"}
          justifyContent={"center"}
          flexDirection="column"
          width={400}
          margin="auto"
          alignContent={"center"}
        >
          {!isSignup && (
            <>
              {" "}
              <FormLabel sx={labelStyle}>Name</FormLabel>
              <TextField
                value={inputs.name}
                onChange={handleChange}
                margin="normal"
                variant="standard"
                type={"text"}
                name="name"
              />
            </>
          )}
          <FormLabel sx={labelStyle}>Email</FormLabel>
          <TextField
            value={inputs.email}
            onChange={handleChange}
            margin="normal"
            variant="standard"
            type={"email"}
            name="email"
          />
          <FormLabel sx={labelStyle}>Password</FormLabel>
          <TextField
            value={inputs.password}
            onChange={handleChange}
            margin="normal"
            variant="standard"
            type={"password"}
            name="password"
          />
          <Button
            sx={{ mt: 2, borderRadius: 10, bgcolor: "#2b2d42" }}
            type="submit"
            fullWidth
            variant="contained"
          >
            {isSignup ? "Login" : "Signup"}
          </Button>
            <Button
              onClick={() => setIsSignup(!isSignup)}
              sx={{ mt: 2, borderRadius: 10 }}
              fullWidth
            >
              Switch To {isSignup ? "Signup" : "Login"}            
            </Button>
          
        </Box>
      </form>
    </Dialog>
  );
};

export default AuthForm;
