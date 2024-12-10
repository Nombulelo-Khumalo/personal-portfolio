import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-primary">
      <div>
        <Navbar />
        <Hero />
        <Skills />
        <Education />
        <Projects />
      </div>
    </div>
  );
}

export default App;
