"use client";

import { educationEntries } from "@/data/education";
import { Divider } from "@/components/shared/Divider";
import { useEffect, useRef } from "react";

interface EducationProps {
  onComplete?: () => void;
}

export function Education({ onComplete }: EducationProps) {
  const hasFired = useRef(false);

  useEffect(() => {
    if (!hasFired.current) {
      hasFired.current = true;
      const timer = setTimeout(() => onComplete?.(), 400);
      return () => clearTimeout(timer);
    }
  }, [onComplete]);

  return (
    <div>
      <div className="text-fg-cyan font-bold mb-2">EDUCATION</div>
      <div className="text-border mb-3">{"─".repeat(70)}</div>

      {educationEntries.map((edu, i) => (
        <div key={i} className="mb-3">
          <div className="text-fg-primary font-bold">{edu.degree}</div>
          <div className="text-fg-dim ml-1">
            {edu.institution}, {edu.location}
          </div>
          <div className="ml-1">
            <span className="text-fg-yellow">{edu.year}</span>
            {edu.score && (
              <span className="text-fg-dim">  |  {edu.score}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
