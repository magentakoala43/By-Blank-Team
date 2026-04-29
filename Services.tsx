import { Stethoscope, Syringe, Scissors, HeartPulse, Microscope, Ambulance } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "Consulta general", desc: "Revisiones, diagnóstico y seguimiento personalizado." },
  { icon: Syringe, title: "Vacunación", desc: "Calendario completo para perros, gatos y exóticos." },
  { icon: HeartPulse, title: "Urgencias", desc: "Atendemos imprevistos con la rapidez que necesitas." },
  { icon: Microscope, title: "Laboratorio", desc: "Pruebas y analíticas con resultados el mismo día." },
  { icon: Scissors, title: "Cirugía", desc: "Quirófano equipado con anestesia segura y monitorizada." },
  { icon: Ambulance, title: "Hospitalización", desc: "Cuidados intensivos y observación 24h cuando hace falta." },
];

export const Services = () => (
  <section id="servicios" className="py-24 md:py-32">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-primary uppercase tracking-[0.25em] text-xs font-semibold mb-4">Servicios</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-5 text-balance">
          Todo lo que tu mascota <span className="italic text-primary">necesita</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Un equipo veterinario completo bajo un mismo techo, con instalaciones
          modernas y trato familiar.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => (
          <article
            key={s.title}
            className="group p-8 bg-card border border-border rounded-2xl shadow-card hover:shadow-soft hover:border-primary/40 hover:-translate-y-1 transition-all"
          >
            <div className="h-14 w-14 rounded-2xl bg-sage-soft flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <s.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-serif text-xl mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
