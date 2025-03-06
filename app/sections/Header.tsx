import styles from "./Header.module.css";
import {useState, useEffect, useRef} from 'react';

interface HeaderProps{
  onScrollToHero: () => void;
  onScrollToProjects: () => void;
  onScrollToBackground: () => void;
  onScrollToContact: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const [visibility, setVisibility] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setVisibility(false);
      } else {
        setVisibility(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${visibility ? '' : styles.hideHeader}`}>
      <span onClick={props.onScrollToHero}className={styles.headerLink}>Main</span>
      <span onClick={props.onScrollToProjects}className={styles.headerLink}>Projects</span>
      <span onClick={props.onScrollToBackground}className={styles.headerLink}>Background</span>
      <span onClick={props.onScrollToContact}className={styles.headerLink}>Contact</span>
    </header>
  );
}

export default Header;