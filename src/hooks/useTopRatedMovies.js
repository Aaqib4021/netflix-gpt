import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";
import { addTopRatedMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await movies.json();
    dispatch(addTopRatedMovies(data.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
