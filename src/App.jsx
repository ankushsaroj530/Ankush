import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    // The parent div provides the global dark background
    <div className="bg-slate-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      
      {/* Consistent spacing with Tailwind classes instead of empty divs */}
      <div className="py-8">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Resume />
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;