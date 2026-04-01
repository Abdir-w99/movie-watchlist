type FilterType = "all" | "watched" | "unwatched";

type FilterBarProps = {
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
};

function FilterBar({ setFilter }: FilterBarProps) {
  return (
    <section className="filter-bar">
      <h2>Filter</h2>

      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("watched")}>Watched</button>
        <button onClick={() => setFilter("unwatched")}>Unwatched</button>
      </div>
    </section>
  );
}

export default FilterBar;
