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
    <div>
      {/* go to the details page and send the movie data */}
      <Link to={`/movie/${movie.id}`} state={{ movie: movie }}>
        <h3>{movie.title}</h3>
      </Link>

      {/* show if the movie is watched or not */}
      <p>{movie.watched ? "Watched" : "Unwatched"}</p>

      {/* button to change watched status */}
      <button onClick={() => toggleWatched(movie.id)}>
        {movie.watched ? "Mark as unwatched" : "Mark as watched"}
      </button>
    </div>
  );
}

export default MovieCard;
