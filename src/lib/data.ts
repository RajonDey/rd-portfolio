import { Tech, Experience, Project, Testimonial } from "../types";

export const techStack: Tech[] = [
  // ... (existing tech stack data)
  { name: "React", icon: "FaReact", category: "Frontend" },
  { name: "Next.js", icon: "SiNextdotjs", category: "Frontend" },
  { name: "Vue.js", icon: "SiVuedotjs", category: "Frontend" },
  { name: "Flutter", icon: "SiFlutter", category: "Frontend" },
  { name: "TypeScript", icon: "SiTypescript", category: "Frontend" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", category: "Frontend" },
  { name: "Redux", icon: "SiRedux", category: "Frontend" },
  { name: "HTML5", icon: "FaHtml5", category: "Frontend" },
  { name: "CSS3", icon: "FaCss3Alt", category: "Frontend" },
  { name: "Node.js", icon: "FaNodeJs", category: "Backend" },
  { name: "MongoDB", icon: "SiMongodb", category: "Backend" },
  { name: "Express", icon: "SiExpress", category: "Backend" },
  { name: "PostgreSQL", icon: "SiPostgresql", category: "Backend" },
  { name: "MySQL", icon: "SiMysql", category: "Backend" },
  { name: "JavaScript", icon: "FaJsSquare", category: "Languages" },
  { name: "TypeScript", icon: "SiTypescript", category: "Languages" },
  { name: "Python", icon: "FaPython", category: "Languages" },
  { name: "Docker", icon: "FaDocker", category: "DevOps" },
  { name: "Git", icon: "FaGitAlt", category: "DevOps" },
  { name: "AWS", icon: "SiAmazon", category: "DevOps" },
  { name: "Jest", icon: "SiJest", category: "Testing" },
  { name: "Cypress", icon: "SiCypress", category: "Testing" },
];

export const experiences: Experience[] = [
  {
    title: "Module Lead (UI/UX)",
    company: "SJ Innovation LLC",
    date: "May 2019 - Present",
    description: [
      "Leading and estimating projects using a deep understanding of ReactJs/NextJs and other related technologies to develop and maintain websites and web applications.",
      "Collaborating with cross-functional teams, including project managers, to understand and define project requirements. This occasionally involves participating in client meetings to comprehend complex needs.",
      "Working closely with the Quality Assurance (QA) team to ensure the delivery of error-free projects.",
      "Actively participating in code reviews, and providing constructive feedback to fellow developers to foster continuous improvement and knowledge sharing.",
    ],
  },
  {
    title: "Freelance Developer",
    company: "Fiverr & PPH",
    date: "January 2015 - December 2019",
    description: [
      "Actively searching and bidding on new projects by understanding and responding to specific marketplace demands.",
      "Onboarding clients by gathering all the requirements via multiple consultation sessions, and initiating the project by giving proper estimation.",
      "Developed website and web applications with different technologies like WordPress, Shopify, Wix, and Squarespace, and mostly from scratch by HTML, CSS, and JS.",
      "Ensuring the delivery of high-quality, fully-tested projects, and occasionally managing the deployment of these websites on client servers.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Clicks",
    slug: "clicks",
    description:
      "Clicks, a social media app created with React and Sanity, for my learning purpose only! I enjoyed doing this and learned a lot. Anyway, I practiced it from the JS Mastery Channel, and I highly recommend you all to check this out!",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "Sanity", color: "green-text-gradient" },
    ],
    image: "/images/clicks.png",
    source_code_link: "https://github.com/RajonDey/clicks-project",
    liveDemoLink: "https://clicks.rajondey.com", // Placeholder, update if available
  },
  {
    name: "Life Commits",
    slug: "life-commits",
    description:
      "LifeCommits, a vibrant community dedicated to personal growth, achievement, and inspiration. Join us on a transformative journey as you make meaningful commitments, achieve milestones, and inspire others along the way. Together, let’s commit, achieve, and inspire a life of purpose and fulfillment.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
    ],
    image: "/images/life-commits.png",
    source_code_link: "https://github.com/RajonDey/LifeCommit",
    liveDemoLink: "https://lifecommits.rajondey.com", // Placeholder, update if available
    featured: true, // Highlight this project
  },
  {
    name: "Coinic",
    slug: "coinic",
    description:
      "Web 3.0 paves the way for a future in which different people and machines can interact with data, value, and other counterparties without the involvement of third parties. It’s so trendy and exciting that I can’t control myself to give it a try.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Solidity", color: "green-text-gradient" },
      { name: "Alchemy", color: "pink-text-gradient" },
      { name: "Hardhat", color: "blue-text-gradient" },
    ],
    image: "/images/coinic.png",
    source_code_link: "https://github.com/RajonDey/coinic-project",
    liveDemoLink: "https://coinic.rajondey.com", // Placeholder, update if available
  },
];

export const testimonials: Testimonial[] = [
  {
    testimonial:
      "Very professional. Answer exactly for what I ask for and did a job that was more than expected. Great communication, fast reply. The best is that this guy helped a lot after he finished the job and did everything he can to keep me satisfied. :)",
    name: "Idodamti",
    designation: "Client",
    company: "Israel",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    testimonial:
      "Our company continues to use this provider because this provider is the best. We never had a single issue, and everything is always smooth, done on time, and professional. If you want quality service, done on time, and within budget, this is the provider to choose. Simply the best.",
    name: "Smith",
    designation: "Client",
    company: "Bahamas",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    testimonial:
      "My first project with Rajon and extremely happy about his work. Project delivered before deadline, completed as I requested. Top developer A+. Recommend to all. Look forward to further collaboration.",
    name: "Geopes",
    designation: "Client",
    company: "Ireland",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

