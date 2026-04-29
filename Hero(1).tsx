import heroImg from "@/assets/hero-grill.jpg";
import { Star } from "lucide-react";

export const Hero = () => (
  <section className="relative min-h-screen w-full overflow-hidden">
    <img
      src={heroImg}
      alt="Chuletón a la brasa sobre brasas"
      width={1920}
      height={1280}
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-dark" />
    <div className="absolute inset-0 bg-gradient-fire opacity-60" />

    <div className="relative z-10 container flex min-h-screen flex-col justify-center pt-24 pb-16">
      <div className="max-w-2xl animate-fade-up">
        <div className="flex items-center gap-2 mb-6 text-accent">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-accent" />
          ))}
          <span className="text-sm text-charcoal-foreground/80 ml-2">
            4,1 · 752 reseñas en Google
          </span>
        </div>
        <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">
          Parrillada Galega
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-charcoal-foreground leading-[1.05] mb-6">
          O Muíño <br />
          <span className="text-gradient-ember">dos Leóns</span>
        </h1>
        <p className="text-lg md:text-xl text-charcoal-foreground/80 max-w-xl mb-10 leading-relaxed">
          Pescado fresco de lonja y carnes de crianza propia, hechas a la brasa.
          Una casa familiar dedicada al fuego, al producto y a la mesa.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="tel:+34612577640"
            className="inline-flex items-center px-8 py-4 bg-gradient-ember text-primary-foreground font-medium tracking-wide shadow-glow hover:shadow-warm transition-all rounded-sm"
          >
            Reservar · 612 57 76 40
          </a>
          <a
            href="https://www.just-eat.es/restaurants-parrillada-o-muino-dos-leons-a-coruna"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-8 py-4 border border-charcoal-foreground/40 text-charcoal-foreground hover:bg-charcoal-foreground hover:text-charcoal transition-colors rounded-sm"
          >
            Pedir en Just Eat
          </a>
        </div>
        <p className="text-charcoal-foreground/60 text-sm mt-6">
          Feáns, 66 · 15190 A Coruña · 10–20 € por persona · Reserva obligatoria
        </p>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-charcoal-foreground/60 text-xs tracking-widest uppercase">
      Abierto · Cierre 21:00
    </div>
  </section>
);
