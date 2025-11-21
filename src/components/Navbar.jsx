import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navigation() {
  const location = useLocation();
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-container">
        <div className="logo" data-text="MyPortfolio">
          🌐 MyPortfolio
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li className={location.pathname === "/about" ? "active" : ""}>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li className={location.pathname === "/projects" ? "active" : ""}>
              <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            </li>
            <li className={location.pathname === "/contact" ? "active" : ""}>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="nav-actions">
          <button className="theme-btn" onClick={toggleTheme}>
            <span className="theme-icon">
              {theme === "light" ? "🌙" : "☀️"}
            </span>
          </button>

          <div
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
