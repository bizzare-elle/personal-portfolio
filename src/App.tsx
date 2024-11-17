import { Link as Element } from "react-scroll";
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import Skills from "./components/pages/Skills";
import AboutMe from "./components/pages/AboutMe";
import Projects from "./components/pages/Projects";

const App = () => {
  return (
    <div className=" min-h-screen flex flex-col">
      <header className=" top-0 bg-bg sticky">
        <Navigation />
      </header>

      <main className="flex-grow">
        <Element name="home">
          <Home />
        </Element>
        <Element name="about">
          <AboutMe />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
      </main>
    </div>
  );
};

export default App;
