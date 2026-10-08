function SearchBar({ query, onQueryChange }) {
  return (
    <input
      type="text"
      placeholder="Buscar por título..."
      value={query}
      onChange={(event) => onQueryChange(event.target.value)}
    />
  );
}

export default SearchBar;
