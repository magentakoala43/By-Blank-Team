import { Check, Info, X } from "lucide-react";
import { useState } from "react";

const included = [
  { text: "Entrega en 1–2 días + tiempo por adiciones a gusto del consumidor." },
  {
    text: "Hosting configurado por 10 € (gestión inicial) + 1,5 €/mes con acceso al management 24/7 a través de GitHub. Sin compromiso, nosotros nos ocupamos de toda la gestión.",
  },
  { text: "Contacto de tú a tú, no hay robots de por medio. Respuestas veloces y sin tiempos de espera eternos." },
  { text: "Fácil contacto: correo, llamadas, mensajes de texto…" },
  { text: "Honrado y fiable: por ello los pagos se realizan por PayPal." },
  {
    text: "Páginas de diseño a medida sin coste extra. Tú dominas el producto final.",
    info: true,
  },
  { text: "No dejamos rastro. No nos publicitamos en tu página web." },
];

export const Pricing = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-60" />
      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-muted-foreground uppercase tracking-[0.25em] text-xs mb-4">Precio</p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Una tarifa, <span className="text-gradient-brand">sin sorpresas</span>
          </h2>
          <p className="text-foreground/70">Pago único por PayPal. Sin cuotas obligatorias. Sin permanencia.</p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="relative bg-gradient-card border border-border rounded-2xl p-10 shadow-soft">
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl font-semibold mb-2">Web profesional</h3>
              <p className="text-foreground/60 text-sm mb-6">Todo lo que tu negocio necesita</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-6xl md:text-7xl font-display font-semibold">49,99</span>
                <span className="text-2xl text-foreground/70">€</span>
              </div>
              <p className="text-foreground/50 text-sm mt-2">Pago único · IVA incluido</p>
            </div>

            <ul className="space-y-4 mb-10">
              {included.map((i, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm">
                  <div className="h-5 w-5 rounded-full bg-foreground/5 border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <span className="text-foreground/85 leading-relaxed">{i.text}</span>
                    {i.info && (
                      <button
                        onClick={() => setOpen(true)}
                        className="ml-2 inline-flex items-center gap-1 text-xs underline underline-offset-2 text-foreground/60 hover:text-foreground transition-colors"
                      >
                        <Info className="h-3 w-3" />
                        Más información
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="block w-full text-center px-7 py-4 bg-foreground text-background font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Contratar mi web ahora
            </a>
            <p className="text-center text-xs text-foreground/50 mt-4">
              Sin compromiso · Pago seguro vía PayPal
            </p>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-up"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-background border border-border rounded-2xl p-8 max-w-md w-full shadow-soft"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              className="absolute top-4 right-4 h-8 w-8 rounded-full hover:bg-secondary flex items-center justify-center transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            <h4 className="font-display text-xl font-semibold mb-3 pr-8">Sobre las previews y revisiones</h4>
            <p className="text-foreground/75 text-sm leading-relaxed">
              Puedes solicitar hasta <strong>5 previews sin coste adicional</strong> durante el desarrollo de tu web.
              A partir de la sexta, cada preview adicional tiene un coste de <strong>7,5 €</strong>.
            </p>
            <p className="text-foreground/70 text-sm leading-relaxed mt-3">
              Por ello te recomendamos agrupar todos los cambios y enviárnoslos juntos, así aprovechas al máximo
              tus revisiones gratuitas.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
