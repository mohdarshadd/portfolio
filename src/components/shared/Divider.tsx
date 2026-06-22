interface DividerProps {
  length?: number;
  className?: string;
}

export function Divider({ length = 70, className = "text-border" }: DividerProps) {
  return (
    <div className={className}>
      {"─".repeat(length)}
    </div>
  );
}
