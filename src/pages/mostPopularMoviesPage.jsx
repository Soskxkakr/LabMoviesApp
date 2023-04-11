import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import { getPopularMovies } from '../api/tmdb-api';
import Spinner from '../components/spinner';

const MostPopularMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery(
    "popular",
    getPopularMovies
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
      title="Most Popular Movies"
      movies={movies}
    />
  );
};

export default MostPopularMoviesPage;

//new
