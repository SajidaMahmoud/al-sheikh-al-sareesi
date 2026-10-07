export default function About({ t }) {
  const a = t.about;
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div>
          <div className="section-kicker">{a.kicker}</div>
          <div className="big-quote">{a.quote}</div>
        </div>

        <div className="about-copy">
          <h2>{a.title}</h2>
          <p>{a.p1}</p>
          <p>{a.p2}</p>
          <p className="ar-text">{a.ar}</p>
        </div>
      </div>
    </section>
  );
}
