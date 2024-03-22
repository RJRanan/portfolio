import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="w-full sm:px-24 px-5 sm:py-3 py-3 fixed bg-opacity-50 backdrop-blur-md shadow-md">
      <div className="max-container flex flex-col sm:flex-row justify-around items-center relative">
        <a href="/" className="mb-4 sm:mb-0">
          <h1 className="font-bold text-3xl flex items-center ">
            <span className="font-poppins">&lt;</span> &nbsp; RJRR&nbsp;
            <span className="font-poppins">&frasl;</span>
            <span className="font-poppins">&gt;</span>
          </h1>
        </a>

        <nav>
          <ul className="flex flex-wrap gap-12 sm:gap-21  text-base font-poppins font-bold max-lg-nav z-50 ">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  key={link.id}
                  href={link.href}
                  rel={link.rel}
                  target={link.target}
                  className="hover:border-indigo-300 hover:border-b-2 "
                >
                  {"{ "}

                  {link.label}
                  {" }  "}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button className="mt-4 sm:mt-0 border-2 border-black text-black h-8 w-32 rounded-md hover:text-white hover:bg-black animate-pulse">
          let&apos;s connect
        </button>
      </div>
    </header>
  );
};

export default Nav;
