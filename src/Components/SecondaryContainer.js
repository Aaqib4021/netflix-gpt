import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="mt-[-200px] ">
        <MovieList title={"Now Playing"} moviesList={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} moviesList={movies.PopularMovies} />
        <MovieList title={"Top Rated"} moviesList={movies.TopRatedMovies} />
        <MovieList title={"Upcoming"} moviesList={movies.UpcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
