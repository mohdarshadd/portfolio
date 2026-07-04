export interface Certification {
  name: string;
  issuer: string;
  year: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    name: "AI Fluency Framework & Foundations",
    issuer: "Anthropic",
    year: "2026",
    url: "https://verify.skilljar.com/c/pwspdwf5wt25",
  },
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
    year: "2026",
    url: "https://verify.skilljar.com/c/byivyupuvvd6",
  },
  {
    name: "Claude Code 101",
    issuer: "Anthropic",
    year: "2026",
    url: "https://verify.skilljar.com/c/io7gxczy6t3x",
  },
];
