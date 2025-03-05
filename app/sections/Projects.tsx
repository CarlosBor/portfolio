import style from "./Projects.module.css";

export default function Projects() {
    return (
      <div className={style.projectsContainer}>
        <div className={style.projectsHeader}><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aspernatur obcaecati aperiam? Quas earum iste quae cupiditate temporibus? Inventore, nihil nostrum? Vero obcaecati deserunt fuga earum error nostrum iure maiores?</p></div>
        <div className={`${style.projects} ${style.projectPhoto1}`}><a className={style.projectLinks} href="">Visita el projecto</a><div className={style.greyScale}></div></div>
        <div className={`${style.projects} ${style.projectPhoto2}`}><a className={style.projectLinks} href="">Visita el projecto</a><div className={style.greyScale}></div></div>
        <div className={`${style.projects} ${style.projectPhoto3}`}><a className={style.projectLinks} href="">Visita el projecto</a><div className={style.greyScale}></div></div>
        <div className={`${style.projects} ${style.projectPhoto4}`}><a className={style.projectLinks} href="">Visita el projecto</a><div className={style.greyScale}></div></div>
      </div>
    );
  }