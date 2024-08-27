import React from "react";
import { IMG_CDN_URL } from "../Utils/Constants";

const MovieCard = ({ movie }) => {
  const { poster_path, original_title } = movie;
  return (
    <div className="w-52 bg-gradient-to-l from-black to-blue-200 p-4 rounded-xl">
      {/* <h2>{original_title}</h2> */}
      <img
        src={IMG_CDN_URL + poster_path}
        alt="movie-image"
        className="rounded-xl "
      />
    </div>
  );
};

export default MovieCard;
