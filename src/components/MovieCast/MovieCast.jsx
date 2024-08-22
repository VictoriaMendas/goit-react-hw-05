import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";

export default function MovieCast() {
  const { movieId } = useParams();
  const [movieCast, setCastDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setError("");
        const data = await fetchMovieCast(movieId);
        setCastDetails(data.cast);
        console.log(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, [movieId]);

  return (
    <ul>
      {movieCast.map((cast) => {
        return (
          <div key={cast.id}>
            <li>
              <img src={cast.profile_path} alt={cast.title} />
            </li>
            <li>{cast.original_name}</li>
            <li>Charcter: {cast.character}</li>
          </div>
        );
      })}
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </ul>
  );
}
