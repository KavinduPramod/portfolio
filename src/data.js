export const profile = {
  name: "A.M. Kavindu Pramodya Abeysundara",
  shortName: "Kavindu Abeysundara",
  roles: ["Software Engineer", "DevOps Engineer", "Backend Developer", "ML Researcher"],
  location: "Colombo, Sri Lanka",
  email: "kavindupramod55@gmail.com",
  github: "https://github.com/KavinduPramod",
  githubHandle: "github.com/KavinduPramod",
  linkedin: "https://www.linkedin.com/in/kavindupramod",
  linkedinHandle: "linkedin.com/in/kavindupramod",
  instagram: "https://www.instagram.com/kavindu_pramod_55?igsi=bjF6cTdlcGY5bjh6",
  site: "kavindu.cc.cd",
  resume: "/assets/kavindu_cv.pdf",
  web3forms: "24fc2ef4-e0c2-4303-9453-a71575df1a4c",
}

export const bio = `I'm a software engineer who ended up spending most of my time keeping other people's software running. I build backend services and cross-platform applications, but somewhere along the way I got pulled into Dockerfiles, CI pipelines, and production servers — and I haven't looked back since.

These days I split my attention between writing code and making sure the code, mine and everyone else's, actually stays up. I like systems that are boring in the way that matters: predictable, observable, and not paging anyone at 2am.

Based in Colombo, open to remote roles with teams anywhere.`

export const journey = [
  {
    stage: "Backend Development",
    detail: "Started building APIs and services — Python, FastAPI, Flask, Java/Spring Boot — learning how software is supposed to work.",
  },
  {
    stage: "Desktop & Cross-Platform Apps",
    detail: "Moved into building applications people actually open every day, with React, Electron, and a bit of Flutter along the way.",
  },
  {
    stage: "DevOps & Infrastructure",
    detail: "Ended up owning the parts most people avoid — containers, pipelines, and production servers — and found I liked it there.",
  },
]

export const projects = [
  {
    name: "MoodMirror",
    priority: 4,
    tagline: "Research-backed mental health risk assessment from Reddit activity",
    description:
      "A platform that leverages NLP and behavioural analysis to surface potential mental health concerns from Reddit activity patterns. Grew out of my final year research project and later became a full applied system.",
    stack: ["Python", "NLP", "Flask", "Behavioural Analysis"],
    github: "https://github.com/KavinduPramod/moodmirror.git",
    logo: "/assets/moodmirror.png",
    status: "Research-backed",
  },
  {
    name: "VaultBee",
    priority: 3,
    tagline: "Offline-first personal secret manager",
    description:
      "Lets you securely store, retrieve, and autofill digital secrets without depending on browser extensions or cloud services — your secrets stay on your machine.",
    stack: ["Offline-first", "Security", "Autofill"],
    github: "https://github.com/KavinduPramod/VAULTBEE.git",
    logo: "/assets/vaultbee-logo.png",
    status: "Active",
  },
  {
    name: "Robin Chatbot",
    priority: 2,
    tagline: "A modern AI chatbot application",
    description:
      "An AI chatbot built on Hugging Face's free inference API — a hands-on look at wiring a usable chat product to a hosted model without a heavy backend.",
    stack: ["Hugging Face API", "Chatbot", "React"],
    github: "https://github.com/KavinduPramod/RobinsoN_chatbot.git",
    logo: "/assets/robin-logo.png",
    status: "Active",
  },
  {
    name: "toDo List",
    priority: 1,
    tagline: "A comprehensive task management application",
    description:
      "Built primarily to properly learn Docker and containerized development — a full-stack task manager with a React frontend, Flask API, and MariaDB database, each running in its own container.",
    stack: ["React", "Flask", "MariaDB", "Docker"],
    github: "https://github.com/KavinduPramod/todo-list.git",
    logo: "/assets/toDo-logo.png",
    status: "Stable",
  },
]

export const experience = [
  {
    company: "Rajida Holding (Pvt) Ltd",
    role: "Senior Software Engineer",
    note: "Currently functioning as DevOps Engineer",
    period: "September 2021 — Present",
    points: [
      "Own production infrastructure and deployment pipelines across the company's software systems.",
      "Work across the stack — backend services, cross-platform applications, and the servers they run on.",
      "Grew from a development-focused role into one responsible for CI/CD, containerization, and uptime.",
    ],
  },
  {
    company: "Mirage Designs",
    role: "Deployment & Infrastructure (Contributor)",
    note: "miragedesigns.lk",
    period: "Ongoing",
    points: [
      "Manage and maintain all deployments for miragedesigns.lk independently of my primary role.",
    ],
    link: "https://miragedesigns.lk/",
  },
]

export const research = {
  title: "Adaptive Machine Learning System for Personalized Mental Health Risk Detection from Social Media",
  coauthor: "Prasandika Balage",
  venue: "18th ECAI 2026 International Conference",
  location: "Bucharest, Romania",
  affiliation: "IEEE-affiliated conference",
  description:
    "A research project on detecting personalized mental health risk signals from social media activity, combining NLP techniques with behavioural pattern analysis. The system and its findings later formed the basis for MoodMirror.",
  links: [
    { label: "IEEE Xplore", url: "https://ieeexplore.ieee.org/document/11613642" },
    { label: "ECAI 2026", url: "https://www.ecai.ro/" },
    { label: "GitHub", url: "https://github.com/KavinduPramod/moodmirror.git" },
  ],
  certificate: "/assets/conf-certificate.png",
}

export const toolbox = [
  { group: "Backend & APIs", items: ["Python", "FastAPI", "Flask", "Node.js", "Java / Spring Boot"] },
  { group: "Applications & Frontend", items: ["React.js", "Electron.js", "Flutter"] },
  { group: "DevOps & Infrastructure", items: ["Docker", "GitHub Actions", "CI/CD", "Linux / Ubuntu", "Production Servers"] },
  { group: "Databases", items: ["MongoDB", "MariaDB"] },
  { group: "Research / ML", items: ["NLP", "Behavioural Analysis", "Applied ML"] },
]

export const activities = [
  {
    year: "2023",
    event: "Cutting Edge 2023",
    project: "BlockThief",
    role: "Team of 5",
    description: "Fake Product Identification System utilizing blockchain technology.",
    github: "https://github.com/leptonworks/blocktheif-system.git",
    image: "/assets/2023-cutting-edge-project showcase..jpeg",
  },
  {
    year: "2026",
    event: "Cutting Edge 2026",
    project: "MoodMirror",
    role: "Solo final year project",
    description: "Research-backed mental health risk assessment platform using NLP and behavioural analysis on Reddit activity.",
    github: "https://github.com/KavinduPramod/moodmirror.git",
    image: "/assets/2026-cutting-edge-project showcase.jpeg",
  },
]

export const asideNote = "Outside of engineering: former Vice President of the university Esports Club, and 2nd runner-up in an inter-university Dota 2 championship."
