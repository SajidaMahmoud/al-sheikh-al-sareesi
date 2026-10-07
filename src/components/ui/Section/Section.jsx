import styles from "./Section.module.css";

// Vertical-rhythm wrapper shared by About / Products / Business / Contact.
export default function Section({ className = "", children, ...rest }) {
  return (
    <section className={`${styles.section} ${className}`} {...rest}>
      {children}
    </section>
  );
}
