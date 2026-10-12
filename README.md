# mufqi-port

Personal portfolio of Mufqi Harits — developer, builder, ADHD survivor. 

Built with vanilla Node.js + vanilla HTML/CSS/JS. No frameworks, no build step needed.

## Run locally

```bash
git clone https://github.com/mufqimuf/mufqi-port.git
cd mufqi-port
npm install
npm start
```

Then open `http://localhost:3000`

## Deploy

The server listens on `0.0.0.0:3000`. Clone, install deps, run — that's it.

```bash
git clone https://github.com/mufqimuf/mufqi-port.git
cd mufqi-port
npm install
PORT=3000 node server.mjs
```

## Tech

- Node.js vanilla HTTP server (no Express, no Fastify)
- Pure HTML + CSS + JS (no React, no Tailwind)
- Zero runtime dependencies
