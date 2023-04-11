import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { Avatar, CardHeader, Typography } from "@mui/material";
import { useContext } from "react";
import { useLocation } from "react-router";
import { MoviesContext } from "../../contexts/moviesContext";

const MovieCardHeader = ({ movie }) => {
  const { favourites, mustWatch, addToFavourites } = useContext(MoviesContext);
  const location = useLocation();

  if (favourites.find((id) => id === movie.id)) {
    movie.favourite = true;
  } else {
    movie.favourite = false;
  }

  if (mustWatch.find((id) => id === movie.id)) {
    movie.mustWatch = true;
  } else {
    movie.mustWatch = false;
  }

  const styles = {
    card: { maxWidth: 345 },
    media: { height: 500 },
    avatar: {
      backgroundColor: "rgb(255, 0, 0)",
    },
  };

  const SomeIcon = ({ movie }) => {
    if (movie.favourite && location.pathname !== "/movies/upcoming") {
      return (
        <Avatar sx={styles.avatar}>
          <FavoriteIcon />
        </Avatar>
      );
    } else if (
      movie.mustWatch &&
      location.pathName !== "/movies/favourites" &&
      location.pathname !== "/"
    ) {
      return (
        <Avatar sx={styles.avatar}>
          <PlaylistAddIcon />
        </Avatar>
      );
    } else {
      return null;
    }
  };

  return (
    <CardHeader
      sx={styles.header}
      avatar={<SomeIcon movie={movie} />}
      title={
        <Typography variant="h5" component="p">
          {movie.title}{" "}
        </Typography>
      }
    />
  );
};

export default MovieCardHeader;
