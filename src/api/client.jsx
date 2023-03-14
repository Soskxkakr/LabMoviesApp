import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  defaults: {
    params: {
      api_key: import.meta.env.VITE_TMDB_KEY,
      language: "en-US",
      include_adult: false,
      page: 1,
    },
  },
});
