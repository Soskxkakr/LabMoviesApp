import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarRateIcon from "@mui/icons-material/StarRate";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import { useMovie } from "../../contexts/MovieContext";
import img from "../../images/film-poster-placeholder.png";

const styles = {
  card: { maxWidth: 345, maxHeight: 800 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

const MovieCard = ({ movie }) => {
  const { addToFavourites } = useMovie();

  return (
    <Card sx={styles.card}>
      <CardHeader
        sx={styles.header}
        title={
          <Typography
            variant="h5"
            component="p"
            sx={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {movie.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={styles.media}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={8}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favourites"
          onClick={() => addToFavourites(movie)}
        >
          {movie.favourite ? (
            <FavoriteIcon color="error" fontSize="large" />
          ) : (
            <FavoriteIcon color="primary" fontSize="large" />
          )}
        </IconButton>
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export { MovieCard };
