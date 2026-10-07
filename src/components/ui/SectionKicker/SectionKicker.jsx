import styles from "./SectionKicker.module.css";

export default function SectionKicker({ className = "", children }) {
  return <div className={`${styles.kicker} ${className}`}>{children}</div>;
}
