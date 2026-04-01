type Movie = {
  id: number;
  title: string;
  watched: boolean;
};

type MovieCardProps = {
  movie: Movie;
};

function MovieCard({ movie }: MovieCardProps) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.watched ? "Watched" : "Unwatched"}</p>
    </div>
  );
}

export default MovieCard;
