import React, { useState } from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows";

const settings = {
  infinite: true,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  speed: 100,
  autoplay: true,
  slidesToShow: 1,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
};

const HeroCarousel = () => {
  const [Images, SetImages] = useState([]);
  return (
    <>
      <div className="w-full  h-96 ">
        <Slider {...settings}>
          <div className="w-full h-96 px-2 py-3">
            <img
              className="w-full h-full rounded-md object-cover"
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1663739433318_dreamhac.jpg"
              alt="shows"
            />
          </div>
          <div className="w-full h-96 px-2 py-3">
            <img
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1663918477360_web.jpg"
              alt="shows"
              className="w-full h-full rounded-md object-cover"
            />
          </div>
          <div className="w-full h-96 px-2 py-3">
            <img
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1664379877519_abhishek.jpg"
              alt="shows"
              className="w-full h-full rounded-md object-cover"
            />
          </div>
          <div className="w-full h-96 px-2 py-3">
            <img
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1664281103114_bigblastweb.jpg"
              alt="shows"
              className="w-full h-full rounded-md object-cover"
            />
          </div>
          <div className="w-full h-96 px-2 py-3">
            <img
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1663918477360_web.jpg"
              alt="shows"
              className="w-full h-full rounded-md object-cover"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default HeroCarousel;
