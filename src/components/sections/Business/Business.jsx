import Container from "@/components/ui/Container/Container.jsx";
import Section from "@/components/ui/Section/Section.jsx";
import SectionKicker from "@/components/ui/SectionKicker/SectionKicker.jsx";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle.jsx";
import Actions from "@/components/ui/Actions/Actions.jsx";
import Button from "@/components/ui/Button/Button.jsx";
import styles from "./Business.module.css";

export default function Business({ t }) {
  const b = t.business;
  return (
    <Section className={styles.business} id="business">
      <Container className={styles.grid}>
        <div>
          <SectionKicker className={styles.kicker}>{b.kicker}</SectionKicker>
          <SectionTitle className={styles.title}>{b.title}</SectionTitle>
          <p className={styles.copy}>{b.copy}</p>
          <Actions>
            <Button className={styles.cta} href="#contact">
              {b.cta}
            </Button>
          </Actions>
        </div>

        <div className={styles.features}>
          {b.features.map((f, i) => (
            <div className={styles.feature} key={i}>
              <strong>{f.title}</strong>
              <span>{f.text}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
