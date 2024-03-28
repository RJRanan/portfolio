// import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <main className="relative">
        <Nav />
        <section className="sm:px-24 px-5 sm:pb-20 pb-10 sm:pt-48 pt-32">
          <Hero />
        </section>

        <section className="sm:px-24 px-5 sm:pb-20 pb-10 sm:pt-48 pt-32">
          <About />
        </section>
      </main>
    </>
  );
}

export default App;
