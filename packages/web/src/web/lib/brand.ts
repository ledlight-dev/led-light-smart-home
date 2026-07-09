export const WHATSAPP_NUMBER = "5511945969709";
export const WHATSAPP_LINK = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const BRAND = {
  name: "Led Light Smart Home",
  tagline: "Automação Residencial",
  subTagline: "Integração inteligente com Alexa e Google Assistente",
  instagram: "https://www.instagram.com/led.light.smart.home/",
  instagramHandle: "@led.light.smart.home",
  email: "automacao@ledlightcustom.com.br",
  region: "São Paulo e região",
  whatsappDisplay: "Clique",
};
