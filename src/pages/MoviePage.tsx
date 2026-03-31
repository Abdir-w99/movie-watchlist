import { Link } from "react-router-dom";

import MovieForm from "../components/MovieForm";
import FilterBar from "../components/FilterBar";
import MovieList from "../components/MovieList";
import MovieCard from "../components/MovieCard";

function MoviePage() {
  return (
    <div>
      <Link to="/">Go to movies</Link>
      <MovieForm />
      <FilterBar />
      <MovieList />
      <MovieCard />
    </div>
  );
}

export default MoviePage;
