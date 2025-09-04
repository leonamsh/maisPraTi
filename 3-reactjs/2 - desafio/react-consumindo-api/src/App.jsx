import "./App.css";
import axios from "axios";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [currentQuery, setCurrentQuery] = useState("");
  const API_KEY = (import.meta.env.VITE_OMDB_API_KEY || "").trim();

  const searchMovies = async (query, page = 1) => {
    setLoading(true);
    setError(null);
    setCurrentQuery(query);
    setCurrentPage(page);

    // 1) sanitiza a busca (remove \n, \r, tabs, espaços duplicados)
    const cleaned = String(query).trim().replace(/\s+/g, " ");
    // 2) log seguro pra confirmar que NÃO há \n
    console.log("➡️ Cleaned query:", JSON.stringify(cleaned));

    try {
      // 3) use params (evita qualquer erro de concatenação/escape)
      const response = await axios.get("https://www.omdbapi.com/", {
        params: {
          apikey: API_KEY?.trim(),
          s: cleaned,
          page,
        },
      });

      console.log(
        "➡️ Real URL chamada:",
        `https://www.omdbapi.com/?s=${encodeURIComponent(cleaned)}&page=${page}&apikey=${API_KEY?.trim()}`,
      );

      if (response.data.Response === "True") {
        setMovies(response.data.Search);
        setTotalPages(Math.ceil(response.data.totalResults / 10));
      } else {
        setMovies([]);
        setError(response.data.Error);
        setTotalPages(0);
      }
    } catch (err) {
      setError(`Erro ao buscar filmes: ${err.message}`);
      setTotalPages(0);
    } finally {
      setLoading(false);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      searchMovies(currentQuery, currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      searchMovies(currentQuery, currentPage - 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>IMDB App</h1>
      </header>
      <main>
        <SearchBar onSearch={searchMovies} />

        {loading && <p>Carregando...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="movie-list">
          {movies.length > 0
            ? movies.map((movie) => (
                <div key={movie.imdbID} className="movie-card">
                  <img
                    src={
                      movie.Poster !== "N/A"
                        ? movie.Poster
                        : "https://via.placeholder.com/150"
                    }
                    alt={movie.Title}
                  />
                  <h3>{movie.Title}</h3>
                  <p>{movie.Year}</p>
                </div>
              ))
            : !loading &&
              !error && <p>Nenhum filme encontrado. Use a busca acima!</p>}
        </div>
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onNext={handleNextPage}
            onPrev={handlePrevPage}
          />
        )}
      </main>
    </div>
  );
}

export default App;
