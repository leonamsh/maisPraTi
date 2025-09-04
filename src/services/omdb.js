import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY; // CRA: process.env.REACT_APP_OMDB_API_KEY
const client = axios.create({ baseURL: "https://www.omdbapi.com/" });

export async function searchMovies(query, page = 1) {
  const { data } = await client.get("/", {
    params: { apikey: API_KEY, s: query, page },
  });
  if (data.Response === "True") {
    return { items: data.Search, total: Number(data.totalResults) };
  }
  throw new Error(data.Error || "Erro ao buscar filmes");
}

export async function getMovieById(id) {
  const { data } = await client.get("/", {
    params: { apikey: API_KEY, i: id, plot: "full" },
  });
  if (data.Response === "True") return data;
  throw new Error(data.Error || "Erro ao carregar detalhes");
}
