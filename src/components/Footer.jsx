export default function Footer({ t }) {
  return (
    <footer>
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {t.brandName}
        </span>
        <span>{t.footer.tagline}</span>
      </div>
    </footer>
  );
}
