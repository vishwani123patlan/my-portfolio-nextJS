import {
  Agile,
  Css,
  Github,
  HTML,
  Jira,
  MaterialUI,
  MySql,
  NextJs,
  Postman,
  Rails,
  ReactJs,
  Redux,
  Ruby,
  TailwindCSs,
  VScode,
  Javascript,
  Upwork,
  Cardekho,
  Fitness,
  Tesla,
  Letcollab,
  CovidTracker,
  Expense,
  Portfolio
} from '@/app/assests'

export const skillsData = [
  {
    "category": "Frontend",
    "skills": [
    {
      "logo": HTML,
      "name": "HTML",
      "level": "Intermediate"
    },
    {
      "logo": Css,
      "name": "CSS",
      "level": "Intermediate"
    },
    {
      "logo": Javascript,
      "name": "Javascript",
      "level": "Advanced"
    },
    {
      "logo": ReactJs,
      "name": "ReactJs",
      "level": "Advanced"
    },
    {
      "logo": NextJs,
      "name": "NextJs",
      "level": "Beginner"
    },
    {
      "logo": Redux,
      "name": "Redux",
      "level": "Intermediate"
    },
    {
      "logo": TailwindCSs,
      "name": "Tailwindcss",
      "level": "Beginner"
    },
    {
      "logo": MaterialUI,
      "name": "Material UI",
      "level": "Intermediate"
    }]
  },
  {
    "category": "Backend",
    "skills": [
      {
        "logo": Ruby,
        "name": "Ruby",
        "level": "Advanced"
      },
      {
        "logo": Rails,
        "name": "Ruby on Rails",
        "level": "Advanced"
      }
    ]
  },
  {
    "category": "DevOps And Database",
    "skills": [
      {
        "logo": MySql,
        "name": "MySql",
        "level": "Beginner"
      },
      {
        "logo": Github,
        "name": "Github",
        "level": "Intermediate"
      }
    ]
  },
  {
    "category": "Tools",
    "skills": [
      {
        "logo": Jira,
        "name": "JIRA",
        "level": ""
      },
      {
        "logo": Postman,
        "name": "Postman",
        "level": ""
      },
      {
        "logo": VScode,
        "name": "VSCode",
        "level": ""
      },
      {
        "logo": Agile,
        "name": "Agile",
        "level": ""
      }
    ]
  }
]

export const projectsData = [
  {
    name: "My First React App",
    description: "My first react app using Reactjs, Html, Css and Material UI deployed on netlify",
    technology: ["Reactjs", "Javascript", "Material UI", "HTML", "CSS"],
    github: "https://github.com/vishwani123patlan/first-react-app",
    url: "https://demo-expense.netlify.app/",
    logo: Expense
  },
  {
    name: "Basic Covid Tracker",
    description: "Basic Covid Tracker App Using Reactjs, Html, React Graph, Css deployed on netlify",
    technology: ["Reactjs", "Javascript", "React Graph", "HTML", "CSS"],
    github: "https://github.com/vishwani123patlan/covid19-tracker",
    url: "https://demo-covid-tracker.netlify.app",
    logo: CovidTracker
  },
  {
    name: "Portfolio",
    description: "My Portfolio using NextJs, Html, and Tailwindcss deployed on netlify",
    technology: ["Reactjs", "Javascript", "Tailwindcss", "HTML"],
    github: "https://github.com/vishwani123patlan/my-portfolio-nextJS",
    url: "https://vishwani-potfolio.netlify.app/",
    logo: Portfolio
  },
  {
    name: "Upwork Clone",
    description: "Basic Upwork Clone App Using Reactjs with MUI library deployed on netlify",
    technology: ["Reactjs", "Javascript", "MUI", "HTML", "React Router"],
    github: "https://github.com/vishwani123patlan/upwork-clone",
    url: "https://vishwani-upwork.netlify.app",
    logo: Upwork
  },
  {
    name: "Tesla Clone",
    description: "Basic Tesla Clone App Using Reactjs with Styled Component deployed on netlify",
    technology: ["Reactjs", "Javascript", "Styled Components", "HTML", "CSS"],
    github: "https://github.com/vishwani123patlan/tesla-clone",
    url: "https://vishwani-tesla.netlify.app",
    logo: Tesla
  },
  {
    name: "Lets Collab",
    description: "Basic Landing Page App Using Reactjs with tailwindcss deployed on netlify",
    technology: ["Reactjs", "Javascript", "Tailwindcss", "HTML"],
    github: "",
    url: "https://dreamy-stroopwafel-759240.netlify.app",
    logo: Letcollab
  },
  {
    name: "Car Dekho Clone",
    description: "Basic Car Clone App Using NextJs with tailwindcss deployed on netlify",
    technology: ["NextJs", "Javascript", "Tailwindcss", "HTML"],
    github: "",
    url: "https://creative-dodol-5f6a69.netlify.app",
    logo: Cardekho
  },
  {
    name: "My Fitness",
    description: "Basic Fitness App Using Reactjs, Tailwindcss and Html deployed on netlify",
    technology: ["Reactjs", "Javascript", "Tailwind", "HTML", "CSS"],
    github: "",
    url: "https://vishwani-fitness.netlify.app/",
    logo: Fitness
  },
]