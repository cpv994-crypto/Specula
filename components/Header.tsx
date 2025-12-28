import Link from "next/link";
import { TerminalTabs } from "@/components/ui/TerminalTabs";

const navItems = [
  { href: "/", label: "Terminal" },
  { href: "/about", label: "Marco" },
  { href: "/research", label: "Investigación" },
  { href: "/resources", label: "Recursos" },
  { href: "/contact", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-lines/60 bg-base/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-3">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-muted">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md border border-lines/60 bg-overlay/70 text-sm font-display text-foreground">
              S
            </div>
            <div className="space-y-0.5">
              <Link href="/" className="flex items-center gap-2 text-foreground">
                <span className="font-display text-base leading-none">SPECULA</span>
                <span className="h-[6px] w-[6px] rounded-full bg-accent shadow-glow" aria-hidden />
              </Link>
              <p className="text-[10px] tracking-[0.24em] text-muted">Observation Terminal</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[10px]">
            <span className="flex items-center gap-2 text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden />
              Signal stable
            </span>
            <span className="flex items-center gap-2 text-muted">
              <span className="h-1.5 w-1.5 rounded-full border border-lines/60" aria-hidden />
              Secure link
            </span>
            <span className="flex items-center gap-2 text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-amber/80" aria-hidden />
              UTC aligned
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-4">
        <TerminalTabs items={navItems} />
      </div>
    </header>
  );
}
