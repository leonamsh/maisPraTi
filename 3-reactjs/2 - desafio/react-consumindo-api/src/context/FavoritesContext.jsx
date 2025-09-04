import { createContext, useContext, useEffect, useMemo, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const raw = localStorage.getItem("favorites");
    return raw ? JSON.parse(raw) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const add = (movie) =>
    setFavorites((prev) =>
      prev.some((m) => m.imdbID === movie.imdbID) ? prev : [...prev, movie],
    );

  const remove = (id) =>
    setFavorites((prev) => prev.filter((m) => m.imdbID !== id));

  const isFavorite = (id) => favorites.some((m) => m.imdbID === id);

  const value = useMemo(
    () => ({ favorites, add, remove, isFavorite }),
    [favorites],
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);
