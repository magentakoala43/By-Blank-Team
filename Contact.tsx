import pets from "@/assets/vet-pets.jpg";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export const Contact = () => (
  <section id="contacto" className="py-24 md:py-32 bg-gradient-soft">
    <div className="container">
      <div className="bg-primary text-primary-foreground rounded-[2rem] overflow-hidden shadow-soft grid lg:grid-cols-[1.3fr_1fr]">
        <div className="p-10 md:p-16">
          <p className="text-primary-foreground/70 uppercase tracking-[0.25em] text-xs font-semibold mb-4">Contacto</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight text-balance">
            ¿Necesitas <span className="italic">cita</span> o tienes una urgencia?
          </h2>
          <p className="text-primary-foreground/80 mb-10 max-w-md leading-relaxed">
            Llámanos o pásate por la clínica. Te atendemos con la calma que tu
            mascota merece.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-primary-foreground/60">Teléfono</p>
                <a href="tel:+34981901501" className="font-medium hover:text-accent transition-colors">981 90 15 01</a>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-primary-foreground/60">Horario</p>
                <p className="font-medium">Abierto · Cierre 19:00</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-primary-foreground/60">Dirección</p>
                <p className="font-medium">Rúa Castiñeiras de Abaixo, 8</p>
                <p className="text-sm text-primary-foreground/70">15006 A Coruña</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-primary-foreground/60">Cómo llegar</p>
                <a
                  href="https://maps.google.com/?q=Rúa+Castiñeiras+de+Abaixo+8+A+Coruña"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium hover:text-accent transition-colors"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </div>

          <a
            href="tel:+34981901501"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-medium rounded-full shadow-cta hover:translate-y-[-2px] transition-transform"
          >
            <Phone className="h-4 w-4" /> Llamar ahora
          </a>
        </div>

        <div className="relative bg-sage-soft hidden lg:block">
          <img
            src={pets}
            alt="Cachorro y gatito felices"
            width={1024}
            height={1024}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="bg-card border-t border-border py-8">
    <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Centro Veterinario Nos · A Coruña</p>
      <p className="font-serif italic text-primary">Cuidamos a quien más quieres.</p>
    </div>
  </footer>
);
