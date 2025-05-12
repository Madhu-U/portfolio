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
  SiApachesolr, // Note: This icon is typically for Apache Solr (search platform). For generic REST APIs, a different icon might be used, but I'll stick to your current mapping.
  SiJsonwebtokens,
  SiPostman,
  SiJira,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import { GrMysql } from "react-icons/gr";

const skills = {
  frontend: [
    {
      id: 1,
      label: "HTML5",
      icon: FaHtml5,
      desc: "The standard markup language for creating web pages and web applications, providing the structure of content.",
    },
    {
      id: 2,
      label: "CSS3",
      icon: FaCss3Alt,
      desc: "A stylesheet language used to describe the presentation of a document written in HTML, handling the visual styling.",
    },
    {
      id: 3,
      label: "JavaScript",
      icon: FaJs,
      desc: "A versatile programming language that enables dynamic content, user interaction, and complex features on websites.",
    },
    {
      id: 4,
      label: "TypeScript",
      icon: SiTypescript,
      desc: "A superset of JavaScript that adds static typing, improving code quality and maintainability in large-scale applications.",
    },
    {
      id: 5,
      label: "React",
      icon: FaReact,
      desc: "A JavaScript library for building user interfaces, particularly single-page applications, using a component-based architecture.",
    },
    {
      id: 6,
      label: "Next.js",
      icon: SiNextdotjs,
      desc: "A popular React framework that enables features like server-side rendering, static site generation, and routing with ease.",
    },
    {
      id: 7,
      label: "Tailwind CSS",
      icon: SiTailwindcss,
      desc: "A utility-first CSS framework for rapidly building custom user interfaces without writing traditional CSS.",
    },
    {
      id: 8,
      label: "Redux",
      icon: SiRedux,
      desc: "A predictable state container for JavaScript applications, commonly used with React to manage complex application state.",
    },
    {
      id: 9,
      label: "Jest",
      icon: SiJest,
      desc: "A delightful JavaScript testing framework with a focus on simplicity, often used for testing React applications.",
    },
    {
      id: 10,
      label: "jQuery",
      icon: SiJquery,
      desc: "A fast, small, and feature-rich JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling and animation.",
    },
    {
      id: 11,
      label: "Bootstrap",
      icon: FaBootstrap,
      desc: "A popular front-end framework for developing responsive and mobile-first websites quickly, providing pre-built components.",
    },
  ],
  backend: [
    {
      id: 12,
      label: "Node.js",
      icon: FaNodeJs,
      desc: "A JavaScript runtime built on Chrome's V8 engine, allowing developers to run JavaScript code on the server-side.",
    },
    {
      id: 13,
      label: "Express.js",
      icon: SiExpress,
      desc: "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    },
    {
      id: 14,
      label: "MongoDB",
      icon: SiMongodb,
      desc: "A NoSQL document-oriented database that stores data in flexible, JSON-like documents, popular for its scalability and ease of use.",
    },
    {
      id: 15,
      label: "MySQL",
      icon: GrMysql,
      desc: "A popular open-source relational database management system (RDBMS) known for its reliability and performance.",
    },
    {
      id: 16,
      label: "REST APIs",
      icon: SiApachesolr, // As noted, SiApachesolr is specific. Consider a more generic API icon if available or needed.
      desc: "Architectural style for designing networked applications, enabling communication between different software systems over HTTP.",
    },
    {
      id: 17,
      label: "JWT Auth",
      icon: SiJsonwebtokens,
      desc: "JSON Web Tokens are an open standard for securely transmitting information between parties as a JSON object, commonly used for authentication.",
    },
  ],
  tools: [
    {
      id: 18,
      label: "Git",
      icon: FaGitAlt,
      desc: "A distributed version control system for tracking changes in source code during software development, enabling collaboration.",
    },
    {
      id: 19,
      label: "GitHub",
      icon: FaGithub,
      desc: "A web-based hosting service for version control using Git, widely used for source code management and collaboration.",
    },
    {
      id: 20,
      label: "Postman",
      icon: SiPostman,
      desc: "An API platform for developers to design, build, test, and iterate on their APIs, simplifying the API development lifecycle.",
    },
    {
      id: 21,
      label: "VS Code",
      icon: VscVscode,
      desc: "A free source-code editor developed by Microsoft, known for its rich features, extensibility, and performance.",
    },
    {
      id: 22,
      label: "Jira",
      icon: SiJira,
      desc: "A popular project management tool used for issue tracking, bug tracking, and agile project management.",
    },
    {
      id: 23,
      label: "Figma",
      icon: FaFigma,
      desc: "A collaborative web-based interface design tool used for UI/UX design, prototyping, and creating design systems.",
    },
    {
      id: 24,
      label: "Linux",
      icon: FaLinux,
      desc: "An open-source operating system kernel, widely used for servers, desktops, and embedded systems due to its stability and flexibility.",
    },
    {
      id: 25,
      label: "NPM",
      icon: FaNpm,
      desc: "The default package manager for Node.js, used for installing, sharing, and managing JavaScript packages and dependencies.",
    },
  ],
};

export default skills;
