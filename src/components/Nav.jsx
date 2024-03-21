import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="w-full sm:px-24 px-5 sm:py-3 py-3 fixed bg-opacity-50 backdrop-blur-md shadow-md">
      <div className="max-container flex justify-between items-center relative">
        <a href="/">
          <h1 className="font-bold text-3xl">{"<RJRR/>"}</h1>
        </a>

        <nav>
          <ul className="flex gap-14 text-[#000000] text-sm font-inter max-lg-nav z-50">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} rel={link.rel} target={link.target}>
                  {"<"}
                  {link.label}
                  {" />"}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* dark theme" */}
      </div>
    </header>
  );
};

export default Nav;
