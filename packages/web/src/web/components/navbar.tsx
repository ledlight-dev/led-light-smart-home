import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND, WHATSAPP_LINK } from "../lib/brand";

const LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#integracao", label: "Integração" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-colors ${
        scrolled
          ? "bg-[var(--lls-bg-panel)]/85 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/logo.jpeg"
            alt={BRAND.name}
            className="h-11 w-11 rounded-full object-cover ring-1 ring-white/10"
          />
          <span className="font-semibold tracking-wide text-[var(--lls-text-primary)]">
            LED LIGHT <span className="text-[var(--lls-accent-blue)]">SMART HOME</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--lls-chrome)] transition-colors hover:text-[var(--lls-accent-blue-soft)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_LINK("Olá! Quero saber mais sobre automação residencial.")}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-[var(--lls-accent-blue)] px-5 py-2.5 text-sm font-semibold text-[#04101f] transition-transform hover:scale-105 lg:inline-block"
        >
          Fale no WhatsApp
        </a>

        <button
          className="text-[var(--lls-text-primary)] lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-[var(--lls-bg-panel)]/95 px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[var(--lls-chrome)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK("Olá! Quero saber mais sobre automação residencial.")}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[var(--lls-accent-blue)] px-5 py-2.5 text-center text-sm font-semibold text-[#04101f]"
            >
              Fale no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
