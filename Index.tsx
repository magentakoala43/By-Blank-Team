import { useEffect } from "react";
import { Navbar } from "@/components/blank/Navbar";
import { Hero } from "@/components/blank/Hero";
import { Features } from "@/components/blank/Features";
import { Process } from "@/components/blank/Process";
import { Pricing } from "@/components/blank/Pricing";
import { FAQ } from "@/components/blank/FAQ";
import { Contact, Footer } from "@/components/blank/Contact";

const Index = () => {
  useEffect(() => {
    document.title = "By Blank Team · Webs profesionales por 49,99 €";
    const meta =
      document.querySelector('meta[name="description"]') ||
      (() => {
        const m = document.createElement("meta");
        m.setAttribute("name", "description");
        document.head.appendChild(m);
        return m;
      })();
    meta.setAttribute(
      "content",
      "By Blank Team diseña webs profesionales, rápidas y a medida por 49,99 €. Pago único, entrega en 5–7 días, SEO incluido."
    );
  }, []);

  return (
    <main className="bg-background pb-20">
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
