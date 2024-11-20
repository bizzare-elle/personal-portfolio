import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";

const socialLinks = [
  {
    icons: <FaLinkedin size={25} />,
    href: "www.linkedin.com/in/marinelle-ando-a8a80230b",
  },
  {
    icons: <FaSquareInstagram size={25} />,
    href: "",
  },
  {
    icons: <IoLogoDiscord size={25} />,
    href: "",
  },
  {
    icons: <FaSquareGithub size={25} />,
    href: "https://github.com/bizzare-elle",
  },
];

const Home = () => {
  const skills = "skills";
  return (
    <div className="h-[100vh] w-full bg-bg px-[15%] m-auto ">
      <div className="flex justify-between pt-[15%] items-center">
        <div className="flex flex-col h-[80%] leading-tight">
          <h2 className="text-accent max-w-[70%] leading-[100px]">
            Innovating User Experiences With
            <span className="text-text"> Front-End</span> Expertise
          </h2>

          <p className="max-w-[900px] text-text text-[20px] font-medium tracking-wide">
            Hi! I am <span className="text-accent">Marinelle Ando. </span>I am a
            Frontend Web Developer and UI/Ux designer.{" "}
            <span>Let's connect!</span>
          </p>
          <div className="flex gap-x-16 mt-10">
            <button className="bg-accent text-text px-5 py-2 rounded-sm">
              <ScrollLink to={skills} smooth={true} duration={300}>
                View Skills
              </ScrollLink>
            </button>
            <button className="text-text">Review My CV</button>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="bg-accent w-[500px] h-[500px] blur-[300px] right-10 top-[200px] absolute rounded-full block"></div>
          {socialLinks.map(({ icons, href }) => (
            <div className=" text-text z-10">
              <a href={href}>{icons}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
