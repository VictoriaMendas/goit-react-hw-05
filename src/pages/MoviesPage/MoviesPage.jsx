import { useSearchParams } from "react-router-dom";
import { fetchMoviesByQuery } from "../../services/api";
import { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";

export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const moviename = searchParams.get("moviename");
  console.log(moviename);
  // const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!moviename) return;

    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setError("");
        const data = await fetchMoviesByQuery(moviename);
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    asyncWrapper();
  }, [moviename]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ moviename: form.elements.moviename.value });
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="moviename" />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </div>
  );
}
