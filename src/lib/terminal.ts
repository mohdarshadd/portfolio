export function formatPrompt(username: string, hostname: string, dir: string): string {
  return `${username}@${hostname}${dir} $`;
}

export function buildPrompt(): string {
  return "arshad@portfolio:~$";
}

export function wrapText(text: string, maxWidth: number): string[] {
  if (text.length <= maxWidth) return [text];
  const lines: string[] = [];
  let current = "";
  for (const word of text.split(" ")) {
    if ((current + " " + word).trim().length > maxWidth) {
      lines.push(current.trim());
      current = word;
    } else {
      current += " " + word;
    }
  }
  if (current.trim()) lines.push(current.trim());
  return lines;
}

export function repeatChar(char: string, count: number): string {
  return char.repeat(count);
}

export function padRight(text: string, width: number): string {
  return text + " ".repeat(Math.max(0, width - text.length));
}

export function padLeft(text: string, width: number): string {
  return " ".repeat(Math.max(0, width - text.length)) + text;
}

export interface TableColumn {
  header: string;
  width: number;
  align?: "left" | "right";
}

export function formatTable(columns: TableColumn[], rows: string[][]): string[] {
  const lines: string[] = [];

  const headerLine = columns
    .map((col, i) => {
      const cell = rows[0]?.[i] ?? "";
      return col.align === "right" ? padLeft(cell, col.width) : padRight(cell, col.width);
    })
    .join("  ");
  lines.push(headerLine);

  const separator = columns.map((col) => repeatChar("─", col.width)).join("  ");
  lines.push(separator);

  for (let r = 1; r < rows.length; r++) {
    const line = columns
      .map((col, i) => {
        const cell = rows[r]?.[i] ?? "";
        return col.align === "right" ? padLeft(cell, col.width) : padRight(cell, col.width);
      })
      .join("  ");
    lines.push(line);
  }

  return lines;
}
