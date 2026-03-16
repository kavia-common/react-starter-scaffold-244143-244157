import React, { useMemo, useState } from "react";
import { portfolio } from "../content/portfolio";

// PUBLIC_INTERFACE
export function Contact() {
  /** Contact page with a no-backend message preview. */
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const errors = useMemo(() => {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    if (values.email && !/^\S+@\S+\.\S+$/.test(values.email))
      next.email = "Please enter a valid email address.";
    if (!values.message.trim()) next.message = "Please enter a message.";
    return next;
  }, [values]);

  const canSubmit = Object.keys(errors).length === 0;

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const onBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (!canSubmit) {
      setStatus({ type: "error", message: "Fix the fields highlighted below." });
      return;
    }

    // No backend in this scaffold: show a friendly success message.
    setStatus({
      type: "success",
      message:
        "Message queued (pretend). In a real app, this would send via an API or email service."
    });
  };

  const showError = (field) => touched[field] && errors[field];

  return (
    <section className="section" aria-label="Contact">
      <div className="section-header">
        <h2 className="h2">Contact</h2>
        <div className="kicker">Say hello</div>
      </div>

      <div className="grid">
        <div className="card grid-6">
          <div className="card-inner">
            <p className="lead" style={{ marginTop: 0 }}>
              Want to collaborate or chat? Send a quick message.
            </p>

            <form className="form" onSubmit={onSubmit} noValidate>
              <div className="field">
                <label className="label" htmlFor="name">
                  Name
                </label>
                <input
                  className="input"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={onChange}
                  onBlur={onBlur}
                  autoComplete="name"
                  aria-invalid={Boolean(showError("name"))}
                  aria-describedby={showError("name") ? "name-error" : undefined}
                />
                {showError("name") && (
                  <div id="name-error" className="small" role="alert">
                    {errors.name}
                  </div>
                )}
              </div>

              <div className="field">
                <label className="label" htmlFor="email">
                  Email
                </label>
                <input
                  className="input"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={onChange}
                  onBlur={onBlur}
                  autoComplete="email"
                  aria-invalid={Boolean(showError("email"))}
                  aria-describedby={
                    showError("email") ? "email-error" : undefined
                  }
                />
                {showError("email") && (
                  <div id="email-error" className="small" role="alert">
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="field">
                <label className="label" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="textarea"
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={onChange}
                  onBlur={onBlur}
                  aria-invalid={Boolean(showError("message"))}
                  aria-describedby={
                    showError("message") ? "message-error" : undefined
                  }
                />
                {showError("message") && (
                  <div id="message-error" className="small" role="alert">
                    {errors.message}
                  </div>
                )}
              </div>

              {status.type !== "idle" && (
                <div
                  className="notice"
                  role="status"
                  aria-live="polite"
                  style={{
                    borderColor:
                      status.type === "error"
                        ? "rgba(255, 75, 216, 0.5)"
                        : "rgba(166, 255, 77, 0.5)",
                    background:
                      status.type === "error"
                        ? "rgba(255, 75, 216, 0.08)"
                        : "rgba(166, 255, 77, 0.08)"
                  }}
                >
                  {status.message}
                </div>
              )}

              <div className="cta-row">
                <button type="submit" className="btn btn-primary">
                  Send <span aria-hidden="true">→</span>
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    setValues({ name: "", email: "", message: "" });
                    setTouched({});
                    setStatus({ type: "idle", message: "" });
                  }}
                >
                  Reset
                </button>
              </div>

              <p className="small" style={{ margin: 0 }}>
                Prefer socials? Try:{" "}
                {portfolio.socials.map((s, idx) => (
                  <React.Fragment key={s.label}>
                    <a href={s.href}>{s.label}</a>
                    {idx < portfolio.socials.length - 1 ? " • " : ""}
                  </React.Fragment>
                ))}
              </p>
            </form>
          </div>
        </div>

        <div className="card grid-6">
          <div className="card-inner">
            <h3 className="project-title">Elsewhere</h3>
            <p className="project-meta">
              Find me around the web (replace these with your real profiles).
            </p>

            <div className="grid" style={{ gap: 12 }}>
              {portfolio.socials.map((s) => (
                <div key={s.label} className="card grid-6" style={{ boxShadow: "none" }}>
                  <div className="card-inner" style={{ padding: 14 }}>
                    <div className="kicker">{s.label}</div>
                    <a className="btn" href={s.href}>
                      {s.short} <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ height: 12 }} />

            <div className="notice">
              No backend is configured in this scaffold. If you later add an API,
              wire this form to <code>fetch()</code> and handle loading/error
              states.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
