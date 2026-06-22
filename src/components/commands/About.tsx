"use client";

import Image from "next/image";
import { profile } from "@/data/profile";
import { Typewriter } from "@/components/shared/Typewriter";
import { TerminalLink } from "@/components/shared/TerminalLink";

interface AboutProps {
  onComplete?: () => void;
}

export function About({ onComplete }: AboutProps) {
  const textLines = [
    "I'm Mohd Arshad Ansari, an aspiring Full-Stack Developer based in",
    "Lucknow, Uttar Pradesh. Currently pursuing my BCA at the University",
    "of Lucknow, I specialize in the MERN stack with a growing passion",
    "for AI engineering and cloud technologies.",
    "",
    "My journey began with HTML, CSS, and JavaScript, evolved into",
    "React.js and Node.js, and now I'm diving deeper into AI-driven",
    "development. I believe in writing clean code, building user-focused",
    "interfaces, and contributing to meaningful projects.",
    "",
    "When I'm not coding, you'll find me solving DSA problems,",
    "contributing to open source, or exploring new technologies.",
  ];

  const allLines = [
    "  ABOUT",
    `  ${"─".repeat(70)}`,
    "",
    ...textLines,
    "",
    `  ${"─".repeat(70)}`,
    "",
    "  [GitHub]  [LinkedIn]  [Email]",
  ];

  return (
    <div>
      {/* Photo + Text two-column layout */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-2">
        {/* Terminal-styled photo frame */}
        <div className="shrink-0">
          <div className="text-border whitespace-pre leading-tight">
            <div>{"┌───────┐"}</div>
            <div>{"│       │"}</div>
          </div>
          <div className="border-l border-r border-border px-1 inline-block">
            <Image
              src="/Arshad-profile-photo.jpeg"
              alt="Mohd Arshad Ansari"
              width={100}
              height={100}
              className="rounded-sm"
              priority
            />
          </div>
          <div className="text-border whitespace-pre leading-tight">
            <div>{"│       │"}</div>
            <div>{"└───────┘"}</div>
          </div>
        </div>

        {/* Bio text */}
        <div className="whitespace-pre-wrap flex-1 min-w-0">
          <Typewriter lines={allLines} speed={25} onComplete={onComplete} />
        </div>
      </div>

      {/* Links row */}
      <div className="mt-1 flex gap-4 text-fg-cyan">
        <TerminalLink href={profile.github}>GitHub</TerminalLink>
        <TerminalLink href={profile.linkedin}>LinkedIn</TerminalLink>
        <TerminalLink href={`mailto:${profile.email}`}>Email</TerminalLink>
      </div>
    </div>
  );
}
