import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Link to="/movies">Go to movies</Link>
      <h1>Movie Watchlist</h1>
      <p>Keep track of movies you want to watch.</p>
    </div>
  );
}

export default HomePage;
