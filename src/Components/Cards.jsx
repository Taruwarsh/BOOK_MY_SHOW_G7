import React from "react";
import Slider from "react-slick";
import SingleCard from "./SingleCard";

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Cards = (props) => {
  const dark = props.isDark;
  return (
    <>
      <div className={`h-96  ${props.isDark ? "bg-premier-800" : ""}`}>
        <h1
          className={`text-2xl mx-2 md:mx-4 font-bold ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {props.title}
        </h1>
        <h1
          className={` mx-2  md:mx-4 ${
            props.isDark ? "text-white" : "text-gray-500"
          }`}
        >
          {props.subject}
        </h1>
        <Slider {...settings}>
          {props.images.map((each, index) => (
            <SingleCard key={index} dark={dark} {...each} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Cards;
