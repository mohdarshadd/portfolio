"use client";

import { ReactNode, useEffect, useRef } from "react";
import { TERMINAL_TITLE } from "@/lib/constants";
import { profile } from "@/data/profile";

interface TerminalWindowProps {
  children: ReactNode;
}

export function TerminalWindow({ children }: TerminalWindowProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [children]);

  return (
    <div className="w-full h-full flex items-start justify-center pt-[3vh] sm:pt-[5vh] px-2 sm:px-4">
      <div
        className="
          w-full max-w-[1100px]
          h-[90vh] sm:h-[85vh]
          bg-bg-primary
          border border-border
          rounded-lg
          shadow-[0_20px_60px_rgba(0,0,0,0.5)]
          flex flex-col
          overflow-hidden
          animate-fadeIn
        "
      >
        {/* Title Bar */}
        <div
          className="
            h-9 sm:h-[36px] shrink-0
            bg-bg-window
            border-b border-border
            flex items-center
            px-4
            relative
          "
        >
          {/* Traffic Lights */}
          <div className="flex gap-[8px] items-center shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          {/* Title */}
          <div className="absolute left-0 right-0 text-center pointer-events-none">
            <span className="text-fg-dim text-xs sm:text-sm select-none">
              {TERMINAL_TITLE}
            </span>
          </div>
          {/* Social Links */}
          <div className="ml-auto flex items-center gap-3 text-xs shrink-0">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-cyan hover:text-fg-green transition-colors duration-150 hover:underline"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-cyan hover:text-fg-green transition-colors duration-150 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-fg-cyan hover:text-fg-green transition-colors duration-150 hover:underline"
            >
              Email
            </a>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 font-mono text-sm sm:text-base leading-relaxed">
          {children}
        </div>

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
