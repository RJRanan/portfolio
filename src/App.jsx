// import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <main className="relative">
        <Nav />
        <section
          id="home"
          className="sm:px-24 px-5 sm:pb-20 pb-10 sm:pt-32 pt-28 min-h-full"
        >
          <Hero />
        </section>
      </main>
    </>
  );
}

export default App;
