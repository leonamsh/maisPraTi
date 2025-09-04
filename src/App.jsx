import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";

export default function App() {
  return (
    <div className="app">
      <header className="site-header">
        <nav className="topnav">
          <NavLink to="/" end className="navlink">
            Buscar
          </NavLink>
          <NavLink to="/favorites" className="navlink">
            Favoritos
          </NavLink>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/movie/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<p>Página não encontrada.</p>} />
        </Routes>
      </main>
    </div>
  );
}
