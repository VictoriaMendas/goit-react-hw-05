import { useEffect, useState } from "react";

import { fetchTrendingMovies } from "../../services/api";
import MovieList from "../MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setError("");
        const data = await fetchTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    asyncWrapper();
  }, []);

  return (
    <div>
      <h1>Treding today</h1>
      <MovieList movies={movies} />
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </div>
  );
}
//
