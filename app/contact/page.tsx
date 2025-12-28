export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-ink/70">Contact</p>
        <h1 className="font-display text-4xl text-charcoal">Contacto profesional</h1>
        <p className="max-w-2xl text-ink/80">
          Punto discreto de contacto para colaboración estratégica e intercambio de investigación. Sin formularios ni mensajes
          masivos; solo correo directo.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-[1fr,1fr]">
        <div className="space-y-3 rounded-3xl border border-gold/25 bg-surface/85 p-8 shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/70">Correo</p>
          <p className="font-display text-2xl text-charcoal">contacto@specula.local</p>
          <p className="text-sm text-ink/75">Respuestas programadas en ventanas semanales.</p>
          <div className="rounded-2xl border border-gold/20 bg-surface/80 p-4 text-sm text-ink/70">
            <p>Prefiere mensajes concisos con propósito claro y contexto institucional.</p>
          </div>
        </div>
        <div className="space-y-3 rounded-3xl border border-gold/25 bg-surface/85 p-8 shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/70">Perfil</p>
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full border border-dashed border-gold/30 bg-surface/70" />
            <div>
              <p className="font-display text-xl text-charcoal">Christopher Pérez Vega</p>
              <p className="text-sm text-ink/70">Investigación socio-económica e inversión.</p>
            </div>
          </div>
          <p className="text-sm text-ink/75">
            Disponible para reuniones privadas y participación en comités de inversión. No se ofrecen servicios minoristas ni
            asesoría de corto plazo.
          </p>
        </div>
      </div>
    </div>
  );
}
