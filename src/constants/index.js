import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  nys,
  dq,
  ut,
  flow,
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
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Front-End Developer",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Graphics Head",
    company_name: "National Youth Summit",
    icon: nys,
    iconBg: "#E6DEDD",
    date: "Mar 2017 - May 2017",
    points: [
      "Led a group of 4 people and handled charge of the graphics division of the event.",
      "Designed over 700 separate graphics in total, including the ones for each participating delegate meeting the compressed timelines.",
      "Improvised / improved the designs as per the need and suggestions of the organizer.",
      "Graphics produced led to an increase in social media engagement by 39%.",
    ],
  },
  {
    title: "Staff Member",
    company_name: "Dairy Queen",
    icon: dq,
    iconBg: "#383E56",
    date: "Apr 2021 - Dec 2021",
    points: [
      "Work in a fast-paced environment and make quick decisions.",
      "Assist customers by providing information and resolving their complaints through communication.",
      "Work in a tandem with a designated crew and have proper communication with each other to ensure quick and efficient work.",
      "Answer customers' questions, and provide information on procedures or policies.",
      "Offer customers carry-out service at the completion of transactions.",
    ],
  },
  {
    title: "Full-Stack Developer - Intern",
    company_name: "FlowUp",
    icon: flow,
    iconBg: "#E6DEDD",
    date: "May 2022 - Aug 2022",
    points: [
      "Refactored existing company code written in PHP to React and Node.js, which increased user satisfaction by 13% based on customer surveys.",
      "Led the development of a full-stack web application using React, Node.js and MySQL to track and purchase Cryptocurrency, with the ability to create separate wallets for each currency.",
      "Overhauled the agent dashboard with a modern UI which uses JsSIP and WebRTC to contact clients and help call centers, which automated the process of call matching.",
      "Reduced waiting times for each call by 36% leading to increased efficiency in connecting to clients.",
    ],
  },
  {
    title: "Usability Tester - Freelance",
    company_name: "UserTesting",
    icon: ut,
    iconBg: "#383E56",
    date: "September 2020 - Present",
    points: [
      "Participate in usability testing sessions for websites, apps, and other digital products.",
      "Provide detailed feedback on the usability, design, and overall user experience of the products being tested.",
      "Complete tasks and scenarios as instructed by the testing project, such as finding a specific piece of information or making a purchase on an e-commerce site.",
      "Communicate your thoughts and feedback in real-time via video and audio recordings, allowing the businesses behind the products to see how real users interact with their digital offerings.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
