import React from "react";
import { portfolio } from "../content/portfolio";

// PUBLIC_INTERFACE
export function About() {
  /** About page content. */
  return (
    <section className="section" aria-label="About">
      <div className="section-header">
        <h2 className="h2">About</h2>
        <div className="kicker">{portfolio.name}</div>
      </div>

      <div className="grid">
        <div className="card grid-6">
          <div className="card-inner">
            <p className="lead" style={{ marginTop: 0 }}>
              {portfolio.about[0]}
            </p>
            <p className="lead">{portfolio.about[1]}</p>
            <p className="lead">{portfolio.about[2]}</p>
          </div>
        </div>

        <div className="card grid-6">
          <div className="card-inner">
            <h3 className="project-title">Quick Facts</h3>
            <p className="project-meta">
              A few small things that describe how I like to work.
            </p>

            <div className="pill-row" aria-label="Skills">
              {["UI Engineering", "Accessibility", "Component Libraries", "UX Polish"].map(
                (t) => (
                  <span key={t} className="pill">
                    {t}
                  </span>
                )
              )}
            </div>

            <div style={{ height: 14 }} />

            <div className="notice">
              This is a template portfolio. Update the content, links, and name in{" "}
              <code>src/content/portfolio.js</code>.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
