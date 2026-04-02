import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

type Movie = {
  id: number;
  title: string;
  watched: boolean;
};

function MovieDetails() {
  // get data sent from MovieCard
  const location = useLocation();
  const movie = location.state?.movie as Movie | undefined;

  // show message if no movie data exists
  if (!movie) {
    return (
      <div className="app-shell">
        <Navbar />

        <div className="page-container">
          <Link to="/movies" className="top-link">
            Go back
          </Link>

          <div className="details-card">
            <p className="details-description">Movie not found.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <Navbar />

      <div className="page-container">
        <Link to="/movies" className="top-link">
          Go back
        </Link>

        <div className="details-card">
          <div className="details-layout">
            <h1 className="details-title">{movie.title}</h1>

            {/* show movie watched status */}
            <p
              className={`details-status ${movie.watched ? "status-watched" : "status-unwatched"}`}
            >
              {movie.watched ? "Watched" : "Unwatched"}
            </p>

            <p className="details-description">
              Details for the selected movie.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
