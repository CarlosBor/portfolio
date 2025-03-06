import styles from "./Header.module.css";

interface HeaderProps{
  onScrollToHero: () => void;
  onScrollToProjects: () => void;
  onScrollToBackground: () => void;
  onScrollToContact: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className={styles.header}>
      <span onClick={props.onScrollToHero}className={styles.headerLink}>Main</span>
      <span onClick={props.onScrollToProjects}className={styles.headerLink}>Projects</span>
      <span onClick={props.onScrollToBackground}className={styles.headerLink}>Background</span>
      <span onClick={props.onScrollToContact}className={styles.headerLink}>Contact</span>
    </header>
  );
}

export default Header;