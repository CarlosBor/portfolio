"use client"
import Header from "./sections/Header";
import Projects from "./sections/Projects";
import Hero from "./sections/Hero";
import Background from "./sections/Background";
import Contact from "./sections/Contact";
import MobileHeader from './sections/MobileHeader';

import { useRef } from 'react';

//El azul marino / Verde petroleo
// #3b4358
//El gris 
// #dfe0e0
//Fuentes:
//Montserrat cabeceras bolded
//Nunito texto suave

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);;
  const projectRef = useRef<HTMLElement | null>(null);;
  const backgroundRef = useRef<HTMLElement | null>(null);;
  const contactRef = useRef<HTMLElement | null>(null);;

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    console.log("It does happen");
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
    
  return (
    <div>
      <MobileHeader
        onScrollToHero={()=>scrollToSection(heroRef)}
        onScrollToProjects={()=>scrollToSection(projectRef)}
        onScrollToBackground={()=>scrollToSection(backgroundRef)}
        onScrollToContact={()=>scrollToSection(contactRef)}
      />
      <Header
        onScrollToHero={()=>scrollToSection(heroRef)}
        onScrollToProjects={()=>scrollToSection(projectRef)}
        onScrollToBackground={()=>scrollToSection(backgroundRef)}
        onScrollToContact={()=>scrollToSection(contactRef)}
      />
      <Hero ref={heroRef}/>
      <Projects ref={projectRef}/>
      <Background ref={backgroundRef}/>
      <Contact ref={contactRef}/>
    </div>
  );
}