const genres = ["Sobrenatural", "Psicológico", "Slasher", "Folk horror", "Vampiros", "Zombis", "Monstruos"];
const years = [2019, 2018, 2017, 2016, 2014, 2008, 1984, 1982, 1980, 1978, 1973, 1960];

function Filters({ filters, onChange }) {
  return (
    <section className="panel">
      <h2>Filtros</h2>

      <label>Género</label>
      <select value={filters.genre} onChange={(e) => onChange("genre", e.target.value)}>
        <option value="all">Todos</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <label>Año</label>
      <select value={filters.year} onChange={(e) => onChange("year", e.target.value)}>
        <option value="all">Todos</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <label>Calificación mínima</label>
      <select
        value={filters.minRating}
        onChange={(e) => onChange("minRating", Number(e.target.value))}
      >
        <option value={0}>Cualquiera</option>
        <option value={7}>7 o más</option>
        <option value={8}>8 o más</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={filters.onlyFavorites}
          onChange={(e) => onChange("onlyFavorites", e.target.checked)}
        />
        Solo favoritas
      </label>
    </section>
  );
}

export default Filters;
