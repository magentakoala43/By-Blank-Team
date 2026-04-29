import heroImg from "@/assets/blank-hero.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => (
  <section className="relative min-h-screen w-full overflow-hidden flex items-center">
    <div className="absolute inset-0 grid-pattern opacity-40" />
    <div className="absolute inset-0 bg-gradient-glow" />
    <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background" />

    <div className="relative z-10 container pt-32 pb-20">
      <div className="max-w-3xl mx-auto text-center animate-fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background/80 backdrop-blur text-xs text-foreground/80 mb-8">
          <Sparkles className="h-3.5 w-3.5 text-foreground" />
          Tu web profesional, lista en días
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] mb-6">
          Páginas web <br />
          <span className="text-gradient-brand">que venden</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          En <strong className="text-foreground">By Blank Team</strong> diseñamos webs modernas, rápidas y optimizadas
          para tu negocio. Una tarifa, sin sorpresas.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background font-medium rounded-full hover:opacity-90 transition-all"
          >
            Quiero mi web por 49,99 €
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center px-7 py-3.5 border border-border text-foreground hover:bg-secondary rounded-full transition-colors"
          >
            Ver qué incluye
          </a>
        </div>
        <p className="text-foreground/50 text-sm mt-8">
          Sin permanencia · Pago seguro por PayPal · Entregada en 1–2 días
        </p>
      </div>
    </div>
  </section>
);
