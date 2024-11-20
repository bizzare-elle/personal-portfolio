import { TbTargetArrow } from "react-icons/tb";
import { BsFillTrophyFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";

const aboutMe = [
  {
    icon: <TbTargetArrow size={30} />,
    title: "My Mission",
    description:
      "To transform complex challenges into elegant, user-friend solutions. I believe in the power of design to enhance functionalityand create visually stunning interfaces. Each project I undertake is driven by the goal of improving user experiences and bringing ideas to life in the digital world.",
  },
  {
    icon: <BsFillTrophyFill size={30} />,
    title: "My Achievements",
    description:
      " Delivered multiple high-impact projects including: A leasing landing page site, A car booking web system with seamless user experience An e-commerce platform, and A professor's proficiency system. Recognition: Recognized for my innovative design solutions and user-centered approaches during my tenure as a web developer intern. Continuous Learning: Committed to staying updated with the latest trends and technologies in web development and design, continually improving my skills and knowledge.",
  },
  {
    icon: <FaHandshake size={30} />,
    title: "My Approach",
    description:
      " With a fresh perspective and an unwavering dedication to quality, I approach each project from concept to completion. I prioritize clear communication, attention to detail, and a deep understanding of user needs, aiming to create seamless and enjoyable digital experiences.",
  },
];

const AboutMe = () => {
  return (
    <div className="px-[15%] h-[100vh] w-full bg-bg flex flex-col gap-y-20 items-center justify-center">
      <div className="text-center gap-y-3 max-w-[600px]">
        <h4>About Me</h4>
        <span className="text-text ">
          Hello! I'm Marinelle Ando, a passionate front-end web developer and
          UI/UX designer. My journey in web development and design has been
          driven by a deep love for innovation and creativity, and a commitment
          to crafting exceptional digital experiences.
        </span>
      </div>
      <div className="flex gap-x-10">
        {aboutMe.map(({ icon, title, description }) => (
          <div
            key={title}
            className="bg-text/60 shadow-lg rounded-md w-[400px] h-[400px] p-8 flex items-center flex-col gap-y-5 duration-300 hover:scale-110 hover:sh ease-in-out hover:shadow-accent hover:shadow-2xl"
          >
            <div className="flex items-center gap-x-3">
              {icon}
              <span className="text-black font-semibold text-xl">{title}</span>
            </div>
            <span className="text-center">{description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
