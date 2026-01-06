# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Project explaining parts of a fairly typical AI project. Inspired by Andrej Karpathy's observation about the "new software layer" of AI tools. It includes:

- `karpathy-new-layer.md` - The complete document (prompt, timeline, and working example)
- `demo-server/` - A Node.js web server demonstrating these concepts

## Commands

```bash
# Start the demo server
cd demo-server && npm install && npm start

# Development mode with auto-reload
cd demo-server && npm run dev
```

## Architecture -- current

The demo server is intentionally simple:
- Express.js serving on port 3000
- Renders markdown files as HTML
- Shows directory listings to demonstrate self-reference
- Displays the Claude Code configuration files that helped build it

##  Architecture -- next
- I want to add styling useing [swyxkittailwind](https://madewithsvelte.)com/swyxkittailwind.
- old style. here is an entry from kapathy-new-layer.md
    ```<div class="term-entry">
    
    **Agent**
    
    An AI system that can take actions in the world—not just generate text, but execute code, browse the web, read files, call APIs. An agent might receive the task "fix this bug" and autonomously: read relevant code, identify the problem, write a fix, run tests, and submit a pull request.
    
    </div>```
- new style requires that the term indicated by **Agent** and the definition that appears in the following paragraph can be handled separately by tailwind. For example I may want the term being defined (**Agent**) in this case, to be flush left, large bold font, color: dark blue and the definition (beginning with the words "An AI system that can...") to be presented with a large indent, blue, roman.
  - Im not sure how to do that in tailwind, but the swyxkettailwind docs should get us started with something I can adjust.

## Writing Style

Follow the parent directory's CLAUDE.md for writing guidelines. This project targets scientists and engineers unfamiliar with AI tooling.

## improving
- the original version of this project has been published to vercel.
- after the UI is improved, I want to publish netlify.