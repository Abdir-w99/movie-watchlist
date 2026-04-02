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

type FilterType = "all" | "watched" | "unwatched";

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

  // state for the current filter
  const [filter, setFilter] = useState<FilterType>("all");

  function addMovie(title: string) {
    const newMovie: Movie = {
      id: Date.now(),
      title: title,
      watched: false,
    };

    // update the movies state with the new movie
    setMovies([...movies, newMovie]);
  }

  // change watched status for one movie
  function toggleWatched(id: number) {
    const updatedMovies = movies.map((movie) => {
      // find the clicked movie and switch watched value
      if (movie.id === id) {
        return { ...movie, watched: !movie.watched };
      }

      // keep other movies unchanged
      return movie;
    });
    // save the updated movie list
    setMovies(updatedMovies);
  }

  // create a new list based on the selected filter
  const filteredMovies = movies.filter((movie) => {
    if (filter === "watched") {
      return movie.watched === true;
    }

    if (filter === "unwatched") {
      return movie.watched === false;
    }

    // show all movies
    return true;
  });

  return (
    <div>
      <Link to="/">Go to home</Link>
      <MovieForm addMovie={addMovie} />
      <FilterBar setFilter={setFilter} />
      <MovieList movies={filteredMovies} toggleWatched={toggleWatched} />
    </div>
  );
}

export default MoviePage;
