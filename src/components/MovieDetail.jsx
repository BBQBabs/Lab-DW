function MovieDetail({ movie, isFavorite, userRating, onToggleFavorite, onRate, onClose }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="overlay">
      <div className="detail">
        <button onClick={onClose}>Cerrar</button>

        <img src={movie.image} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>
          {movie.genre} - {movie.year}
        </p>
        <p>Calificación: {movie.rating}</p>
        <p>{movie.description}</p>

        <h3>Tu valoración</h3>
        <div>
          {stars.map((star) => (
            <button key={star} className="star" onClick={() => onRate(movie.id, star)}>
              {star <= userRating ? "★" : "☆"}
            </button>
          ))}
        </div>

        <button onClick={() => onToggleFavorite(movie.id)}>
          {isFavorite ? "Quitar de favoritas" : "Agregar a favoritas"}
        </button>
      </div>
    </div>
  );
}

export default MovieDetail;
