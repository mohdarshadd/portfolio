export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export const certifications: Certification[] = [
  { name: "Claude 101", issuer: "Anthropic", year: "2026" },
  { name: "Claude Code 101", issuer: "Anthropic", year: "2026" },
  { name: "Claude Code in Action", issuer: "Anthropic", year: "2026" },
  { name: "AI Fluency", issuer: "Anthropic", year: "2026" },
];
