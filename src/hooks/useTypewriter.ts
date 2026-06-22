"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useSkipSignal } from "@/lib/SkipContext";

interface UseTypewriterOptions {
  lines: string[];
  speed?: number;
  enabled?: boolean;
  onLineComplete?: (lineIndex: number) => void;
}

export function useTypewriter({
  lines,
  speed = 30,
  enabled = true,
  onLineComplete,
}: UseTypewriterOptions) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const skipSignal = useSkipSignal();
  const onLineCompleteRef = useRef(onLineComplete);
  onLineCompleteRef.current = onLineComplete;
  const linesRef = useRef(lines);
  linesRef.current = lines;

  const complete = useCallback(() => {
    setCurrentLineIndex(linesRef.current.length);
    setCurrentCharIndex(0);
    setIsComplete(true);
  }, []);

  // Skip on ESC signal
  useEffect(() => {
    if (skipSignal > 0 && !isComplete) {
      complete();
    }
  }, [skipSignal, isComplete, complete]);

  const reset = useCallback(() => {
    setCurrentLineIndex(0);
    setCurrentCharIndex(0);
    setIsComplete(false);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    if (isComplete) return;
    if (currentLineIndex >= lines.length) {
      setIsComplete(true);
      return;
    }
    const currentLine = lines[currentLineIndex];
    if (!currentLine || currentCharIndex >= currentLine.length) {
      const pause = !currentLine ? 100 : 150;
      const timer = setTimeout(() => {
        setCurrentLineIndex((i) => i + 1);
        setCurrentCharIndex(0);
        onLineCompleteRef.current?.(currentLineIndex);
      }, pause);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => {
      setCurrentCharIndex((i) => i + 1);
    }, speed);
    return () => clearTimeout(timer);
  }, [currentLineIndex, currentCharIndex, lines, speed, enabled, isComplete]);

  const visibleLines = lines.slice(0, currentLineIndex);
  const currentPartialLine =
    currentLineIndex < lines.length
      ? lines[currentLineIndex].slice(0, currentCharIndex)
      : "";

  return {
    visibleLines,
    currentPartialLine,
    isTyping: enabled && !isComplete,
    isComplete,
    reset,
    complete,
  };
}
