import Container from "@/components/ui/Container/Container.jsx";
import styles from "./Footer.module.css";

export default function Footer({ t }) {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <span>
          © {new Date().getFullYear()} {t.brandName}
        </span>
        <span>{t.footer.tagline}</span>
      </Container>
    </footer>
  );
}
