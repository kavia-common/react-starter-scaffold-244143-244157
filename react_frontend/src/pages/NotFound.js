import React from "react";
import { Link } from "react-router-dom";

// PUBLIC_INTERFACE
export function NotFound() {
  /** Fallback route for unknown paths. */
  return (
    <section className="section" aria-label="Not found">
      <div className="card">
        <div className="card-inner">
          <div className="kicker">404</div>
          <h2 className="h2">Page not found</h2>
          <p className="lead">
            The page you’re looking for doesn’t exist (or it warped to another timeline).
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" to="/">
              Back home →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
