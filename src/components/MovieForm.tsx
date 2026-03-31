function MovieForm() {
  return (
    <section className="movie-form-section">
      <h2>Add Movie</h2>

      <form className="movie-form">
        <input type="text" placeholder="Movie title" />
        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default MovieForm;
