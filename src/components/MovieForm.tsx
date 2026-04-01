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

    // send the new movie title to MoviePage
    addMovie(title);

    // clear the input after submit
    setTitle("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter movie title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add movie</button>
    </form>
  );
}

export default MovieForm;
