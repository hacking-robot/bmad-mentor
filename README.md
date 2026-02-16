# BMAD Mentor

A BMAD Method module with agents and workflows for guided software development.

## What's Included

### Agents
- **Elliot** - Senior coding mentor who guides rather than writes
- **PM** - Product manager for PRD and planning workflows

### Workflows
- **create-prd** - Create Product Requirements Documents
- **edit-prd** - Edit existing PRDs
- **validate-prd** - Validate PRD completeness
- **project** - Create architecture and project context docs
- **plan-epics** - Break down requirements into feature groups

## Installation

### Fresh Install (BMAD + bmad-mentor)

```bash
# 1. Create/enter your project
mkdir my-project && cd my-project
git init

# 2. Install BMAD alpha (skip modules when prompted)
npx bmad-method@alpha install

# 3. Install bmad-mentor
npx github:hacking-robot/bmad-mentor

# 4. Restart your IDE
```

### Add to Existing BMAD Project

```bash
cd your-project
npx github:hacking-robot/bmad-mentor
```

### Multi-IDE Support

The installer auto-detects your IDE. Override with `--ide=`:

```bash
# Auto-detect (default)
npx bmad-mentor

# Specific IDE
npx bmad-mentor --ide=cursor
npx bmad-mentor --ide=windsurf

# Multiple IDEs
npx bmad-mentor --ide=claude-code,cursor
```

| IDE | Commands Directory |
|-----|-------------------|
| Claude Code | `.claude/commands/bmad/bmm/` |
| Cursor | `.cursor/commands/bmad/bmm/` |
| Windsurf | `.windsurf/workflows/bmad/bmm/` |

## Usage

### Agents

**Elliot** (`/elliot`) - Senior coding mentor

| Command | Description |
|---------|-------------|
| `CK` or `check` | Check code against AC, specs, architecture |
| `DS` or `design` | Design solution structure before coding |
| `GD` or `guide` | Find relevant files, patterns, existing code |
| `SN` or `scan` | Scan for regressions and fragile spots |
| `EX` or `explain` | Explain WHY something works this way |

**PM** (`/pm`) - Product Manager

| Command | Description |
|---------|-------------|
| `CP` or `create-prd` | Create a new PRD |
| `EP` or `edit-prd` | Edit an existing PRD |
| `VP` or `validate-prd` | Validate PRD completeness |

### Workflows

| Command | Description |
|---------|-------------|
| `/create-prd` | Create PRD through collaborative discovery |
| `/edit-prd` | Edit existing PRD |
| `/validate-prd` | Validate PRD for completeness |
| `/project` | Create architecture & project context docs |
| `/plan-epics` | Break down PRD into feature groups |

### Context Files

Elliot requires these files in your project root:

```
project.md    # Architecture, tech stack, key decisions
task.md       # Current task with acceptance criteria
tasks/        # Completed task history
```

The installer creates templates if they don't exist.

## Requirements

- BMAD Method v6.0.0-alpha or higher
- Node.js v20+

## License

MIT
