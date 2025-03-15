import { useState } from "react";

const Navbar = () => {
  const navLink = [
    { name: "About", path: "#about" },
    { name: "Service", path: "#service" },
    { name: "Project", path: "#project" },
    { name: "Contact", path: "#contact" },
  ];

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav className="shadow-md py-4 fixed top-0 left-0 w-full bg-white z-50">
        <div className="px-[20px] md:px-[50px] lg:px-[122px] flex justify-between items-center">
          {/* Logo */}
          <div>
            <a
              href="#about"
              className="hidden lg:block bg-gradient-to-r from-dark to-primary font-extrabold text-transparent bg-clip-text text-xl"
            >
              Landewank Fahreza Firdaus
            </a>

            {/* Mobile Name */}
            <a
              href="#about"
              className="lg:hidden md:block bg-gradient-to-r from-dark to-primary font-extrabold text-transparent bg-clip-text text-xl"
            >
              Landewank FF
            </a>
          </div>

          {/* Navigation Menu (Single Code for Both Desktop & Mobile) */}
          <div
            className={`fixed md:static top-[70px] right-0 h-full w-[70%] s:w-[50%] lg:w-auto bg-primary md:bg-transparent transition-transform duration-300 ease-in-out ${
              toggleMenu ? "translate-x-0" : "translate-x-full"
            } md:translate-x-0 md:transition-none z-[2] flex flex-col md:flex-row md:justify-end md:w-auto md:gap-6 py-10 md:py-0`}
          >
            <ul className="flex flex-col md:flex-row gap-6 items-center">
              {navLink.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-white md:text-black hover:text-gray-300 md:hover:text-primary transition"
                    onClick={() => setToggleMenu(false)} // Close menu on click (only in mobile)
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button (Only on Small Screens) */}
          <div
            className="sm:block md:hidden text-3xl cursor-pointer"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <ion-icon name={toggleMenu ? "close" : "menu"}></ion-icon>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

/* Explain Program 

*/