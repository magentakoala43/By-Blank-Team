import { Flame } from "lucide-react";

const links = [
  { href: "#menu", label: "Menú" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#contacto", label: "Contacto" },
];

export const Navbar = () => (
  <header className="absolute top-0 left-0 right-0 z-30">
    <nav className="container flex items-center justify-between py-6">
      <a href="#" className="flex items-center gap-2 text-charcoal-foreground">
        <Flame className="h-6 w-6 text-accent animate-flicker" />
        <span className="font-serif text-xl tracking-wide">O Muíño dos Leóns</span>
      </a>
      <ul className="hidden md:flex items-center gap-8 text-sm text-charcoal-foreground/80">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="hover:text-accent transition-colors">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="tel:+34612577640"
        className="hidden md:inline-flex items-center px-5 py-2 text-sm border border-accent/60 text-accent hover:bg-accent hover:text-accent-foreground transition-colors rounded-sm"
      >
        Reservar · 612 57 76 40
      </a>
    </nav>
  </header>
);
