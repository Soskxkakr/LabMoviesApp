import { createContext, useContext, useEffect, useState } from "react";
import client from "../api/client";

const MovieContext = createContext({});

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    await client
      .get("/discover/movie", {
        params: {
          api_key: import.meta.env.VITE_TMDB_KEY,
        },
      })
      .then((res) => {
        if (!!res && !!res.data) {
          setAllMovies(res.data.results);
          setMovies(res.data.results);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const addToFavourites = (favouritedMovie) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === favouritedMovie.id) {
        if (!!movie.favourite && movie.favourite) {
          movie.favourite = false;
        } else {
          movie.favourite = true;
        }
      }
    });
    setMovies((prevState) => [...prevState, updatedMovies]);
    // setFavouriteMovies((prevState) => [...prevState, favouritedMovie]);
  };

  const filterMovies = (title) => {
    if (!title) {
      setMovies(allMovies);
      return;
    }
    let regex = new RegExp(`${title}`);
    const filteredMovies = movies.filter((movie) => regex.test(movie.title));
    setMovies(filteredMovies);
  };

  return (
    <MovieContext.Provider
      value={{ movies, favouriteMovies, addToFavourites, filterMovies }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => {
  return useContext(MovieContext);
};