"use client";

import { certifications } from "@/data/certifications";
import { Divider } from "@/components/shared/Divider";
import { useEffect, useRef } from "react";

interface CertificationsProps {
  onComplete?: () => void;
}

export function Certifications({ onComplete }: CertificationsProps) {
  const hasFired = useRef(false);
  const longestName = Math.max(...certifications.map((c) => c.name.length));
  const nameWidth = Math.max(longestName, 30);

  useEffect(() => {
    if (!hasFired.current) {
      hasFired.current = true;
      const timer = setTimeout(() => onComplete?.(), 400);
      return () => clearTimeout(timer);
    }
  }, [onComplete]);

  return (
    <div>
      <div className="text-fg-cyan font-bold mb-2">CERTIFICATIONS</div>
      <div className="text-border mb-2">{"─".repeat(70)}</div>

      <div className="whitespace-pre text-fg-dim mb-1">
        {"Certification".padEnd(nameWidth + 4)}
        {"Issuer".padEnd(18)}
        {"Year"}
      </div>
      <div className="text-border whitespace-pre mb-1">
        {"─".repeat(nameWidth + 4)}
        {"─".repeat(18)}
        {"─".repeat(6)}
      </div>

      {certifications.map((cert, i) => (
        <div key={i} className="whitespace-pre text-fg-primary">
          {cert.name.padEnd(nameWidth + 4)}
          {cert.issuer.padEnd(18)}
          {cert.year}
        </div>
      ))}
    </div>
  );
}
