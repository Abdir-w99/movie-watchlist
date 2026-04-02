import { useState } from "react";

type MovieFormProps = {
  addMovie: (title: string) => void;
};

function MovieForm({ addMovie }: MovieFormProps) {
  // state for the input value
  const [title, setTitle] = useState("");

  // runs when the form is submitted
  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    // stop page reload
    e.preventDefault();

    // stop empty movie titles
    if (!title.trim()) return;

    // send the new movie title to MoviePage
    addMovie(title);

    // clear the input after submit
    setTitle("");
  }

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <input
        className="movie-input"
        type="text"
        placeholder="Enter movie title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="primary-button" type="submit">
        Add movie
      </button>
    </form>
  );
}

export default MovieForm;
