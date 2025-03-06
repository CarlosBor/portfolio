import style from "./Projects.module.css";

interface ProjectsProps{
  ref: React.Ref<HTMLDivElement>
}

const Projects:React.FC<ProjectsProps> = (props) => {
    return (
      <div className={style.projectsContainer} ref={props.ref}>
        <div className={style.projectsHeader}>
          <p>A lo largo del tiempo he desarrollado varios proyectos por cuenta propia, fruto del interés por tecnologias o de necesidades personales que he decidido solventar, te invito a echarles un ojo.</p>
          </div>
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
  export default Projects;