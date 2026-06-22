"use client";

import { useEffect, useRef, useState } from "react";

interface ResumeProps {
  onComplete?: () => void;
}

export function Resume({ onComplete }: ResumeProps) {
  const [phase, setPhase] = useState<"downloading" | "complete">("downloading");
  const hasFired = useRef(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setPhase("complete");
      linkRef.current?.click();
    }, 800);

    const t2 = setTimeout(() => {
      if (!hasFired.current) {
        hasFired.current = true;
        onComplete?.();
      }
    }, 1200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <div className="whitespace-pre-wrap">
      {phase === "downloading" ? (
        <>
          <div className="text-fg-primary">
            {"📄"}  Downloading Mohd_Arshad_Ansari_Resume.pdf...
          </div>
          <div className="text-border mt-1">{"─".repeat(50)}</div>
        </>
      ) : (
        <>
          <div className="text-fg-green">
            {"✅"}  Resume download started.
          </div>
          <div className="text-border mt-1">{"─".repeat(50)}</div>
          <div className="text-fg-dim mt-1">
            If the download doesn&apos;t start automatically:
          </div>
          <div className="text-fg-cyan underline mt-1">
            /resume.pdf
          </div>
        </>
      )}

      {/* Hidden download trigger */}
      <a
        ref={linkRef}
        href="/resume.pdf"
        download="Mohd_Arshad_Ansari_Resume.pdf"
        className="hidden"
      >
        Download
      </a>
    </div>
  );
}
