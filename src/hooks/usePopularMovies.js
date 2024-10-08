import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";
import { addPopularMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await movies.json();
    dispatch(addPopularMovies(data.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default usePopularMovies;
