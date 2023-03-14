import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import NavigationIcon from "@mui/icons-material/Navigation";
import StarRate from "@mui/icons-material/StarRate";
import Chip from "@mui/material/Chip";
import Drawer from "@mui/material/Drawer";
import Fab from "@mui/material/Fab";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MovieReviews from "../movieReviews";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
  fab: {
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const MovieDetails = ({ movie }) => {
  const [drawerOpen, setDrawerOpen] = useState(false); // New

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
      <Paper component="ul" sx={styles.chipSet}>
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
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <MovieReviews movie={movie} />
      </Drawer>
    </>
  );
};

export default MovieDetails;

// 1st WAY
export const myFunction = () => {}
export const myFunction2 = () => {}
export const myFunction3 = () => {}

import { default as myFunction, default as myFunction2, default as myFunction3 } from 'here';

//2nd Way
const myFunction = () => {

}

export default myFunction;


//3rd Way
const myFunction = () => {}
const myFunction2 = () => {}
const myFunction3 = () => {}

export { myFunction, myFunction2, myFunction3 };


