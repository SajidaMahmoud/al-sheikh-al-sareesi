import { useEffect, useState } from "react";
import { content } from "./content.js";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Products from "./components/Products.jsx";
import Business from "./components/Business.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [lang, setLang] = useState("en");
  const t = content[lang];

  // Keep <html lang/dir> and the body class in sync with the language.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("ar", lang === "ar");
  }, [lang]);

  return (
    <>
      <Nav t={t} onToggleLang={() => setLang(lang === "en" ? "ar" : "en")} />
      <main id="top">
        <Hero t={t} />
        <About t={t} />
        <Products t={t} />
        <Business t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
