import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Riben Maister",
    when: "Hace 4 meses",
    rating: 5,
    text: "Fuimos a cenar y quedamos encantados. Tienen menús con pescados, carnes y marisco de mucha calidad, todo preparado con mimo. Las chuletas de vaca estaban espectaculares.",
  },
  {
    name: "Maritza Murillo",
    when: "Hace 5 meses",
    rating: 5,
    text: "Uno de los mejores lugares para un café, una caña... pero sin duda la cereza del pastel es ir por la carne. La comida es un espectáculo y los precios muy buenos.",
  },
  {
    name: "Just Eat",
    when: "Reseña verificada",
    rating: 5,
    text: "Puntuación perfecta de los clientes en Just Eat. Pedidos a domicilio cuidados como si comieran en casa.",
  },
];

export const Reviews = () => (
  <section id="resenas" className="py-24 md:py-32 bg-cream">
    <div className="container">
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 mb-16 items-end">
        <div>
          <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4">Reseñas</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Lo que dicen <br />
            <span className="italic text-primary">nuestros comensales</span>
          </h2>
        </div>
        <div className="flex items-end gap-8">
          <div>
            <p className="font-serif text-6xl text-primary">4,1</p>
            <div className="flex gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-accent text-accent" : "text-muted-foreground"}`} />
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">Google · 752</p>
          </div>
          <div className="border-l border-border pl-8">
            <p className="font-serif text-6xl text-primary">5,0</p>
            <div className="flex gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">Just Eat · 9</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <article key={r.name} className="bg-card p-8 shadow-soft border border-border relative">
            <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />
            <div className="flex gap-1 mb-4">
              {[...Array(r.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground/80 leading-relaxed mb-6 italic">"{r.text}"</p>
            <div className="border-t border-border pt-4">
              <p className="font-medium">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.when}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
