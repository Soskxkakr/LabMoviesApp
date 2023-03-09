import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import { FavouriteMoviesPage, MovieListPage, MoviePage } from "./pages";

const App = () => {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/" element={<MovieListPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
