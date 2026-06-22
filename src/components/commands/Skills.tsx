"use client";

import { Typewriter } from "@/components/shared/Typewriter";
import { technicalSkills, softSkills } from "@/data/skills";

interface SkillsProps {
  onComplete?: () => void;
}

export function Skills({ onComplete }: SkillsProps) {
  const lines: string[] = [];
  lines.push("  TECHNICAL SKILLS");
  lines.push(`  ${"─".repeat(70)}`);
  lines.push("");
  for (const cat of technicalSkills) {
    const padded = cat.category.padEnd(18);
    const skillsText = cat.skills.join("  ");
    lines.push(`  ${padded}│  ${skillsText}`);
    lines.push(`  ${"─".repeat(18)}┼${"─".repeat(50)}`);
  }
  lines.push("");
  lines.push("  SOFT SKILLS");
  lines.push(`  ${"─".repeat(70)}`);
  lines.push("");
  for (const skill of softSkills) {
    lines.push(`    • ${skill}`);
  }
  lines.push("");

  return (
    <div>
      <div className="whitespace-pre-wrap">
        <Typewriter lines={lines} speed={15} onComplete={onComplete} />
      </div>
    </div>
  );
}
