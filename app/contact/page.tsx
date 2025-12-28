import { Panel } from "@/components/ui/Panel";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        label="Contact"
        title="Contacto y colaboración"
        description="Coordinación de sesiones de investigación, colaboración estratégica y participación en foros cerrados."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <Panel className="space-y-3 border-lines/80 bg-surface/70 p-6">
          <h2 className="font-display text-xl text-foreground">Líneas de trabajo</h2>
          <ul className="space-y-2 text-sm text-muted">
            <li>Investigación socio-económica aplicada a tecnología e instituciones.</li>
            <li>Diseño de marcos de riesgo para empresas cercanas al Estado y al capital estratégico.</li>
            <li>Valoraciones disciplinadas y construcción de carteras resilientes.</li>
          </ul>
        </Panel>
        <Panel className="space-y-3 border-lines/80 bg-overlay/70 p-6">
          <h2 className="font-display text-xl text-foreground">Contacto directo</h2>
          <p className="text-sm text-muted">Correo: contacto@specula.local</p>
          <p className="text-sm text-muted">Ciudad base: Madrid / remoto.</p>
          <p className="text-sm text-muted">Disponibilidad: sesiones mensuales y proyectos puntuales.</p>
        </Panel>
      </div>
    </div>
  );
}
