import meat from "@/assets/dish-meat.webp";
import fish from "@/assets/dish-fish.webp";
import seafood from "@/assets/dish-seafood.webp";

const categories = [
  {
    img: meat,
    title: "Carnes a la brasa",
    desc: "Chuletón de vaca madurada, entrecot y secreto, asados al carbón.",
    items: [
      { name: "Chuletón de vaca", price: "48€/kg" },
      { name: "Entrecot premium", price: "26€" },
      { name: "Costilla ibérica", price: "19€" },
    ],
  },
  {
    img: fish,
    title: "Pescados de lonja",
    desc: "Lo mejor del día, traído directo del puerto a las brasas.",
    items: [
      { name: "Rodaballo a la brasa", price: "S/M" },
      { name: "Lubina salvaje", price: "32€" },
      { name: "Bacalao a la gallega", price: "22€" },
    ],
  },
  {
    img: seafood,
    title: "Mariscada",
    desc: "Marisco gallego seleccionado, cocido o a la plancha.",
    items: [
      { name: "Bogavante a la plancha", price: "S/M" },
      { name: "Percebes", price: "S/M" },
      { name: "Langostinos", price: "24€" },
    ],
  },
];

export const Menu = () => (
  <section id="menu" className="py-24 md:py-32 bg-charcoal text-charcoal-foreground">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">La carta</p>
        <h2 className="font-serif text-4xl md:text-6xl mb-6">
          Menú de la <span className="italic text-accent">brasa</span>
        </h2>
        <p className="text-charcoal-foreground/70 leading-relaxed">
          Producto, fuego y tiempo. Una selección que cambia con la temporada
          y con lo que llega cada mañana de la lonja.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((c) => (
          <article
            key={c.title}
            className="group bg-charcoal-foreground/[0.03] border border-charcoal-foreground/10 hover:border-accent/40 transition-colors"
          >
            <div className="overflow-hidden aspect-[4/3]">
              <img
                src={c.img}
                alt={c.title}
                width={1024}
                height={768}
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <h3 className="font-serif text-2xl mb-2">{c.title}</h3>
              <p className="text-sm text-charcoal-foreground/60 mb-6">{c.desc}</p>
              <ul className="space-y-3">
                {c.items.map((i) => (
                  <li
                    key={i.name}
                    className="flex justify-between items-baseline border-b border-dashed border-charcoal-foreground/15 pb-2 text-sm"
                  >
                    <span>{i.name}</span>
                    <span className="text-accent font-medium">{i.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-block px-8 py-6 border border-accent/30 bg-accent/5">
          <p className="font-serif text-2xl mb-1">Menú del día</p>
          <p className="text-charcoal-foreground/70 text-sm mb-3">
            Entrante, principal, postre y bebida
          </p>
          <p className="font-serif text-4xl text-accent">13,50€</p>
        </div>
      </div>
    </div>
  </section>
);
