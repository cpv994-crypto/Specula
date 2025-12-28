"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface TabItem {
  href: string;
  label: string;
}

interface TerminalTabsProps {
  items: TabItem[];
}

export function TerminalTabs({ items }: TerminalTabsProps) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-2 rounded-lg border border-lines/60 bg-surface/60 p-1 shadow-inner">
      {items.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex-1 rounded-md px-4 py-2 text-center text-sm font-medium transition duration-200 ${
              isActive
                ? "bg-overlay/70 text-foreground shadow-glow"
                : "text-muted hover:text-foreground hover:bg-overlay/40"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
