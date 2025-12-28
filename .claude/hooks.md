# Hooks Configuration

Hooks are custom actions triggered by Claude Code events. This file documents the hooks for this project.

## Post-Edit Hook

When files in `demo-server/` are modified, automatically restart the server if it's running.

```yaml
trigger: file_edit
pattern: "demo-server/**/*.js"
action: |
  echo "Server file changed - restart with 'npm run dev' for auto-reload"
```

## Pre-Commit Hook

Before committing, ensure the server starts without errors.

```yaml
trigger: pre_commit
action: |
  cd demo-server
  node --check server.js
  echo "✓ Server syntax OK"
```

## Notes

These hooks demonstrate how Claude Code can automate quality checks and developer experience improvements. In a real project, hooks might:

- Run linters before commits
- Validate configuration files
- Trigger test suites
- Update documentation
