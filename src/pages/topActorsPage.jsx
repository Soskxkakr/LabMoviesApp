import React, { useEffect, useState } from "react";
import { getPopularActors } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";

const TopActorsPage = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await getPopularActors();
        setActors(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchActors();
  }, []);

  return <PageTemplate title="Top Actors" actors={actors} />;
};

export default TopActorsPage;
