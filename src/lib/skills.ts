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
      icon: FaHtml5, // Assuming FaHtml5 is imported
      desc: "The standard markup language for creating web pages and web applications, providing the structure of content.",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML", // MDN Web Docs is a standard resource
    },
    {
      id: 2,
      label: "CSS3",
      icon: FaCss3Alt, // Assuming FaCss3Alt is imported
      desc: "A stylesheet language used to describe the presentation of a document written in HTML, handling the visual styling.",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS", // MDN Web Docs
    },
    {
      id: 3,
      label: "JavaScript",
      icon: FaJs, // Assuming FaJs is imported
      desc: "A versatile programming language that enables dynamic content, user interaction, and complex features on websites.",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", // MDN Web Docs
    },
    {
      id: 4,
      label: "TypeScript",
      icon: SiTypescript, // Assuming SiTypescript is imported
      desc: "A superset of JavaScript that adds static typing, improving code quality and maintainability in large-scale applications.",
      link: "https://www.typescriptlang.org/", // Official Website
    },
    {
      id: 5,
      label: "React",
      icon: FaReact, // Assuming FaReact is imported
      desc: "A JavaScript library for building user interfaces, particularly single-page applications, using a component-based architecture.",
      link: "https://react.dev/", // Official Website
    },
    {
      id: 6,
      label: "Next.js",
      icon: SiNextdotjs, // Assuming SiNextdotjs is imported
      desc: "A popular React framework that enables features like server-side rendering, static site generation, and routing with ease.",
      link: "https://nextjs.org/", // Official Website
    },
    {
      id: 7,
      label: "Tailwind CSS",
      icon: SiTailwindcss, // Assuming SiTailwindcss is imported
      desc: "A utility-first CSS framework for rapidly building custom user interfaces without writing traditional CSS.",
      link: "https://tailwindcss.com/", // Official Website
    },
    {
      id: 8,
      label: "Redux",
      icon: SiRedux, // Assuming SiRedux is imported
      desc: "A predictable state container for JavaScript applications, commonly used with React to manage complex application state.",
      link: "https://redux.js.org/", // Official Website
    },
    {
      id: 9,
      label: "Jest",
      icon: SiJest, // Assuming SiJest is imported
      desc: "A delightful JavaScript testing framework with a focus on simplicity, often used for testing React applications.",
      link: "https://jestjs.io/", // Official Website
    },
    {
      id: 10,
      label: "jQuery",
      icon: SiJquery, // Assuming SiJquery is imported
      desc: "A fast, small, and feature-rich JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling and animation.",
      link: "https://jquery.com/", // Official Website
    },
    {
      id: 11,
      label: "Bootstrap",
      icon: FaBootstrap, // Assuming FaBootstrap is imported
      desc: "A popular front-end framework for developing responsive and mobile-first websites quickly, providing pre-built components.",
      link: "https://getbootstrap.com/", // Official Website
    },
  ],
  backend: [
    {
      id: 12,
      label: "Node.js",
      icon: FaNodeJs, // Assuming FaNodeJs is imported
      desc: "A JavaScript runtime built on Chrome's V8 engine, allowing developers to run JavaScript code on the server-side.",
      link: "https://nodejs.org/", // Official Website
    },
    {
      id: 13,
      label: "Express.js",
      icon: SiExpress, // Assuming SiExpress is imported
      desc: "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
      link: "https://expressjs.com/", // Official Website
    },
    {
      id: 14,
      label: "MongoDB",
      icon: SiMongodb, // Assuming SiMongodb is imported
      desc: "A NoSQL document-oriented database that stores data in flexible, JSON-like documents, popular for its scalability and ease of use.",
      link: "https://www.mongodb.com/", // Official Website
    },
    {
      id: 15,
      label: "MySQL",
      icon: GrMysql, // Assuming GrMysql is imported
      desc: "A popular open-source relational database management system (RDBMS) known for its reliability and performance.",
      link: "https://www.mysql.com/", // Official Website
    },
    {
      id: 16,
      label: "REST APIs",
      icon: SiApachesolr, // Assuming SiApachesolr is imported - Note: SiApachesolr is specific.
      desc: "Architectural style for designing networked applications, enabling communication between different software systems over HTTP.",
      link: "https://developer.mozilla.org/en-US/docs/Glossary/REST", // MDN Glossary for concept
    },
    {
      id: 17,
      label: "JWT Auth",
      icon: SiJsonwebtokens, // Assuming SiJsonwebtokens is imported
      desc: "JSON Web Tokens are an open standard for securely transmitting information between parties as a JSON object, commonly used for authentication.",
      link: "https://jwt.io/", // JWT official site/explainer
    },
  ],
  tools: [
    {
      id: 18,
      label: "Git",
      icon: FaGitAlt, // Assuming FaGitAlt is imported
      desc: "A distributed version control system for tracking changes in source code during software development, enabling collaboration.",
      link: "https://git-scm.com/", // Official Website & Documentation
    },
    {
      id: 19,
      label: "GitHub",
      icon: FaGithub, // Assuming FaGithub is imported
      desc: "A web-based hosting service for version control using Git, widely used for source code management and collaboration.",
      link: "https://github.com/", // Official Website
    },
    {
      id: 20,
      label: "Postman",
      icon: SiPostman, // Assuming SiPostman is imported
      desc: "An API platform for developers to design, build, test, and iterate on their APIs, simplifying the API development lifecycle.",
      link: "https://www.postman.com/", // Official Website
    },
    {
      id: 21,
      label: "VS Code",
      icon: VscVscode, // Assuming VscVscode is imported
      desc: "A free source-code editor developed by Microsoft, known for its rich features, extensibility, and performance.",
      link: "https://code.visualstudio.com/", // Official Website
    },
    {
      id: 22,
      label: "Jira",
      icon: SiJira, // Assuming SiJira is imported
      desc: "A popular project management tool used for issue tracking, bug tracking, and agile project management.",
      link: "https://www.atlassian.com/software/jira", // Official Product Page (Atlassian)
    },
    {
      id: 23,
      label: "Figma",
      icon: FaFigma, // Assuming FaFigma is imported
      desc: "A collaborative web-based interface design tool used for UI/UX design, prototyping, and creating design systems.",
      link: "https://www.figma.com/", // Official Website
    },
    {
      id: 24,
      label: "Linux",
      icon: FaLinux, // Assuming FaLinux is imported
      desc: "An open-source operating system kernel, widely used for servers, desktops, and embedded systems due to its stability and flexibility.",
      link: "https://www.linuxfoundation.org/get-involved/learn", // Linux Foundation Learning Resources
    },
    {
      id: 25,
      label: "NPM",
      icon: FaNpm, // Assuming FaNpm is imported
      desc: "The default package manager for Node.js, used for installing, sharing, and managing JavaScript packages and dependencies.",
      link: "https://www.npmjs.com/", // Official Website (NPM Registry)
    },
  ],
};

export default skills;
