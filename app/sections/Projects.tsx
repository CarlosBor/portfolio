import style from "./Projects.module.css";

export default function Projects() {
    return (
      <div className={style.projectsContainer}>
        <div className={style.projectsHeader}><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aspernatur obcaecati aperiam? Quas earum iste quae cupiditate temporibus? Inventore, nihil nostrum? Vero obcaecati deserunt fuga earum error nostrum iure maiores?</p></div>
        <div className={style.imageContainer}>
          <div className={`${style.projects} ${style.projectPhoto1}`}>
            <span className={style.projectLinks}>Visita <a href="" className={style.proyectLink}>el proyecto</a> o <a href="" className={style.repoLink}>su repositorio</a></span>
            <div className={style.greyScale}></div>
          </div>
        </div>
        <div className={style.imageContainer}>
          <div className={`${style.projects} ${style.projectPhoto2}`}>
            <span className={style.projectLinks}>Visita <a href="" className={style.proyectLink}>el proyecto</a> o <a href="" className={style.repoLink}>su repositorio</a></span>
            <div className={style.greyScale}></div>
          </div>
        </div>
        <div className={style.imageContainer}>
          <div className={`${style.projects} ${style.projectPhoto3}`}>
            <span className={style.projectLinks}>Visita <a href="" className={style.proyectLink}>el proyecto</a> o <a href="" className={style.repoLink}>su repositorio</a></span>
            <div className={style.greyScale}></div>
          </div>
        </div>
        <div className={style.imageContainer}>
          <div className={`${style.projects} ${style.projectPhoto4}`}>
            <span className={style.projectLinks}>Visita <a href="" className={style.proyectLink}>el proyecto</a> o <a href="" className={style.repoLink}>su repositorio</a></span>
            <div className={style.greyScale}></div>
          </div>
        </div>
      </div>
    );
  }