import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function MovieCard({ movie }) {
  const { isFavorite, add, remove } = useFavorites();
  const fav = isFavorite(movie.imdbID);
  const toggle = () => (fav ? remove(movie.imdbID) : add(movie)); // salvamos um "resumo" do filme

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
        <Link to={`/movie/${movie.imdbID}`}>Detalhes</Link>
        <button onClick={toggle}>
          {fav ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
        </button>
      </div>
    </div>
  );
}
