import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import MovieCard from "../components/MovieCard";
import { searchMovies as searchAPI } from "../services/omdb";

export default function Search() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function doSearch(q, p = 1) {
    setLoading(true);
    setError(null);
    try {
      const { items, total } = await searchAPI(q, p);
      setMovies(items);
      setTotalPages(Math.ceil(total / 10)); // OMDb retorna 10 por página
      setQuery(q);
      setPage(p);
    } catch (e) {
      setMovies([]);
      setTotalPages(0);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <SearchBar onSearch={(q) => doSearch(q, 1)} />

      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && movies.length === 0 && (
        <p>Use a busca acima para começar.</p>
      )}

      <div className="movie-list">
        {movies.map((m) => (
          <MovieCard key={m.imdbID} movie={m} />
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onNext={() => doSearch(query, page + 1)}
        onPrev={() => doSearch(query, page - 1)}
      />
    </section>
  );
}
