import { ReactNode } from "react";

interface TerminalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function TerminalLink({ href, children, className = "" }: TerminalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-fg-cyan hover:underline hover:brightness-125 transition-all duration-150 ${className}`}
    >
      {children}
    </a>
  );
}
