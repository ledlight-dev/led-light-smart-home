# Design System — Led Light Smart Home

## Inspiração
Peça de marca fornecida pelo cliente: logo cromado/prata com casa estilizada + ondas de wifi em azul neon, fundo preto/azul-marinho com textura de circuito eletrônico, tipografia tech em caixa alta.

## Cores
- `--bg-base`: #05070d (preto azulado, fundo principal)
- `--bg-elevated`: #0b1120 (cards, seções alternadas)
- `--bg-panel`: #0f1729 (painéis, navbar)
- `--accent-blue`: #2ea3ff (azul neon principal — CTAs, glow, ícones)
- `--accent-blue-soft`: #63c7ff (hover, gradientes)
- `--chrome`: #c9d3dc (prata/cromado — texto de destaque, bordas)
- `--chrome-dark`: #8b96a3 (texto secundário sobre escuro)
- `--text-primary`: #eef2f7
- `--text-muted`: #94a3b8
- `--success`: #2ee6a3 (badges de disponibilidade)

## Tipografia
- Display/Headings: **Poppins** (600–800), letter-spacing levemente aberto em títulos grandes, uppercase em labels/eyebrows
- Body: **Poppins** (400–500)
- Hierarquia: hero title 56–72px desktop / 34px mobile; section title 36–44px; body 16–18px

## Layout & Padrões visuais
- Fundo escuro dominante em toda a página (sem seções brancas)
- Textura sutil de "circuito" (linhas finas + pontos) como background pattern em algumas seções, opacidade baixa
- Glow azul neon atrás de elementos-chave (ícone da casa, botões, números)
- Cards com borda fina 1px em tom cromado translúcido (`rgba(201,211,220,0.15)`), fundo levemente elevado, sem bordas muito arredondadas (8–12px)
- Grid assimétrico no hero (texto + CTA à esquerda, elemento gráfico glow à direita)
- Divisores com gradiente azul horizontal fino

## Componentes
- **Navbar**: fixa, fundo translúcido com blur, logo + links + botão CTA "WhatsApp" em azul neon
- **Botão primário**: fundo azul neon (#2ea3ff), texto escuro, glow leve, hover mais claro
- **Botão secundário**: outline cromado translúcido, texto branco
- **Botão flutuante WhatsApp**: fixo no canto inferior direito, ícone + glow, sempre visível
- **Cards de serviço**: ícone lucide-react em azul neon dentro de círculo com glow, título cromado, descrição curta
- **Seção de integração (Alexa/Google)**: badges/logos lado a lado com glow
- **Galeria de portfólio**: grid de imagens com overlay escuro no hover + legenda
- **Depoimentos/Sobre**: números grandes em destaque (anos de experiência, projetos entregues)

## Motion
- Fade + slight slide-up ao entrar na viewport (staggered por seção)
- Glow pulsante sutil (CSS) no ícone principal do hero
- Hover: leve scale (1.02) + glow intensifica em cards e botões

## Conteúdo da marca
- Nome: Led Light Smart Home
- Tagline: "Automação Residencial"
- Sub-tagline: "Integração inteligente com Alexa e Google Assistente"
- Serviços: Automação Geral, Iluminação Inteligente, Robô Aspirador, Automação de Computador, Persianas Automáticas, Porteiro Eletrônico, Fechaduras Eletrônicas, Áudio/Vídeo
- Contato: WhatsApp +55 (11) 91029-6532, Instagram @ledlightsmarthome, email automacao@ledlightcustom.com.br
- Região: São Paulo e região
- CTA principal: falar no WhatsApp para orçamento
