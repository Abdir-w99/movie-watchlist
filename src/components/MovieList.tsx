import MovieCard from "./MovieCard";
type Movie = {
  id: number;
  title: string;
  watched: boolean;
};

type MovieListProps = {
  movies: Movie[];
};

function MovieList({ movies }: MovieListProps) {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
