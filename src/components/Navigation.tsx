import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navigation = () => {
  const navLinks = [
    {
      label: "Home",
      href: "home",
    },
    {
      label: "About Me",
      href: "about",
    },
    {
      label: "Skills",
      href: "skills",
    },
    {
      label: "Projects",
      href: "projects",
    },
  ];

  const [navbarQue, setNavbarQue] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarQue(window.screenY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`flex justify-between py-3 items-center w-full px-[15%] ${
          navbarQue ? "bg-bg shadow-sm" : "bg-opacity-0"
        }`}
      >
        <RouterLink
          to="/"
          className="text-accent font-semibold text-[25px] font-title"
        >
          Elle
        </RouterLink>
        <div className="flex gap-x-14">
          {navLinks.map(({ label, href }) => (
            <ScrollLink
              to={href}
              smooth={true}
              duration={500}
              className="flex gap-x-20 text-text cursor-pointer"
            >
              {label}
            </ScrollLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
