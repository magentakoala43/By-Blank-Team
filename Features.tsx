import { useState } from "react";
import { Smartphone, Zap, Search, Palette, Server, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const features = [
  { icon: Palette, title: "Diseño a medida", text: "Identidad visual propia, no plantillas reutilizadas." },
  { icon: Smartphone, title: "100% responsive", text: "Perfecta en móvil, tablet y escritorio." },
  { icon: Zap, title: "Carga ultrarrápida", text: "Optimizada para Core Web Vitals." },
  { icon: Search, title: "SEO base incluido", text: "Metadatos, sitemap y semántica lista para Google." },
  {
    icon: Server,
    title: "Hosting y management",
    text: "Configurado por 10 € al gusto del consumidor por gestión inicial + 1,5 € al mes con acceso al Management 24/7 a través de GitHub, sin compromiso. Nosotros nos ocupamos de toda la gestión.",
  },
  {
    icon: MessageCircle,
    title: "Fácil contacto: correo, llamadas, mensajes de texto…",
    text: "Contacto de tú a tú, sin robots de por medio. Respuestas veloces y sin tiempos de espera eternos.",
    highlight: true,
  },
];

export const Features = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-muted-foreground uppercase tracking-[0.25em] text-xs mb-4">Qué incluye</p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Todo lo que necesitas, <span className="text-gradient-brand">nada de relleno</span>
          </h2>
          <p className="text-foreground/70">
            Una web profesional con todo lo esencial para empezar a captar clientes hoy mismo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => {
            const isHighlight = f.highlight;
            const Wrapper: React.ElementType = isHighlight ? "button" : "div";
            return (
              <Wrapper
                key={f.title}
                onClick={isHighlight ? () => setOpen(true) : undefined}
                className={
                  isHighlight
                    ? "text-left bg-sky-100 border border-sky-300 rounded-2xl p-7 hover:bg-sky-200 hover:border-sky-400 transition-colors cursor-pointer"
                    : "bg-gradient-card border border-border rounded-2xl p-7 hover:border-primary/40 transition-colors"
                }
              >
                <div
                  className={
                    isHighlight
                      ? "h-11 w-11 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center mb-5"
                      : "h-11 w-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5"
                  }
                >
                  <f.icon className={isHighlight ? "h-5 w-5 text-sky-700" : "h-5 w-5 text-primary"} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className={isHighlight ? "text-sky-900/80 text-sm leading-relaxed" : "text-foreground/65 text-sm leading-relaxed"}>
                  {f.text}
                </p>
              </Wrapper>
            );
          })}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Disponibilidad</DialogTitle>
            <DialogDescription className="text-base text-foreground/80 pt-2">
              Disponibilidad de 17:45 a 22:00 días laborables.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};
