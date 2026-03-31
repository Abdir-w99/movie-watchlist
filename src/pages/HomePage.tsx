import Navbar from "../components/Navbar";
import MovieForm from "../components/MovieForm";
import FilterBar from "../components/FilterBar";
import MovieList from "../components/MovieList";

function HomePage() {
  return (
    <div>
      <Navbar />
      <h1>Movie Watchlist</h1>
      <p>Keep track of movies you want to watch.</p>
      <MovieForm />
      <FilterBar />
      <MovieList />
    </div>
  );
}

export default HomePage;
