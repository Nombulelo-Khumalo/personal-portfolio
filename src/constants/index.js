import {
  SCLogo,
  SCBasic,
  SCBasicAddOn,
  SCPlus,
  SCPlusAddOn,
  SCAIaddon,
  ScrimbaLogo,
  ScrimbaLogo1,
  alisonsLogo,
  SiGreatlearning,
  menu,
  close,
  linkedin,
} from "../assets/index.js";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiPostman,
  SiGit,
  SiNetlify,
  SiVite,
  SiOpenai,
} from "react-icons/si";

import { DiCss3, DiJavascript, DiVisualstudio } from "react-icons/di";
import { FaWhatsapp } from "react-icons/fa";

import {
  git,
  orange,
  darkblue,
  lightblue,
  yellow,
  postman,
  turqoise,
  gray,
} from "/src/colors.js";

export const resumeLink = "";
export const repoLink =
  "https://github.com/Nombulelo-Khumalo/personal-portfolio";
export const callToAction = "input linkdin link";

//Navigation Bar Links
export const navLinks = [
  {
    id: "skills",
    title: "Relevant Skills",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "extraAchievements",
    title: "Extra Achievements",
  },
  {
    id: "contact",
    title: "Contact Me",
  },
];

//Education
export const educationList = [
  {
    id: "shecodes",
    icon: SCLogo,
    title: "SheCodes",
    degree: "",
    content: "",
  },
  {
    id: "alisons",
    icon: alisonsLogo,
    title: "Alisons",
    degree: "Python for Beginners",
    content: "",
  },
  {
    id: "scrimba",
    icon: ScrimbaLogo,
    title: "Scrimba",
    degree: "Python",
    content: "",
  },
];

export const shecodes = [
  {
    id: "sc-1",
    icon: SCBasic,
    title: "SheCodes Basic",
    content:
      "Learnt the basics of HTML, style with CSS, building interactions with JavaScript, and crafting my very first interactive landing page",
  },
  {
    id: "sc-2",
    icon: SCBasicAddOn,
    title: "SheCodes Basics Add-On",
    content: "",
  },
  {
    id: "sc-2",
    icon: SCPlus,
    title: "SheCodes Plus",
    content:
      "Built websites with live data using APIs, advanced JavaScript and modern coding tools",
  },
  {
    id: "sc-3",
    icon: SCPlusAddOn,
    title: "SheCodes Plus Add-On",
    content: "",
  },
  {
    id: "sc-4",
    icon: SCAIaddon,
    title: "SheCodes AI Add-On",
    content: "Learnt to build applications using Artificial Intelligence",
  },
];

//skills
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiPython,
        name: "Python",
        hoverColor: darkblue,
      },
      {
        id: "pl-2",
        icon: SiJavascript,
        name: "Javascript",
        hoverColor: yellow,
      },
      {
        id: "pl-3",
        icon: AiFillHtml5,
        name: "Html",
        hoverColor: orange,
      },
      {
        id: "pl-4",
        icon: DiCss3,
        name: "Css",
        hoverColor: darkblue,
      },
      {
        id: "pl-5",
        icon: DiJavascript,
        name: "ES6",
        hoverColor: yellow,
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiReact,
        name: "React",
        hoverColor: lightblue,
      },
      {
        id: "f-2",
        icon: SiTailwindcss,
        name: "Tailwindcss",
        hoverColor: lightblue,
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiPostman,
        name: "Postman",
        hoverColor: orange,
      },
      {
        id: "t-2",
        icon: SiGit,
        name: "Git",
        hoverColor: git,
      },
      {
        id: "t-3",
        icon: AiFillGithub,
        name: "Github",
        hoverColor: gray,
      },
      {
        id: "t-4",
        icon: DiVisualstudio,
        name: "VsCode",
        hoverColor: darkblue,
      },
      {
        id: "t-5",
        icon: SiNetlify,
        name: "Netlify",
        hoverColor: turqoise,
      },
      {
        id: "t-6",
        icon: SiVite,
        name: "ViteJs",
        hoverColor: lightblue,
      },
      // {
      //   id: "t-7",
      //   icon: "",
      //   name: "Tkinter",
      // },
    ],
  },
];

//Projects
export const projects = [
  {
    id: "project-1",
    title: "SkinCare Beauty Website",
    github: "https://github.com/Nombulelo-Khumalo/skincare-beauty",
    netlify: "https://skincare-nk.netlify.app",
    image: "",
    content:
      "A modern, responsive e-commerce website built with React, designed to showcase skincare products. This project demonstrates my ability to create intuitive, user-friendly interfaces and responsive layouts. I used best practices for component-based architecture, state management, and optimized performance. The website is fully mobile-friendly, ensuring a seamless shopping experience across all devices. It reflects my proficiency in React, Tailwindcss, and JavaScript while focusing on clean, maintainable code and scalability.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiJavascript,
        name: "Javascript",
      },
      {
        id: "icon-3",
        icon: SiTailwindcss,
        name: "Tailwindcss",
      },
    ],
  },
  {
    id: "project-2",
    title: "Dental Care App with Chatbot",
    github: "https://github.com/Nombulelo-Khumalo/dentalapp",
    netlify: "https://lumidentcare.netlify.app/",
    image: "",
    content:
      "A user-friendly dental app built with React, featuring a chatbot for instant patient assistance. The app offers appointment booking, dental care tips, and adequate information on dental practise, enhancing the user experience with AI-powered support for quick responses and guidance.",
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "Css",
      },
      {
        id: "icon-3",
        icon: DiJavascript,
        name: "Javascript",
      },
    ],
  },
  {
    id: "project-3",
    title: "Online Examination Platform with JWT Authentication",
    github: "https://github.com/Nombulelo-Khumalo/multiple-choice-exam",
    netlify: "",
    image: "",
    content:
      "A secure online examination system built with HTML and Express, featuring JWT authentication for user login and access control. The app includes a timed exam feature, tracking both the overall exam access duration and individual question accessibility, ensuring a seamless and secure testing experience.",
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "Css",
      },
      {
        id: "icon-3",
        icon: DiJavascript,
        name: "Javascript",
      },
    ],
  },
];

//extra curricular
export const extraAchievements = [
  {
    id: "ec-1",
    icon: SiGreatlearning,
    title: "",
    degree: "Introduction to API and Restful API",
    content:
      "An introductory course focused on APIs and RESTful architecture, teaching the principles behind building and consuming REST APIs. The course covers HTTP methods, status codes, and best practices for designing scalable and efficient APIs",
  },
  {
    id: "ec-2",
    icon: SiGreatlearning,
    title: "",
    degree: "Introdunction to Web API",
    content:
      "A foundational course on Web APIs, covering the basics of building and consuming APIs. It introduces key concepts, tools, and techniques for developing and integrating APIs to enhance web application functionality.",
  },
  {
    id: "ec-3",
    icon: "",
    title: "The Hour Of Code",
    degree: "Basic Concepts of Computer Science",
    content: "",
  },
];

//social media links
export const socialMedia = [
  {
    id: "",
    icon: AiFillLinkedin,
    link: "linkdin",
  },
  {
    id: "",
    icon: AiFillGithub,
    link: "https://github.com/Nombulelo-Khumalo/",
  },
  {
    id: "",
    icon: AiFillMail,
    link: "kumzalelo23@gmail.com",
  },
  // {
  //   id: "",
  //   icon: FaWhatsapp,
  //   link: "whatsapp",
  // },
];

export const aboutMe = {
  name: "Nombulelo Khumalo",
  intro:
    "Web Developer based in South Africa, blending creativity with technical expertise to build impactful solutions. Constantly learning, experimenting, and pushing the boundaries of what's possible with code",
};
