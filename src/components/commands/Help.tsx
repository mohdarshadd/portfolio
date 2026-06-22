"use client";

import { commands } from "@/data/commands";
import { Typewriter } from "@/components/shared/Typewriter";
import { Divider } from "@/components/shared/Divider";

interface HelpProps {
  onComplete?: () => void;
}

export function Help({ onComplete }: HelpProps) {
  const lines: string[] = [];
  lines.push("  Available Commands");
  lines.push(`  ${"─".repeat(70)}`);
  lines.push("");
  for (const cmd of commands) {
    const padded = cmd.name.padEnd(28);
    lines.push(`  ${padded}${cmd.description}`);
  }
  lines.push("");
  lines.push(`  ${"─".repeat(70)}`);

  return (
    <div>
      <div className="whitespace-pre-wrap">
        <Typewriter lines={lines} speed={15} onComplete={onComplete} />
      </div>
    </div>
  );
}
