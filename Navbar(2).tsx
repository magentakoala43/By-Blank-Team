import logo from "@/assets/byblank-logo.png";

const links = [
  { href: "#features", label: "Qué incluye" },
  { href: "#process", label: "Proceso" },
  { href: "#pricing", label: "Precio" },
  { href: "#faq", label: "FAQ" },
];

export const Navbar = () => (
  <header className="absolute top-0 left-0 right-0 z-30">
    <nav className="container flex items-center justify-between py-6">
      <a href="#" className="flex items-center gap-2.5" aria-label="By Blank Team">
        <img
          src={logo}
          alt="By Blank Team"
          className="h-9 md:h-10 w-auto object-contain"
        />
      </a>
      <ul className="hidden md:flex items-center gap-8 text-sm text-foreground/70">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
          </li>
        ))}
      </ul>
      <a
        href="#pricing"
        className="hidden md:inline-flex items-center px-5 py-2.5 text-sm bg-foreground text-background font-medium rounded-full hover:opacity-90 transition-opacity"
      >
        Empezar · 49,99 €
      </a>
    </nav>
  </header>
);
