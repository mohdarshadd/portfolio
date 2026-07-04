"use client";

import { profile } from "@/data/profile";
import { technicalSkills } from "@/data/skills";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { educationEntries } from "@/data/education";
import { certifications } from "@/data/certifications";
import { TerminalWindow } from "@/components/terminal/TerminalWindow";

function Prompt({ cmd }: { cmd: string }) {
  return (
    <div className="text-fg-green select-none mt-6 mb-2">
      <span className="text-fg-green">arshad@portfolio</span>
      <span className="text-fg-dim">:~$ </span>
      <span className="text-fg-primary">{cmd}</span>
    </div>
  );
}

function SectionDivider() {
  return <div className="text-border my-6">{"─".repeat(80)}</div>;
}

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-block px-3 py-1 mr-2 mb-2 text-sm bg-bg-window border border-border rounded text-fg-cyan">
      {children}
    </span>
  );
}

function TechTag({ children }: { children: string }) {
  return (
    <span className="inline-block px-2 py-0.5 mr-1.5 mb-1 text-xs bg-bg-window border border-border rounded text-fg-dim">
      {children}
    </span>
  );
}

export default function Portfolio() {
  return (
    <TerminalWindow>
      {/* ──────────── Hero ──────────── */}
      <div className="flex flex-col sm:flex-row items-start gap-5 mb-4">
        <div className="shrink-0">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-border">
            <img
              src="/Arshad-profile-photo.jpeg"
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-fg-green select-none text-sm mb-1">
            <span className="text-fg-green">arshad@portfolio</span>
            <span className="text-fg-dim">:~$ </span>
            <span className="text-fg-primary">whoami</span>
          </div>
          <div className="text-fg-magenta font-bold text-xl sm:text-2xl mb-1">
            {profile.name}
          </div>
          <div className="text-fg-green select-none text-sm mb-1 mt-3">
            <span className="text-fg-green">arshad@portfolio</span>
            <span className="text-fg-dim">:~$ </span>
            <span className="text-fg-primary">cat role.txt</span>
          </div>
          <div className="text-fg-cyan text-base sm:text-lg font-semibold">
            {"> "}{profile.role}
          </div>
          <div className="text-fg-green select-none text-sm mb-1 mt-3">
            <span className="text-fg-green">arshad@portfolio</span>
            <span className="text-fg-dim">:~$ </span>
            <span className="text-fg-primary">./current-focus</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-1">
            <Tag>MERN Stack</Tag>
            <Tag>AI Engineering</Tag>
            <Tag>LLM APIs</Tag>
            <Tag>Cloud Technologies</Tag>
          </div>
        </div>
      </div>

      <SectionDivider />

      {/* ──────────── About ──────────── */}
      <Prompt cmd="cat about.txt" />
      <div className="text-fg-primary leading-relaxed">
        <p>{profile.objective}</p>
      </div>

      <SectionDivider />

      {/* ──────────── Experience ──────────── */}
      <Prompt cmd="ls -la ~/experience" />
      <div className="text-border text-xs mb-2">{"─".repeat(80)}</div>
      {experiences.map((exp, i) => (
        <div key={i} className="mb-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2 mb-1">
            <span className="text-fg-yellow text-sm shrink-0">[{exp.period}]</span>
            <span className="text-fg-cyan font-bold">{exp.role}</span>
            <span className="text-fg-dim text-sm">{"→"} {exp.company}</span>
          </div>
          <div className="ml-4 mt-1 space-y-0.5">
            {exp.bullets.map((b, j) => (
              <div key={j} className="text-fg-primary text-sm flex">
                <span className="text-fg-dim mr-2 shrink-0">•</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <SectionDivider />

      {/* ──────────── Projects ──────────── */}
      <Prompt cmd="cat projects.json" />
      <div className="text-border text-xs mb-2">{"─".repeat(80)}</div>
      {projects.map((p, i) => (
        <div key={i} className="mb-5 p-4 border border-border rounded">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-fg-green font-bold">{">"}</span>
            <span className="text-fg-cyan font-bold">{p.name}</span>
            {p.hackathonWinner && (
              <span className="text-xs text-fg-yellow border border-fg-yellow/30 px-1.5 py-0.5 rounded">
                🏆 Winner
              </span>
            )}
          </div>
          <div className="text-fg-primary text-sm mb-2">{p.description}</div>
          <div className="flex flex-wrap mb-2">
            {p.tech.map((t) => (
              <TechTag key={t}>{t}</TechTag>
            ))}
          </div>
          <div className="flex gap-3 text-sm">
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-cyan hover:text-fg-green underline decoration-dotted underline-offset-2 transition-colors"
              >
                📦 Repository →
              </a>
            )}
          </div>
        </div>
      ))}

      <SectionDivider />

      {/* ──────────── Skills ──────────── */}
      <Prompt cmd="cat skills.json" />
      <div className="text-border text-xs mb-2">{"─".repeat(80)}</div>
      <div className="space-y-3">
        {technicalSkills.map((cat, i) => (
          <div key={i}>
            <div className="flex flex-wrap items-baseline gap-1">
              <span className="text-fg-cyan shrink-0 text-sm font-semibold">
                "{cat.category}":
              </span>
              <span className="text-fg-dim text-sm">[</span>
              {cat.skills.map((skill, j) => (
                <span key={skill} className="text-fg-primary text-sm">
                  "{skill}"{j < cat.skills.length - 1 ? ", " : ""}
                </span>
              ))}
              <span className="text-fg-dim text-sm">]</span>
            </div>
          </div>
        ))}
      </div>

      <SectionDivider />

      {/* ──────────── Education ──────────── */}
      <Prompt cmd="cat education.md" />
      <div className="text-border text-xs mb-2">{"─".repeat(80)}</div>
      {educationEntries.map((edu, i) => (
        <div key={i} className="mb-3">
          <div className="text-fg-yellow text-sm"># {edu.institution}</div>
          <div className="ml-4 text-fg-primary text-sm">
            - {edu.degree} {edu.score ? `| ${edu.score}` : ""}
          </div>
          <div className="ml-4 text-fg-dim text-sm">
            - {edu.year} • {edu.location}
          </div>
        </div>
      ))}

      <SectionDivider />

      {/* ──────────── Certifications ──────────── */}
      <Prompt cmd="cat certifications.md" />
      <div className="text-border text-xs mb-2">{"─".repeat(80)}</div>
      {certifications.map((cert, i) => (
        <div key={i} className="mb-2 flex items-center gap-2">
          <span className="text-fg-green text-sm">✓</span>
          <span className="text-fg-primary text-sm">{cert.name}</span>
          <span className="text-fg-dim text-xs">({cert.year})</span>
          <span className="text-fg-dim text-xs">— {cert.issuer}</span>
          {cert.url && (
            <a
              href={cert.url}
              className="text-fg-cyan hover:text-fg-green text-xs underline decoration-dotted underline-offset-2 transition-colors"
            >
              view
            </a>
          )}
        </div>
      ))}

      <SectionDivider />

      {/* ──────────── Contact ──────────── */}
      <Prompt cmd="./contact" />
      <div className="text-fg-primary text-sm mb-3">
        Open to AI engineering roles, full-stack development, and interesting projects.
      </div>
      <div className="flex flex-wrap gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="text-fg-cyan hover:text-fg-green underline decoration-dotted underline-offset-2 transition-colors text-sm"
        >
          📧 {profile.email}
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-fg-cyan hover:text-fg-green underline decoration-dotted underline-offset-2 transition-colors text-sm"
        >
          💼 Connect on LinkedIn
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-fg-cyan hover:text-fg-green underline decoration-dotted underline-offset-2 transition-colors text-sm"
        >
          📦 GitHub
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          className="text-fg-cyan hover:text-fg-green underline decoration-dotted underline-offset-2 transition-colors text-sm"
        >
          📄 Resume
        </a>
      </div>

      <div className="mt-8 text-fg-dim text-xs text-center select-none">
        <span className="text-fg-green">arshad@portfolio</span>
        <span className="text-fg-dim">:~$ </span>
        <span className="animate-pulse">_</span>
      </div>
    </TerminalWindow>
  );
}
