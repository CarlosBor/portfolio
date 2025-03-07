import style from "./MobileHeader.module.css";
import {useState, useRef} from 'react';

interface HeaderProps{
  onScrollToHero: () => void;
  onScrollToProjects: () => void;
  onScrollToBackground: () => void;
  onScrollToContact: () => void;
}

const MobileHeader: React.FC<HeaderProps> = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleOpen = () =>{
        setMenuOpen(!menuOpen);
    }
    return(
        <div className={`${style.mobileHeader} ${menuOpen ? style.openMenu : ''}`}>
            <div className={style.hamburguerButton} onClick={toggleOpen}>
                <svg className={`${style.hamburguerIcon} ${menuOpen ? style.openMenu : style.closedMenu}`}  width="50px" height="50px" viewBox="0 0 24 24">
                    <path d="M4 18L20 18" className={style.crossLine1} strokeWidth="2" strokeLinecap="round"/>
                    <path d="M4 12L20 12" className={style.crossLine2} strokeWidth="2" strokeLinecap="round"/>
                    <path d="M4 12L20 12" className={style.crossLine3} strokeWidth="2" strokeLinecap="round"/>
                    <path d="M4 6L20 6"   className={style.crossLine4} strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </div>
            <div className={style.mobileNav}>
                <span onClick={props.onScrollToHero}className={style.headerLink}>Main</span>
                <span onClick={props.onScrollToProjects}className={style.headerLink}>Projects</span>
                <span onClick={props.onScrollToBackground}className={style.headerLink}>Background</span>
                <span onClick={props.onScrollToContact}className={style.headerLink}>Contact</span>
            </div>
        </div>
    )
}

export default MobileHeader;