import React from "react";
import { NavLink } from "react-router-dom";
import { portfolio } from "../content/portfolio";

/**
 * Layout wrapper for the portfolio pages.
 */
// PUBLIC_INTERFACE
export function Layout({ theme, onToggleTheme, children }) {
  /** Render the application chrome around routed pages. */
  const year = new Date().getFullYear();

  return (
    <div className="App">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="navbar" role="banner">
        <div className="container">
          <div className="navbar-inner">
            <NavLink to="/" className="brand" aria-label="Go to home">
              <span className="brand-mark">{"<"}{portfolio.name}{"/>"}</span>
              <span className="brand-sub">{portfolio.role}</span>
            </NavLink>

            <nav className="nav-links" aria-label="Primary navigation">
              <NavLink to="/" end className="nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              <NavLink to="/projects" className="nav-link">
                Projects
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </nav>

            <div className="nav-actions">
              <button
                type="button"
                className="icon-btn"
                onClick={onToggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? "☀ Light" : "🌙 Dark"}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main id="main" className="container" role="main">
        {children}
      </main>

      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer-inner">
            <div>
              © {year} {portfolio.name}. Built with React.
            </div>
            <div>
              <a href="https://react.dev" target="_blank" rel="noreferrer">
                react.dev
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
