"use client";

import { profile } from "@/data/profile";
import { technicalSkills } from "@/data/skills";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { educationEntries } from "@/data/education";
import { certifications } from "@/data/certifications";
import { TerminalSection } from "@/components/TerminalSection";

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

function Bullet({ text }: { text: string }) {
  return (
    <div className="text-fg-primary text-sm flex">
      <span className="text-fg-dim mr-2 shrink-0">•</span>
      <span>{text}</span>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="w-full min-h-screen pt-20 sm:pt-32 pb-6 sm:pb-10 px-3 sm:px-6 relative z-10">
      {/* ──────────── Hero ──────────── */}
      <TerminalSection>
        <div className="flex flex-col sm:flex-row items-start gap-5">
          <div className="shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-border">
              <img
                src="/photo.JPG"
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-fg-green select-none text-xs sm:text-sm mb-1">
              <span className="text-fg-green">arshad@portfolio</span>
              <span className="text-fg-dim">:~$ </span>
              <span className="text-fg-primary">whoami</span>
            </div>
            <div className="text-fg-magenta font-bold text-lg sm:text-xl mb-1">
              {profile.name}
            </div>

            <div className="text-fg-green select-none text-xs sm:text-sm mb-1 mt-3">
              <span className="text-fg-green">arshad@portfolio</span>
              <span className="text-fg-dim">:~$ </span>
              <span className="text-fg-primary">cat role.txt</span>
            </div>
            <div className="text-fg-cyan text-sm sm:text-base font-semibold">
              {"> "}{profile.role}
            </div>

            <div className="text-fg-green select-none text-xs sm:text-sm mb-1 mt-3">
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
      </TerminalSection>

      {/* ──────────── About ──────────── */}
      <TerminalSection title="arshad@portfolio — about">
        <div className="text-fg-green select-none text-xs sm:text-sm mb-2">
          <span className="text-fg-green">arshad@portfolio</span>
          <span className="text-fg-dim">:~$ </span>
          <span className="text-fg-primary">cat about.txt</span>
        </div>
        <div className="text-fg-primary leading-relaxed text-sm">
          <p>{profile.objective}</p>
        </div>
      </TerminalSection>

      {/* ──────────── Experience ──────────── */}
      <TerminalSection title="arshad@portfolio — experience">
        <div className="text-fg-green select-none text-xs sm:text-sm mb-3">
          <span className="text-fg-green">arshad@portfolio</span>
          <span className="text-fg-dim">:~$ </span>
          <span className="text-fg-primary">ls -la ~/experience</span>
        </div>
        <div className="text-border text-xs mb-3">{"─".repeat(72)}</div>
        {experiences.map((exp, i) => (
          <div key={i} className="mb-4 last:mb-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2 mb-1">
              <span className="text-fg-yellow text-xs sm:text-sm shrink-0">
                [{exp.period}]
              </span>
              <span className="text-fg-cyan font-bold text-sm">
                {exp.role}
              </span>
              <span className="text-fg-dim text-xs sm:text-sm">
                {"→"} {exp.company}
              </span>
            </div>
            <div className="ml-3 sm:ml-4 mt-1 space-y-0.5">
              {exp.bullets.map((b, j) => (
                <Bullet key={j} text={b} />
              ))}
            </div>
          </div>
        ))}
      </TerminalSection>

      {/* ──────────── Projects ──────────── */}
      <TerminalSection title="arshad@portfolio — projects">
        <div className="text-fg-green select-none text-xs sm:text-sm mb-3">
          <span className="text-fg-green">arshad@portfolio</span>
          <span className="text-fg-dim">:~$ </span>
          <span className="text-fg-primary">cat projects.json</span>
        </div>
        <div className="text-border text-xs mb-3">{"─".repeat(72)}</div>
        {projects.map((p, i) => (
          <div
            key={i}
            className="mb-4 last:mb-0 p-3 sm:p-4 border border-border rounded"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-fg-green font-bold">{">"}</span>
              <span className="text-fg-cyan font-bold text-sm">{p.name}</span>
              {p.hackathonWinner && (
                <span className="text-[10px] sm:text-xs text-fg-yellow border border-fg-yellow/30 px-1.5 py-0.5 rounded">
                  🏆 Winner
                </span>
              )}
            </div>
            <div className="text-fg-primary text-xs sm:text-sm mb-2">
              {p.description}
            </div>
            <div className="flex flex-wrap mb-2">
              {p.tech.map((t) => (
                <TechTag key={t}>{t}</TechTag>
              ))}
            </div>
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-cyan hover:text-fg-green underline decoration-dotted underline-offset-2 transition-colors text-xs sm:text-sm"
              >
                📦 Repository →
              </a>
            )}
          </div>
        ))}
      </TerminalSection>

      {/* ──────────── Skills ──────────── */}
      <TerminalSection title="arshad@portfolio — skills">
        <div className="text-fg-green select-none text-xs sm:text-sm mb-3">
          <span className="text-fg-green">arshad@portfolio</span>
          <span className="text-fg-dim">:~$ </span>
          <span className="text-fg-primary">cat skills.json</span>
        </div>
        <div className="text-xs sm:text-sm leading-relaxed whitespace-pre font-mono">
          <span className="text-fg-dim">{`{\n`}</span>
          {technicalSkills.map((cat, i) => (
            <span key={i}>
              <span className="text-fg-dim">{`  "`}</span>
              <span className="text-fg-cyan">{cat.category}</span>
              <span className="text-fg-dim">{`": [\n`}</span>
              {cat.skills.map((skill, j) => (
                <span key={skill}>
                  <span className="text-fg-dim">{`    "`}</span>
                  <span className="text-fg-yellow">{skill}</span>
                  <span className="text-fg-dim">{`"`}</span>
                  <span className="text-fg-dim">
                    {j < cat.skills.length - 1 ? "," : ""}
                  </span>
                  <span className="text-fg-dim">{"\n"}</span>
                </span>
              ))}
              <span className="text-fg-dim">{`  ]`}</span>
              <span className="text-fg-dim">
                {i < technicalSkills.length - 1 ? "," : ""}
              </span>
              <span className="text-fg-dim">{"\n"}</span>
            </span>
          ))}
          <span className="text-fg-dim">{`}`}</span>
        </div>
      </TerminalSection>

      {/* ──────────── Education ──────────── */}
      <TerminalSection title="arshad@portfolio — education">
        <div className="text-fg-green select-none text-xs sm:text-sm mb-3">
          <span className="text-fg-green">arshad@portfolio</span>
          <span className="text-fg-dim">:~$ </span>
          <span className="text-fg-primary">cat education.md</span>
        </div>
        <div className="text-border text-xs mb-3">{"─".repeat(72)}</div>
        {educationEntries.map((edu, i) => (
          <div key={i} className="mb-3 last:mb-0">
            <div className="text-fg-yellow text-xs sm:text-sm">
              # {edu.institution}
            </div>
            <div className="ml-4 text-fg-primary text-xs sm:text-sm">
              - {edu.degree}{" "}
              {edu.score ? <span className="text-fg-dim">| {edu.score}</span> : ""}
            </div>
            <div className="ml-4 text-fg-dim text-xs sm:text-sm">
              - {edu.year} • {edu.location}
            </div>
          </div>
        ))}
      </TerminalSection>

      {/* ──────────── Certifications ──────────── */}
      <TerminalSection title="arshad@portfolio — certifications">
        <div className="text-fg-green select-none text-xs sm:text-sm mb-3">
          <span className="text-fg-green">arshad@portfolio</span>
          <span className="text-fg-dim">:~$ </span>
          <span className="text-fg-primary">cat certifications.md</span>
        </div>
        <div className="text-border text-xs mb-3">{"─".repeat(72)}</div>
        {certifications.map((cert, i) => (
          <div key={i} className="mb-2 last:mb-0 flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <span className="text-fg-green text-xs sm:text-sm">✓</span>
            <span className="text-fg-primary text-xs sm:text-sm">
              {cert.name}
            </span>
            <span className="text-fg-dim text-[10px] sm:text-xs">
              ({cert.year})
            </span>
            <span className="text-fg-dim text-[10px] sm:text-xs">
              — {cert.issuer}
            </span>
            {cert.url && (
              <a
                href={cert.url}
                className="text-fg-cyan hover:text-fg-green text-[10px] sm:text-xs underline decoration-dotted underline-offset-2 transition-colors"
              >
                view
              </a>
            )}
          </div>
        ))}
      </TerminalSection>

      {/* ──────────── Contact ──────────── */}
      <TerminalSection title="arshad@portfolio — contact">
        <div className="text-fg-green select-none text-xs sm:text-sm mb-3">
          <span className="text-fg-green">arshad@portfolio</span>
          <span className="text-fg-dim">:~$ </span>
          <span className="text-fg-primary">./contact.sh</span>
        </div>
        <div className="text-fg-primary text-xs sm:text-sm mb-4">
          Open to AI engineering roles, full-stack development, and interesting
          projects.
        </div>
        <div className="text-border text-xs mb-3">{"─".repeat(72)}</div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a
            href={`mailto:${profile.email}`}
            className="text-fg-cyan hover:text-fg-green underline decoration-dotted underline-offset-2 transition-colors text-xs sm:text-sm"
          >
            📧 {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-cyan hover:text-fg-green underline decoration-dotted underline-offset-2 transition-colors text-xs sm:text-sm"
          >
            💼 LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-cyan hover:text-fg-green underline decoration-dotted underline-offset-2 transition-colors text-xs sm:text-sm"
          >
            📦 GitHub
          </a>
          <a
            href="/Arshad's%20Resume.pdf"
            target="_blank"
            className="text-fg-cyan hover:text-fg-green underline decoration-dotted underline-offset-2 transition-colors text-xs sm:text-sm"
          >
            📄 Resume
          </a>
        </div>
      </TerminalSection>
    </div>
  );
}
