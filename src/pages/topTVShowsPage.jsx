import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import { getTopRatedTVShows } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const TopRatedTVShowsPage = () => {
  const { data, error, isLoading, isError } = useQuery(
    "top-rated-tv-shows",
    getTopRatedTVShows
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const tvShows = data.results;

  return (
    <PageTemplate
      title="Top Rated TV Shows"
      movies={tvShows}
    />
  );
};

export default TopRatedTVShowsPage;
