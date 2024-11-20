import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navigation = () => {
  const navLinks = [
    { label: "Home", href: "home" },
    { label: "About Me", href: "about" },
    { label: "Skills", href: "skills" },
    { label: "Projects", href: "projects" },
  ];

  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setNavbarVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full h-16 flex items-center py-3 px-[15%] justify-between transition-transform duration-300 z-50 ${
          navbarVisible ? "translate-y-0" : "-translate-y-full"
        } ${lastScrollY > 50 ? "bg-black bg-opacity-80" : "bg-transparent"}`}
      >
        <RouterLink
          to="/"
          className="text-accent font-semibold text-[30px] font-title"
        >
          Elle
        </RouterLink>

        <div className="flex gap-x-10">
          {navLinks.map(({ label, href }) => (
            <ScrollLink
              key={href}
              to={href}
              smooth={true}
              duration={500}
              className="text-text cursor-pointer hover:text-accent transition-colors duration-200  hover:scale-110"
            >
              {label}
            </ScrollLink>
          ))}
        </div>
      </nav>

      <div className="h-16"></div>
    </>
  );
};

export default Navigation;
