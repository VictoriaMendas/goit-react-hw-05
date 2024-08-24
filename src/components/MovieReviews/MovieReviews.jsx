import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReview } from "../../services/api";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [movieReview, setReviewDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setError("");
        const data = await fetchMovieReview(movieId);

        setReviewDetails(data.results);
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
      {!movieReview
        ? "We dont have any reviews for this movie"
        : movieReview.map((results) => {
            return (
              <div key={results.id}>
                <h3>{results.author}</h3>
                <p>{results.content}</p>
              </div>
            );
          })}
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </ul>
  );
}
