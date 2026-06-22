"use client";

import { projects, Project } from "@/data/projects";
import { TerminalLink } from "@/components/shared/TerminalLink";
import { Typewriter } from "@/components/shared/Typewriter";
import { useEffect, useRef } from "react";

interface ProjectsProps {
  args?: Record<string, string>;
  onComplete?: () => void;
}

function ProjectList({ onComplete }: { onComplete?: () => void }) {
  const lines: string[] = [];
  lines.push("  FEATURED PROJECTS");
  lines.push(`  ${"─".repeat(70)}`);
  lines.push("");
  for (const p of projects) {
    lines.push(`  > ${p.name}`);
    const desc =
      p.description.length > 65
        ? p.description.substring(0, 65) + "..."
        : p.description;
    lines.push(`    ${desc}`);
    const links: string[] = [];
    if (p.github) links.push("[GitHub]");
    if (p.hackathonWinner) links.push("[🏆 Winner]");
    if (links.length) lines.push(`    ${links.join("  ")}`);
    lines.push("");
  }
  lines.push(`  ${"─".repeat(70)}`);
  lines.push("");
  lines.push("  Tip: Use \"projects --detail <name>\" for full case study.");

  return (
    <div>
      <div className="whitespace-pre-wrap">
        <Typewriter lines={lines} speed={15} onComplete={onComplete} />
      </div>
    </div>
  );
}

function ProjectDetail({
  project,
  onComplete,
}: {
  project: Project;
  onComplete?: () => void;
}) {
  const hasFired = useRef(false);

  useEffect(() => {
    if (!hasFired.current) {
      hasFired.current = true;
      const timer = setTimeout(() => onComplete?.(), 500);
      return () => clearTimeout(timer);
    }
  }, [onComplete]);

  return (
    <div className="whitespace-pre-wrap">
      <div className="text-border">
        {"┌─"} Project:{" "}
        <span className="text-fg-cyan font-bold">{project.name}</span>
        {" " + "─".repeat(Math.max(0, 45 - project.name.length))}
        {"┐"}
      </div>
      <div className="text-border">{"│"}</div>
      <div className="text-border">{"│"}  <span className="text-fg-green font-bold">Description</span></div>
      <div className="text-border">
        {"│"}  <span className="text-fg-primary">{project.description}</span>
      </div>
      <div className="text-border">{"│"}</div>
      <div className="text-border">{"│"}  <span className="text-fg-green font-bold">Tech Stack</span></div>
      <div className="text-border">
        {"│"}  <span className="text-fg-primary">{project.tech.join("  ·  ")}</span>
      </div>
      <div className="text-border">{"│"}</div>
      <div className="text-border">{"│"}  <span className="text-fg-green font-bold">Key Features</span></div>
      {project.bullets.map((b, i) => (
        <div key={i} className="text-border">
          {"│"}  <span className="text-fg-primary">{"•"} {b}</span>
        </div>
      ))}
      <div className="text-border">{"│"}</div>
      <div className="text-border">{"│"}  <span className="text-fg-green font-bold">Links</span></div>
      {project.github && (
        <div className="text-border">
          {"│"}  <span className="text-fg-primary">{"📦"} Repository   → </span>
          <span className="text-fg-cyan underline">{project.github}</span>
        </div>
      )}
      <div className="text-border">{"│"}</div>
      <div className="text-border">
        {"│"}  Status:{" "}
        <span className="text-fg-green">✅ Deployed</span>
        {"  |  "}
        {project.hackathonWinner && (
          <>
            <span className="text-fg-yellow">🏆 Hackathon Winner</span>
            {"  |  "}
          </>
        )}
        Updated: 2026
      </div>
      <div className="text-border">
        {"└"}{"─".repeat(68)}{"┘"}
      </div>
    </div>
  );
}

export function Projects({ args, onComplete }: ProjectsProps) {
  if (args?.detail) {
    const name = args.detail.toLowerCase().replace(/\s+/g, "-");
    const project = projects.find(
      (p) => p.name.toLowerCase().replace(/\s+/g, "-") === name
    );
    if (project) {
      return <ProjectDetail project={project} onComplete={onComplete} />;
    }
    return (
      <div className="text-fg-red">
        Project &quot;{args.detail}&quot; not found.
        <br />
        <span className="text-fg-dim">
          Available: {projects.map((p) => p.name).join(", ")}
        </span>
      </div>
    );
  }

  return (
    <div>
      <ProjectList onComplete={onComplete} />
    </div>
  );
}
