import type { HTMLAttributes, ReactNode } from "react";

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Panel({ children, className = "", ...props }: PanelProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-lines/60 bg-surface/70 shadow-inner backdrop-blur-sm transition duration-200 ${className}`}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-foreground/2 via-transparent to-accent/5" aria-hidden />
      <div className="relative">{children}</div>
    </div>
  );
}
