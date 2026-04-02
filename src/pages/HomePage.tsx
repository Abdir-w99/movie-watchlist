import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div className="app-shell">
      <Navbar />

      <div className="page-container">
        <Link to="/movies" className="browse-button">
          Browse your movies
        </Link>

        <main className="page-card">
          <h1 className="page-title">Movie Watchlist</h1>
          <p className="page-text">Keep track of movies you want to watch.</p>
        </main>
        <section className="home-feature">
          <h2 className="home-feature-title">What you can do</h2>

          <div className="home-feature-grid">
            <div className="home-feature-box">
              <h3>Add movies</h3>
              <p>Save movies you want to watch later.</p>
            </div>

            <div className="home-feature-box">
              <h3>Track status</h3>
              <p>Mark movies as watched or unwatched.</p>
            </div>

            <div className="home-feature-box">
              <h3>Details</h3>
              <p>View details for each movie.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
