import { createContext, useContext, useEffect, useState } from "react";
import client from "../api/client";

const MovieContext = createContext({});

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movieImages, setMovieImages] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovie = async (id) => {
    await client
      .get(`/movie/${id}`)
      .then((res) => {
        if (!!res && !!res.data) return res.data;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getMovies = async () => {
    await client
      .get("/discover/movie")
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

  const getMovieImages = async (id) => {
    await client
      .get(`/movie/${id}/images`, {
        params: {
          api_key: import.meta.env.VITE_TMDB_KEY,
        },
      })
      .then((res) => {
        if (!!res && !!res.data) setMovieImages(res.data.posters);
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
      value={{
        movies,
        movieImages,
        favouriteMovies,
        getMovie,
        getMovieImages,
        addToFavourites,
        filterMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => {
  return useContext(MovieContext);
};
