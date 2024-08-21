import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import HeroContainer from "./HeroContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <HeroContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
