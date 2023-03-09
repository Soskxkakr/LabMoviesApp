import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";
import { List, ListItem } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMovie } from "../../contexts/MovieContext";

const styles = {
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
};

const FilterMoviesCard = (props) => {
  const [genres, setGenres] = useState([{ id: "0", name: "All" }]);
  const [title, setTitle] = useState("");
  const { filterMovies } = useMovie();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        import.meta.env.VITE_TMDB_KEY
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.genres)
        return json.genres;
      })
      .then((apiGenres) => {
        setGenres([genres[0], ...apiGenres]);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e) => {
    handleChange(e, "title", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };

  return (
    <>
      <Card sx={styles.root} variant="outlined">
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FilterAltIcon fontSize="medium" />
          <Typography variant="h5">FILTER</Typography>
        </CardContent>
      </Card>

      <List sx={{ margin: 2 }}>
        <ListItem
          divider
          children={
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              Home
            </Link>
          }
        />
        <ListItem
          divider
          children={
            <Link
              to="/movies/favourites"
              style={{ textDecoration: "none", color: "black" }}
            >
              Favourites
            </Link>
          }
        />
      </List>

      <TextField
        sx={styles.formControl}
        id="filled-search"
        label="Search field"
        type="search"
        value={title}
        variant="filled"
        onChange={(e) => {
          setTitle(e.target.value);
          filterMovies(e.target.value);
        }}
      />

      <FormControl sx={styles.formControl}>
        <TextField
          select
          labelId="genre-label"
          label="Genre"
          id="genre-select"
          value={props.genreFilter}
          onChange={handleGenreChange}
        >
          {genres.map((genre) => {
            return (
              <MenuItem key={genre.id} value={genre.id}>
                {genre.name}
              </MenuItem>
            );
          })}
        </TextField>
      </FormControl>
      <Card sx={styles.root} variant="outlined">
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SortIcon fontSize="medium" />
          <Typography variant="h5">SORT</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export { FilterMoviesCard };
