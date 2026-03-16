import React from "react";
import { portfolio } from "../content/portfolio";

// PUBLIC_INTERFACE
export function Projects() {
  /** Projects listing page. */
  return (
    <section className="section" aria-label="Projects">
      <div className="section-header">
        <h2 className="h2">Projects</h2>
        <div className="kicker">Selected work</div>
      </div>

      <div className="grid">
        {portfolio.projects.map((p) => (
          <article key={p.title} className="card grid-4">
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

              <div className="cta-row" style={{ marginTop: 14 }}>
                {p.links?.demo && (
                  <a className="btn btn-primary" href={p.links.demo}>
                    Demo <span aria-hidden="true">↗</span>
                  </a>
                )}
                {p.links?.code && (
                  <a className="btn" href={p.links.code}>
                    Code <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
