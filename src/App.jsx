// import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/PersonalProjects";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <main className="relative">
        <section className="px-4">
          <Nav />
        </section>
        <section className="py-10 px-4   pt-24">
          <Hero />
        </section>

        <hr className="" />

        <section className="py-10 px-4   pt-10 ">
          <About />
        </section>

        <hr className="" />

        <section className="py-10 px-4   pt-10 ">
          <Projects />
        </section>
      </main>
    </>
  );
}

export default App;
