import MovieCard from "../components/MovieCard";
import { useFavorites } from "../context/FavoritesContext";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <section>
      <h2>Favoritos</h2>
      {favorites.length === 0 ? (
        <p>Nenhum favorito ainda.</p>
      ) : (
        <div className="movie-list">
          {favorites.map((m) => (
            <MovieCard key={m.imdbID} movie={m} />
          ))}
        </div>
      )}
    </section>
  );
}
