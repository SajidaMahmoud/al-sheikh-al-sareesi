import styles from "./SectionTitle.module.css";

export default function SectionTitle({ className = "", children }) {
  return <h2 className={`${styles.title} ${className}`}>{children}</h2>;
}
