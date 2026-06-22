"use client";

import { useRef, useEffect, KeyboardEvent } from "react";

interface CommandInputProps {
  promptText: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: (command: string) => void;
  onUpArrow: () => string;
  onDownArrow: () => string;
}

export function CommandInput({
  promptText,
  value,
  onChange,
  onSubmit,
  onUpArrow,
  onDownArrow,
}: CommandInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit(value);
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = onUpArrow();
      if (prev) onChange(prev);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = onDownArrow();
      onChange(next);
      return;
    }

    if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      onSubmit("clear");
    }
  };

  return (
    <div className="flex items-center">
      <span className="text-fg-green whitespace-nowrap select-none shrink-0">
        {promptText}{" "}
      </span>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="bg-transparent border-none outline-none text-fg-primary font-mono text-sm sm:text-base p-0 m-0 flex-1 min-w-0 caret-transparent"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        autoFocus
        aria-label="Terminal command input"
        style={{ caretColor: "#22C55E" }}
      />
    </div>
  );
}
