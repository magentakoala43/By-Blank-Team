import { Mail, MessageCircle, Check, Copy } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/byblank-logo.png";

const EMAIL = "ByBlankTeam@proton.me";
const MASTODON_URL = "https://mast.lat/@ByBlankTeam";

const MastodonIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M21.58 8.06c0-4.94-3.24-6.39-3.24-6.39C16.7.91 13.92.78 12.05.77h-.05c-1.87.01-4.65.14-6.29.9 0 0-3.24 1.45-3.24 6.39 0 1.13-.02 2.49.01 3.92.11 4.83.88 9.59 5.34 10.77 2.06.55 3.82.66 5.24.58 2.58-.14 4.03-.92 4.03-.92l-.09-1.87s-1.85.58-3.93.51c-2.06-.07-4.23-.22-4.57-2.75a4.85 4.85 0 0 1-.04-.7s2.02.49 4.58.61c1.56.07 3.03-.09 4.52-.27 2.86-.34 5.35-2.1 5.66-3.71.5-2.54.46-6.2.46-6.2zm-3.41 5.69h-2.12V8.57c0-1.09-.46-1.65-1.38-1.65-1.02 0-1.53.66-1.53 1.96v2.84h-2.1V8.88c0-1.3-.51-1.96-1.53-1.96-.92 0-1.38.55-1.38 1.65v5.18H6.01V8.42c0-1.09.28-1.96.83-2.6.57-.65 1.32-.98 2.25-.98 1.08 0 1.89.41 2.43 1.24l.53.88.53-.88c.54-.83 1.36-1.24 2.43-1.24.93 0 1.68.33 2.25.98.56.64.83 1.51.83 2.6v5.34z" />
  </svg>
);

const ProtonIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11zm2.2-.3 7.8 5.7 7.8-5.7a.5.5 0 0 0-.3-.2H4.5a.5.5 0 0 0-.3.2zM20 7.9l-7.4 5.4a1 1 0 0 1-1.2 0L4 7.9v9.6c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5V7.9z" />
  </svg>
);

export const Contact = () => {
  const [emailShown, setEmailShown] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow" />
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center bg-gradient-card border border-border rounded-2xl p-10 md:p-16 shadow-soft">
          <h2 className="text-4xl md:text-6xl font-semibold mb-6">
            Tu web por <span className="text-gradient-brand">49,99 €</span>
          </h2>
          <p className="text-foreground/70 text-lg mb-10 max-w-xl mx-auto">
            Cuéntanos tu proyecto y la pondremos en marcha en menos de una semana.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => {
                setEmailShown(true);
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              <Mail className="h-4 w-4" />
              Mostrar correo
            </button>
            <a
              href={MASTODON_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground hover:bg-secondary rounded-full transition-colors"
            >
              <MastodonIcon className="h-4 w-4" />
              Mastodon
            </a>
          </div>

          {emailShown && (
            <div className="inline-flex items-center gap-3 px-5 py-3 border border-border rounded-full bg-background animate-fade-up">
              <ProtonIcon className="h-4 w-4 text-foreground/70" />
              <span className="font-mono text-sm">{EMAIL}</span>
              <button
                onClick={copyEmail}
                aria-label="Copiar correo"
                className="h-7 w-7 rounded-full hover:bg-secondary flex items-center justify-center transition-colors"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-foreground" /> : <Copy className="h-3.5 w-3.5 text-foreground/60" />}
              </button>
            </div>
          )}

          <div className="flex justify-center gap-4 mt-10">
            <a
              href={MASTODON_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Mastodon de By Blank Team"
              className="h-11 w-11 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-secondary transition-colors"
            >
              <MastodonIcon className="h-5 w-5" />
            </a>
            <button
              onClick={() => setEmailShown(true)}
              aria-label="Mostrar correo ProtonMail"
              className="h-11 w-11 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-secondary transition-colors"
            >
              <ProtonIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="container flex flex-wrap items-center justify-between gap-3 py-3 text-sm text-foreground/70">
        <div className="flex items-center gap-2">
          <img src={logo} alt="By Blank Team" className="h-6 w-auto object-contain" />
          <span className="hidden sm:inline">© {new Date().getFullYear()} By Blank Team</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={MASTODON_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Mastodon de By Blank Team"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border hover:bg-secondary transition-colors"
          >
            <MastodonIcon className="h-4 w-4" />
            <span className="hidden sm:inline">@ByBlankTeam</span>
          </a>
          {showEmail ? (
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background">
              <ProtonIcon className="h-4 w-4" />
              <span className="font-mono text-xs">{EMAIL}</span>
              <button
                onClick={copyEmail}
                aria-label="Copiar correo"
                className="h-6 w-6 rounded-full hover:bg-secondary flex items-center justify-center"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5 text-foreground/60" />}
              </button>
            </span>
          ) : (
            <button
              onClick={() => setShowEmail(true)}
              aria-label="Mostrar correo ProtonMail"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border hover:bg-secondary transition-colors"
            >
              <ProtonIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Correo</span>
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};
