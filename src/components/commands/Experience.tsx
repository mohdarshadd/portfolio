"use client";

import { experiences } from "@/data/experience";
import { Typewriter } from "@/components/shared/Typewriter";

interface ExperienceProps {
  onComplete?: () => void;
}

export function Experience({ onComplete }: ExperienceProps) {
  const lines: string[] = [];
  lines.push("  EXPERIENCE");
  lines.push(`  ${"─".repeat(70)}`);
  lines.push("");

  for (const exp of experiences) {
    lines.push(`  [${exp.period}]  ${exp.role}`);
    lines.push(`    → ${exp.company}`);
    for (const b of exp.bullets) {
      lines.push(`      • ${b}`);
    }
    lines.push("");
  }

  return (
    <div>
      <div className="whitespace-pre-wrap">
        <Typewriter lines={lines} speed={15} onComplete={onComplete} />
      </div>
    </div>
  );
}
