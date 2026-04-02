type FilterType = "all" | "watched" | "unwatched";

type FilterBarProps = {
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
};

function FilterBar({ setFilter }: FilterBarProps) {
  return (
    <section className="filter-card">
      <h2 className="filter-title">Filter</h2>

      <div className="filter-buttons">
        <button className="primary-button" onClick={() => setFilter("all")}>
          All
        </button>
        <button
          className="filter-watched-button"
          onClick={() => setFilter("watched")}
        >
          Watched
        </button>
        <button
          className="filter-unwatched-button"
          onClick={() => setFilter("unwatched")}
        >
          Unwatched
        </button>
      </div>
    </section>
  );
}

export default FilterBar;
