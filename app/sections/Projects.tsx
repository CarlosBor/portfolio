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
            <div className={style.projectButtons}>
              <div className="projectButtonsIcons">
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                </a>
              </div>
              <div className="projectButtonsIcons">
                <svg width="800px" height="800px" viewBox="0 0 24 24" version="1.1">
                <path d="M8.06561801,18.9432081 L14.565618,4.44320807 C14.7350545,4.06523433 15.1788182,3.8961815 15.5567919,4.06561801 C15.9032679,4.2209348 16.0741922,4.60676263 15.9697642,4.9611247 L15.934382,5.05679193 L9.43438199,19.5567919 C9.26494549,19.9347657 8.82118181,20.1038185 8.44320807,19.934382 C8.09673215,19.7790652 7.92580781,19.3932374 8.03023576,19.0388753 L8.06561801,18.9432081 L14.565618,4.44320807 L8.06561801,18.9432081 Z M2.21966991,11.4696699 L6.46966991,7.21966991 C6.76256313,6.9267767 7.23743687,6.9267767 7.53033009,7.21966991 C7.79659665,7.48593648 7.8208027,7.90260016 7.60294824,8.19621165 L7.53033009,8.28033009 L3.81066017,12 L7.53033009,15.7196699 C7.8232233,16.0125631 7.8232233,16.4874369 7.53033009,16.7803301 C7.26406352,17.0465966 6.84739984,17.0708027 6.55378835,16.8529482 L6.46966991,16.7803301 L2.21966991,12.5303301 C1.95340335,12.2640635 1.9291973,11.8473998 2.14705176,11.5537883 L2.21966991,11.4696699 L6.46966991,7.21966991 L2.21966991,11.4696699 Z M16.4696699,7.21966991 C16.7359365,6.95340335 17.1526002,6.9291973 17.4462117,7.14705176 L17.5303301,7.21966991 L21.7803301,11.4696699 C22.0465966,11.7359365 22.0708027,12.1526002 21.8529482,12.4462117 L21.7803301,12.5303301 L17.5303301,16.7803301 C17.2374369,17.0732233 16.7625631,17.0732233 16.4696699,16.7803301 C16.2034034,16.5140635 16.1791973,16.0973998 16.3970518,15.8037883 L16.4696699,15.7196699 L20.1893398,12 L16.4696699,8.28033009 C16.1767767,7.98743687 16.1767767,7.51256313 16.4696699,7.21966991 Z">
                </path>
                </svg>
              </div>
            </div>
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