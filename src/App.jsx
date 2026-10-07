import { useEffect, useState } from "react";
import { content } from "@/content/content.js";
import Nav from "@/components/layout/Nav/Nav.jsx";
import Hero from "@/components/sections/Hero/Hero.jsx";
import About from "@/components/sections/About/About.jsx";
import Products from "@/components/sections/Products/Products.jsx";
import Business from "@/components/sections/Business/Business.jsx";
import Contact from "@/components/sections/Contact/Contact.jsx";
import Footer from "@/components/layout/Footer/Footer.jsx";

export default function App() {
  const [lang, setLang] = useState("ar");
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
