import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";
import { addTrailerVideo } from "../Utils/movieSlice";
import { useEffect } from "react";

const useTrailerVideo = ( movieId ) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const videos = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const data = await videos.json();
    const trailer = data.results.filter(
      (video) => video.name === "Official Trailer"
    );
    dispatch(addTrailerVideo(trailer[0]));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useTrailerVideo;
