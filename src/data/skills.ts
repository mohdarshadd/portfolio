export interface SkillCategory {
  category: string;
  skills: string[];
}

export const technicalSkills: SkillCategory[] = [
  { category: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React.js"] },
  { category: "Backend", skills: ["Node.js", "Express.js"] },
  { category: "Databases", skills: ["MongoDB", "MySQL"] },
  { category: "Languages", skills: ["Java", "Python", "JavaScript"] },
  { category: "Version Control", skills: ["Git", "GitHub"] },
  { category: "APIs & Deployment", skills: ["RESTful APIs", "Deployment Basics"] },
];

export const softSkills: string[] = [
  "Strong problem-solving and logical thinking",
  "Ability to work independently and in teams",
  "Good time management and willingness to work",
  "Clear communication and collaboration",
];
