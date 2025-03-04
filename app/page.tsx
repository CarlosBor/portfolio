import Header from "./sections/Header";
import Projects from "./sections/Projects";
import Hero from "./sections/Hero";
import Background from "./sections/Background";
import Contact from "./sections/Contact";

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