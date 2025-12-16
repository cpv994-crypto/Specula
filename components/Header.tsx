import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-gold/30 bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-navy to-charcoal text-mist shadow-glow font-display text-xl">
            S
          </div>
          <div>
            <p className="font-display text-lg tracking-tight">Specula</p>
            <p className="text-xs text-ink/70">Observatorio socio-económico</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink/80 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-navy hover:underline hover:decoration-gold hover:decoration-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
