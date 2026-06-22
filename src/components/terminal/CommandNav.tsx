"use client";

import { NAV_COMMANDS } from "@/lib/constants";

interface CommandNavProps {
  onCommand: (cmd: string) => void;
}

export function CommandNav({ onCommand }: CommandNavProps) {
  return (
    <div className="flex flex-wrap gap-2 items-center mt-2 pt-2 border-t border-border">
      <span className="text-fg-dim text-xs shrink-0 mr-1">
        Quick:
      </span>
      {NAV_COMMANDS.map((item) => (
        <button
          key={item.cmd}
          onClick={() => onCommand(item.cmd)}
          className="text-fg-cyan text-xs hover:text-fg-green hover:bg-border/30 px-2 py-0.5 rounded border border-border transition-all duration-150 cursor-pointer"
        >
          [{item.label}]
        </button>
      ))}
    </div>
  );
}
