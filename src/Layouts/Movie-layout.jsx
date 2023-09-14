import React from "react";
import MovieNavBar from "../Components/MovieNavBar";
import Footer from "../Components/Footer";
const Movielayout =
  (Component) =>
  (...props) => {
    return (
      <div>
        <Component {...props} />
        <Footer />
      </div>
    );
  };

export default Movielayout;
