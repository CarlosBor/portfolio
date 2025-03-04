//This should take a series of parameters, then dynamically a header element that has those texts and moves there on click
import styles from "./Header.module.css"

const test = ["One", "Two", "Three"];

export default function Header() {
  return (
    <header className={styles.test}>
      {test.map(element => 
        <p>{element}</p>
      )}
    </header>
  );
}