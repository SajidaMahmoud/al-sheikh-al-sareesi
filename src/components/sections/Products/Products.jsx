import Container from "@/components/ui/Container/Container.jsx";
import Section from "@/components/ui/Section/Section.jsx";
import SectionKicker from "@/components/ui/SectionKicker/SectionKicker.jsx";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle.jsx";
import Lines from "@/components/ui/Lines/Lines.jsx";
import coffee from "./images/coffee.jpg";
import spices from "./images/spices.jpg";
import nuts from "./images/nuts.jpg";
import pantry from "./images/pantry.jpg";
import styles from "./Products.module.css";

// One photo per tile, in the same order as products.items in content.js.
const photos = [coffee, spices, nuts, pantry];

export default function Products({ t }) {
  const p = t.products;
  return (
    <Section id="products">
      <Container>
        <div className={styles.head}>
          <div>
            <SectionKicker>{p.kicker}</SectionKicker>
            <SectionTitle>
              <Lines text={p.title} />
            </SectionTitle>
          </div>
          <p className={styles.intro}>{p.intro}</p>
        </div>

        <div className={styles.grid}>
          {p.items.map((item, i) => (
            <article className={styles.product} key={i}>
              <img className={styles.photo} src={photos[i]} alt="" loading="lazy" />
              <span className={styles.number}>{String(i + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.sub}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
