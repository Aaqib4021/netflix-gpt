import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";
import { addNowPlayingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await movies.json();
    dispatch(addNowPlayingMovies(data.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
