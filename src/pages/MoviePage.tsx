import { Link } from "react-router-dom";

import MovieForm from "../components/MovieForm";
import FilterBar from "../components/FilterBar";
import MovieList from "../components/MovieList";
import MovieCard from "../components/MovieCard";
import MovieDetails from "../components/MovieDetails";

function MoviePage() {
  return (
    <div>
      <Link to="/">Go to movies</Link>
      <MovieForm />
      <FilterBar />
      <MovieList />
      <MovieCard />
      <MovieDetails />
    </div>
  );
}

export default MoviePage;
