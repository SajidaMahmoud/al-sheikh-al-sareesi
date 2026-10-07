import Container from "@/components/ui/Container/Container.jsx";
import Section from "@/components/ui/Section/Section.jsx";
import SectionKicker from "@/components/ui/SectionKicker/SectionKicker.jsx";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle.jsx";
import styles from "./About.module.css";

export default function About({ t }) {
  const a = t.about;
  return (
    <Section className={styles.about} id="about">
      <Container className={styles.grid}>
        <div>
          <SectionKicker>{a.kicker}</SectionKicker>
          <div className={styles.quote}>{a.quote}</div>
        </div>

        <div className={styles.copy}>
          <SectionTitle>{a.title}</SectionTitle>
          <p>{a.p1}</p>
          <p>{a.p2}</p>
          <p className={styles.ar}>{a.ar}</p>
        </div>
      </Container>
    </Section>
  );
}
