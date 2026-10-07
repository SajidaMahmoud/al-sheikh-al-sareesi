import Lines from "./Lines.jsx";

export default function Products({ t }) {
  const p = t.products;
  return (
    <section id="products">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-kicker">{p.kicker}</div>
            <h2>
              <Lines text={p.title} />
            </h2>
          </div>
          <p className="section-intro">{p.intro}</p>
        </div>

        <div className="products-grid">
          {p.items.map((item, i) => (
            <article className="product" key={i}>
              <span className="product-number">{String(i + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.sub}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
