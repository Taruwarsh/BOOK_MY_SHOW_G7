import React from "react";
import Footer from "../Components/Footer";

const Defaultlayout =
  (Component) =>
  (...props) => {
    return (
      <div>
        <Component {...props} />
        <Footer />
      </div>
    );
  };

export default Defaultlayout;
