"use client";

import { useState, useCallback } from "react";

export function useCommandHistory() {
  const [history, setHistory] = useState<string[]>([]);
  const [index, setIndex] = useState(-1);

  const add = useCallback((cmd: string) => {
    if (!cmd.trim()) return;
    setHistory((prev) => [...prev, cmd]);
    setIndex(-1);
  }, []);

  const up = useCallback((): string => {
    if (history.length === 0) return "";
    const newIndex = index === -1 ? history.length - 1 : Math.max(0, index - 1);
    setIndex(newIndex);
    return history[newIndex];
  }, [history, index]);

  const down = useCallback((): string => {
    if (index === -1) return "";
    if (index === history.length - 1) {
      setIndex(-1);
      return "";
    }
    const newIndex = index + 1;
    setIndex(newIndex);
    return history[newIndex];
  }, [history, index]);

  return { history, add, up, down, index };
}
