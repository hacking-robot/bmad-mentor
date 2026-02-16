# BMAD Mentor

A BMAD Method module with agents and workflows for guided software development.

## What's Included

### Agents
- **Elliot** - Senior coding mentor who guides rather than writes
- **PM** - Product manager for PRD and planning workflows

### Workflows
- **prd** - Create, edit, and validate Product Requirements Documents
- **project** - Architecture and project context workflows
- **plan-epics** - Break down requirements into feature groups and work units

## Installation (Manual)

The BMAD installer doesn't support community modules yet. Install manually:

```bash
# 1. Clone this repo
git clone https://github.com/hacking-robot/bmad-mentor.git

# 2. Copy to your BMAD project
cp -r bmad-mentor/src/agents/* your-project/_bmad/agents/
cp -r bmad-mentor/src/workflows/* your-project/_bmad/bmm/workflows/

# 3. Create context files (required for Elliot)
cd your-project
touch project.md task.md
mkdir -p tasks
```

## Usage

### Elliot - Senior Mentor

Activate with `/elliot` in your AI IDE. Elliot guides rather than writes code.

**Commands:**
| Trigger | Description |
|---------|-------------|
| `CK` or `check` | Check code against acceptance criteria, specs, architecture |
| `DS` or `design` | Design solution structure before coding |
| `GD` or `guide` | Find relevant files, patterns, existing code |
| `SN` or `scan` | Scan for regressions and fragile spots |
| `EX` or `explain` | Explain WHY something works this way |

**Requires context files** in your project root:
```
project.md    # Architecture, tech stack, key decisions
task.md       # Current task with acceptance criteria
tasks/        # Completed task history
```

### PM (John) - Product Manager

Activate with `/pm` in your AI IDE. Facilitates PRD creation and planning.

**Commands:**
| Trigger | Description |
|---------|-------------|
| `CP` or `create-prd` | Create a new Product Requirements Document |
| `EP` or `edit-prd` | Edit an existing PRD |
| `VP` or `validate-prd` | Validate a PRD for completeness |

### Workflows

#### PRD Workflow (via PM agent)
Create, edit, and validate Product Requirements Documents.
- `CP` - Create new PRD through collaborative discovery
- `EP` - Edit existing PRD
- `VP` - Validate PRD completeness and quality

#### Project Workflow
Create LLM-optimized `project-context.md` and `architecture.md` for your project.
```
/_bmad/bmm/workflows/project/workflow.md
```
- Supports greenfield (new) and brownfield (existing) projects
- Auto-detects existing codebase
- Produces architecture decisions and coding patterns

#### Plan Epics Workflow
Break down PRD requirements into feature groups and work units for Jira ticket creation.
```
/_bmad/bmm/workflows/3-solutioning/plan-epics/workflow.md
```
**Requires:** `prd.md` and `architecture.md` from previous workflows
**Produces:** `project-breakdown.md` with:
- Feature groupings by user value
- Work units with acceptance criteria
- FR coverage map
- Dependency order
- Relative sizing (S/M/L)

## Requirements

- BMAD Method v6.0.0-alpha or higher
- Node.js v20+

## License

MIT
