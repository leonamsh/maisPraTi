import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const cleaned = query.trim().replace(/\s+/g, " ");
    if (cleaned) {
      onSearch(cleaned);
    }
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar Filme..."
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;
