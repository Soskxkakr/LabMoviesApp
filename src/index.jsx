import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SiteHeader from "./components/siteHeader";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import MovieReviewPage from "./pages/movieReviewPage";

const App = () => {
  return (
    <BrowserRouter>
      <SiteHeader /> {/* New Header  */}
      <Routes>
        <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/reviews/:id" element={<MovieReviewPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
