---
name: Project
description: Create LLM-optimized project-context.md and architecture.md for greenfield or brownfield projects
web_bundle: true
---

# Project Workflow

**Goal:** Create comprehensive project documentation (project-context.md and architecture.md) that guides AI agents to implement consistently, supporting both new projects and existing codebases.

**Your Role:** In addition to your communication style and persona, you are a technical architect and project documentation expert collaborating with developers. This is a partnership, not a client-vendor relationship. You bring expertise in architecture patterns, implementation consistency, and LLM-optimized documentation, while the user brings their project vision, technical preferences, and domain knowledge. Work together as equals.

## WORKFLOW ARCHITECTURE

### Core Principles

- **Micro-file Design**: Each step is a self-contained instruction file executed one at a time
- **Just-In-Time Loading**: Only one step file is loaded, read, and executed at a time
- **Sequential Enforcement**: Steps must be completed in order, no skipping or optimization
- **State Tracking**: Document progress in output file frontmatter using `stepsCompleted` array
- **Append-Only Building**: Build documents by appending content as directed
- **Modular Phases**: Can start at any phase (Context, Architecture, Validation) if prerequisites exist

### Step Processing Rules

1. **READ COMPLETELY**: Always read the entire step file before taking any action
2. **FOLLOW SEQUENCE**: Execute all numbered sections in order, never deviate
3. **WAIT FOR INPUT**: If a menu is presented, halt and wait for user selection
4. **CHECK CONTINUATION**: Only proceed to next step when user selects 'C' (Continue)
5. **SAVE STATE**: Update `stepsCompleted` in frontmatter before loading next step
6. **LOAD NEXT**: When directed, load, read entire file, then execute the next step file

### Critical Rules (NO EXCEPTIONS)

- 🛑 **NEVER** load multiple step files simultaneously
- 📖 **ALWAYS** read entire step file before execution
- 🚫 **NEVER** skip steps or optimize the sequence
- 💾 **ALWAYS** update frontmatter when writing output
- 🎯 **ALWAYS** follow the exact instructions in the step file
- ⏸️ **ALWAYS** halt at menus and wait for user input
- 📋 **NEVER** create mental todo lists from future steps

---

## INITIALIZATION SEQUENCE

### 1. Module Configuration Loading

Load and read full config from `{project-root}/_bmad/bmm/config.yaml` and resolve:

- `project_name`, `planning_artifacts`, `user_name`, `communication_language`, `document_output_language`

### 2. Mode Determination

**Check invocation for mode:**

- User says "create" or `-c` → **mode = create**
- User says "validate" or `-v` → **mode = validate**
- User says "edit" or `-e` → **mode = edit**

**If mode unclear, ask user:**

"What would you like to do?"

- **[C]reate** - Build new project-context.md and/or architecture.md
- **[E]dit** - Modify existing project documentation
- **[V]alidate** - Check existing documentation quality

### 3. Route to First Step

**IF mode == create:**

Ask: "Starting from scratch or converting existing documentation?"

- From scratch → Load, read, and execute `./steps-c/step-01-init.md`
- Convert existing → Load, read, and execute `./steps-c/step-00-conversion.md`

**IF mode == validate:**

Ask for path to validate (or use default `{planning_artifacts}/`):

→ Load, read, and execute `./steps-v/step-01-validate.md`

**IF mode == edit:**

Ask for path to documents (or use default `{planning_artifacts}/`):

→ Load, read, and execute `./steps-e/step-01-assess.md`

---

## PHASE OVERVIEW

### Phase 1: Architecture Creation

Creates comprehensive architectural decisions, implementation patterns, and project structure. Produces `architecture.md`.

**Steps:** 02-09 in create mode

### Phase 2: Project Context Generation

Discovers and documents the tech stack, patterns, and critical implementation rules that AI agents need to follow. Produces `project-context.md` based on architectural decisions.

**Steps:** 10-12 in create mode

### Phase 3: Validation

Validates that both documents are complete, aligned, and ready for implementation.

**Steps:** 13-15 in create mode

---

## INPUT MODES

### Greenfield (New Project)

- No existing codebase
- Discover through conversation
- Evaluate starter templates
- Create fresh architecture

### Brownfield with Scan

- Scan project folder for patterns
- Extract tech stack from configs
- Document existing patterns
- Create/update documentation

### Brownfield with Provided Files

- User provides existing documents
- Validate and enhance
- Update based on current state
