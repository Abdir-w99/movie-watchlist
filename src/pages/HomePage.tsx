import Navbar from "../components/Navbar";
import MovieForm from "../components/MovieForm";

function HomePage() {
  return (
    <div>
      <Navbar />
      <h1>Movie Watchlist</h1>
      <p>Keep track of movies you want to watch.</p>
      <MovieForm />
    </div>
  );
}

export default HomePage;
