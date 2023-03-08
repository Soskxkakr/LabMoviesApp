import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Styles } from "./style";

const MovieDetails = (props) => {
  const movie = props.movie;

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper component="ul" sx={Styles.chipSet}>
        <li>
          <Chip label="Genres" sx={Styles.chipLabel} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} />
          </li>
        ))}
      </Paper>

      <Paper component="ul" sx={Styles.chipSet}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>

      <Paper component="ul" sx={Styles.chipSet}>
        <li>
          <Chip
            label="Production Countries"
            sx={Styles.chipLabel}
            color="primary"
          />
        </li>
        {movie.production_countries.map((country) => (
          <li key={country.name}>
            <Chip label={country.name} />
          </li>
        ))}
      </Paper>
    </>
  );
};

export default MovieDetails;
