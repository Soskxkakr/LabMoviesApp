import Drawer from "@mui/material/Drawer";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { FilterMoviesCard, Header, MovieList } from "../../components";

const styles = {
  root: {
    padding: "20px",
  },
  fab: {
    position: "fixed",
    top: 12,
    right: 12,
  },
};

const MovieListPage = (props) => {
  const [movies, setMovies] = useState([]);
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const genreId = Number(genreFilter);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "title") setTitleFilter(value);
    else setGenreFilter(value);
  };

  // New function
  const addToFavourites = (movieId) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === movieId) {
        if (!!movie.favourite && movie.favourite) {
          return { ...movie, favourite: false };
        }
        return { ...movie, favourite: true };
      } else {
        return movie;
      }
    });
    setMovies(updatedMovies);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_TMDB_KEY
      }&language=en-US&include_adult=false&page=1`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        return json.results;
      })
      .then((movies) => {
        setMovies(movies);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <Header title={"Movies"} />
        </Grid>
        <Grid item container spacing={5}>
          <MovieList
            movies={displayedMovies}
            selectFavourite={addToFavourites}
          />
        </Grid>
      </Grid>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterMoviesCard
          onUserInput={handleChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
        />
      </Drawer>
    </>
  );
};
export { MovieListPage };
