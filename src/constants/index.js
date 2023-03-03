import {
  mobile,
  backend,
  creator,
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
  nys,
  dq,
  ut,
  flow,
  java,
  cplus,
  c,
  mysql,
  github,
  postman,
  admin,
  arena,
  weather,
  shop,
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
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C++",
    icon: cplus,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "MySql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Postman",
    icon: postman,
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

const projects = [
  {
    name: "Arena Chat App",
    description:
      "Developed a live chat app using React and Express.js, featuring a secure login/signup system, real-time messaging with socket.io, and responsive design for seamless use across browsers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "chakra-ui",
        color: "orange-text-gradient",
      },
      {
        name: "socket-io",
        color: "blue-text-gradient",
      },
    ],
    image: arena,
    host_link: "https://temp-arena-chat.herokuapp.com/",
    source_code_link: "https://github.com/siddharth-nair-2/Arena-chat-app",
  },
  {
    name: "FootyShop",
    description:
      "A dynamic e-commerce website created with React, Material-UI, Stripe, and Redux for a seamless user experience and secure payment processing, along with with intuitive navigation and responsive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "orange-text-gradient",
      },
      {
        name: "material-ui",
        color: "blue-text-gradient",
      },
    ],
    image: shop,
    host_link: "https://delightful-cascaron-a4fa91.netlify.app/",
    source_code_link: "https://github.com/siddharth-nair-2/Ecommerce-Project",
  },
  {
    name: "Admin Dashboard",
    description:
      "An efficient admin dashboard developed with React, Material-UI, Firebase, and Redux, delivering a seamless user experience and streamlined management of data and resources.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: admin,
    host_link: "https://luminous-mermaid-b5e898.netlify.app/login",
    source_code_link: "https://github.com/siddharth-nair-2/Ecommerce-Project/tree/main/Admin",
  },
  {
    name: "Weather App",
    description:
      "A sleek weather app built with React and Tailwind CSS, pulling data from APIs to provide accurate and up-to-date weather information in a user-friendly interface and easy searching.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "APIs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "pagination",
        color: "orange-text-gradient",
      },
      {
        name: "luxon",
        color: "blue-text-gradient",
      },
    ],
    image: weather,
    host_link: "https://serene-zabaione-d5023e.netlify.app/",
    source_code_link: "https://github.com/siddharth-nair-2/weather-app",
  },
];

export { services, technologies, experiences, projects };
