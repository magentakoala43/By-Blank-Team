import { MapPin, Phone, Clock, UtensilsCrossed, Star } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Horario",
    lines: ["Abierto hoy", "Cierre: 21:00"],
  },
  {
    icon: Phone,
    title: "Reservas",
    lines: ["Reserva obligatoria", "612 57 76 40"],
    href: "tel:+34612577640",
  },
  {
    icon: MapPin,
    title: "Dirección",
    lines: ["Feáns, 66", "15190 A Coruña"],
    href: "https://www.google.com/maps/search/?api=1&query=Parrillada+O+Mui%C3%B1o+dos+Leons+Fe%C3%A1ns+66+A+Coru%C3%B1a",
  },
  {
    icon: UtensilsCrossed,
    title: "A domicilio",
    lines: ["Servicio por Just Eat", "5/5 ★ · 9 reseñas"],
    href: "https://www.just-eat.es/restaurants-parrillada-o-muino-dos-leons-a-coruna",
  },
];

export const Contact = () => (
  <section id="contacto" className="py-24 md:py-32 bg-charcoal text-charcoal-foreground relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-fire opacity-30" />
    <div className="container relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">Visítanos</p>
        <h2 className="font-serif text-4xl md:text-6xl mb-6">
          Reserva tu <span className="italic text-accent">mesa</span>
        </h2>
        <div className="flex items-center justify-center gap-2 mb-4 text-accent">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-accent" : ""}`} />
          ))}
          <span className="text-sm text-charcoal-foreground/80 ml-2">
            4,1 en Google · 752 reseñas
          </span>
        </div>
        <p className="text-charcoal-foreground/70">
          Te esperamos con la brasa encendida. Terraza y comedor privado disponibles.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {items.map((it) => {
          const Wrapper: any = it.href ? "a" : "div";
          const wrapperProps = it.href
            ? { href: it.href, target: it.href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" }
            : {};
          return (
            <Wrapper
              key={it.title}
              {...wrapperProps}
              className="block border border-charcoal-foreground/15 p-8 text-center hover:border-accent/40 hover:bg-accent/5 transition-colors"
            >
              <it.icon className="h-7 w-7 mx-auto text-accent mb-4" />
              <p className="font-serif text-xl mb-2">{it.title}</p>
              {it.lines.map((l) => (
                <p key={l} className="text-sm text-charcoal-foreground/70">{l}</p>
              ))}
            </Wrapper>
          );
        })}
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="tel:+34612577640"
          className="inline-flex items-center px-10 py-4 bg-gradient-ember text-primary-foreground font-medium tracking-wide shadow-glow hover:shadow-warm transition-all rounded-sm"
        >
          Llamar para reservar
        </a>
        <a
          href="https://www.just-eat.es/restaurants-parrillada-o-muino-dos-leons-a-coruna"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center px-10 py-4 bg-[#FF8000] text-white font-medium tracking-wide hover:opacity-90 transition-opacity rounded-sm"
        >
          Pedir en Just Eat
        </a>
      </div>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="bg-charcoal border-t border-charcoal-foreground/10 text-charcoal-foreground/60 py-8">
    <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
      <p>© {new Date().getFullYear()} Parrillada O Muíño dos Leóns · Feáns, 66 · A Coruña</p>
      <p className="font-serif italic text-accent">Del fuego a la mesa.</p>
    </div>
  </footer>
);
