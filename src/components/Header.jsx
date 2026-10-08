import SearchBar from "./SearchBar";

function Header({ query, onQueryChange }) {
  return (
    <header className="header">
      <h1>Sala oscura</h1>
      <SearchBar query={query} onQueryChange={onQueryChange} />
    </header>
  );
}

export default Header;
