import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";

const MovieDetailsPage = (props) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${
        import.meta.env.VITE_TMDB_KEY
      }`
    )
      .then((res) => {
        return res.json();
      })
      .then((movie) => {
        // console.log(movie)
        setMovie(movie);
      });
  }, [id]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${
        import.meta.env.VITE_TMDB_KEY
      }`
    )
      .then((res) => res.json())
      .then((json) => json.posters)
      .then((images) => {
        // console,log(images)
        setImages(images);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export { MovieDetailsPage };
