import { Link, useLocation } from "react-router-dom";

type Movie = {
  id: number;
  title: string;
  watched: boolean;
};

function MovieDetails() {
  // get data sent from MovieCard
  const location = useLocation();
  const movie = location.state?.movie as Movie | undefined;

  // show message if no movie data exists
  if (!movie) {
    return (
      <div>
        <Link to="/movies">Go back</Link>
        <p>Movie not found.</p>
      </div>
    );
  }

  return (
    <div>
      <Link to="/movies">Go back</Link>
      <h1>{movie.title}</h1>

      {/* show movie watched status */}
      <p>{movie.watched ? "Watched" : "Unwatched"}</p>
    </div>
  );
}

export default MovieDetails;
