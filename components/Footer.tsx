export function Footer() {
  return (
    <footer className="border-t border-lines/60 bg-base/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="font-display text-sm text-foreground">SPECULA</p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted">Futuristic observation terminal</p>
        </div>
        <div className="flex flex-wrap gap-3 text-[12px]">
          <p className="text-muted">Christopher Pérez Vega</p>
          <span className="text-lines">/</span>
          <a className="text-foreground hover:text-accent" href="mailto:contacto@specula.local">
            contacto@specula.local
          </a>
        </div>
      </div>
    </footer>
  );
}
