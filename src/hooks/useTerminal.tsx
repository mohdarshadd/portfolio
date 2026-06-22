"use client";

import { useState, useCallback, useRef, ReactNode } from "react";
import { useCommandHistory } from "./useCommandHistory";

export interface TerminalEntry {
  id: string;
  type: "command" | "output" | "boot";
  content: ReactNode;
  command?: string;
}

let entryId = 0;
function nextId() {
  return `entry-${++entryId}`;
}

export interface CommandHandler {
  (args: Record<string, string>, onComplete: () => void): ReactNode;
}

export function useTerminal() {
  const [bootComplete, setBootComplete] = useState(false);
  const [entries, setEntries] = useState<TerminalEntry[]>([]);
  const [input, setInput] = useState("");
  const [commandHandlers, setCommandHandlers] = useState<
    Record<string, CommandHandler>
  >({});
  const history = useCommandHistory();

  const registerCommands = useCallback(
    (handlers: Record<string, CommandHandler>) => {
      setCommandHandlers(handlers);
    },
    []
  );

  const addEntry = useCallback((entry: TerminalEntry) => {
    setEntries((prev) => [...prev, entry]);
  }, []);

  const onBootComplete = useCallback(() => {
    setBootComplete(true);
  }, []);

  const executeCommand = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim();
      if (!trimmed) return;

      history.add(trimmed);
      setInput("");

      const parts = trimmed.split(/\s+/);
      const commandName = parts[0].toLowerCase();
      const args: Record<string, string> = {};

      for (let i = 1; i < parts.length; i++) {
        if (parts[i].startsWith("--")) {
          const key = parts[i].slice(2);
          if (i + 1 < parts.length && !parts[i + 1].startsWith("--")) {
            args[key] = parts[i + 1];
            i++;
          } else {
            args[key] = "true";
          }
        } else if (i === 1) {
          args["_"] = parts.slice(1).join(" ");
          break;
        }
      }

      const addCommandEntry = () => {
        addEntry({
          id: nextId(),
          type: "command",
          command: cmd,
          content: (
            <div className="text-fg-green">{promptText} {cmd}</div>
          ),
        });
      };

      if (commandName === "clear") {
        setEntries([]);
        return;
      }

      if (commandName === "history") {
        const historyLines = history.history.map(
          (h, i) => `  ${i + 1}  ${h}`
        );
        addCommandEntry();
        addEntry({
          id: nextId(),
          type: "output",
          content: (
            <div className="text-fg-primary whitespace-pre-wrap">
              <div className="text-fg-cyan font-bold mb-2">COMMAND HISTORY</div>
              <div className="text-border">{"─".repeat(50)}</div>
              {historyLines.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          ),
        });
        return;
      }

      if (commandName === "date") {
        const now = new Date().toString();
        addCommandEntry();
        addEntry({
          id: nextId(),
          type: "output",
          content: <div className="text-fg-primary">{now}</div>,
        });
        return;
      }

      if (commandName === "sudo") {
        addCommandEntry();
        addEntry({
          id: nextId(),
          type: "output",
          content: (
            <div className="text-fg-red whitespace-pre-wrap">
              Nice try. You don&apos;t have root here.
              {"\n"}
              <span className="text-fg-dim">
                Tip: Type &quot;help&quot; to see available commands.
              </span>
            </div>
          ),
        });
        return;
      }

      const handler = commandHandlers[commandName];
      if (!handler) {
        addCommandEntry();
        addEntry({
          id: nextId(),
          type: "output",
          content: (
            <div className="text-fg-red whitespace-pre-wrap">
              zsh: command not found: {commandName}
              {"\n"}
              <span className="text-fg-dim">
                Tip: Type &quot;help&quot; to see available commands.
              </span>
            </div>
          ),
        });
        return;
      }

      addCommandEntry();

      const noopComplete = () => {};
      const outputContent = handler(args, noopComplete);
      addEntry({ id: nextId(), type: "output", content: outputContent });
    },
    [commandHandlers, addEntry, history]
  );

  const promptText = "arshad@portfolio:~$";

  return {
    bootComplete,
    entries,
    input,
    setInput,
    executeCommand,
    onBootComplete,
    registerCommands,
    promptText,
    history,
  };
}
