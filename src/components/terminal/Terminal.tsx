"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useTerminal } from "@/hooks/useTerminal";
import { createCommandRegistry } from "@/components/commands/CommandRegistry";
import { TerminalWindow } from "./TerminalWindow";
import { CommandInput } from "./CommandInput";
import { CommandNav } from "./CommandNav";
import { Output } from "./Output";
import { BOOT_TYPE_SPEED } from "@/lib/constants";
import { useSkipSignal, SkipContext } from "@/lib/SkipContext";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const bootLines = [
  <span key="l0" className="text-fg-dim">Last login: Mon Jun 22 13:37:00 on ttys000</span>,
  <div key="s0" className="h-[1em]" />,
  <div key="t0" className="text-border">    {"┌──────────────────┐"}</div>,
  <div key="t1" className="text-border">    {"│"}{" "}<span className="text-fg-green">{"●"}</span>{" "}<span className="text-fg-yellow">{"●"}</span>{" "}<span className="text-fg-red">{"●"}</span>{" "}<span className="text-fg-dim">{" zsh"}</span>{"       │"}</div>,
  <div key="t2" className="text-border">    {"│                  │"}</div>,
  <div key="t3" className="text-border">    {"│   "}<span className="text-fg-green">{">_ "}</span>{"            │"}</div>,
  <div key="t4" className="text-border">    {"│                  │"}</div>,
  <div key="t5" className="text-border">    {"└──────────────────┘"}</div>,
  <div key="s1" className="h-[1em]" />,
  <div key="hdr" className="text-fg-magenta font-bold">  arshad@portfolio</div>,
  <div key="hdr-sep" className="text-border">  {"─".repeat(28)}</div>,
  <div key="os"><span className="text-fg-cyan">  OS:       </span><span className="text-fg-primary">Arch Linux x86_64</span></div>,
  <div key="host"><span className="text-fg-cyan">  Host:     </span><span className="text-fg-primary">BCA @ University of Lucknow</span></div>,
  <div key="kernel"><span className="text-fg-cyan">  Kernel:   </span><span className="text-fg-primary">JavaScript / TypeScript</span></div>,
  <div key="shell"><span className="text-fg-cyan">  Shell:    </span><span className="text-fg-primary">zsh 5.9</span></div>,
  <div key="proj"><span className="text-fg-cyan">  Projects: </span><span className="text-fg-primary">{projects.length}</span></div>,
  <div key="email"><span className="text-fg-cyan">  Email:    </span><span className="text-fg-primary underline decoration-dotted underline-offset-2">{profile.email}</span></div>,
  <div key="loc"><span className="text-fg-cyan">  Location: </span><span className="text-fg-primary">{profile.location}</span></div>,
  <div key="s2" className="h-[1em]" />,
  <div key="help" className="text-fg-dim">  Type &apos;help&apos; to see available commands.</div>,
  <div key="s3" />,
];

function NeofetchBoot({ onDone }: { onDone: () => void }) {
  const [revealed, setRevealed] = useState(0);
  const doneRef = useRef(false);
  const skipSignal = useSkipSignal();
  const prevSkip = useRef(0);

  useEffect(() => {
    if (skipSignal > prevSkip.current) {
      prevSkip.current = skipSignal;
      setRevealed(bootLines.length);
    }
  }, [skipSignal]);

  useEffect(() => {
    if (revealed >= bootLines.length) {
      if (!doneRef.current) {
        doneRef.current = true;
        const timer = setTimeout(onDone, 300);
        return () => clearTimeout(timer);
      }
      return;
    }
    const timer = setTimeout(() => {
      setRevealed((r) => r + 1);
    }, BOOT_TYPE_SPEED * 8);
    return () => clearTimeout(timer);
  }, [revealed, onDone]);

  return (
    <div className="mb-1 animate-fadeIn whitespace-pre-wrap">
      {bootLines.slice(0, revealed)}
    </div>
  );
}

export function Terminal() {
  const terminal = useTerminal();
  const [bootDone, setBootDone] = useState(false);
  const [skipCount, setSkipCount] = useState(0);

  const handleEsc = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setSkipCount((c) => c + 1);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [handleEsc]);

  useEffect(() => {
    terminal.registerCommands(createCommandRegistry());
  }, [terminal.registerCommands]);

  const handleBootDone = () => {
    setBootDone(true);
    terminal.onBootComplete();
  };

  const handleNavCommand = (cmd: string) => {
    terminal.setInput(cmd);
    terminal.executeCommand(cmd);
  };

  return (
    <SkipContext.Provider value={skipCount}>
      <TerminalWindow>
        <Output>
          <NeofetchBoot onDone={handleBootDone} />

          {terminal.entries.map((entry) => (
            <div key={entry.id} className="mb-1">
              {entry.type === "command" && (
                <div>
                  <span className="text-fg-green select-none">
                    {terminal.promptText}{" "}
                  </span>
                  <span className="text-fg-primary">{entry.command}</span>
                </div>
              )}
              {entry.type === "output" && (
                <div className="mt-0.5">{entry.content}</div>
              )}
            </div>
          ))}

          <div className="mt-1 animate-fadeIn">
            <CommandInput
              promptText={terminal.promptText}
              value={terminal.input}
              onChange={terminal.setInput}
              onSubmit={terminal.executeCommand}
              onUpArrow={terminal.history.up}
              onDownArrow={terminal.history.down}
            />
            <CommandNav onCommand={handleNavCommand} />
          </div>
        </Output>
      </TerminalWindow>
    </SkipContext.Provider>
  );
}
