import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function Heart({ filled }) {
  return (
    <svg viewBox="0 0 24 24" width="32" height="32">
      <path
        d="M12 21s-6.7-4.2-9.6-7.1C.9 12.4 1 9.5 3.2 7.6c1.9-1.6 4.7-1.2 6.3.4L12 10.5l2.5-2.5c1.6-1.6 4.4-2 6.3-.4 2.2 1.9 2.3 4.8.8 6.3C18.7 16.7 12 21 12 21z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function MovieCard({ movie }) {
  const { isFavorite, add, remove } = useFavorites();
  const fav = isFavorite(movie.imdbID);

  const toggle = () => (fav ? remove(movie.imdbID) : add(movie));

  return (
    <div className="movie-card">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x445?text=Sem+Poster"
        }
        alt={movie.Title}
      />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>

      <div className="actions">
        <Link
          to={`/movie/${movie.imdbID}`}
          className="btn btn-ghost"
          aria-label={`Ver detalhes de ${movie.Title}`}
        >
          Detalhes
        </Link>

        <button
          className={`btn btn-primary btn-fav ${fav ? "is-active" : ""}`}
          onClick={toggle}
          aria-pressed={fav}
          aria-label={fav ? "Remover dos Favoritos" : "Adicionar Favoritos"}
          title={fav ? "Remover dos Favoritos" : "Adicionar Favoritos"}
        >
          <Heart filled={fav} />
          {fav ? "Remover" : "Adicionar Favoritos"}
        </button>
      </div>
    </div>
  );
}
