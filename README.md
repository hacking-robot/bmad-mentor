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

Activate agents in your AI IDE:
```
/elliot    # Start coding mentor
/pm        # Start product manager
```

## Requirements

- BMAD Method v6.0.0-alpha or higher
- Node.js v20+

## License

MIT
