const steps = [
  { n: "01", title: "Transmítenos tu diseño", text: "Haz una llamada, manda un mensaje o envía un correo con tu idea y nosotros te contactamos." },
  { n: "02", title: "Proceso creativo", text: "Construimos tu idea según tus indicaciones." },
  { n: "03", title: "Lo subimos por ti", text: "Por una pequeña tarifa de 1,5 € al mes ofrecemos hosting, configuración y management." },
];

export const Process = () => (
  <section id="process" className="py-24 md:py-32 bg-secondary/30 border-y border-border">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-muted-foreground uppercase tracking-[0.25em] text-xs mb-4">Proceso</p>
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Simple. <span className="text-gradient-brand">Rápido. Eficaz.</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((s) => (
          <div key={s.n} className="relative bg-gradient-card border border-border rounded-2xl p-8">
            <div className="text-5xl font-display font-semibold text-gradient-brand mb-6">{s.n}</div>
            <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-foreground/65 leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
