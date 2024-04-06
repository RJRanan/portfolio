// import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/PersonalProjects";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <main className="relative">
        <section className="px-4">
          <Nav />
        </section>
        <section id="home" className="py-10 px-4   pt-24">
          <Hero />
        </section>

        <div className="flex items-center justify-center">
          <hr className=" w-full max-w-[494px]" />
        </div>

        <section id="about" className="py-10 px-4   pt-10 ">
          <About />
        </section>

        <div className="flex items-center justify-center">
          <hr className=" w-full max-w-[494px]" />
        </div>

        <section id="projects" className="py-10 px-4   pt-10 ">
          <Projects />
        </section>

        <div className="flex items-center justify-center">
          <hr className=" w-full max-w-[494px]" />
        </div>

        <section id="contact" className="py-10 px-4   pt-10 ">
          <Contact />
        </section>

        <div className="flex items-center justify-center">
          <hr className=" w-full max-w-[494px]" />
        </div>

        <section className="py-10 px-4   pt-10 ">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
