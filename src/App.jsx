import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <main className="w-full">
        <section id="home" className="h-screen flex items-center p-0 m-0">
          <Home />
        </section>
        <section id="about" className="py-16 px-4">
          <About />
        </section>
        <section id="projects" className="py-16 px-4">
          <Projects />
        </section>
        <section id="contact" className="py-16 px-4">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
