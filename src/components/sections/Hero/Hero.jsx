import logo from "@/assets/logo.png";
import Container from "@/components/ui/Container/Container.jsx";
import Actions from "@/components/ui/Actions/Actions.jsx";
import Button from "@/components/ui/Button/Button.jsx";
import styles from "./Hero.module.css";

export default function Hero({ t }) {
  const h = t.hero;
  return (
    <section className={styles.hero}>
      <Container className={styles.grid}>
        <div>
          <div className={styles.eyebrow}>{h.eyebrow}</div>
          <h1 className={styles.title}>
            {h.titleLine1}
            <br />
            {h.titleLine2a}
            <em>{h.titleLine2b}</em>
          </h1>
          <p className={styles.copy}>{h.copy}</p>
          <p className={styles.copyAr}>{h.copyAr}</p>
          <Actions>
            <Button href="#products">{h.primaryCta}</Button>
            <Button variant="secondary" href="#business">
              {h.secondaryCta}
            </Button>
          </Actions>
        </div>

        <div className={styles.card}>
          <img className={styles.logo} src={logo} alt="Al Sheikh Al Sareesi — since 1950" />
        </div>
      </Container>
    </section>
  );
}
