import style from "./Hero.module.css";

interface HeroProps{
  ref: React.Ref<HTMLDivElement>
}

const Hero: React.FC<HeroProps> = (props) => {
    return (
      <div className={style.container} ref={props.ref}>
        <div className={style.asideLeft}>
          <div className={style.asideTextContainer}>
            <h5 className={style.header}>Hola buenas</h5>
            <p className={style.asideText}>
            Soy un desarrollador web con experiencia internacional en Polonia y la República Checa, especializado en el desarrollo front-end. Con habilidades en tecnologías modernas como React, JavaScript y CSS, me apasiona crear experiencias web atractivas y fáciles de usar. A lo largo de mi carrera, he trabajado en proyectos desafiantes que abarcan tanto el desarrollo de interfaces de usuario como la integración de sistemas backend, brindando soluciones completas a mis clientes.
            </p>
          </div>
        </div>
        <div className={style.asideRight}>
          <div className={style.photo}></div>
        </div>
      </div>
    );
  }
  export default Hero;