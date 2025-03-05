import Header from "./sections/Header";
import Projects from "./sections/Projects";
import Hero from "./sections/Hero";
import Background from "./sections/Background";
import Contact from "./sections/Contact";

// #498BC1
// #E2C2C6
// #4F5165
// #293132

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Background/>
      <Projects/>
      <Contact/>
    </div>
  );
}