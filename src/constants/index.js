import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
  react,
  angular,
  ionic,
  // spring_boot,
  flutter,
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

export const services = [
  { title: "React", icon: react },
  { title: "Flutter", icon: flutter },
  { title: "Angular", icon: angular },
  { title: "Java", icon: java },
  // { title: "Spring Boot", icon: ionic },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Lead Frontend Developer",
    company_name: "KSNALabs",
    icon: eduskill,
    iconBg: "#161329",
    date: "Mar 2023 - Nov 2025",
    points: [
      "Developed and maintained responsive web applications using React, Redux, and TypeScript, with Jest and Enzyme for unit testing, Webpack for module bundling, and Axios for RESTful API integration.",
      "Implemented performance optimization techniques, including code splitting and lazy loading, resulting in a 25% reduction in page load times.",
      "Mentored and trained junior developers, resulting in a 50% increase in team productivity and a 20% reduction in code review time.",
      "Led the migration of a legacy codebase to a modern React architecture, resulting in a 40% reduction in technical debt and improved maintainability.",
      "Implemented a comprehensive testing strategy, including unit, integration, and end-to-end testing, resulting in a 30% reduction in production bugs.",
      "Implemented accessibility best practices, resulting in a 25% increase in accessibility compliance and improved user experience for all users.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Cloud Express Solutions",
    icon: mathwork,
    iconBg: "#161329",
    date: "Aug 2019 - Mar 2023",
    points: [
      "Optimized the application's performance by reducing the bundle size by 25% and improving the Lighthouse score from 80 to 95",
      "Collaborated with cross-functional teams to define and implement new features, resulting in a 20% increase in user engagement and retention.",
      "Set up automated CI/CD pipelines that reduced code integration time by 40%, resulting in faster software releases.",
      "Implemented a comprehensive testing strategy that increased code coverage from 60% to 90%, resulting in a significant reduction in production bugs.",
      "Developed and maintained a design system using Storybook, resulting in a 30% reduction in development time and improved consistency across applications.",
    ],
  },
  // {
  //   title: "Artificial Intelligence Intern",
  //   company_name: "Edunet Foundation | IBM SkillsBuild | AICTE",
  //   icon: edunet,
  //   iconBg: "#161329",
  //   date: "June 2023 - July 2023",
  //   points: [
  //     "Engineered a comprehensive Mental Health Fitness Tracker ML model utilizing Python and scikit-learn.",
  //     "Maximized the model's performance by refining model parameters and employing ensemble methods, yielding an outstanding accuracy percentage of 98.50%.",
  //     "Leveraged 12 regression algorithms to attain precise outcomes in analyzing and predicting mental fitness levels across 150+ countries.",
  //   ],
  // },
];

export const projects = [
  {
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  },
  {
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [{ name: "shell", color: "blue-text-gradient" }],
    image: payloadmaster,
    source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "Sketcher",
    description:
      "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link:
      "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  },
];
