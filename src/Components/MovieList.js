import React from "react";
import MovieCard from "./MovieCard";
import "./scrollbar.css";

const MovieList = ({ title, moviesList }) => {
  return (
    <div className="relative z-10">
      <h1 className="text-3xl font-semibold mb-2  text-transparent bg-gradient-to-b from-red-500 to-zinc-700 bg-clip-text">{title}</h1>
      <div className="flex  overflow-x-scroll  scrollbar-hide space-x-4">
        <div className="flex mb-12 gap-4">
          {moviesList &&
            moviesList.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
