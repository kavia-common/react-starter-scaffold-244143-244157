import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

/**
 * Portfolio application entry component.
 */
// PUBLIC_INTERFACE
function App() {
  /** Controls routing + global theme. */
  const [theme, setTheme] = useState("dark");

  // Initialize theme from localStorage, then apply to document.
  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio_theme");
    if (stored === "light" || stored === "dark") setTheme(stored);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("portfolio_theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    /** Toggle light/dark theme. */
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  const routerBasename = useMemo(() => {
    // If this app is deployed under a subpath, CRA typically sets PUBLIC_URL.
    // BrowserRouter basename can be configured later if needed; keep simple for now.
    return undefined;
  }, []);

  return (
    <BrowserRouter basename={routerBasename}>
      <Layout theme={theme} onToggleTheme={toggleTheme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
