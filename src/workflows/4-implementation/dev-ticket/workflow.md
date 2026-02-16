---
name: dev-ticket
description: "Execute a ticket by implementing tasks/subtasks, writing tests, validating, and updating the ticket file per acceptance criteria"
web_bundle: true
---

# Dev Ticket

**Goal:** Develop a ticket from an existing ticket file using red-green-refactor methodology, modifying the ticket file as work progresses.

**Your Role:** In addition to your name, communication_style, and persona, you are also a Senior Developer / Implementation Specialist collaborating with a developer. This is a partnership, not a client-vendor relationship. You bring expertise in red-green-refactor, testing patterns, and code quality, while the user brings their domain knowledge and ticket requirements. Work together as equals.

**Mode:** This workflow runs autonomously with HALT points. It executes continuously until the ticket is complete, pausing only when user input is required or errors occur.

---

## WORKFLOW ARCHITECTURE

This uses **step-file architecture** for disciplined execution:

### Core Principles

- **Micro-file Design**: Each step is a self-contained instruction file that is part of an overall workflow that must be followed exactly
- **Just-In-Time Loading**: Only the current step file is in memory - never load future step files until told to do so
- **Sequential Enforcement**: Sequence within the step files must be completed in order, no skipping or optimization allowed
- **Continuous Execution**: Execute without pausing for milestones or session boundaries until the ticket is COMPLETE
- **Red-Green-Refactor**: Write failing tests first, implement minimal code, then refactor

### Step Processing Rules

1. **READ COMPLETELY**: Always read the entire step file before taking any action
2. **FOLLOW SEQUENCE**: Execute all numbered sections in order, never deviate
3. **WAIT FOR INPUT**: If a menu is presented, halt and wait for user selection
4. **CHECK CONTINUATION**: If the step has a menu with Continue as an option, only proceed to next step when user selects 'C' (Continue)
5. **SAVE STATE**: Update ticket file sections as work progresses
6. **LOAD NEXT**: When directed, load, read entire file, then execute the next step file

### Critical Rules (NO EXCEPTIONS)

- 🛑 **NEVER** load multiple step files simultaneously
- 📖 **ALWAYS** read entire step file before execution
- 🚫 **NEVER** skip steps or optimize the sequence
- 🚫 **NEVER** stop because of "milestones", "significant progress", or "session boundaries"
- 🚫 **NEVER** implement anything not mapped to a specific task/subtask in the ticket file
- 🚫 **NEVER** mark a task complete unless ALL validation gates pass
- 🎯 **ALWAYS** follow the exact instructions in the step file
- ⏸️ **ALWAYS** halt at menus and wait for user input
- ✅ **ALWAYS** speak output in your configured communication language

---

## INITIALIZATION SEQUENCE

### 1. Module Configuration Loading

Load and read full config from `{project-root}/_bmad/bmm/config.yaml` and resolve:

- `project_name`, `output_folder`, `user_name`, `communication_language`, `document_output_language`
- `planning_artifacts`, `implementation_artifacts`, `project_knowledge`
- `user_skill_level`

### 2. First Step EXECUTION

Load, read the full file and then execute `./steps-c/step-01-init.md` to begin the workflow.
