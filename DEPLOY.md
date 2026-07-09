# Deploy — Led Light Smart Home

Site institucional em React (Vite) + Hono, empacotado com Bun. Sem badge, pronto para hospedagem própria.

## Requisitos

- [Bun](https://bun.sh) instalado no servidor (`curl -fsSL https://bun.sh/install | bash`)
- Node não é necessário — tudo roda com Bun

## 1. Instalar dependências

```bash
bun install
```

## 2. Gerar build de produção

```bash
bun run build:web
```

Isso gera os arquivos estáticos em `packages/web/dist/`.

## 3. Rodar em produção

O servidor (`packages/web/src/server.ts`) serve o front-end estático e a API Hono na mesma porta.

```bash
cd packages/web
PORT=4200 bun src/server.ts
```

Acesse `http://localhost:4200`.

### Rodando com PM2 (recomendado para VPS)

Já existe um `ecosystem.config.cjs` na raiz configurado para isso:

```bash
bun install -g pm2
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup   # opcional: iniciar automaticamente com o servidor
```

Para trocar a porta, defina `PORT` antes de subir (padrão: 4200).

## 4. Apontar seu domínio (ledlightcustom.com.br)

Duas opções comuns:

**A) VPS próprio (DigitalOcean, Hetzner, etc.)**
1. Suba o projeto no servidor, rode os passos acima com PM2
2. Configure um proxy reverso (Nginx/Caddy) na porta 80/443 apontando para `localhost:4200`
3. Gere certificado SSL grátis com Certbot (Nginx) ou automático (Caddy)
4. No painel do seu domínio (Registro.br), aponte um registro `A` para o IP do servidor (ou `CNAME` se usar subdomínio tipo `smarthome.ledlightcustom.com.br`)

**B) Plataforma serverless com suporte a Bun (Railway, Render, Fly.io, etc.)**
1. Suba este repositório (git) no serviço escolhido
2. Comando de build: `bun install && bun run build:web`
3. Comando de start: `cd packages/web && bun src/server.ts` (a plataforma injeta a variável `PORT`)
4. Nas configurações de domínio da plataforma, adicione `ledlightcustom.com.br` (ou subdomínio) e siga as instruções de DNS que ela fornece

## Estrutura relevante

```
packages/web/
  src/api/index.ts     -> rotas da API (Hono)
  src/web/              -> front-end React (páginas, componentes)
  src/server.ts         -> servidor de produção (serve estático + API)
  public/                -> imagens do site (logo, portfólio, hero)
  dist/                  -> build gerado (após bun run build:web)
```

## Observações

- O site é 100% institucional/estático hoje — não usa banco de dados. Se no futuro quiser formulário de contato salvo em banco, avise que ajustamos o `drizzle` (já configurado no template) para isso.
- Variáveis de ambiente (se precisar adicionar futuramente) ficam no arquivo `.env` na raiz do projeto.
