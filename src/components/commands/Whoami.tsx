"use client";

import { profile } from "@/data/profile";
import { Typewriter } from "@/components/shared/Typewriter";
import { Divider } from "@/components/shared/Divider";

interface WhoamiProps {
  onComplete?: () => void;
}

export function Whoami({ onComplete }: WhoamiProps) {
  const lines = [
    `  ${profile.name}`,
    `  ${"─".repeat(55)}`,
    "",
    `  Role:            ${profile.role}`,
    `  Location:        ${profile.location}`,
    `  Currently:       BCA Student @ University of Lucknow`,
    `  Focus:           MERN Stack · AI Engineering · Cloud`,
    `  Open Source:     Contributor`,
    `  Email:           ${profile.email}`,
    "",
    `  "${profile.tagline}"`,
  ];

  return (
    <div>
      <div className="text-fg-magenta font-bold text-base">
        <Typewriter lines={lines} speed={20} onComplete={onComplete} />
      </div>
    </div>
  );
}
