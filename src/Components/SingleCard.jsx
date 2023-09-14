import React from "react";
import { Link } from "react-router-dom";
const SingleCard = (props) => {
  //   if (props.show) {
  //     var title = props.name;
  //     console.log("dgsg");
  //     console.log(props.show);
  //   } else {
  //     var title = props.original_title;
  //     //console.log(title);
  //     console.log("dsf");
  //   }

  return (
    <Link to={`/movie/${props.id}`}>
      <div className="flex flex-col  ">
        <div className=" sm:p-4 md:p-4 w-60 p-2 rounded-md h-80 ">
          <img
            src={`https://image.tmdb.org./t/p/original${props.poster_path}`}
            alt="shows"
            className="w-full h-full  rounded-md "
          />
        </div>
        <h2
          className={` mx-2 text-lg md:mx-4 ${
            props.dark ? "text-white" : "text-gray-800"
          }`}
        >
          {props.original_title}
        </h2>
      </div>
    </Link>
  );
};

export default SingleCard;
