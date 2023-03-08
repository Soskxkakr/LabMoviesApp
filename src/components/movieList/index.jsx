import Grid from "@mui/material/Grid";
import React from "react";
import Movie from "../movieCard/";

const MovieList = (props) => {
  let movieCards = props.movies.map((movie) => (
    <Grid
      key={movie.id}
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={2}
      sx={{ justifyContent: "center" }}
    >
      <Movie
        key={movie.id}
        movie={movie}
        selectFavourite={props.selectFavourite}
      />
    </Grid>
  ));
  return movieCards;
};

export { MovieList };
