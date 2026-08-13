import Hero from "./hero";
import About from "./about";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact /> 
      <Footer />
    </main>
  );
}