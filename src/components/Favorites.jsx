function Favorites({ movies, onSelect, onRemove }) {
  return (
    <section className="panel">
      <h2>Mis favoritas</h2>

      {movies.length === 0 ? (
        <p>Todavía no tienes favoritas.</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <button className="link" onClick={() => onSelect(movie.id)}>
                {movie.title}
              </button>
              <button onClick={() => onRemove(movie.id)}>Quitar</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Favorites;
