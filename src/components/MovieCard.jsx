function MovieCard({ movie, isFavorite, userRating, onSelect, onToggleFavorite }) {
  return (
    <article className="card">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>
        {movie.genre} - {movie.year}
      </p>
      <p>Calificación: {movie.rating}</p>
      <p>{movie.description}</p>

      {userRating > 0 && <p>Tu valoración: {userRating} de 5</p>}

      <button onClick={() => onSelect(movie.id)}>Ver detalle</button>
      <button onClick={() => onToggleFavorite(movie.id)}>
        {isFavorite ? "Quitar de favoritas" : "Agregar a favoritas"}
      </button>
    </article>
  );
}

export default MovieCard;
