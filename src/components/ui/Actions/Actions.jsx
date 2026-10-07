import styles from "./Actions.module.css";

// Row of buttons (CTA group).
export default function Actions({ children }) {
  return <div className={styles.actions}>{children}</div>;
}
