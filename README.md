# BMAD For Humans

A BMAD Method module with agents and workflows for guided software development.

## What's Included

### Agents
- **Reachy** - Friendly AI coding companion who helps with code exploration, debugging, and learning
- **PM** - Product manager for PRD and planning workflows

### Workflows
**Planning:**
- **create-prd** - Create Product Requirements Documents
- **edit-prd** - Edit existing PRDs
- **validate-prd** - Validate PRD completeness
- **project** - Create architecture and project context docs
- **plan-epics** - Break down requirements into feature groups

**Implementation:**
- **create-ticket** - Create ticket files from git diff and codebase analysis
- **dev-ticket** - Execute a ticket with red-green-refactor methodology
- **ticket-review** - Adversarial code review that finds issues and validates claims

## Installation

### Fresh Install (BMAD + bmad-for-humans)

```bash
# 1. Create/enter your project
mkdir my-project && cd my-project
git init

# 2. Install BMAD alpha (skip modules when prompted)
npx bmad-method@alpha install

# 3. Install bmad-for-humans
npx github:hacking-robot/bmad-for-humans

# 4. Restart your IDE
```

### Add to Existing BMAD Project

```bash
cd your-project
npx github:hacking-robot/bmad-for-humans
```

### Multi-IDE Support

The installer auto-detects your IDE. Override with `--ide=`:

```bash
# Auto-detect (default)
npx bmad-for-humans

# Specific IDE
npx bmad-for-humans --ide=cursor
npx bmad-for-humans --ide=windsurf

# Multiple IDEs
npx bmad-for-humans --ide=claude-code,cursor
```

| IDE | Commands Directory |
|-----|-------------------|
| Claude Code | `.claude/commands/bmad/bmm/` |
| Cursor | `.cursor/commands/bmad/bmm/` |
| Windsurf | `.windsurf/workflows/bmad/bmm/` |

## Usage

### Agents

**Reachy** (`/reachy`) - AI coding companion

| Command | Description |
|---------|-------------|
| `CK` or `check` | Check code against AC, specs, architecture |
| `DS` or `design` | Design solution structure before coding |
| `GD` or `guide` | Find relevant files, patterns, existing code |
| `SN` or `scan` | Scan for regressions and fragile spots |
| `EX` or `explain` | Explain WHY something works this way |
| `CT` or `create-ticket` | Create a ticket from git diff and context |
| `DT` or `dev-ticket` | Develop a ticket using red-green-refactor |
| `TR` or `ticket-review` | Review completed ticket work |

**PM** (`/pm`) - Product Manager

| Command | Description |
|---------|-------------|
| `CP` or `create-prd` | Create a new PRD |
| `EP` or `edit-prd` | Edit an existing PRD |
| `VP` or `validate-prd` | Validate PRD completeness |

### Workflows

**Planning:**

| Command | Description |
|---------|-------------|
| `/create-prd` | Create PRD through collaborative discovery |
| `/edit-prd` | Edit existing PRD |
| `/validate-prd` | Validate PRD for completeness |
| `/project` | Create architecture & project context docs |
| `/plan-epics` | Break down PRD into feature groups |

**Implementation:**

| Command | Description |
|---------|-------------|
| `/create-ticket` | Create ticket from git diff and codebase analysis |
| `/dev-ticket` | Execute ticket with red-green-refactor |
| `/ticket-review` | Adversarial code review |

### Context Files

Reachy requires these files in your project root:

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
