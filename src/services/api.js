import axios from "axios";

export const API_KEY = "1091b85cfb1d620c2ad1642a2ab3f60a";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDkxYjg1Y2ZiMWQ2MjBjMmFkMTY0MmEyYWIzZjYwYSIsIm5iZiI6MTcyMzczMTQxMy44NDQzMzksInN1YiI6IjY2YmNjOTEzZjRmNDljMmZmMGUxZTM2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gfGa6juG6_LqYP6ParzPyYagmIMpqTxeV41KbvFK-Ko",
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get("/trending/movie/day");

  return response.data;
};

export const fetchMoviesByQuery = async (query) => {
  const response = await axios.get("/search/movie", {
    params: { query: query },
  });

  return response.data;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`);
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`);

  return response.data;
};

export const fetchMovieReview = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`);

  return response.data;
};
