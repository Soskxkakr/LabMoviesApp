import React, { useState, useEffect } from "react";
import { getPopularActors } from "../api/tmdb-api";

const TopActorsPage = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await getPopularActors();
        setActors(response.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchActors();
  }, []);

  return (
    <div>
      <h1>Top Actors</h1>
      <div className="actors-container">
        {actors.map((actor) => (
          <div key={actor.id} className="actor-box">
            <img
              src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
              alt={`${actor.name} profile`}
            />
            <h2>{actor.name}</h2>
            <p>{actor.known_for_department}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopActorsPage;
