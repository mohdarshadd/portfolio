"use client";

import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { useEffect, useRef } from "react";

interface NeofetchProps {
  onComplete?: () => void;
}

export function Neofetch({ onComplete }: NeofetchProps) {
  const hasFired = useRef(false);

  useEffect(() => {
    if (!hasFired.current) {
      hasFired.current = true;
      const timer = setTimeout(() => onComplete?.(), 500);
      return () => clearTimeout(timer);
    }
  }, [onComplete]);

  return (
    <div className="whitespace-pre-wrap">
      <div className="flex">
        <div className="shrink-0">
          <div className="text-border">    {"┌──────────────────┐"}</div>
          <div className="text-border">    {"│"}{" "}<span className="text-fg-green">{"●"}</span>{" "}<span className="text-fg-yellow">{"●"}</span>{" "}<span className="text-fg-red">{"●"}</span>{" "}<span className="text-fg-dim">{" zsh"}</span>{"       │"}</div>
          <div className="text-border">    {"│                  │"}</div>
          <div className="text-border">    {"│   "}<span className="text-fg-green">{" >_"} </span>{"           │"}</div>
          <div className="text-border">    {"│                  │"}</div>
          <div className="text-border">{`    └──────────────────┘`}</div>
        </div>
        <div className="ml-5 text-fg-primary">
          <div>
            <span className="text-fg-magenta font-bold">
              {profile.name.split(" ")[0]}
            </span>
            <span className="text-fg-dim">@portfolio</span>
          </div>
          <div className="text-border">{"─".repeat(30)}</div>
          <div>
            OS: <span className="text-fg-cyan">Arch Linux x86_64</span>
          </div>
          <div>
            Host: <span className="text-fg-cyan">BCA @ University of Lucknow</span>
          </div>
          <div>
            Kernel: <span className="text-fg-cyan">JavaScript / TypeScript</span>
          </div>
          <div>
            Shell: <span className="text-fg-cyan">zsh 5.9</span>
          </div>
          <div>
            Projects: <span className="text-fg-cyan">{projects.length}</span>
          </div>
          <div>
            Email:{" "}
            <span className="text-fg-cyan underline decoration-dotted underline-offset-2">
              {profile.email}
            </span>
          </div>
          <div>
            Location:{" "}
            <span className="text-fg-cyan">
              {profile.location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
