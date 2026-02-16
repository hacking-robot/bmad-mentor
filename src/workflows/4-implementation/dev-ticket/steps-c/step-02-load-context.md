---
name: 'step-02-load-context'
description: 'Load ticket content and project context for implementation'

nextStepFile: './step-03-review-check.md'
ticketFile: '{implementation_artifacts}/ticket_{ticket_number}.md'
---

# Step 2: Load Context

## STEP GOAL:

To load the ticket file and all relevant project context (project-context.md, PRD, architecture) to provide comprehensive context for implementation.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a Senior Developer / Implementation Specialist
- ✅ You need complete context before implementing
- ✅ Loading context thoroughly prevents implementation errors
- ✅ Together we ensure nothing is missed

### Step-Specific Rules:

- 🎯 Focus only on loading and parsing context
- 🚫 FORBIDDEN to start implementation before context is loaded
- 📂 Load ALL referenced documents from ticket
- 🔍 Use subprocess (Pattern 1) for file discovery if available

## EXECUTION PROTOCOLS:

- 🎯 Load ticket file completely
- 📂 Discover and load PRD and architecture files
- 📖 Parse all sections for later use
- 💾 Store context as session variables

## CONTEXT BOUNDARIES:

- Ticket number available from step 01
- Ticket file exists (validated in step 01)
- Focus: Load comprehensive context
- Dependencies: step-01-init.md completed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Ticket File

Load and read the complete ticket file: `{ticketFile}`

Parse and extract:
- **Summary** - What this ticket implements
- **Context section** - Git changes, related commits, related tickets
- **Acceptance Criteria** - All numbered ACs
- **Tasks/Subtasks** - The implementation checklist
- **Implementation Notes** - Architecture patterns, key files, dependencies
- **Quality Gates** - Build and test verification requirements
- **References** - Links to PRD, architecture, related code
- **Dev Agent Record** - Previous implementation notes (if any)

Store as session variable: `{ticket_context}`

### 2. Load Project Context

Search for and load `project-context.md`:
- Search pattern: `**/project-context.md`
- If found: Load and extract coding standards, patterns, conventions
- If not found: Note that project-context is not available

Store as session variable: `{project_context}`

### 3. Load PRD (If Referenced)

**Check ticket References section for PRD files.**

If PRD is referenced:
- Load the PRD file
- Extract relevant functional requirements for this ticket
- Note any business context that affects implementation

Store as session variable: `{prd_context}`

### 4. Load Architecture (If Referenced)

**Check ticket References section for architecture files.**

If architecture is referenced:
- Load the architecture file
- Extract technical stack, patterns, API conventions
- Note any architectural constraints

Store as session variable: `{architecture_context}`

### 5. Summarize Loaded Context

"**✅ Context Loaded**

**Ticket:** {ticket_number}
**Summary:** [Brief summary from ticket]

**Documents Loaded:**
- Ticket file: ✓
- Project context: [✓ / Not found]
- PRD: [✓ / Not referenced]
- Architecture: [✓ / Not referenced]

**Ready to implement:** {count} tasks with {ac_count} acceptance criteria"

### 6. Present MENU OPTIONS

Display: **Select:** [C] Continue to Review Check

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

#### Menu Handling Logic:

- IF C: Proceed to load `{nextStepFile}`
- IF Any other: help user, then redisplay menu

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:

- Ticket file loaded and parsed completely
- All referenced documents loaded (PRD, architecture)
- Project context loaded (if exists)
- Context stored as session variables
- Ready to proceed to review check

### ❌ SYSTEM FAILURE:

- Skipping ticket file load
- Not parsing all ticket sections
- Ignoring referenced documents
- Proceeding without context

**Master Rule:** Complete context is REQUIRED before implementation. Missing context leads to implementation errors.
