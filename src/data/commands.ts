export interface CommandInfo {
  name: string;
  description: string;
  args?: string;
}

export const commands: CommandInfo[] = [
  { name: "whoami", description: "Display identity and role info" },
  { name: "about", description: "Extended biography and background" },
  { name: "skills", description: "View technical skills by category" },
  { name: "projects", description: "Browse featured projects" },
  { name: "projects --detail <name>", description: "View full project case study" },
  { name: "experience", description: "Work experience timeline" },
  { name: "education", description: "Academic background" },
  { name: "certifications", description: "Professional certifications" },
  { name: "contact", description: "Get in touch" },
  { name: "resume", description: "Download resume (PDF)" },
  { name: "neofetch", description: "System-style profile info" },
  { name: "history", description: "Show command history" },
  { name: "clear", description: "Clear terminal screen" },
  { name: "banner", description: "Replay boot sequence" },
  { name: "date", description: "Show current date and time" },
  { name: "help", description: "Show this message" },
  { name: "sudo", description: "Try root access (easter egg)" },
];
