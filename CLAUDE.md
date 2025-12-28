# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a documentation project explaining Andrej Karpathy's observation about the "new software layer" of AI tools. It includes:

- `karpathy-new-layer.md` - The original prompt/specification
- `karpathy-new-layer-timeline.md` - The generated timeline document
- `examples.md` - Specification for the demo server
- `demo-server/` - A Node.js web server demonstrating these concepts

## Commands

```bash
# Start the demo server
cd demo-server && npm install && npm start

# Development mode with auto-reload
cd demo-server && npm run dev
```

## Architecture

The demo server is intentionally simple:
- Express.js serving on port 3000
- Renders markdown files as HTML
- Shows directory listings to demonstrate self-reference
- Displays the Claude Code configuration files that helped build it

## Writing Style

Follow the parent directory's CLAUDE.md for writing guidelines. This project targets scientists and engineers unfamiliar with AI tooling.
