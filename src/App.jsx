import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-primary">
      <div>
        <Navbar />
        <Hero />
        <Skills />
      </div>
    </div>
  );
}

export default App;
