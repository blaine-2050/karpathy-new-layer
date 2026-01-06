# The New Software Layer

A demonstration project inspired by Andrej Karpathy's observation about the "new programmable layer" of AI tools.

## Quick Start

```bash
cd demo-server
npm install
npm run dev
```

Open http://localhost:5173

## What This Is

This project demonstrates AI-assisted development. The web server was built from English-language specifications in Markdown files using Claude Code.

See [karpathy-new-layer.md](karpathy-new-layer.md) for the complete timeline of AI tools from November 2022 to December 2025.

## Project Structure

- `karpathy-new-layer.md` - Main content: timeline and term definitions
- `CLAUDE.md` - AI assistant configuration
- `demo-server/` - SvelteKit + Tailwind web application
- `next-steps.md` - Development roadmap

## Deployment

Configured for Netlify. Push to main branch to deploy.

## Tech Stack

- SvelteKit 2
- Tailwind CSS with Typography plugin
- Netlify adapter
