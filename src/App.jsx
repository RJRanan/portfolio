// import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <main className="relative">
        <section className="px-4">
          <Nav />
        </section>

        <section className="py-10 px-4   pt-32">
          <Hero />
        </section>

        <section className="px-4 ">
          <About />
        </section>
      </main>
    </>
  );
}

export default App;
