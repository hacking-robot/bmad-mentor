---
name: 'step-04-starter-or-existing'
description: 'Branch step - evaluate starter templates (greenfield) or review existing architecture (brownfield)'

# File references
greenfieldNextStep: './step-05-decisions.md'
brownfieldNextStep: './step-05-decisions.md'
contextOutputFile: '{planning_artifacts}/project-context.md'
architectureOutputFile: '{planning_artifacts}/architecture.md'

# Tasks
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 4: Starter Template or Existing Architecture

## STEP GOAL:
To evaluate starter templates for greenfield projects OR review existing architecture for brownfield projects, establishing the foundation for architectural decisions.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:
- ✅ You are a technical architect evaluating foundations
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring knowledge of starter templates and best practices
- ✅ User brings their preferences and constraints

### Step-Specific Rules:
- 🎯 Branch based on projectType (greenfield/brownfield)
- 🚫 FORBIDDEN to skip evaluation
- 💬 Use web search to verify current versions
- 🚪 Document the chosen foundation

## EXECUTION PROTOCOLS:
- 🎯 Execute appropriate branch (greenfield or brownfield)
- 💾 Document findings in architecture file
- 📖 Update frontmatter when complete
- 🚫 Don't proceed without documenting foundation

## CONTEXT BOUNDARIES:
- projectType from step 01
- Project analysis from step 03
- Focus: Establish architectural foundation
- Dependencies: Steps 01-03 complete

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Determine Branch

Load `{architectureOutputFile}` frontmatter to get `projectType`.

**IF projectType == 'greenfield':**
→ Execute GREENFIELD BRANCH (Section 2)

**IF projectType == 'brownfield':**
→ Execute BROWNFIELD BRANCH (Section 3)

---

## 2. GREENFIELD BRANCH: Starter Template Evaluation

### 2a. Identify Technology Domain

"**For your greenfield project, let's evaluate starter templates.**

Based on your tech stack, you're building a:
- **[web app / API / mobile app / CLI / full-stack app]**

**Is this correct?**"

### 2b. Discover Technical Preferences

"**Before we look at starters, let me check your technical preferences.**

From your project context:
- Languages: [from context]
- Frameworks: [from context]

**Do you have additional preferences for:**
- Styling solution? (Tailwind, CSS Modules, Styled Components)
- State management? (Context, Redux, Zustand)
- Testing setup? (Jest, Vitest, Playwright)"

### 2c. Research Starter Options

**Use web search to find current starter templates:**

```
Search: "{primary_framework} starter template CLI create command 2025"
Search: "{primary_framework} production boilerplate best practices"
```

### 2d. Present Options

"**I found these starter options for your tech stack:**

| Starter | What It Provides | Best For |
|---------|-----------------|----------|
| [Starter 1] | [features] | [use case] |
| [Starter 2] | [features] | [use case] |
| [Custom] | Build from scratch | Full control |

**Which would you like to use?**"

### 2e. Get CLI Commands

**If user selects a starter, search for current CLI commands:**

```
Search: "{starter_name} CLI command create new project 2025"
```

### 2f. Document Starter Choice

**Append to `{architectureOutputFile}`:**

```markdown
## Technology Decisions

### Starter Template

**Selected Starter:** [starter_name]

**Rationale:** [why chosen]

**Initialization Command:**
\`\`\`bash
[full CLI command]
\`\`\`

**Decisions Made by Starter:**
- Language: [setup]
- Styling: [solution]
- Build tool: [tool]
- Testing: [setup]
- Linting: [setup]

**Note:** Project initialization should be the first implementation task.
```

**Proceed to Step 5.**

---

## 3. BROWNFIELD BRANCH: Existing Architecture Review

### 3a. Analyze Existing Structure

"**For your brownfield project, let me review the existing architecture.**"

**Scan project for architectural patterns:**
- Directory structure
- Config files
- Existing documentation
- Package dependencies

### 3b. Identify Existing Decisions

"**I found these existing architectural decisions:**

**From your codebase:**
- [Identified patterns]
- [Existing conventions]
- [Current tooling]

**Are these intentional patterns that should be preserved?**"

### 3c. Identify Gaps

"**Based on the existing codebase, I see these gaps:**

- [Missing documentation]
- [Undefined patterns]
- [Inconsistent conventions]

**Which gaps should we address in this architecture document?**"

### 3d. Document Existing Architecture

**Append to `{architectureOutputFile}`:**

```markdown
## Technology Decisions

### Existing Architecture

**Project Status:** Brownfield (existing codebase)

**Existing Patterns:**
- [Documented existing patterns]

**Preserved Decisions:**
- [Decisions to maintain from existing code]

**Gaps to Address:**
- [Identified gaps]

**Note:** Architecture document will preserve existing patterns while filling identified gaps.
```

**Proceed to Step 5.**

---

### 4. Present MENU OPTIONS

Display: **Foundation documented. Ready for architectural decisions?** [A] Advanced Elicitation [P] Party Mode [C] Continue

#### EXECUTION RULES:
- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution, return to this menu

#### Menu Handling Logic:
- IF A: Execute {advancedElicitationTask}, and when finished redisplay the menu
- IF P: Execute {partyModeWorkflow}, and when finished redisplay the menu
- IF C: Update frontmatter with `stepsCompleted: [1, 2, 3, 4]`, then load, read entire file, then execute {greenfieldNextStep} or {brownfieldNextStep}
- IF Any other comments or queries: help user respond then [Redisplay Menu Options](#4-present-menu-options)

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:
- Correct branch executed (greenfield or brownfield)
- Web search used to verify current starter info (greenfield)
- Foundation documented in architecture file
- User approved foundation choice

### ❌ SYSTEM FAILURE:
- Executing wrong branch
- Not using web search for current versions
- Not documenting in architecture file
- Proceeding without user approval

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
