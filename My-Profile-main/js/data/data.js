// 🔹 Projects Data (Search, Filter, Sort, Expand, Recent)
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "Frontend",
    description:
      "A full responsive portfolio website with animations, theme toggle, and advanced UI features.",
    status: "Completed",
    date: "2026-03-01"
  },
  {
    id: 2,
    title: "E-Commerce UI",
    category: "Frontend",
    description:
      "Modern shopping UI with product filtering, cart system, and responsive layout.",
    status: "In Progress",
    date: "2026-02-15"
  },
  {
    id: 3,
    title: "REST API Server",
    category: "Backend",
    description:
      "Node.js backend API with authentication, CRUD operations, and database integration.",
    status: "Completed",
    date: "2026-01-20"
  },
  {
    id: 4,
    title: "Cybersecurity Dashboard",
    category: "Backend",
    description:
      "Dashboard for monitoring logs, attacks, and honeypot data visualization.",
    status: "Planned",
    date: "2026-04-10"
  }
];


// 🔹 Skills Data (Grouping / Filtering)
const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js"],
  Database: ["MongoDB", "MySQL"],
  Tools: ["Git", "GitHub", "VS Code"]
};


// 🔹 Typing Animation Data
const roles = [
  "Web Developer",
  "Frontend Developer",
  "Cybersecurity Enthusiast",
  "JavaScript Developer"
];


// 🔹 Theme Config (Dark/Light)
const themeConfig = {
  default: "light",
  darkClass: "bg-black text-white",
  lightClass: "bg-white text-black"
};


// 🔹 Navigation Sections (Scroll Spy)
const sections = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" }
];


// 🔹 Filter Categories
const categories = ["All", "Frontend", "Backend"];


// 🔹 Sorting Options
const sortOptions = [
  { value: "az", label: "A-Z (Title)" },
  { value: "za", label: "Z-A (Title)" },
  { value: "date_new", label: "Newest First" },
  { value: "date_old", label: "Oldest First" },
  { value: "status", label: "By Status" }
];


// 🔹 Contact Form Fields (Auto Save)
const formFields = ["name", "email"];


// 🔹 Greeting Messages (Dynamic Greeting)
const greetings = {
  morning: "Good Morning ☀️",
  afternoon: "Good Afternoon 🌤️",
  evening: "Good Evening 🌙"
};


// 🔹 Geolocation Config
const geoConfig = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};


// 🔹 Recently Viewed Config
const recentConfig = {
  storageKey: "recentProjects",
  maxItems: 5
};


// 🔹 Scroll Config
const scrollConfig = {
  showTopBtnAfter: 300
};


// 🔹 Expand/Collapse Config
const expandConfig = {
  shortLength: 60,
  moreText: "View More",
  lessText: "Show Less"
};