// import { data } from "autoprefixer";
import { portfolio, simon, qrcode } from "../assets/images";

export const navLinks = [
  {
    id: "0",
    href: "#home",
    label: "home",
  },

  {
    id: "1",
    href: "#about",
    label: "about",
  },
  {
    id: "2",
    href: "#projects",
    label: "projects",
  },
  {
    id: "3",
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
      "Magna Cum Laude",
      "President Lister",
      "Thesis Project: Eterna Garden: The Vegetables & Fruits Monster World",
    ],
  },

  // {
  //   id: "1",
  //   title: "Experience 💼",
  //   info: "",
  //   company: "Cardinal Health International Philippines",
  //   position: "< Analyst, Cloud Engineering />",
  //   date: "10/2023 - 01/2024",
  //   content: [
  //     "Support of system utility software, application, documentation, third party software and compliance.",
  //     "Raise and respond to multiple Change Management and Incident tickets appropriately.",
  //     "Work with Vendors to understand and resolve complex issues.",
  //   ],
  // },

  // {
  //   id: "1",
  //   title: "",
  //   info: "",
  //   company: "Podcast Network Asia",
  //   position: "< Developer Intern />",
  //   date: "08/2022 - 10/2022",
  //   content: [
  //     "Set up and manage Content Management System (CMS) websites, with extensive experience in platforms such as WordPress and OpenCart, ensuring they meet client specifications and industry standards.",
  //     "Utilize source code management tools like Git to maintain version control, collaborate with team members, and streamline the development process.",
  //     "Customize existing website to align with client requirements, and perform comprehensive bug fixes to maintain site integrity and performance.",
  //     "Convert PSD design files into responsive and visually appealing HTML/CSS themes, ensuring high fidelity to the original design and cross-browser compatibility.",
  //     "Conduct thoroguh testing of websites, including functionality, usability, and compatibility testing, to identify and resolve issues, ensuring a seamless user experience.",
  //   ],
  // },

  // {
  //   id: "1",
  //   title: "Experience 💼",
  //   info: "",
  //   company: "Podcast Network Asia",
  //   position: "< Developer Intern />",
  //   date: "08/2022 - 10/2022",
  //   content: [
  //     "Set up and manage Content Management System (CMS) websites, with extensive experience in platforms such as WordPress and OpenCart, ensuring they meet client specifications and industry standards.",
  //     "Utilize source code management tools like Git to maintain version control, collaborate with team members, and streamline the development process.",
  //     "Customize existing website to align with client requirements, and perform comprehensive bug fixes to maintain site integrity and performance.",
  //     "Convert PSD design files into responsive and visually appealing HTML/CSS themes, ensuring high fidelity to the original design and cross-browser compatibility.",
  //     "Conduct thoroguh testing of websites, including functionality, usability, and compatibility testing, to identify and resolve issues, ensuring a seamless user experience.",
  //   ],
  // },

  {
    id: "1",
    title: "Experience 💼",
    info: "",
    company: "PwC Southeast Asia Consulting",
    position: "< SAP ABAP Developer />",
    date: "02/2025 - present",
    content: [
      "Gained hands-on experience in ABAP development, working on reports, ALV reports, Smart Forms, and interfaces.",
      "Explored OData services for exposing SAP data to external applications, gaining foundational knowledge.",
      "Developed custom reports and performed debugging to analyze and improve program performance.",
      "Practiced ABAP best practices through mentor guidance and project-based assignments.",
      "Engaged in collaborative learning with peers, continuously improving skills despite challenges in complex ABAP topics.",
    ],
  },

  {
    id: "1",
    info: "",
    company: "Podcast Network Asia",
    position: "< Developer Intern />",
    date: "08/2022 - 10/2022",
    content: [
      "Set up and manage Content Management System (CMS) websites, with extensive experience in platforms such as WordPress and OpenCart, ensuring they meet client specifications and industry standards.",
      "Utilize source code management tools like Git to maintain version control, collaborate with team members, and streamline the development process.",
      "Customize existing website to align with client requirements, and perform comprehensive bug fixes to maintain site integrity and performance.",
      "Convert PSD design files into responsive and visually appealing HTML/CSS themes, ensuring high fidelity to the original design and cross-browser compatibility.",
      "Conduct thoroguh testing of websites, including functionality, usability, and compatibility testing, to identify and resolve issues, ensuring a seamless user experience.",
    ],
  },

  // {
  //   id: "2",
  //   title: "Skills 📚",
  //   info: "",
  //   skills: [
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //     "jQuery",
  //     "React",
  //     "Tailwind CSS",
  //     "Bootstrap",
  //     "Vite",
  //     "Postman API",
  //     "C#",
  //     "Java",
  //     "Linux",
  //     "GitHub",
  //     "Git",
  //     "GCP",
  //     "AWS EC2",
  //     "ServiceNow",
  //   ],
  // },

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
    stacks: ["React", "Tailwind CSS", "JavaScript"],
    info: "My personal portfolio designed using Figma and built with React  and Tailwind CSS",
    websiteLink: "https://renzjestoniranan.vercel.app/",
    githubLink: "https://github.com/RJRanan/portfolio",
    imgURL: portfolio,
  },

  {
    id: "1",
    title: "Simon Game",
    stacks: ["HTML", "CSS", "JavaScript", "jQuery"],
    info: "Simon Game is a classic memory game where players need to remember and repeat a sequence of colors. This project is a web-based implementation of the Simon game using HTML, CSS, JavaScript, and jQuery.",
    websiteLink: "https://simon-game-ashy-three.vercel.app/",
    githubLink: "https://github.com/RJRanan/Simon-Game",
    imgURL: simon,
  },
  {
    id: "2",
    title: "QR Code Generator",
    stacks: ["Node.js"],
    info: "This Node.js application allows you to generate a QR code from a URL provided by the user, with all actions being performed through the console. The QR code will be saved as an image file.",
    websiteLink: "",
    githubLink: "https://github.com/RJRanan/QR-Code-generator/tree/main",
    imgURL: qrcode,
  },
];
