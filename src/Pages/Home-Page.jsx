import React, { useEffect, useState } from "react";
import Defaultlayout from "../Layouts/Default-layout";
import HeroCarousel from "../Components/HeroCarousel";
import Cards from "../Components/Cards";
import Cardentertainment from "../Components/Card-entertainment";
import axios from "axios";

const HomePage = () => {
  const [recommended, setRecomend] = useState([]);
  const [premeirs, setPremeiere] = useState([]);
  const [shows, setshows] = useState([]);
  const [anime, setanime] = useState([]);

  useEffect(() => {
    const requestRecomended = async () => {
      const getRecomended = await axios.get(
        "https://api.themoviedb.org/3/movie/550/recommendations?api_key=20e9eb61289b500057554b5df063f221"
      );
      setRecomend(getRecomended.data.results);
    };
    requestRecomended();
  }, []);

  useEffect(() => {
    const requestPremeiere = async () => {
      const getPremeiere = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=20e9eb61289b500057554b5df063f221"
      );
      setPremeiere(getPremeiere.data.results);
    };
    requestPremeiere();
  }, []);

  useEffect(() => {
    const requestShows = async () => {
      const getShows = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=20e9eb61289b500057554b5df063f221"
      );
      setshows(getShows.data.results);
    };
    requestShows();
  }, []);

  useEffect(() => {
    const requestAnime = async () => {
      const getAnime = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=20e9eb61289b500057554b5df063f221"
      );
      setanime(getAnime.data.results);
    };
    requestAnime();
  }, []);

  return (
    <div>
      <HeroCarousel />
      <div className="Container my-3  mx-8 p-4">
        <Cards
          title="Recommended Movies"
          images={recommended}
          show={false}
          isDark={false}
        />
      </div>
      <div className=" mx-8">
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/lead-in-v3-collection-202102040828.png"
          alt="click"
        />
      </div>

      <div className="Container my-3  mx-8 p-4">
        <Cardentertainment />
      </div>

      <div className="Container my-3 mx-8 p-4  bg-premier-800">
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
          alt="click"
        />
        <Cards
          title="Premiers"
          subject="Brand new releases every Friday"
          isDark={true}
          images={premeirs}
          show={false}
        />
      </div>
      <div className="Container my-3  mx-8 p-4">
        <Cards title="Upcoming" images={shows} show={false} isDark={false} />
      </div>
      <div className="Container my-3  mx-8 p-4">
        <Cards title="Top Rated" images={anime} show={true} isDark={false} />
      </div>
    </div>
  );
};

export default Defaultlayout(HomePage);
