import hero from "@/assets/vet-hero.jpg";
import { Star, MapPin, Clock } from "lucide-react";

export const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-soft overflow-hidden">
    <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-0" />
    <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="animate-fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full mb-6 shadow-card">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
            ))}
          </div>
          <span className="text-xs font-medium">4,9 · 206 reseñas en Google</span>
        </div>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] mb-6 text-balance">
          Cuidamos a quien <br />
          <span className="text-primary italic">más quieres.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
          Centro veterinario en A Coruña con un trato cercano, profesional y
          familiar. Tu mascota es uno más de la familia — también para nosotros.
        </p>
        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href="tel:+34981901501"
            className="inline-flex items-center px-7 py-4 bg-primary text-primary-foreground font-medium rounded-full shadow-cta hover:translate-y-[-2px] transition-transform"
          >
            Pedir cita
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center px-7 py-4 border border-border bg-card text-foreground font-medium rounded-full hover:border-primary transition-colors"
          >
            Nuestros servicios
          </a>
        </div>
        <div className="flex flex-wrap gap-6 text-sm">
          <div className="flex items-center gap-2 text-foreground/80">
            <Clock className="h-4 w-4 text-primary" />
            <span><strong className="text-primary">Abierto</strong> · Cierre 19:00</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/80">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Rúa Castiñeiras de Abaixo, 8</span>
          </div>
        </div>
      </div>

      <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
        <div className="absolute -inset-4 bg-gradient-sage rounded-[2rem] opacity-20 blur-2xl" />
        <img
          src={hero}
          alt="Veterinaria atendiendo con cariño a un perro en consulta"
          width={1920}
          height={1280}
          className="relative w-full h-[500px] object-cover rounded-[2rem] shadow-soft"
        />
        <div className="absolute -bottom-6 -left-6 bg-card p-5 rounded-2xl shadow-soft border border-border max-w-[220px] hidden sm:block">
          <p className="font-serif text-3xl text-primary leading-none mb-1">+15</p>
          <p className="text-xs text-muted-foreground">Años cuidando a las familias de A Coruña</p>
        </div>
      </div>
    </div>
  </section>
);
