export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-black/60">Contact</p>
        <h1 className="font-display text-4xl text-charcoal">Contacto y colaboración</h1>
        <p className="max-w-2xl text-black/70">
          Escríbeme para coordinar sesiones de investigación, propuestas de colaboración o invitaciones a foros estratégicos.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-3 rounded-2xl border border-black/5 bg-white/80 p-6 shadow-sm">
          <h2 className="font-display text-xl text-charcoal">Líneas de trabajo</h2>
          <ul className="space-y-2 text-sm text-black/80">
            <li>Investigación socio-económica aplicada a tecnología e instituciones.</li>
            <li>Diseño de marcos de riesgo para empresas cercanas al Estado y al capital estratégico.</li>
            <li>Valoraciones disciplinadas y construcción de carteras resilientes.</li>
          </ul>
        </div>
        <div className="space-y-3 rounded-2xl border border-black/5 bg-white/80 p-6 shadow-sm">
          <h2 className="font-display text-xl text-charcoal">Contacto directo</h2>
          <p className="text-sm text-black/70">Correo: contacto@specula.local</p>
          <p className="text-sm text-black/70">Ciudad base: Madrid / remoto.</p>
          <p className="text-sm text-black/70">Disponibilidad: sesiones mensuales y proyectos puntuales.</p>
        </div>
      </div>
    </div>
  );
}
