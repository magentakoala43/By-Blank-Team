import { PawPrint, Phone } from "lucide-react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#contacto", label: "Contacto" },
];

export const Navbar = () => (
  <header className="absolute top-0 left-0 right-0 z-30">
    <nav className="container flex items-center justify-between py-6">
      <a href="#" className="flex items-center gap-2 text-primary">
        <div className="h-10 w-10 rounded-full bg-gradient-sage flex items-center justify-center">
          <PawPrint className="h-5 w-5 text-primary-foreground" />
        </div>
        <span className="font-serif text-xl font-semibold">Centro Veterinario Nos</span>
      </a>
      <ul className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
          </li>
        ))}
      </ul>
      <a
        href="tel:+34981901501"
        className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-full shadow-cta"
      >
        <Phone className="h-4 w-4" /> 981 90 15 01
      </a>
    </nav>
  </header>
);
