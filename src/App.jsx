import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import ExtraCourses from "./components/ExtraCourses";

function App() {
  return (
    <div className="bg-primary m-0">
      <div>
        <Navbar />
        <Hero />
        <Skills />
        <Education />
        <Projects />
        <ExtraCourses />
      </div>
    </div>
  );
}

export default App;
