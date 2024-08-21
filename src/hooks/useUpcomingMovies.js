import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../Utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await movies.json();
    dispatch(addUpcomingMovies(data.results));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};
export default useUpcomingMovies;
