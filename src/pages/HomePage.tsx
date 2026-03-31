import Navbar from "../components/Navbar";
import MovieForm from "../components/MovieForm";
import FilterBar from "../components/FilterBar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <h1>Movie Watchlist</h1>
      <p>Keep track of movies you want to watch.</p>
      <MovieForm />
      <FilterBar />
    </div>
  );
}

export default HomePage;
