export default function Business({ t }) {
  const b = t.business;
  return (
    <section className="business" id="business">
      <div className="container business-grid">
        <div>
          <div className="section-kicker">{b.kicker}</div>
          <h2>{b.title}</h2>
          <p className="business-copy">{b.copy}</p>
          <div className="actions">
            <a className="btn btn-primary" href="#contact">
              {b.cta}
            </a>
          </div>
        </div>

        <div className="features">
          {b.features.map((f, i) => (
            <div className="feature" key={i}>
              <strong>{f.title}</strong>
              <span>{f.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
