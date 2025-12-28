# Skill: Start Demo Server

A skill for launching the Karpathy layer demo server.

## Description

This skill starts the Node.js demo server that displays the timeline document and shows how AI tools work together.

## Usage

```
/start-demo-server
```

## What it does

1. Changes to the demo-server directory
2. Installs dependencies if needed
3. Starts the server on port 3000
4. Opens http://localhost:3000 in the browser

## Implementation

```bash
cd demo-server
npm install --silent
echo "Starting server at http://localhost:3000"
npm start
```

## Notes

This skill demonstrates how Claude Code can package common workflows into reusable commands. Instead of remembering the exact sequence of commands, users invoke `/start-demo-server`.
