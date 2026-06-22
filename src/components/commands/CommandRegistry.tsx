"use client";

import { ReactNode } from "react";
import { Help } from "./Help";
import { Whoami } from "./Whoami";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Certifications } from "./Certifications";
import { Contact } from "./Contact";
import { Resume } from "./Resume";
import { Neofetch } from "./Neofetch";
import { Banner } from "./Banner";

export interface CommandHandler {
  (args: Record<string, string>, onComplete: () => void): ReactNode;
}

export function createCommandRegistry(): Record<string, CommandHandler> {
  return {
    help: (_args, onComplete) => <Help onComplete={onComplete} />,
    whoami: (_args, onComplete) => <Whoami onComplete={onComplete} />,
    about: (_args, onComplete) => <About onComplete={onComplete} />,
    skills: (_args, onComplete) => <Skills onComplete={onComplete} />,
    projects: (args, onComplete) => (
      <Projects args={args} onComplete={onComplete} />
    ),
    experience: (_args, onComplete) => (
      <Experience onComplete={onComplete} />
    ),
    education: (_args, onComplete) => (
      <Education onComplete={onComplete} />
    ),
    certifications: (_args, onComplete) => (
      <Certifications onComplete={onComplete} />
    ),
    contact: (_args, onComplete) => <Contact onComplete={onComplete} />,
    resume: (_args, onComplete) => <Resume onComplete={onComplete} />,
    neofetch: (_args, onComplete) => <Neofetch onComplete={onComplete} />,
    banner: (_args, onComplete) => <Banner onComplete={onComplete} />,
  };
}
