import { Container, Grid } from "@mui/material";
import { Header, MovieCard } from "../../components";
import { useMovie } from "../../contexts/MovieContext";

const styles = {
  root: {
    padding: "20px",
  },
};

const FavouriteMoviesPage = () => {
  const { movies } = useMovie();
  return (
    <>
      <Container item xs={12}>
        <Header title={"Favourite Movies"} />
      </Container>
      <Grid container sx={styles.root}>
        {movies.map((movie) => {
          if (movie.favourite)
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
    </>
  );
};

export { FavouriteMoviesPage };
