import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import axios from "axios";
// Routing
import { Routes, Route } from "react-router-dom";
//Pages
import HomePage from "./Pages/Home-Page";
import MoviePage from "./Pages/Movie-Page";
import Plays from "./Pages/Plays";
import NavBar from "./Components/NavBar"
import AuthForm from "./Components/AuthForm"
import BookingForm from "./Components/BookingForm";
import BookSeat from "./Components/BookSeat";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/plays" element={<Plays />} />
        <Route path="/authform" element={<AuthForm />} />
        <Route path ="/booking" element={<BookingForm/>}/>
        <Route path ="/bookseat" element={<BookSeat/>}/>
      </Routes>
    </>
  );
}

export default App;
