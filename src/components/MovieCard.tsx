import { Link } from "react-router-dom";

type Movie = {
  id: number;
  title: string;
  watched: boolean;
};

type MovieCardProps = {
  movie: Movie;
  toggleWatched: (id: number) => void;
};

function MovieCard({ movie, toggleWatched }: MovieCardProps) {
  return (
    <div className="movie-card">
      {/* go to the details page and send the movie data */}
      <Link
        className="movie-title-link"
        to={`/movie/${movie.id}`}
        state={{ movie: movie }}
      >
        <h3>{movie.title}</h3>
      </Link>

      {/* show if the movie is watched or not */}
      <p
        className={`movie-status ${movie.watched ? "status-watched" : "status-unwatched"}`}
      >
        {movie.watched ? "Watched" : "Unwatched"}
      </p>

      <div className="movie-actions">
        {/* button to change watched status */}
        <button
          className="primary-button"
          onClick={() => toggleWatched(movie.id)}
        >
          {movie.watched ? "Mark as unwatched" : "Mark as watched"}
        </button>

        <Link
          className="secondary-button"
          to={`/movie/${movie.id}`}
          state={{ movie: movie }}
        >
          View details
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
