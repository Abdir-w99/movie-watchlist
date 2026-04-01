import { useState } from "react";
import { Link } from "react-router-dom";

import MovieForm from "../components/MovieForm";
import FilterBar from "../components/FilterBar";
import MovieList from "../components/MovieList";

type Movie = {
  id: number;
  title: string;
  watched: boolean;
};

function MoviePage() {
  // state for the movie list
  const [movies, setMovies] = useState<Movie[]>([
    {
      id: 1,
      title: "Interstellar",
      watched: false,
    },
    {
      id: 2,
      title: "A dark knight",
      watched: true,
    },
  ]);

  function addMovie(title: string) {
    const newMovie: Movie = {
      id: Date.now(),
      title: title,
      watched: false,
    };

    // update the movies state with the new movie
    setMovies([...movies, newMovie]);
  }

  return (
    <div>
      <Link to="/">Go to home</Link>
      <MovieForm addMovie={addMovie} />
      <FilterBar />
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviePage;
