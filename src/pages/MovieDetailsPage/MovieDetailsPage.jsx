import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import css from "./MovieDetailsPage.module.css";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { fetchMovieDetails } from "../../services/api";
import MovieInfo from "../../components/MovieInfo/MovieInfo";

export default function MovieDetailsPage() {
  const location = useLocation();

  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const backLink = useRef(location.state ?? "/");

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setError("");
        const data = await fetchMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    asyncWrapper();
  }, [movieId]);

  return (
    <div>
      <Link to={backLink.current} className={css.goBack}>
        Go Back
      </Link>
      {movieDetails && <MovieInfo movieDetails={movieDetails} />}
      <div className={css.box}>
        <p>Additional information</p>
        <NavLink
          className={({ isActive }) =>
            clsx(css.buildLink, isActive && css.linkActive)
          }
          to="cast"
        >
          Cast
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.buildLink, isActive && css.linkActive)
          }
          to="reviews"
        >
          Reviews
        </NavLink>
        <Outlet />
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
      </div>
    </div>
  );
}
