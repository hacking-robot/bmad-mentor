---
name: 'step-06-patterns'
description: 'Define implementation patterns and consistency rules for AI agents'

# File references
nextStepFile: './step-07-structure.md'
architectureOutputFile: '{planning_artifacts}/architecture.md'

# Tasks
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 6: Implementation Patterns & Consistency Rules

## STEP GOAL:
To define implementation patterns and consistency rules that ensure multiple AI agents can work on the project without conflicts.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:
- ✅ You are defining consistency patterns for AI collaboration
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring knowledge of common conflict points
- ✅ User brings their project preferences

### Step-Specific Rules:
- 🎯 Focus on WHERE agents could conflict
- 🚫 FORBIDDEN to be too prescriptive about implementation
- 💬 Define naming, structure, and format standards
- 🚪 Ensure rules are enforceable

## EXECUTION PROTOCOLS:
- 🎯 Identify potential conflict points
- 💾 Document patterns for each conflict area
- 📖 Update frontmatter when complete
- 🚫 Don't skip any pattern category

## CONTEXT BOUNDARIES:
- Core decisions from step 05 documented
- Focus: Consistency across AI agents
- Dependencies: Step 05 complete

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Explain Pattern Purpose

"**Now let's define implementation patterns.**

These ensure that when multiple AI agents work on your project, they follow the same conventions and produce compatible code.

**Without these patterns, different agents might:**
- Use different naming conventions
- Organize files differently
- Format APIs inconsistently
- Handle errors differently"

### 2. Naming Patterns

"**Naming Patterns - Where conventions matter:**

#### Database Naming
- Table names: `users`, `Users`, or `user`?
- Columns: `user_id` or `userId`?
- Foreign keys: `user_id` or `fk_user`?
- Indexes: `idx_users_email` or `users_email_index`?

**What naming convention should agents follow?**"

#### API Naming
"- Endpoint naming: `/users` or `/user`?
- Route params: `:id` or `{id}`?
- Query params: `user_id` or `userId`?
- Headers: `X-Custom-Header` or `Custom-Header`?

**What API naming convention?**"

#### Code Naming
"- Components: `UserCard` or `user-card`?
- Files: `UserCard.tsx` or `user-card.tsx`?
- Functions: `getUserData` or `get_user_data`?
- Variables: `userId` or `user_id`?

**What code naming convention?**"

**Menu:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Structure

### 3. Structure Patterns

"**Structure Patterns - Where things go:**

#### Project Organization
- Where do tests live? `__tests__/` or `*.test.ts` co-located?
- How are components organized? By feature or by type?
- Where do shared utilities go?

#### File Structure
- Config file locations?
- Static asset organization?
- Documentation placement?

**What structure patterns should agents follow?**"

**Menu:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Format

### 4. Format Patterns

"**Format Patterns - How data is structured:**

#### API Response Formats
- Success: `{ data: ..., error: null }` or direct response?
- Error: `{ message, code }` or `{ error: { type, detail } }`?
- Date format: ISO strings or timestamps?

#### Data Exchange
- JSON field naming: `snake_case` or `camelCase`?
- Boolean representation: `true/false` or `1/0`?
- Null handling: include null fields or omit?

**What format patterns should agents use?**"

**Menu:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Communication

### 5. Communication Patterns

"**Communication Patterns - How components interact:**

#### Event Systems
- Event naming: `user.created` or `UserCreated`?
- Event payload structure?

#### State Management
- State update patterns?
- Action naming conventions?

**What communication patterns?**"

**Menu:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Process

### 6. Process Patterns

"**Process Patterns - How to handle common scenarios:**

#### Error Handling
- Global error handling approach?
- Error boundary patterns?
- User-facing error messages?

#### Loading States
- Loading state naming?
- Global vs local loading?

**What process patterns should agents follow?**"

**Menu:** [A] Advanced Elicitation [P] Party Mode [C] Continue

### 7. Document All Patterns

**Append to `{architectureOutputFile}`:**

```markdown
---

## Implementation Patterns & Consistency Rules

### Naming Patterns

#### Database Naming
- Tables: [convention]
- Columns: [convention]
- Foreign keys: [convention]
- Indexes: [convention]

#### API Naming
- Endpoints: [convention]
- Route params: [convention]
- Query params: [convention]
- Headers: [convention]

#### Code Naming
- Components: [convention]
- Files: [convention]
- Functions: [convention]
- Variables: [convention]

### Structure Patterns

#### Project Organization
- Tests: [location]
- Components: [organization]
- Utilities: [location]

#### File Structure
- Config files: [location]
- Static assets: [location]
- Documentation: [location]

### Format Patterns

#### API Response Formats
- Success: [format]
- Error: [format]
- Dates: [format]

#### Data Exchange
- Field naming: [convention]
- Booleans: [convention]
- Nulls: [convention]

### Communication Patterns

#### Event Systems
- Event naming: [convention]
- Payload structure: [format]

#### State Management
- Updates: [pattern]
- Actions: [naming]

### Process Patterns

#### Error Handling
- Global: [approach]
- Boundaries: [pattern]
- User messages: [format]

#### Loading States
- Naming: [convention]
- Scope: [approach]

### AI Agent Enforcement

**All AI agents MUST:**
- Follow all naming conventions exactly
- Place files in specified locations
- Use specified formats for all data
- Follow error handling patterns
```

### 8. Present MENU OPTIONS

Display: **Patterns documented. Ready for project structure?** [A] Advanced Elicitation [P] Party Mode [C] Continue

#### EXECUTION RULES:
- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution, return to this menu

#### Menu Handling Logic:
- IF A: Execute {advancedElicitationTask}, and when finished redisplay the menu
- IF P: Execute {partyModeWorkflow}, and when finished redisplay the menu
- IF C: Update frontmatter with `stepsCompleted: [1, 2, 3, 4, 5, 6]`, then load, read entire file, then execute {nextStepFile}
- IF Any other comments or queries: help user respond then [Redisplay Menu Options](#8-present-menu-options)

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:
- All 5 pattern categories covered
- Concrete conventions specified
- User approved each category
- Enforcement rules documented

### ❌ SYSTEM FAILURE:
- Vague patterns without specifics
- Skipping pattern categories
- Not documenting conventions
- Proceeding without approval

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
