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
    <header className="sticky top-0 z-30 backdrop-blur-xl bg-white/70 border-b border-black/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-charcoal to-black shadow-glow flex items-center justify-center text-mist font-display text-xl">
            S
          </div>
          <div>
            <p className="font-display text-lg tracking-tight">Specula</p>
            <p className="text-xs text-black/60">Observatorio socio-económico</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-black/70 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-charcoal"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
