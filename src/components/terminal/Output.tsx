"use client";

import { ReactNode } from "react";

interface OutputProps {
  children: ReactNode;
}

export function Output({ children }: OutputProps) {
  return <div className="mb-1">{children}</div>;
}
