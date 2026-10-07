import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import Container from "@/components/ui/Container/Container.jsx";
import styles from "./Nav.module.css";

export default function Nav({ t, onToggleLang }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <Container className={styles.inner}>
        <a className={styles.brand} href="#top" aria-label={t.brandName}>
          <span className={styles.mark}>
            <img src={logo} alt="" />
          </span>
          <span className={styles.copy}>
            <span>{t.brandName}</span>
            <small>{t.brandSub}</small>
          </span>
        </a>

        <div className={styles.links}>
          <a href="#about">{t.nav.about}</a>
          <a href="#products">{t.nav.products}</a>
          <a href="#business">{t.nav.business}</a>
          <a href="#contact">{t.nav.contact}</a>
        </div>

        <button className={styles.lang} onClick={onToggleLang}>
          {t.langButton}
        </button>
      </Container>
    </nav>
  );
}
