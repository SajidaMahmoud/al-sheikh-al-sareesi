import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Nav({ t, onToggleLang }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="container nav-inner">
        <a className="brand brand-lockup" href="#top" aria-label={t.brandName}>
          <span className="brand-mark">
            <img src={logo} alt="" />
          </span>
          <span className="brand-copy">
            <span>{t.brandName}</span>
            <small>{t.brandSub}</small>
          </span>
        </a>

        <div className="nav-links">
          <a href="#about">{t.nav.about}</a>
          <a href="#products">{t.nav.products}</a>
          <a href="#business">{t.nav.business}</a>
          <a href="#contact">{t.nav.contact}</a>
        </div>

        <button className="lang" onClick={onToggleLang}>
          {t.langButton}
        </button>
      </div>
    </nav>
  );
}
