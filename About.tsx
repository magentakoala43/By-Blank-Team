import clinic from "@/assets/vet-clinic.jpg";
import cat from "@/assets/vet-cat.jpg";
import { Check } from "lucide-react";

const points = [
  "Trato cercano, paciente y respetuoso con cada mascota",
  "Equipo con amplia experiencia en pequeños animales y exóticos",
  "Instalaciones modernas, limpias y diseñadas para reducir el estrés",
  "Comunicación clara y honesta con las familias",
];

export const About = () => (
  <section id="nosotros" className="py-24 md:py-32 bg-sage-soft">
    <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div className="relative h-[520px]">
        <img
          src={clinic}
          alt="Interior moderno y luminoso del centro veterinario"
          width={1280}
          height={1024}
          loading="lazy"
          className="absolute top-0 left-0 w-[75%] h-[380px] object-cover rounded-3xl shadow-soft"
        />
        <img
          src={cat}
          alt="Gatito siendo atendido con guantes en consulta"
          width={1024}
          height={1024}
          loading="lazy"
          className="absolute bottom-0 right-0 w-[55%] h-[300px] object-cover rounded-3xl shadow-soft border-4 border-background"
        />
      </div>
      <div>
        <p className="text-primary uppercase tracking-[0.25em] text-xs font-semibold mb-4">Nosotros</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight text-balance">
          Una familia <span className="italic text-primary">cuidando</span> a la tuya.
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          En Centro Veterinario Nos sabemos lo importante que es tu mascota.
          Por eso te atendemos con calma, escuchamos tus dudas y tratamos a
          cada animal como si fuera nuestro.
        </p>
        <ul className="space-y-3 mb-8">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <span className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Check className="h-3 w-3 text-primary" strokeWidth={3} />
              </span>
              <span className="text-foreground/85">{p}</span>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-3 gap-4 border-t border-border pt-8">
          <div>
            <p className="font-serif text-3xl text-primary">4,9</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Google</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-primary">206</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Reseñas</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-primary">+15</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Años</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
