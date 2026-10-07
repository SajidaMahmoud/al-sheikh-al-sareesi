import styles from "./Button.module.css";

// variant: "primary" | "secondary". Renders an <a>.
export default function Button({ variant = "primary", className = "", children, ...rest }) {
  return (
    <a className={`${styles.btn} ${styles[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
