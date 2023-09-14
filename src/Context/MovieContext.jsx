import React, { useState, createContext } from "react";
export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movie, setMovie] = useState({
    id: 0,
    original_tittle: "",
    overview: "",
    backdrop_path: "",
    poster_path: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);


  const buyTickets = () => {
    setIsOpen(true);
    setPrice(399);
  };
  return (
    <MovieContext.Provider
      value={{
        movie,
        setMovie,
        isOpen,
        setIsOpen,
        price,
        setPrice,
        buyTickets,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
