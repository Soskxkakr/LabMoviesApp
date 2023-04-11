import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import { getTopRatedMovies } from '../api/tmdb-api'
import Spinner from '../components/spinner'

const TopRatedMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery(
    "top-rated",
    getTopRatedMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}
    />
  );
};

export default TopRatedMoviesPage;

//new
