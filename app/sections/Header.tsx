import style from "./Header.module.css";
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
    <header className={`${style.header} ${visibility ? '' : style.hideHeader}`}>
      <span onClick={props.onScrollToHero}className={style.headerLink}>Main</span>
      <span onClick={props.onScrollToProjects}className={style.headerLink}>Projects</span>
      <span onClick={props.onScrollToBackground}className={style.headerLink}>Background</span>
      <span onClick={props.onScrollToContact}className={style.headerLink}>Contact</span>
    </header>
  );
}

export default Header;