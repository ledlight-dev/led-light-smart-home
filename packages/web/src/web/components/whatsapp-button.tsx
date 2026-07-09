import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "../lib/brand";

export function WhatsappFloatButton() {
  return (
    <a
      href={WHATSAPP_LINK(
        "Olá! Vim pelo site e quero saber mais sobre automação residencial.",
      )}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[var(--lls-accent-blue)] px-5 py-3.5 font-semibold text-[#04101f] shadow-lg animate-pulse-glow transition-transform hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Fale no WhatsApp</span>
    </a>
  );
}
