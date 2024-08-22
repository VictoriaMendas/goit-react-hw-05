export default function MovieInfo({ movieDetails }) {
  const year = new Date(movieDetails.release_date).getFullYear();
  const percentage = movieDetails.vote_average * 10;
  const genres = movieDetails.genres.map((genre) => genre.name).join(", ");
  const poster = movieDetails.poster_path
    ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}
`
    : "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  return (
    <div>
      <img src={poster} alt={movieDetails.title} />
      <div>
        <h2>
          {movieDetails.title} ({year})
        </h2>

        <span>User score: {percentage}%</span>
        <h3>Overview</h3>
        <span>{movieDetails.overview}</span>
        <h3>Genres</h3>
        <span>{genres}</span>
      </div>
    </div>
  );
}
