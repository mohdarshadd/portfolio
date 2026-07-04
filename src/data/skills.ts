export interface SkillCategory {
  category: string;
  skills: string[];
}

export const technicalSkills: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Java", "Python", "C", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Backend & Database",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "Firebase Firestore"],
  },
  {
    category: "AI & Developer Tools",
    skills: ["Claude AI", "Gemini AI", "Git", "GitHub", "Docker", "Postman", "Render"],
  },
];

export const softSkills: string[] = [
  "Strong problem-solving and logical thinking",
  "Ability to work independently and in teams",
  "Good time management and willingness to learn",
  "Clear communication and collaboration",
];
