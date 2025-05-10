import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaBootstrap,
  FaLinux,
  FaFigma,
  FaNpm,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiJest,
  SiJquery,
  SiExpress,
  SiMongodb,
  SiApachesolr,
  SiJsonwebtokens,
  SiPostman,
  SiJira,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import { GrMysql } from "react-icons/gr";

const skillCategories = {
  frontend: [
    { id: 1, label: "HTML5", icon: FaHtml5 },
    { id: 2, label: "CSS3", icon: FaCss3Alt },
    { id: 3, label: "JavaScript", icon: FaJs },
    { id: 4, label: "TypeScript", icon: SiTypescript },
    { id: 5, label: "React", icon: FaReact },
    { id: 6, label: "Next.js", icon: SiNextdotjs },
    { id: 7, label: "Tailwind CSS", icon: SiTailwindcss },
    { id: 8, label: "Redux", icon: SiRedux },
    { id: 9, label: "Jest", icon: SiJest },
    { id: 10, label: "jQuery", icon: SiJquery },
    { id: 11, label: "Bootstrap", icon: FaBootstrap },
  ],
  backend: [
    { id: 12, label: "Node.js", icon: FaNodeJs },
    { id: 13, label: "Express.js", icon: SiExpress },
    { id: 14, label: "MongoDB", icon: SiMongodb },
    { id: 15, label: "MySQL", icon: GrMysql },
    { id: 16, label: "REST APIs", icon: SiApachesolr },
    { id: 17, label: "JWT Auth", icon: SiJsonwebtokens },
  ],
  tools: [
    { id: 18, label: "Git", icon: FaGitAlt },
    { id: 19, label: "GitHub", icon: FaGithub },
    { id: 20, label: "Postman", icon: SiPostman },
    { id: 21, label: "VS Code", icon: VscVscode },
    { id: 22, label: "Jira", icon: SiJira },
    { id: 23, label: "Figma", icon: FaFigma },
    { id: 24, label: "Linux", icon: FaLinux },
    { id: 25, label: "NPM", icon: FaNpm },
  ],
};

export default skillCategories;
