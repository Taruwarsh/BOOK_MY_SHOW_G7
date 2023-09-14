import React from "react";

const PlayCard = (props) => {
  return (
    <a
      href="https://in.bookmyshow.com/events/resin-art-mastercourse/ET00342109"
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex flex-col items-start gap-2 px-1 md:px-3">
        <div className="h-40 md:h-80">
          <img
            src={props.src}
            alt="poster"
            className="w-full h-full rounded-md object-cover object-center"
          />
        </div>
        <h3
          className={`text-lg font-bold ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {props.title}
        </h3>
      </div>
    </a>
  );
};

export default PlayCard;
