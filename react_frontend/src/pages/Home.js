import React from "react";
import { Link } from "react-router-dom";
import { portfolio } from "../content/portfolio";

// PUBLIC_INTERFACE
export function Home() {
  /** Portfolio landing page. */
  const topProjects = portfolio.projects.slice(0, 2);

  return (
    <>
      <section className="hero" aria-label="Introduction">
        <div className="hero-grid">
          <div className="card">
            <div className="card-inner">
              <div className="kicker">
                {portfolio.role} • {portfolio.location}
              </div>
              <h1 className="h1">
                Building{" "}
                <span className="gradient-text">retro-friendly</span>{" "}
                interfaces that feel modern.
              </h1>
              <p className="lead">{portfolio.tagline}</p>

              <div className="badges" aria-label="Highlights">
                {portfolio.highlights.map((h) => (
                  <span key={h.label} className="badge">
                    <span
                      className={`dot ${
                        h.tone === "pink" ? "pink" : h.tone === "lime" ? "lime" : ""
                      }`}
                      aria-hidden="true"
                    />
                    {h.label}
                  </span>
                ))}
              </div>

              <div className="cta-row">
                <Link className="btn btn-primary" to="/projects">
                  View Projects <span aria-hidden="true">→</span>
                </Link>
                <Link className="btn" to="/contact">
                  Contact <span aria-hidden="true">✉</span>
                </Link>
              </div>

              <p className="small" style={{ marginTop: 12 }}>
                Tip: customize <code>src/content/portfolio.js</code>.
              </p>
            </div>
          </div>

          <aside className="ascii" aria-label="Retro terminal panel">
            {String.raw`┌───────────────────────────┐
│  booting portfolio.exe...  │
├───────────────────────────┤
│  status: OK                │
│  theme: synth / crt         │
│  routing: enabled           │
│  a11y: ✅                   │
└───────────────────────────┘`}
          </aside>
        </div>
      </section>

      <section className="section" aria-label="Featured projects">
        <div className="section-header">
          <h2 className="h2">Featured Projects</h2>
          <Link className="nav-link" to="/projects">
            See all →
          </Link>
        </div>

        <div className="grid">
          {topProjects.map((p) => (
            <article key={p.title} className="card grid-6">
              <div className="card-inner">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-meta">{p.description}</p>
                <div className="pill-row" aria-label={`${p.title} tags`}>
                  {p.tags.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
