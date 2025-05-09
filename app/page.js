import About from "./components/About";

import Contact from "./components/Contact";
import { FooterSection } from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />

      <Projects />
      <Contact />
      <FooterSection />
    </>
  );
}
