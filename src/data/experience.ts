export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    role: "Web Development Intern",
    company: "Infotact Solutions",
    period: "Jun 2026 - Present",
    bullets: [
      "Developed real-world web applications using modern web development technologies",
      "Collaborated with a team to design, build, test, and improve project features",
      "Applied Git-based version control and industry-standard development practices throughout the project lifecycle",
    ],
  },
  {
    role: "Technical Team Member",
    company: "Coding Connoisseurs",
    period: "Mar 2026 - Present",
    bullets: [
      "Contributed to technical activities and event organization within the coding community",
      "Assisted in building and maintaining web-based projects for club initiatives",
      "Participated in collaborative problem-solving sessions and peer learning activities",
    ],
  },
  {
    role: "Frontend Development Intern",
    company: "CodeAlpha",
    period: "Aug 2025 - Sep 2025",
    bullets: [
      "Developed responsive and user-friendly web interfaces using HTML, CSS, and JavaScript",
      "Collaborated with the development team to implement interactive features and improve UI/UX design",
      "Optimized website performance and ensured cross-browser compatibility",
    ],
  },
];
