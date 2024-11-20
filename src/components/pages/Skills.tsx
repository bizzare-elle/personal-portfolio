import commuication from "../../assets/img/communication.png";
import creativity from "../../assets/img/creativity.png";
import teamWork from "../../assets/img/teamWork.png";
import problemSolving from "../../assets/img/problemSolving.png";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoFigma,
  IoLogoBitbucket,
  IoLogoSass,
  IoLogoVercel,
} from "react-icons/io5";
import { SiTypescript, SiMysql, SiGithub, SiTailwindcss } from "react-icons/si";

const skillIcons = [
  {
    label: "HTML",
    icon: <IoLogoHtml5 size={40} style={{ color: "#c75b7a" }} />,
  },
  {
    label: "CSS",
    icon: <IoLogoCss3 size={40} style={{ color: "#c75b7a" }} />,
  },
  {
    label: "SASS",
    icon: <IoLogoSass size={40} style={{ color: "#c75b7a" }} />,
  },
  {
    label: "Tailwind CSS",
    icon: <SiTailwindcss size={40} style={{ color: "#c75b7a" }} />,
  },
  {
    label: "Figma",
    icon: <IoLogoFigma size={40} style={{ color: "#c75b7a" }} />,
  },
  {
    label: "JavaScript",
    icon: <IoLogoJavascript size={40} style={{ color: "#c75b7a" }} />,
  },
  {
    label: "React JS",
    icon: <IoLogoReact size={40} style={{ color: "#c75b7a" }} />,
  },

  {
    label: "Typescript",
    icon: <SiTypescript size={40} style={{ color: "#c75b7a" }} />,
  },
  {
    label: "My SQL",
    icon: <SiMysql size={40} style={{ color: "#c75b7a" }} />,
  },
  {
    label: "Github",
    icon: <SiGithub size={40} style={{ color: "#c75b7a" }} />,
  },
  {
    label: "Vercel",
    icon: <IoLogoVercel size={40} style={{ color: "#c75b7a" }} />,
  },

  {
    label: "Bitbucket",
    icon: <IoLogoBitbucket size={40} style={{ color: "#c75b7a" }} />,
  },
];

const softSkills = [
  {
    text: "Creativity",
    icon: creativity,
    description: "Always bringing fresh ideas and innovative solutions.",
  },
  {
    text: "Communication",
    icon: commuication,
    description:
      "Effective at sharing ideas clearly and listening actively to ensure smooth and productive interactions.",
  },
  {
    text: "Problem-Solving",
    icon: problemSolving,
    description:
      "Skilled at identifying issues and developing effective, innovative solutions quickly.",
  },
  {
    text: "Team Work",
    icon: teamWork,
    description:
      "Collaborative and supportive, thriving in team environments to achieve shared goals.",
  },
];

const Skills = () => {
  return (
    <div className="h-[100vh] w-full bg-bg px-[15%] flex flex-col items-center justify-center gap-y-2 py-5">
      <h4>My Skills</h4>
      <div className="flex justify-center pb-5">
        <span className="text-text">
          List of Technologies and Applications I Use As A Web Developer and
          UI/UX Designer
        </span>
      </div>
      <div className="flex-col gap-y-5 gap-x-5 flex-wrap items-start grid grid-cols-3">
        {skillIcons.map(({ label, icon }) => (
          <div
            key={label}
            className="flex items-center gap-x-4 bg-bg shadow-lg pl-5 py-3 w-[300px] rounded-lg border duration-200 border-accent hover:shadow-accent hover:shadow-2xl"
          >
            <div>{icon}</div>
            <span className="font-semibold text-text text-[20px]">{label}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center pt-[80px] gap-y-[30px] px-32">
        <div className="flex gap-x-[120px]">
          {softSkills.map(({ text, icon, description }) => (
            <div
              key={text}
              className="flex justify-center flex-col items-center"
            >
              <img src={icon} alt={text} className="h-[90px]" />
              <span className="font-semibold text-accent text-[20px] mt-5">
                {text}
              </span>
              <span className="text-text font-light text-center">
                {description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
