import {
  mobile,
  backend,
  
  web,
  javascript,
  
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  
  Nalco,
  Sparks,
  
  
  Donationpage,
  ToDoList,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Frontend Developer Internship",
    company_name: "Nalco",
    icon: Nalco,
    iconBg: "#383E56",
    date: "May 2024 - June 2024",
    points: [
      "In this project, my contributions encompassed the development of a comprehensive web interface for NALCO using HTML, CSS, and JavaScript.I implemented real-time search functionality, a language translation feature for English and Hindi, and a favorites management system, allowing users to interact dynamically with the applications."
    ],
  },
  {
    title: "Web Developer Internship",
    company_name: "Sparks Foundation",
    icon: Sparks,
    iconBg: "#E6DEDD",
    date: "May 2024 - June 2024",
    points: [
      "Participated as a Web Developer.Created a website where payment Gateway is integrated.On Clicking the donate button,the user will land on payment page where user can select the amount to be paid and type of payment.Once the payment is done a invoice will be generated and email will be sent to the user which will contain amount paid."
    ],
  },
  
];



const projects = [
  {
    name: "Donationpage",
    description:
      "a website where payment Gateway is integrated.On Clicking the donate button,the user will land on payment page where user can select the amount to be paid and type of payment.Once the payment is done a invoice will be generated and email will be sent to the user which will contain amount paid.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
    ],
    image:Donationpage,
    source_code_link: "https://github.com/subhunath/Myprojects/tree/main/task3",
  },
  {
    name: "Subhashri.Fun",
    description:
      "Dive into a world of excitement and entertainment with the collection of fun games. If you're looking to pass the time  we have something. Our current selection includes a variety of games that will keep you engaged and entertained for hours.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
    ],
    image:ToDoList,
    source_code_link: "https://subhashri-games.netlify.app",
  },
  
];

export { services, technologies, experiences, projects };
