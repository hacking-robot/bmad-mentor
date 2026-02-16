---
name: 'step-07-structure'
description: 'Define complete project structure and architectural boundaries'

# File references
nextStepFile: './step-08-validate-architecture.md'
architectureOutputFile: '{planning_artifacts}/architecture.md'

# Tasks
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 7: Project Structure & Boundaries

## STEP GOAL:
To define the complete project directory structure and architectural boundaries that AI agents will follow.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:
- ✅ You are defining the physical project structure
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring project organization expertise
- ✅ User brings their project needs

### Step-Specific Rules:
- 🎯 Create COMPLETE directory tree, not placeholders
- 🚫 FORBIDDEN to use generic placeholders
- 💬 Tailor structure to the tech stack
- 🚪 Define clear boundaries

## EXECUTION PROTOCOLS:
- 🎯 Generate complete project tree
- 💾 Document structure in architecture file
- 📖 Update frontmatter when complete
- 🚫 Don't proceed without approval

## CONTEXT BOUNDARIES:
- All decisions and patterns documented
- Focus: Physical project organization
- Dependencies: Steps 01-06 complete

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Explain Structure Purpose

"**Now let's define the complete project structure.**

This gives AI agents a clear map of where everything goes, ensuring:
- Consistent file organization
- Clear boundaries between components
- Predictable locations for tests, configs, etc."

### 2. Generate Project Tree

**Based on tech stack and decisions, generate complete tree:**

"**Based on your [framework/stack], here's the project structure:**

```
project-name/
├── README.md
├── [package-file]
├── [config-files]
├── src/
│   ├── [entry-point]
│   ├── components/
│   │   ├── ui/
│   │   └── features/
│   ├── lib/
│   │   ├── [utilities]
│   │   └── [helpers]
│   ├── types/
│   └── [framework-specific]
├── [database-folder]/
│   └── schema
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
└── public/
    └── assets/
```

**Note:** I'll customize this for your specific stack."

### 3. Customize for Tech Stack

**Tailor the tree based on:**
- Framework (Next.js, NestJS, React, etc.)
- Language (TypeScript, Python, etc.)
- Database (Prisma, TypeORM, etc.)
- Testing setup

**Generate specific, complete tree - no placeholders.**

### 4. Define Architectural Boundaries

"**Now let's define boundaries between components:**

#### API Boundaries
- External API endpoints
- Internal service boundaries
- Authentication boundaries

#### Component Boundaries
- Frontend component communication
- State management boundaries
- Service communication patterns

#### Data Boundaries
- Database schema boundaries
- Data access patterns
- External data integration

**What boundaries should agents respect?**"

### 5. Map Requirements to Structure

"**Mapping features to structure:**

| Feature/Area | Location | Notes |
|--------------|----------|-------|
| [Feature 1] | `src/[location]` | [notes] |
| [Feature 2] | `src/[location]` | [notes] |
| Authentication | `src/[location]` | [notes] |
| Database | `[location]` | [notes] |

**Does this mapping make sense?**"

### 6. Document Structure

**Append to `{architectureOutputFile}`:**

```markdown
---

## Project Structure & Boundaries

### Complete Project Directory Structure

\`\`\`
[Complete, specific project tree for this tech stack]
\`\`\`

### Architectural Boundaries

#### API Boundaries
- External: [boundary definition]
- Internal: [boundary definition]
- Auth: [boundary definition]

#### Component Boundaries
- Communication: [pattern]
- State: [boundary]
- Services: [boundary]

#### Data Boundaries
- Schema: [boundary]
- Access: [pattern]
- External: [integration]

### Requirements to Structure Mapping

| Feature | Location | Notes |
|---------|----------|-------|
| [Feature] | [Path] | [Notes] |

### Integration Points

#### Internal Communication
[How components communicate]

#### External Integrations
[Third-party services and APIs]

#### Data Flow
[How data flows through the system]
```

### 7. Present MENU OPTIONS

Display: **Structure documented. Ready for architecture validation?** [A] Advanced Elicitation [P] Party Mode [C] Continue

#### EXECUTION RULES:
- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution, return to this menu

#### Menu Handling Logic:
- IF A: Execute {advancedElicitationTask}, and when finished redisplay the menu
- IF P: Execute {partyModeWorkflow}, and when finished redisplay the menu
- IF C: Update frontmatter with `stepsCompleted: [1, 2, 3, 4, 5, 6, 7]`, then load, read entire file, then execute {nextStepFile}
- IF Any other comments or queries: help user respond then [Redisplay Menu Options](#7-present-menu-options)

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:
- Complete, specific project tree generated
- No generic placeholders
- Boundaries clearly defined
- Requirements mapped to locations
- User approved structure

### ❌ SYSTEM FAILURE:
- Generic placeholder structure
- Missing key directories
- Undefined boundaries
- Proceeding without approval

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
