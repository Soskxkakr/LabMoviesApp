import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMovie } from "../../contexts/MovieContext";
import MovieHeader from "../headerMovie";

const styles = {
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: "100vh",
  },
};

const TemplateMoviePage = ({ children }) => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const { getMovie, movieImages, getMovieImages } = useMovie();

  useEffect(() => {
    // getMovieImages(movie.id).then((images) => {
    //   setImages(images);
    // });
    Promise.resolve(getMovie(id)).then((data) => setMovie(data));
    getMovieImages(id);
    // getMovieImages(data.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MovieHeader movie={movie} />
      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={styles.gridListRoot}>
            <ImageList cols={1}>
              {!!movieImages && movieImages.length > 0
                ? movieImages.map((image) => (
                    <ImageListItem
                      key={image.file_path}
                      sx={styles.gridListTile}
                      cols={1}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                        alt={image.poster_path}
                      />
                    </ImageListItem>
                  ))
                : null}
            </ImageList>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export { TemplateMoviePage };
