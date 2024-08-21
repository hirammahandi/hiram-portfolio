import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";

export const portfolioData = {
  name: "Hiram Hernández Peña",
  universityDegree: "Computer Science Engineer",
  summary:
    "I'm a software developer with a passion for creating functional digital experiences.",
  description:
    "I'm a full Stack developer with more than 4 years of professional experience in different fields of advanced cross-platform software development, object-oriented programming, design and implementation of web applications. Knowledge ambition, high capacity to work under pressure and I'm always eager to learn new technologies and techniques.",
  email: "hiramhernandezpena@gmail.com",
  address: "La Habana, Cuba",
  education: {
    degree: "Computer Science Engineer",
    university: "University of Informatics Sciences",
    city: "La Habana",
    country: "Cuba",
    date: "10/2015 - 06/2019,",
  },
  languages: {
    spanish: "Native or Bilingual Proficiency",
    english: "Professional Working Proficiency",
  },
  links: [
    {
      name: "Github",
      url: "https://github.com/hirammahandi",
      icon: SiGithub,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/hiram-hernandez-peña-3a9881217",
      icon: SiLinkedin,
    },
  ],
  skills: [
    "HTML5",
    "CSS",
    "Javascript",
    "Typescript",
    "React",
    "NextJs",
    "NodeJs",
    "NestJs",
    "Express",
    "Redux",
    "Jest",
    "Supertest",
    "Vitest",
    "Storybook",
    "Mongoose",
    "Typeorm",
    "MaterialUI",
    "Bootstrap",
    "Tailwind",
    "PostgresSQL",
    "MongoDB",
    "Nx Monorepo",
    "Turborepo",
    "Eslint",
    "Git",
    "AWS Services",
    "Graphql",
    "Unit Tests",
    "Integration Tests",
    "E2E Tests",
    "Clean Architecture",
  ],
  workExperience: [
    {
      title: "Full Stack Developer",
      company: "Atomic Coders LLC",
      description:
        "Working on Typescript full cover projects, as a full stack engineer, using NextJS and React in the frontend, NestJS, Express and AWS (Lambda, Api Gateway, Dynamo, S3) for the backend and Graphql and Rest Full for web api design, using typescript as programming language. With planning and organization skills. Ability to work with the Redux pattern. With the ability to work with Docker for NodeJS projects. With the ability to test frontend applications, lambdas and another services with unit tests and e2e tests.",
    },
    {
      title: "Frontend Web Developer",
      company: "Beelders.io",
      description:
        "Working on a complete project in Typescript, as a frontend web developer, using NextJS and React as web framework, Bootstrap as ui framework and Redux Tool Kit as global state handler. Using AWS S3 service for hosting of images.",
    },
    {
      title: "Frontend Web Developer",
      company: "Chagod Software, Caribbean Passion",
      description:
        "Working on a complete project in Typescript, as a frontend web developer, using NextJS and React as web framework, Styled Component as ui framework, apollo client and graphql.",
    },
    {
      title: "Frontend Web Developer",
      company: "Cubamax",
      description:
        "Working on two projects in nextjs completely in typescript. The first project an administration dashboard and the second project a web application with different services among them an e-commerce, remittance services and topup services. For these projects I worked with the ui framework shadcn/ui and nextjs as react metaframework in its app-router version using all the advantages it offers.",
    },
  ],
  projects: [
    {
      title: "Todo App",
      description:
        "Todo App is a simple todo app that uses IndexedDB as a database",
      image: "/todo-app.png",
      url: "https://todo-app-index-db.vercel.app/",
      githubLink: "https://github.com/hirammahandi/todo-app-index-db",
    },
    {
      title: "Doctor Medical Office",
      description:
        "Doctor Medical Office is a medical office management system",
      image: "/doctor-medical-office.png",
      url: "https://doctor-medical-office.vercel.app/",
      githubLink: "https://github.com/hirammahandi/doctor-medical-office",
    },
  ],
};
