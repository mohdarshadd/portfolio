"use client";

import { Cursor } from "@/components/shared/Cursor";

interface PromptProps {
  text: string;
  showCursor?: boolean;
}

export function Prompt({ text, showCursor = true }: PromptProps) {
  return (
    <span className="text-fg-green select-none">
      {text}
      {showCursor && <Cursor visible />}
    </span>
  );
}
