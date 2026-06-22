export interface Project {
  name: string;
  description: string;
  tech: string[];
  bullets: string[];
  github?: string;
  live?: string;
  hackathonWinner?: boolean;
}

export const projects: Project[] = [
  {
    name: "AI Resume Builder",
    description: "A full-stack AI-powered resume builder built with the MERN stack. Features dynamic resume generation with customizable templates, responsive UI, and integrated backend APIs for efficient data handling and storage.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "JWT", "Tailwind CSS"],
    bullets: [
      "Full-stack AI-powered resume builder with MERN stack",
      "Dynamic resume generation with customizable templates",
      "Responsive and user-friendly interface",
      "Integrated backend APIs for data handling and storage",
    ],
    github: "https://github.com/mohdarshadd/ai-resume-builder",
  },
  {
    name: "Symbi-City",
    description: "A 3D smart city platform with interactive real-world service simulations. Features a smart pod booking system, immersive hubs, and a modern dark-mode UI. Hackathon winning project.",
    tech: ["React.js", "Three.js", "Node.js", "MongoDB", "WebSockets"],
    bullets: [
      "3D smart city platform with interactive real-world simulations",
      "Smart pod booking with real-time availability",
      "Immersive hubs: Clinic, School, Office, Social, Entertainment",
      "Dark-mode UI with smooth animations and futuristic design",
    ],
    github: "https://github.com/mohdarshadd/symbi-city",
    hackathonWinner: true,
  },
];
