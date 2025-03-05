import style from "./Hero.module.css";

export default function Hero() {
    return (
      <div className={style.container}>
        <div className={style.asideLeft}>
          <div className={style.asideTextContainer}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur consectetur officia harum provident, deleniti eum soluta error, illum quod quasi, iusto accusamus ducimus illo modi eos quibusdam totam expedita. Quos.</p>
          </div>
        </div>
        <div className={style.asideRight}>
          <div className={style.photo}></div>
        </div>
      </div>
    );
  }