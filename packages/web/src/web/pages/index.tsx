import {
  Lightbulb,
  Blinds,
  Bot,
  MonitorCog,
  DoorClosed,
  KeyRound,
  Speaker,
  Cpu,
  Mail,
  Instagram,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "../components/navbar";
import { WhatsappFloatButton } from "../components/whatsapp-button";
import { BRAND, WHATSAPP_LINK } from "../lib/brand";

const SERVICES = [
  {
    icon: Cpu,
    title: "Automação Geral",
    desc: "Controle centralizado da sua casa em um único app ou comando de voz.",
  },
  {
    icon: Lightbulb,
    title: "Iluminação Inteligente",
    desc: "Cenas de luz, dimerização e cores para cada momento do dia.",
  },
  {
    icon: Bot,
    title: "Robô Aspirador",
    desc: "Limpeza automática e programada, controlada de onde você estiver.",
  },
  {
    icon: MonitorCog,
    title: "Automação de Computador",
    desc: "Ligue, desligue e gerencie seus equipamentos remotamente.",
  },
  {
    icon: Blinds,
    title: "Persianas Automáticas",
    desc: "Abertura e fechamento programado ou por comando de voz.",
  },
  {
    icon: DoorClosed,
    title: "Porteiro Eletrônico",
    desc: "Vídeo porteiro inteligente com acesso remoto pelo celular.",
  },
  {
    icon: KeyRound,
    title: "Fechaduras Eletrônicas",
    desc: "Acesso por senha, app ou biometria, com mais segurança.",
  },
  {
    icon: Speaker,
    title: "Áudio & Vídeo",
    desc: "Som ambiente e integração de vídeo em toda a casa.",
  },
];

const PORTFOLIO = [
  {
    img: "/real-theater.jpeg",
    title: "Home theater com iluminação e robô aspirador",
    tag: "Áudio & Vídeo",
  },
  {
    img: "/real-lock_1783553088808.png",
    title: "Fechadura e porteiro eletrônico",
    tag: "Segurança",
  },
  {
    img: "/real-living.jpeg",
    title: "Projetor automatizado com iluminação ambiente",
    tag: "Iluminação Inteligente",
  },
  {
    img: "/real-blinds.jpeg",
    title: "Persianas e iluminação de teto automatizadas",
    tag: "Persianas",
  },
];

const STATS = [
  { value: "+8", label: "Anos de experiência em LED e tecnologia" },
  { value: "+300", label: "Projetos de customização entregues" },
  { value: "100%", label: "Foco em qualidade e suporte" },
];

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative px-6 py-20 lg:px-10 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lls-accent-blue-soft)]">
      {children}
    </p>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-[var(--lls-bg-base)] text-[var(--lls-text-primary)]">
      <Navbar />
      <WhatsappFloatButton />

      {/* HERO */}
      <section className="circuit-bg relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url(/hero-bg_1783548836013.png)" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[var(--lls-bg-base)]/60 to-[var(--lls-bg-base)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div className="animate-fade-up">
            <Eyebrow>Led Light Smart Home</Eyebrow>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[var(--lls-text-primary)] sm:text-5xl lg:text-6xl">
              Automação{" "}
              <span className="text-[var(--lls-accent-blue)] text-glow">Residencial</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--lls-text-muted)]">
              {BRAND.subTagline}. Transforme sua casa em um ambiente inteligente,
              prático e seguro — com um simples comando de voz.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_LINK("Olá! Quero um orçamento de automação residencial.")}
                target="_blank"
                rel="noreferrer"
                className="glow-blue rounded-full bg-[var(--lls-accent-blue)] px-7 py-3.5 font-semibold text-[#04101f] transition-transform hover:scale-105"
              >
                Solicitar orçamento
              </a>
              <a
                href="#portfolio"
                className="rounded-full border border-white/15 px-7 py-3.5 font-semibold text-[var(--lls-chrome)] transition-colors hover:border-[var(--lls-accent-blue)] hover:text-white"
              >
                Ver projetos
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 rounded-full bg-[var(--lls-accent-blue)]/20 blur-3xl" />
            <img
              src="/logo.jpeg"
              alt="Led Light Smart Home"
              className="relative mx-auto h-80 w-80 rounded-full object-cover ring-1 ring-white/10"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="border-y border-white/5 bg-[var(--lls-bg-panel)]/60">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-3 lg:px-10">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-[var(--lls-accent-blue)] sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-[var(--lls-text-muted)]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <Section id="servicos" className="circuit-bg">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Eyebrow>O que fazemos</Eyebrow>
          <h2 className="text-3xl font-bold sm:text-4xl">Soluções completas em automação</h2>
          <p className="mt-4 text-[var(--lls-text-muted)]">
            Do quarto à garagem: cuidamos de cada detalhe da sua casa inteligente.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-white/10 bg-[var(--lls-bg-elevated)] p-6 transition-all hover:border-[var(--lls-accent-blue)]/50 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--lls-accent-blue)]/10 text-[var(--lls-accent-blue)] transition-shadow group-hover:shadow-[0_0_20px_rgba(46,163,255,0.4)]">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-[var(--lls-chrome)]">{s.title}</h3>
              <p className="mt-2 text-sm text-[var(--lls-text-muted)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* INTEGRATION */}
      <Section id="integracao" className="bg-[var(--lls-bg-panel)]/50">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Compatibilidade</Eyebrow>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Integração inteligente com{" "}
              <span className="text-[var(--lls-accent-blue)]">Alexa</span> e{" "}
              <span className="text-[var(--lls-accent-blue)]">Google Assistente</span>
            </h2>
            <p className="mt-4 text-[var(--lls-text-muted)]">
              Um simples comando de voz e a mágica acontece. Luzes, persianas, som e
              muito mais — tudo sob controle, do seu jeito.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Compatível com os principais assistentes de voz do mercado",
                "Controle remoto via aplicativo, de qualquer lugar",
                "Cenas automáticas para rotina, segurança e conforto",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[var(--lls-chrome)]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--lls-accent-blue)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center gap-6">
            {["Alexa", "Google Assistente"].map((name) => (
              <div
                key={name}
                className="glow-blue flex h-36 w-40 flex-col items-center justify-center rounded-2xl border border-white/10 bg-[var(--lls-bg-elevated)] px-4 text-center"
              >
                <MonitorCog className="mb-3 h-8 w-8 text-[var(--lls-accent-blue)]" />
                <span className="text-sm font-semibold text-[var(--lls-chrome)]">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PORTFOLIO */}
      <Section id="portfolio" className="circuit-bg">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Eyebrow>Portfólio</Eyebrow>
          <h2 className="text-3xl font-bold sm:text-4xl">Projetos realizados</h2>
          <p className="mt-4 text-[var(--lls-text-muted)]">
            Uma amostra do que é possível transformar dentro da sua casa.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PORTFOLIO.map((p) => (
            <div
              key={p.title}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10"
            >
              <img
                src={p.img}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/20 to-transparent p-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-[var(--lls-accent-blue-soft)]">
                  {p.tag}
                </span>
                <span className="text-sm font-medium text-white">{p.title}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="sobre" className="bg-[var(--lls-bg-panel)]/50">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Sobre nós</Eyebrow>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Da customização automotiva para dentro da sua casa
            </h2>
            <p className="mt-4 text-[var(--lls-text-muted)]">
              A Led Light Smart Home nasceu da experiência da Led Light Custom,
              referência em iluminação e tecnologia automotiva. Levamos a mesma
              essência — tecnologia, precisão e acabamento premium — para dentro da
              sua casa, criando ambientes inteligentes, práticos e seguros.
            </p>
            <p className="mt-4 text-[var(--lls-text-muted)]">
              Atendemos {BRAND.region}, com projetos sob medida para cada espaço.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[var(--lls-bg-elevated)] p-8">
            <p className="text-lg italic text-[var(--lls-chrome)]">
              "Sua casa, suas regras. Com apenas um comando de voz, a mágica
              acontece."
            </p>
            <p className="mt-4 text-sm text-[var(--lls-text-muted)]">
              — Led Light Smart Home
            </p>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contato" className="circuit-bg">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-[var(--lls-bg-elevated)] p-10 text-center">
          <Eyebrow>Vamos automatizar sua casa?</Eyebrow>
          <h2 className="text-3xl font-bold sm:text-4xl">Fale com a gente agora</h2>
          <p className="mt-4 text-[var(--lls-text-muted)]">
            Solicite um orçamento sem compromisso e descubra como deixar sua casa
            mais inteligente.
          </p>

          <a
            href={WHATSAPP_LINK("Olá! Quero um orçamento de automação residencial.")}
            target="_blank"
            rel="noreferrer"
            className="glow-blue mt-8 inline-block rounded-full bg-[var(--lls-accent-blue)] px-8 py-4 font-semibold text-[#04101f] transition-transform hover:scale-105"
          >
            {BRAND.whatsappDisplay} — Falar no WhatsApp
          </a>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--lls-text-muted)]">
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-[var(--lls-accent-blue-soft)]"
            >
              <Instagram className="h-4 w-4" /> {BRAND.instagramHandle}
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="flex items-center gap-2 transition-colors hover:text-[var(--lls-accent-blue-soft)]"
            >
              <Mail className="h-4 w-4" /> {BRAND.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {BRAND.region}
            </span>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 py-8 text-center text-xs text-[var(--lls-text-muted)] lg:px-10">
        © {new Date().getFullYear()} {BRAND.name}. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default Index;
