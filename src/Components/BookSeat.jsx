import "./bookticket.css";
import React from "react";
import { useState, useRef,useContext } from "react";
import Image1 from "../Image/screen.png";
import { MovieContext } from "../Context/MovieContext";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import PaymentModel from "./PaymentModel";
import Swal from "sweetalert2";

export default function Bookticket(props) {
  const { price, setIsOpen, isOpen, buyTickets } = useContext(MovieContext);
  const ref = useRef(null);
  console.log(ref);
  const [count, setCount] = useState(0);
  const [Price, setPrice] = useState(0);
  function changecolor(e) {
    if (e.target.className !== "row") {
      if (e.target.style.background !== "green") {
        e.target.style.background = "green";
        setCount(count + 1);
        setPrice(Price + 150);
      } else {
        e.target.style.background = " #01163E";
        setCount(count - 1);
        setPrice(Price - 150);
      }
    }
  }
  const checkoutToPayment= async(price)=>{
    await PaymentModel(price);
   }
  function buttonclick(){
    Swal.fire("Booked Succesfully");
    setTimeout(() => {
      navigate("/");
     
    },3000);
  }
  const navigate = useNavigate();
  let tl = gsap.timeline({ ease: "power1.in" });
  let clicked = false;

  function buttonanimation(e2) {
    if (clicked === false && count !== 0) {
      clicked = true;
      e2.target.innerText = "";
      tl.to("#button", { width: "50px", duration: 0.5 });
      tl.to(ref, { y: "0%", duration: 0.5 });
      console.log(e2);
      setTimeout(() => {
        // navigate("/");
      }, 3000);
    }
    let data = {
      MovieName: props.name,
      Price: Price,
      "count ": count,
    };
    // console.log(data)  
    let fetchoption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch(`https://book-my-show-back-end.onrender.com/booking${props.name}`, fetchoption);
  
  }
  return (
    <body1>
      
      {/* <PaymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} /> */}
      
      <ul className="showcase">
        <li>
          <div className="seat selected"></div>
          <small>Selected</small>
        </li>
        <li>
          <div className="seat occupied"></div>
          <small>Occupied</small>
        </li>
      </ul>

      <div className="container">
        <div className="movie-screen">
          <img src={Image1} alt="screen" />
        </div>

        <div className="row-container">
          <div onClick={changecolor} className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div onClick={changecolor} className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat "></div>
            <div className="seat "></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div onClick={changecolor} className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat "></div>
            <div className="seat "></div>
          </div>
          <div onClick={changecolor} className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div onClick={changecolor} className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat "></div>
            <div className="seat "></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div onClick={changecolor} className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div onClick={changecolor} className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat "></div>
            <div className="seat "></div>
            <div className="seat "></div>
            <div className="seat"></div>
          </div>
          <h5 className="subtitle"> ₹150</h5>

          <div className="text-wrapper">
            <p className="text">
              Selected Seats <span id="count">{count}</span>
            </p>
            <p className="text">
              Total Price ₹<span id="total">{Price}</span>
            </p>
            <body2>
              {" "}
              <div onClick={buttonclick} id="button">
                <span id="text">Book</span>
                <span ref={ref} id="w">
                  ✓
                </span>
              </div>
            </body2>
          </div>
        </div>
      </div>
    </body1>
  );
}