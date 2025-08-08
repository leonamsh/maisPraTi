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

  const searchMovies = async (query, page = 1) => {
    setLoading(true);
    setError(null);
    setCurrentQuery(query);
    setCurrentPage(page);

    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`,
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
