import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SiteHeader from "./components/siteHeader";
import { TemplateMoviePage } from "./components/templateMoviePage";
import { MovieProvider } from "./contexts/MovieContext";
import { FavouriteMoviesPage } from "./pages/FavouriteMoviesPage/favouriteMoviesPage";
import { MovieListPage } from "./pages/HomePage/homePage";
import { MovieReviewPage } from "./pages/movieReviewPage";

const App = () => {
  return (
    <MovieProvider>
      <BrowserRouter>
        <SiteHeader /> {/* New Header  */}
        <Routes>
          <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
          <Route path="/movies/:id" element={<TemplateMoviePage />} />
          <Route path="/" element={<MovieListPage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/reviews/:id" element={<MovieReviewPage />} />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
