"use client";

import { useEffect, useState } from "react";

interface CursorProps {
  visible?: boolean;
}

export function Cursor({ visible = true }: CursorProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!visible) {
      setShow(true);
      return;
    }
    const interval = setInterval(() => {
      setShow((v) => !v);
    }, 530);
    return () => clearInterval(interval);
  }, [visible]);

  if (!visible) return null;

  return (
    <span
      className={`inline-block w-[9px] h-[18px] bg-fg-green align-middle ml-0.5 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      style={{ transition: "opacity 0.1s" }}
    >
      {"\u00A0"}
    </span>
  );
}
