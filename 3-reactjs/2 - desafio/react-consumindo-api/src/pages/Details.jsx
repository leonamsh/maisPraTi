import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../services/omdb";
import { useFavorites } from "../context/FavoritesContext";

export default function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isFavorite, add, remove } = useFavorites();

  useEffect(() => {
    let active = true;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getMovieById(id);
        if (active) setMovie(data);
      } catch (e) {
        if (active) setError(e.message);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!movie) return null;

  const fav = isFavorite(movie.imdbID);
  const toggle = () =>
    fav
      ? remove(movie.imdbID)
      : add({
          imdbID: movie.imdbID,
          Title: movie.Title,
          Year: movie.Year,
          Poster: movie.Poster,
        });

  return (
    <article className="details">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x445?text=Sem+Poster"
        }
        alt={movie.Title}
      />
      <div>
        <h2>
          {movie.Title} ({movie.Year})
        </h2>
        <p>
          <strong>Diretor:</strong> {movie.Director}
        </p>
        <p>
          <strong>Elenco:</strong> {movie.Actors}
        </p>
        <p>
          <strong>Gênero:</strong> {movie.Genre}
        </p>
        <p>
          <strong>Duração:</strong> {movie.Runtime}
        </p>
        <p>
          <strong>Avaliação IMDb:</strong> {movie.imdbRating}
        </p>
        <p>
          <strong>Sinopse:</strong> {movie.Plot}
        </p>
        <button onClick={toggle}>
          {fav ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
        </button>
      </div>
    </article>
  );
}
