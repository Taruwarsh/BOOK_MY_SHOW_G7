import React from "react";
import Defaultlayout from "../Layouts/Default-layout";
import PlayCard from "../Components/PlayCard";
import PlayFilter from "../PlayFilter/PlayFilter";

const Plays = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full  flex flex-col-reverse lg:flex-row-reverse gap-4">
          <div className="lg:w-3/4 p-4 bg-slate-50 rounded">
            <h2 className="text-2xl font-bold mb-4">Plays in Kolkata</h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <PlayCard
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-resin-art-mastercourse-0-2022-10-10-t-15-3-1.jpg"
                  title="Resin Art Mastercourse"
                  subtitle="Online Streaming Events, Workshops | English, Hindi | 16yrs + | 1h"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <PlayCard
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-kunal-kamra-live-0-2022-7-16-t-9-34-53.jpg"
                  title="Kunal Kamra Live"
                  subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <PlayCard
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-daddy-kool-by-atul-khatri-0-2022-8-16-t-10-37-17.jpg"
                  title="Daddy Kool"
                  subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <PlayCard
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sunburn-arena-ft-dj-snake-delhi-ncr-0-2022-8-19-t-11-31-17.jpg"
                  title="Harry Houdini"
                  subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <PlayCard
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-nishant-tanwar-live-0-2022-10-6-t-13-5-6.jpg"
                  title="NISHANT TANWAR LIVE - Kolkata"
                  subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <PlayCard
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-create-your-own-game-with-roblox-editor-0-2022-4-3-t-8-57-47.jpg"
                  title="Roblox Editor : Game Creation"
                  subtitle="Kids | English | 5yrs + | 2hrs"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/4 p-4 bg-slate-50 rounded">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
              <PlayFilter
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
            </div>
            <div>
              <PlayFilter
                title="Language"
                tags={["English", "Hindi", "German", "Russian", "Spanish"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Defaultlayout(Plays);
