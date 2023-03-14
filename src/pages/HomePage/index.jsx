import { Container } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { FilterMoviesCard, Header, MovieCard } from "../../components";
import { useMovie } from "../../contexts/MovieContext";

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
  // const [genreFilter, setGenreFilter] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { movies, addToFavourites } = useMovie();

  // const genreId = Number(genreFilter);

  const handleChange = (type, value) => {
    if (type === "title") setTitleFilter(value);
    // else setGenreFilter(value);
  };

  return (
    <>
      <Container item xs={12}>
        <Header title={"Movies"} />
      </Container>
      <Grid container sx={styles.root}>
        {movies.map((movie) => {
          return (
            <Grid
              key={movie.id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              sx={{ justifyContent: "center", marginX: 3 }}
            >
              <MovieCard movie={movie} />
            </Grid>
          );
        })}
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
          // genreFilter={genreFilter}
        />
      </Drawer>
    </>
  );
};
export { MovieListPage };
