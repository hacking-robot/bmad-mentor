# BMAD Mentor

> Meet Elliot: Your Senior Mentor for code.

A BMAD Method module featuring Elliot, an AI coding mentor who guides developers to write maintainable, well-crafted code through validation, design help, and teaching the WHY behind decisions.

## The Elliot Philosophy

Elliot flips the traditional AI coding assistant paradigm. Instead of writing code for you, Elliot asks:

> "Can you code this for me..."

Elliot is a **Legacy Survivor** — 10+ years maintaining codebases, debugging code written by developers long gone. They've seen what lasts and what collapses under its own weight. That's why Elliot guides rather than replaces.

## Features

- **Code Validation** — Check your code against acceptance criteria, specs, and architecture
- **Solution Design** — Design solution structures before you start coding
- **Navigation Help** — Find the right files, patterns, and existing code
- **Issue Scanning** — Catch regressions and fragile designs early
- **Concept Explanation** — Learn WHY something should be done a certain way

## Installation

### Prerequisites
- BMAD Method v6.0.0 or higher
- Node.js v20+

### Install via BMAD

```bash
npx bmad-method install --modules bmad-mentor
```

### Install via NPM

```bash
npm install bmad-mentor
```

## Usage

### Activate Elliot

After installation, activate Elliot in your AI IDE (Claude Code, Cursor, Windsurf, etc.):

```
/elliot
```

### Elliot's Commands

| Command | Description |
|---------|-------------|
| `/check` or `CK` | Check code against AC, specs, architecture |
| `/design` or `DS` | Design solution structure before coding |
| `/guide` or `GD` | Find relevant files, patterns, existing code |
| `/scan` or `SN` | Scan for regressions and fragile spots |
| `/explain` or `EX` | Explain WHY something works this way |

### Context Files

Elliot requires context files in your project root:

```
your-project/
├── project.md    # Architecture, tech stack, key decisions
├── task.md       # Current task with acceptance criteria
└── tasks/        # Completed task history
```

The installer can create templates for these files.

## Example Session

```
You: /elliot check the auth module

Elliot: Let me load your project context first...
[Reads project.md and task.md]

From my experience, the auth module looks solid overall. A few things:

✅ Password hashing follows your security specs
✅ Session management matches your architecture patterns
⚠️ The token refresh logic doesn't handle concurrent requests — this caused issues in the last sprint. Remember?

You've got this. Want me to guide you through a fix?
```

## Philosophy

### What Elliot DOES:
- Validate code against AC, specs, and architecture
- Help design solution structures before coding
- Guide developers to relevant files and patterns
- Scan for regressions and fragile designs
- Explain WHY something should be done a certain way

### What Elliot Does NOT:
- Write code for the user
- Make decisions without project context
- Accept quick fixes that create technical debt
- Sugarcoat feedback when code has issues

## Development

```bash
# Clone the repo
git clone https://github.com/hacking-robot/bmad-mentor.git

# Install dependencies
npm install
```

## Releasing

```bash
# Patch release (1.0.0 -> 1.0.1)
npm run release

# Minor release (1.0.0 -> 1.1.0)
npm run release:minor

# Major release (1.0.0 -> 2.0.0)
npm run release:major
```

## License

MIT License — see [LICENSE](LICENSE) for details.

## Links

- [BMAD Method](https://github.com/bmad-code-org/BMAD-METHOD)
- [Report Issues](https://github.com/hacking-robot/bmad-mentor/issues)

---

*Part of the [BMAD Method](https://github.com/bmad-code-org/BMAD-METHOD) ecosystem.*
