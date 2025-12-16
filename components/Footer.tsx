export function Footer() {
  return (
    <footer className="border-t border-gold/30 bg-surface/85">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-ink/75 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg text-charcoal">Specula</p>
          <p>Observatorio y atalaya para la investigación socio-económica.</p>
        </div>
        <div className="flex gap-4">
          <a
            className="underline-offset-4 hover:underline hover:decoration-gold"
            href="mailto:contacto@specula.local"
          >
            contacto@specula.local
          </a>
          <span className="hidden sm:inline">/</span>
          <p className="text-ink/60">Christopher Pérez Vega</p>
        </div>
      </div>
    </footer>
  );
}
