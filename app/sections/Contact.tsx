import style from './Contact.module.css';

export default function Contact() {
    return (
      <div className={style.contactContainer}>
        <div className={style.contactContent}>
          <i>svg should go here</i>
          <span>email@thingy.com</span>
        </div>
      </div>
    );
  }