import MovieCard from "./MovieCard";

type Movie = {
  id: number;
  title: string;
  watched: boolean;
};

type MovieListProps = {
  movies: Movie[];
  toggleWatched: (id: number) => void;
};

function MovieList({ movies, toggleWatched }: MovieListProps) {
  if (movies.length === 0) {
    return <p className="empty-text">No movies found.</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        // send one movie and the toggle function to MovieCard
        <MovieCard key={movie.id} movie={movie} toggleWatched={toggleWatched} />
      ))}
    </div>
  );
}

export default MovieList;
