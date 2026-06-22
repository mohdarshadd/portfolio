"use client";

import { useEffect, useRef } from "react";
import { Neofetch } from "./Neofetch";

interface BannerProps {
  onComplete?: () => void;
}

export function Banner({ onComplete }: BannerProps) {
  const firedRef = useRef(false);

  useEffect(() => {
    if (!firedRef.current) {
      firedRef.current = true;
      const timer = setTimeout(() => onComplete?.(), 300);
      return () => clearTimeout(timer);
    }
  }, [onComplete]);

  return (
    <div className="animate-fadeIn">
      <Neofetch />
    </div>
  );
}
