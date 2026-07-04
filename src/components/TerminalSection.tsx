"use client";

import { ReactNode } from "react";
import { TERMINAL_TITLE } from "@/lib/constants";

export function TerminalSection({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <div className="w-full max-w-5xl mx-auto mb-10 bg-bg-primary/90 backdrop-blur-sm border border-border rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.4)] overflow-hidden">
      <div className="h-8 bg-bg-window/90 border-b border-border flex items-center px-3 relative shrink-0">
        <div className="flex gap-[6px] items-center shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="absolute left-0 right-0 text-center pointer-events-none select-none">
          <span className="text-fg-dim text-xs">
            {title || TERMINAL_TITLE}
          </span>
        </div>
      </div>
      <div className="p-4 sm:p-5 font-mono text-sm sm:text-base leading-relaxed overflow-x-auto">
        {children}
      </div>
    </div>
  );
}
