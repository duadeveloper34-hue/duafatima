// Edit this file to add, remove, or update projects.
// Fields left as "#" are placeholders — replace them with your real
// links and screenshots when they're ready. Never invent URLs here.

export const projects = [
  {
    id: "smilecare-dental-clinic",
    title: "SmileCare Dental Clinic",
    description:
      "SmileCare Dental Clinic is a fully responsive website built for a modern multispecialty dental practice. The project aims to digitalize the patient onboarding experience by offering seamless online scheduling, clear service breakdowns, and educational oral health resources.",
    tags: ["React.js", "JavaScript", "API Integration", "Responsive UI"],
    image: "/images/projects/screenshot.png",
    liveUrl: "https://smile-care-dental-clinic-eight.vercel.app/",
    githubUrl: "https://github.com/murtaza700/SmileCare-Dental-Clinic",
    featured: true,
  },
  {
    id: "ecommerce-storefront",
    title: "E-Commerce Storefront",
    description:
      "PLACEHOLDER — replace with a real project. A product-listing storefront with cart state, filtering, and a checkout flow UI.",
    tags: ["React.js", "Next.js", "Tailwind CSS"],
    image: "/images/projects/placeholder.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: "recipe-app",
    title: "Recipe Application",
    description:
      "PLACEHOLDER — replace with a real project. A searchable recipe browser with saved favorites and a clean, ingredient-first layout.",
    tags: ["React.js", "API Integration", "Local Storage"],
    image: "/images/projects/placeholder.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: "task-manager",
    title: "Task Management App",
    description:
      "PLACEHOLDER — replace with a real project. A drag-friendly task board with persisted state and quick keyboard-first entry.",
    tags: ["React.js", "State Management", "Local Storage"],
    image: "/images/projects/placeholder.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: "weather-app",
    title: "Weather Application",
    description:
      "PLACEHOLDER — replace with a real project. A location-based weather lookup with a focus on legible data and quick glanceability.",
    tags: ["React.js", "Axios", "REST API"],
    image: "/images/projects/placeholder.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: "landing-page",
    title: "Modern Landing Page",
    description:
      "PLACEHOLDER — replace with a real project. A conversion-focused marketing landing page with scroll-based motion.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: "/images/projects/placeholder.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

// Guard the dataset against accidental mutation by consumers.
Object.freeze(projects);
projects.forEach(Object.freeze);

export default projects;
