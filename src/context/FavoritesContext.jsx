import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "favorites";
const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const add = (movie) =>
    setFavorites((prev) => ({ ...prev, [movie.imdbID]: movie }));

  const remove = (id) =>
    setFavorites((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });

  const isFavorite = (id) => Boolean(favorites[id]);

  const value = useMemo(
    () => ({
      favorites: Object.values(favorites),
      add,
      remove,
      isFavorite,
    }),
    [favorites],
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx)
    throw new Error("useFavorites deve ser usado dentro do FavoritesProvider");
  return ctx;
};
