import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ainhoa Sánchez",
    when: "Hace 2 meses",
    text: "Iba muy asustada porque mi perrita es muy importante para mí, pero ellos la supieron tratar como una más de la familia y con el cuidado justo para que estuviera tranquila.",
  },
  {
    name: "Carlos Cano Paredes",
    when: "Hace 4 meses",
    text: "Llevamos a nuestro gato a urgencias y tuvimos la gran suerte de que nos atendiese Vanesa. Más allá de realizarle todas las pruebas, su trato fue inmejorable.",
  },
  {
    name: "Ezgi Kalkan",
    when: "Hace un año",
    text: "Tengo un perro con miedo a las personas, suele necesitar adaptación y evitar ser invasivo. Aún así, lo trataron con paciencia y cariño. Mil gracias.",
  },
];

export const Reviews = () => (
  <section id="resenas" className="py-24 md:py-32">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-primary uppercase tracking-[0.25em] text-xs font-semibold mb-4">Reseñas</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-5 text-balance">
          Lo que dicen las <span className="italic text-primary">familias</span>
        </h2>
        <div className="inline-flex items-center gap-3 mt-2">
          <span className="font-serif text-5xl text-primary">4,9</span>
          <div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Google · 206 reseñas</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <article
            key={r.name}
            className="bg-card border border-border rounded-3xl p-8 shadow-card relative hover:shadow-soft transition-shadow"
          >
            <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground/85 leading-relaxed mb-6">"{r.text}"</p>
            <div className="flex items-center gap-3 border-t border-border pt-4">
              <div className="h-10 w-10 rounded-full bg-gradient-sage text-primary-foreground flex items-center justify-center font-serif">
                {r.name[0]}
              </div>
              <div>
                <p className="font-medium text-sm">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.when}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
