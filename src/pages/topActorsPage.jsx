import React, { useEffect, useState } from "react";
import { getPopularActors } from "../api/tmdb-api";

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

  return (
    <div>
      <h1>Top Actors</h1>
      <ul>
        {actors.map((actor) => (
          <li key={actor.id}>
            <h2>{actor.name}</h2>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
              />
            ) : (
              <img src={Stub} alt="no image available" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopActorsPage;
