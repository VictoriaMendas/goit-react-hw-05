// import css from "./HomePage.module.css";
import { useEffect, useState } from "react";
// import { fetchTrendingMovies } from "../../services/api";
import axios from "axios";
import { fetchTrendingMovies } from "../../services/api";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setError("");

        // const data = await fetchTrendingMovies();
        const response = await fetchTrendingMovies();

        setMovies();
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
      Home
      <h1>Treding today</h1>
      {/* <ul className={css.list}>
        {movies.map((movie) => {
          return (
            <li key={movie.id} >
             
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}
