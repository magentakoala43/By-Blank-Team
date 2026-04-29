import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "¿Por qué solo 49,99 €?", a: "Hemos optimizado nuestro proceso para ofrecer webs profesionales a un precio justo. Una tarifa única, sin costes ocultos." },
  { q: "¿Cómo se realiza el pago? ¿Es seguro?", a: "El pago se realiza íntegramente a través de PayPal, una de las pasarelas más seguras del mundo. PayPal protege cada transacción con cifrado de extremo a extremo y ofrece protección al comprador, por lo que nunca compartes tus datos bancarios con nosotros." },
  { q: "¿Qué incluye el hosting?", a: "Configuración inicial del hosting por 10 € (pago único) y mantenimiento por 1,5 €/mes, con acceso al management 24/7 a través de GitHub. Sin compromiso ni permanencia: si decides irte, te llevas tu web." },
  { q: "¿Cuánto tarda la entrega?", a: "Entre 1 y 2 días laborables, más el tiempo necesario para las adiciones y cambios que pidas durante el desarrollo." },
  { q: "¿Cuántas revisiones incluye?", a: "Hasta 5 previews sin coste adicional. A partir de la sexta, cada preview tiene un coste de 7,5 €. Por eso recomendamos agrupar todos los cambios juntos." },
  { q: "¿Qué necesitáis de mí?", a: "Información básica de tu negocio: textos, logo si tienes, fotos y un par de referencias visuales que te gusten. Te guiamos en cada paso." },
  { q: "¿Aparecerá publicidad vuestra en mi web?", a: "Nunca. No dejamos rastro ni nos publicitamos en tu página. La web es 100 % tuya." },
];

export const FAQ = () => (
  <section id="faq" className="py-24 md:py-32 bg-secondary/40 border-y border-border">
    <div className="container max-w-3xl">
      <div className="text-center mb-14">
        <p className="text-muted-foreground uppercase tracking-[0.25em] text-xs mb-4">Preguntas frecuentes</p>
        <h2 className="text-4xl md:text-5xl font-semibold">
          ¿Tienes <span className="text-gradient-brand">dudas?</span>
        </h2>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="bg-background border border-border rounded-xl px-6"
          >
            <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-foreground/70 leading-relaxed pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
