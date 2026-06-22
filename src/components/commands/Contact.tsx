"use client";

import { profile } from "@/data/profile";
import { TerminalLink } from "@/components/shared/TerminalLink";
import { useEffect, useRef } from "react";

interface ContactProps {
  onComplete?: () => void;
}

export function Contact({ onComplete }: ContactProps) {
  const hasFired = useRef(false);

  const github = profile.github.replace("https://", "");
  const linkedin = profile.linkedin.replace("https://", "");
  const email = profile.email;

  useEffect(() => {
    if (!hasFired.current) {
      hasFired.current = true;
      const timer = setTimeout(() => onComplete?.(), 500);
      return () => clearTimeout(timer);
    }
  }, [onComplete]);

  const gap = " ".repeat(22);

  return (
    <div className="whitespace-pre-wrap animate-fadeIn">
      {/* Top border */}
      <div className="text-border">
        {"  "}{"┌"}{"─".repeat(56)}{"┐"}
      </div>

      {/* Header */}
      <div className="text-border">
        {"  "}{"│"}{gap}
        <span className="text-fg-green font-bold">GET IN TOUCH</span>
        {gap}{"│"}
      </div>

      <div className="text-border">
        {"  "}{"│"}{" ".repeat(56)}{"│"}
      </div>

      {/* Quote */}
      <div className="text-border">
        {"  "}{"│"}  <span className="text-fg-cyan">❯</span>{" "}
        <span className="text-fg-primary italic">
          &quot;Let&apos;s build something amazing together.&quot;
        </span>
        {"      │"}
      </div>

      <div className="text-border">
        {"  "}{"│"}{" ".repeat(56)}{"│"}
      </div>
      <div className="text-border">
        {"  "}{"├"}{"─".repeat(56)}{"┤"}
      </div>

      {/* Links header */}
      <div className="text-border">
        {"  "}{"│"}  <span className="text-fg-yellow">▸</span>{" "}
        <span className="text-fg-cyan">Connect</span>
        {"│"}
      </div>
      <div className="text-border">
        {"  "}{"│"}{" ".repeat(56)}{"│"}
      </div>

      {/* GitHub */}
      <div className="text-border">
        {"  "}{"│"}    <span className="text-fg-cyan">GitHub</span>{"     "}
        <span className="text-fg-dim">→</span>{" "}
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-fg-primary underline decoration-dotted underline-offset-2 hover:text-fg-cyan transition-colors">
          {github}
        </a>
        {" │"}
      </div>

      {/* LinkedIn */}
      <div className="text-border">
        {"  "}{"│"}    <span className="text-fg-cyan">LinkedIn</span>{"   "}
        <span className="text-fg-dim">→</span>{" "}
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-fg-primary underline decoration-dotted underline-offset-2 hover:text-fg-cyan transition-colors">
          {linkedin}
        </a>
        {" │"}
      </div>

      {/* Email */}
      <div className="text-border">
        {"  "}{"│"}    <span className="text-fg-cyan">Email</span>{"      "}
        <span className="text-fg-dim">→</span>{" "}
        <a href={`mailto:${email}`} className="text-fg-primary underline decoration-dotted underline-offset-2 hover:text-fg-cyan transition-colors">
          {email}
        </a>
        {"  │"}
      </div>

      {/* Resume */}
      <div className="text-border">
        {"  "}{"│"}    <span className="text-fg-cyan">Resume</span>{"     "}
        <span className="text-fg-dim">→</span>{" "}
        <span className="text-fg-green">Type</span>{" "}
        <span className="text-fg-primary font-bold">&apos;resume&apos;</span>
        {" to download        │"}
      </div>

      <div className="text-border">
        {"  "}{"│"}{" ".repeat(56)}{"│"}
      </div>

      {/* Location */}
      <div className="text-border">
        {"  "}{"│"}  <span className="text-fg-yellow">📍</span>{" "}
        <span className="text-fg-dim">
          {profile.location} · {profile.pincode}
        </span>
        {"            │"}
      </div>

      <div className="text-border">
        {"  "}{"│"}{" ".repeat(56)}{"│"}
      </div>

      {/* Open for work */}
      <div className="text-border">
        {"  "}{"│"}
        <span className="text-fg-green">
          {"  "}{"●"} Open to opportunities and collaborations
        </span>
        {"   │"}
      </div>

      {/* Bottom border */}
      <div className="text-border">
        {"  "}{"└"}{"─".repeat(56)}{"┘"}
      </div>

      {/* Actual clickable links */}
      <div className="flex gap-4 mt-3">
        <TerminalLink href={profile.github}>
          <span className="text-fg-cyan hover:text-fg-green transition-colors">
            {"📦"} GitHub
          </span>
        </TerminalLink>
        <TerminalLink href={profile.linkedin}>
          <span className="text-fg-cyan hover:text-fg-green transition-colors">
            {"💼"} LinkedIn
          </span>
        </TerminalLink>
        <TerminalLink href={`mailto:${email}`}>
          <span className="text-fg-cyan hover:text-fg-green transition-colors">
            {"📧"} Email
          </span>
        </TerminalLink>
      </div>
    </div>
  );
}
