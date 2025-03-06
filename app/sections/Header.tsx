import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div><a className={styles.headerLink} href="">Main</a></div>
      <a className={styles.headerLink} href="">Projects</a>
      <a className={styles.headerLink} href="">Background</a>
      <a className={styles.headerLink} href="">Contact</a>
    </header>
  );
}