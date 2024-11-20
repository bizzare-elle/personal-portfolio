import { Link as Element } from "react-scroll";
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import Skills from "./components/pages/Skills";
import AboutMe from "./components/pages/AboutMe";
import Projects from "./components/pages/Projects";
import Footer from "./components/pages/Footer";

const App = () => {
  return (
    <div className=" min-h-screen flex flex-col">
      <header className=" flex justify-center w-full bg-bg">
        <Navigation />
      </header>

      <main className="flex-grow">
        <Element to="home" name="home">
          <Home />
        </Element>
        <Element to="about" name="about">
          <AboutMe />
        </Element>
        <Element to="skills" name="skills">
          <Skills />
        </Element>
        <Element to="projects" name="projects">
          <Projects />
        </Element>
      </main>
      <footer className="w-full bg-bg ">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
