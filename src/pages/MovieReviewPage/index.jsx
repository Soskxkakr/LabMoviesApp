import React from "react";
import { useLocation } from "react-router-dom";
import MovieReview from "../../components/movieReview";
import { TemplateMoviePage } from "../../components/templateMoviePage";

const MovieReviewPage = (props) => {
  const {
    state: { movie, review },
  } = useLocation();
  return (
    <TemplateMoviePage movie={movie}>
      <MovieReview review={review} />
    </TemplateMoviePage>
  );
};

export { MovieReviewPage };
