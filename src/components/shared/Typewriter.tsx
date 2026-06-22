"use client";

import { useEffect, useRef } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";

interface TypewriterProps {
  lines: string[];
  speed?: number;
  onComplete?: () => void;
  enabled?: boolean;
  className?: string;
}

export function Typewriter({
  lines,
  speed = 30,
  onComplete,
  enabled = true,
  className = "",
}: TypewriterProps) {
  const calledRef = useRef(false);
  const { visibleLines, currentPartialLine, isComplete } = useTypewriter({
    lines,
    speed,
    enabled,
  });

  useEffect(() => {
    if (isComplete && onComplete && !calledRef.current) {
      calledRef.current = true;
      onComplete();
    }
  }, [isComplete, onComplete]);

  useEffect(() => {
    calledRef.current = false;
  }, [lines]);

  return (
    <div className={`whitespace-pre-wrap ${className}`}>
      {visibleLines.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
      {currentPartialLine && <div>{currentPartialLine}</div>}
    </div>
  );
}
