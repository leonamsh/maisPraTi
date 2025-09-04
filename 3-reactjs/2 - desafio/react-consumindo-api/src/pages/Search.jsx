import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import MovieCard from "../components/MovieCard";
import { searchMovies as searchAPI } from "../services/omdb";

const DEFAULT_QUERY = "batman"; // <- termo padrão

export default function Search() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(DEFAULT_QUERY);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function doSearch(q, p = 1) {
    if (!q) return;
    setLoading(true);
    setError("");
    try {
      const { items, total } = await searchAPI(q, p);
      setMovies(items ?? []);
      setQuery(q);
      setPage(p);
      setTotalPages(Math.max(1, Math.ceil((total || 0) / 10)));
    } catch (e) {
      setMovies([]);
      setTotalPages(0);
      setError(e.message || "Falha ao buscar filmes.");
    } finally {
      setLoading(false);
    }
  }

  // Busca inicial (lista padrão)
  useEffect(() => {
    doSearch(DEFAULT_QUERY, 1);
  }, []);

  return (
    <section>
      <h1>Buscar filmes</h1>
      <SearchBar onSearch={(q) => doSearch(q || DEFAULT_QUERY, 1)} />

      {loading && <p>Carregando…</p>}
      {!loading && error && <p style={{ color: "salmon" }}>{error}</p>}

      <div className="movie-list">
        {movies.map((m) => (
          <MovieCard key={m.imdbID} movie={m} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onNext={() => doSearch(query, page + 1)}
          onPrev={() => doSearch(query, page - 1)}
        />
      )}
    </section>
  );
}
