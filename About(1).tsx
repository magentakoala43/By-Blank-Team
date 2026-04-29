import interior from "@/assets/interior.jpg";

export const About = () => (
  <section id="nosotros" className="py-24 md:py-32 bg-cream">
    <div className="container grid md:grid-cols-2 gap-12 md:gap-20 items-center">
      <div className="relative">
        <img
          src={interior}
          alt="Interior del restaurante con piedra y chimenea"
          width={1600}
          height={1100}
          loading="lazy"
          className="w-full h-[520px] object-cover shadow-warm"
        />
        <div className="absolute -bottom-6 -right-6 bg-charcoal text-charcoal-foreground p-8 max-w-[220px] hidden md:block">
          <p className="font-serif text-5xl text-accent leading-none">25+</p>
          <p className="text-sm mt-2 uppercase tracking-widest">Años al fuego</p>
        </div>
      </div>
      <div>
        <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4">
          Nuestra casa
        </p>
        <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
          Del campo y del mar, <br />
          <span className="italic text-primary">directo a la brasa.</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Somos un restaurante familiar y cuidado, dedicado a los pescados de
          lonja y a las carnes de crianza propia. Cada plato pasa por las
          brasas con respeto al producto y al tiempo.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Una cocina honesta donde el fuego es el alma, y la mesa, el lugar
          donde se reúnen amigos y familia.
        </p>
        <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
          <div>
            <p className="font-serif text-3xl text-primary">A la brasa</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Tradición</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-primary">De lonja</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Pescado fresco</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-primary">Propia</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Crianza</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
