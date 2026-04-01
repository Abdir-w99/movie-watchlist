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
        <div key={movie.id}>
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
