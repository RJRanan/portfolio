import { portfolio, simon } from "../assets/images";

export const navLinks = [
  {
    id: "0. ",
    href: "#home",
    label: "home",
  },

  {
    id: "1. ",
    href: "#about",
    label: "about",
  },
  {
    id: "2. ",
    href: "#projects",
    label: "projects",
  },
  {
    id: "3. ",
    href: "#contact",
    label: "contact",
  },
];

export const info = [
  {
    id: "0",
    title: "Education 🎓",
    info: "{ “ Hi!, I’m Renz Jestoni Ranan a Computer Science graduate from the Philippines. Since the time  I was introduced in web development,  I've been excited to discover more. I'm really keen on understanding it better and getting better at it. ” }",
    school: "STI College Ortigas - Cainta",
    course: "< B.S Computer Science />",
    date: "2019 - 2023",
    bullet: [
      // "Magna Cum Laude",
      // "President Lister",
      "Thesis Project: Eterna Garden: The Vegetables & Fruits Monster World",
    ],
  },

  {
    id: "1",
    title: "Experience 💼",
    info: "Leveraged a versatile skillset to contribute to both front-end and back-end website development, utilizing a dynamic tech stack inclusive of Java",
    company: "Podcast Network Asia",
    position: "< Developer Intern />",
    date: "08/2022 - 10/2022",
    content: [
      "Designed a user-friendly subscription page and seamlessly integrated essential web API connections for enhanced functionality",
      "Leveraged a versatile skillset to contribute to both front-end and back-end website development, utilizing a dynamic tech stack inclusive of JavaScript, React, Tailwind CSS and Postman API.",
      "Implemented front-end features to improve user experience.",
      "Developed interactive elements for the user interface, including buttons, forms, menus, and navigation bars.",
    ],
  },
  {
    id: "2",
    title: "Skills 📚",
    info: "",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "React",
      "Tailwind CSS",
      "Bootstrap",
      "Vite",
      "Postman API",
      "C#",
      "Java",
      "Linux",
      "GitHub",
      "Git",
    ],
  },

  {
    id: "3",
    title: "Hobbies 💡",
    info: "",
    interest: [
      "Reading",
      "Music",
      "Trading",
      "Gaming",
      "Walking",
      "Cooking",
      "Photography",
      "Tv-series",
      "Podcast",
    ],
  },
];

export const projects = [
  {
    id: "0",
    title: "Personal Portfolio",
    stacks: ["React", "Tailwind CSS"],
    info: "My personal portfolio designed using Figma and built with React  and Tailwind CSS",
    websiteLink: "https://renzjestoniranan.vercel.app/",
    githubLink: "",
    imgURL: portfolio,
  },

  {
    id: "1",
    title: "Simon Game",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery"],
    info: "Simon Game is a classic memory game where players need to remember and repeat a sequence of colors. This project is a web-based implementation of the Simon game using HTML, CSS, JavaScript, and jQuery.",
    websiteLink: "",
    githubLink: "",
    imgURL: simon,
  },
];
