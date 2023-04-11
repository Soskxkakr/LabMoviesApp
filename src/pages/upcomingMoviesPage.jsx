import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import { getUpcomingMovies } from '../api/tmdb-api'
import Spinner from '../components/spinner'
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { useContext } from "react";
import { MoviesContext } from "../contexts/moviesContext";

const UpcomingMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery(
    "upcoming",
    getUpcomingMovies
  );

  const mustWatchHandler = (movie) => {
    context.addToMustWatch(movie);
  };

  const context = useContext(MoviesContext);
  const { addToMustWatch } = context;

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <PlaylistAddIcon movie={movie} onClick={() => mustWatchHandler(movie)} style={{ cursor: "pointer" }} />;
      }}
    />
  );
};

export default UpcomingMoviesPage;
