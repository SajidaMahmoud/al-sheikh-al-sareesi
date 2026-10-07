import logo from "../assets/logo.png";

export default function Hero({ t }) {
  const h = t.hero;
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">{h.eyebrow}</div>
          <h1>
            {h.titleLine1}
            <br />
            {h.titleLine2a}
            <em>{h.titleLine2b}</em>
          </h1>
          <p className="hero-copy">{h.copy}</p>
          <p className="hero-copy-ar">{h.copyAr}</p>
          <div className="actions">
            <a className="btn btn-primary" href="#products">
              {h.primaryCta}
            </a>
            <a className="btn btn-secondary" href="#business">
              {h.secondaryCta}
            </a>
          </div>
        </div>

        <div className="hero-card" aria-label="Product photography placeholder">
          <img className="hero-logo" src={logo} alt="Al Sheikh Al Sareesi — since 1950" />
          <div className="hero-label">
            <strong>{h.cardTitle}</strong>
            <span>{h.cardSub}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
