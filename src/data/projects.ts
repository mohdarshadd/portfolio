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
    name: "FormSahay",
    description: "A full-stack AI-powered platform that simplifies government forms and scholarship applications through intelligent notice analysis and eligibility checking.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "OCR", "Gemini API"],
    bullets: [
      "Developed an AI-powered platform that simplifies government forms and scholarship applications",
      "Integrated OCR and AI to extract, analyze, and explain complex government notices",
      "Built REST APIs and a responsive dashboard for document management and deadline tracking",
    ],
    github: "https://github.com/B2Aryan/FormSahay_Portal",
  },
  {
    name: "AI Resume Builder",
    description: "A full-stack AI-powered resume builder using the MERN stack with Gemini API integration for AI-generated resume content.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Gemini API", "JWT"],
    bullets: [
      "Integrated Gemini API for AI-generated resume content and suggestions",
      "Implemented customizable ATS-friendly templates with real-time preview",
      "Designed responsive UI for creating and exporting professional resumes",
    ],
    github: "https://github.com/mohdarshadd/ai-resume-builder",
  },
  {
    name: "Symbi-City",
    description: "A 3D smart city platform with interactive real-world service simulations and immersive user experiences.",
    tech: ["React.js", "Three.js", "Node.js", "MongoDB", "WebSockets"],
    bullets: [
      "3D smart city platform with interactive simulations and immersive experiences",
      "Smart pod booking system with real-time availability and navigation",
      "Hackathon winning project with dark-mode UI and futuristic design",
    ],
    github: "https://github.com/mohdarshadd/symbiotic-city-project-2070",
    hackathonWinner: true,
  },
];
