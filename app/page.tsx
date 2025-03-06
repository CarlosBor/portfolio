import Header from "./sections/Header";
import Projects from "./sections/Projects";
import Hero from "./sections/Hero";
import Background from "./sections/Background";
import Contact from "./sections/Contact";

//El azul marino / Verde petroleo
// #3b4358
//El gris 
// #dfe0e0
//Fuentes:
//Montserrat cabeceras bolded
//Nunito texto suave

// #498BC1
// #E2C2C6
// #4F5165
// #293132

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Projects/>
      <Background/>
      <Contact/>
    </div>
  );
}