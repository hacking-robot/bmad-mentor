---
name: 'step-01-init'
description: 'Initialize workflow, detect continuation, determine project type and input mode'

# File references
nextStepFile: './step-02-init-architecture.md'
continueFile: './step-01b-continue.md'

# Output files
contextOutputFile: '{planning_artifacts}/project-context.md'
architectureOutputFile: '{planning_artifacts}/architecture.md'

# Templates
contextTemplate: '../templates/project-context-template.md'
architectureTemplate: '../templates/architecture-template.md'

# Tasks
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 1: Workflow Initialization

## STEP GOAL:
To initialize the project workflow by detecting any existing work, determining the project type (greenfield or brownfield), and selecting the appropriate input mode.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:
- ✅ You are a technical architect and project documentation expert
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring expertise in project setup and documentation
- ✅ User brings their project vision and context

### Step-Specific Rules:
- 🎯 Focus ONLY on initialization and mode selection
- 🚫 FORBIDDEN to start content discovery in this step
- 💬 Guide user to select the right mode for their situation
- 🚪 This step sets up everything that follows

## EXECUTION PROTOCOLS:
- 🎯 Check for existing work first (continuation detection)
- 💾 Create output files from templates when starting fresh
- 📖 Track all decisions in output frontmatter
- 🚫 This is the init step - sets up everything

## CONTEXT BOUNDARIES:
- Fresh start or resuming from previous session
- No prior context available (this is step 1)
- Focus: Determine project type and input mode
- Dependencies: None - this is the first step

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Check for Existing Work (Continuation Detection)

**Look for existing output files:**

Check if `{contextOutputFile}` or `{architectureOutputFile}` exists.

**IF either file exists with `stepsCompleted` in frontmatter:**
- STOP here
- Display: "**I found existing project documentation. Let me check where we left off...**"
- Load, read entire file, and execute `{continueFile}`

**IF no existing work found:**
- Continue to step 2 (fresh start)

### 2. Welcome User

"**Welcome to the Project Workflow!**

I'll help you create comprehensive project documentation that guides AI agents to implement consistently.

We'll create two documents:
- **project-context.md** - LLM-optimized implementation rules
- **architecture.md** - Technical decisions and patterns

This workflow is modular - you can:
- Complete all phases in one session
- Start at any phase if you have prerequisites
- Pause and resume later"

### 3. Determine Project Type

"**First, let's understand your project:**"

| Option | Description |
|--------|-------------|
| **[G]reenfield** | New project - no existing codebase |
| **[B]rownfield** | Existing project - has code/config to analyze |

"**Is this a greenfield (new) or brownfield (existing) project?** [G/B]"

**Handle Response:**
- **IF G:** Set `projectType: 'greenfield'`
- **IF B:** Set `projectType: 'brownfield'`
- **IF unclear:** Explain the difference and re-ask

### 4. Determine Input Mode

**Based on project type, present appropriate options:**

#### For Greenfield (G):

"**For a new project, how should we discover the technical preferences?**"

| Option | Description |
|--------|-------------|
| **[C]onversation** | We'll discuss tech preferences together |
| **[P]rovide** | You have existing docs to provide (notes, decisions) |

#### For Brownfield (B):

"**For an existing project, how should we discover the current state?**"

| Option | Description |
|--------|-------------|
| **[S]can** | I'll scan your project folder for tech stack and patterns |
| **[P]rovide** | You have existing project-context.md or architecture.md |
| **[C]onversation** | We'll discuss the existing setup together |

**Handle Response:**
- Record `inputMode: 'scan' | 'provide' | 'conversation'`

### 5. Handle Input Mode Setup

#### IF Input Mode = Scan:

"**I'll scan your project folder. Please confirm the project root path:**

Current project root: `{project-root}`

**Is this correct?** [Y/N - or provide different path]"

**IF confirmed:**
- Note: Scanning will happen in step-02

#### IF Input Mode = Provide:

"**Please provide paths to any existing documents you have:**

- Existing project-context.md? [path or 'none']
- Existing architecture.md? [path or 'none']
- Other relevant docs? [paths or 'none']

These will be analyzed in the next step."

**Record provided paths for step-02.**

#### IF Input Mode = Conversation:

"**We'll discover everything through conversation.** 

This will happen in the next steps - no setup needed now."

### 6. Initialize Output Files

"**I'll create the output files now.**"

**Create from templates:**

1. Copy `{contextTemplate}` to `{contextOutputFile}`
2. Copy `{architectureTemplate}` to `{architectureOutputFile}`

**Update frontmatter in both files:**
```yaml
stepsCompleted: [1]
lastStep: 'step-01-init'
currentPhase: 1
projectType: '{projectType}'
inputMode: '{inputMode}'
date: '{{current_date}}'
user_name: '{user_name}'
```

### 7. Confirm Initialization

"**Initialization Complete!**

**Summary:**
- Project Type: **{projectType}**
- Input Mode: **{inputMode}**
- Output Files Created:
  - `{contextOutputFile}`
  - `{architectureOutputFile}`

**What's Next:**
- Phase 1: Project Context Generation (Steps 2-4)
- Phase 2: Architecture Creation (Steps 5-12)
- Phase 3: Validation (Steps 13-15)"

### 8. Present MENU OPTIONS

Display: **Ready to begin Project Context discovery?** [A] Advanced Elicitation [P] Party Mode [C] Continue

#### EXECUTION RULES:
- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution, return to this menu

#### Menu Handling Logic:
- IF A: Execute {advancedElicitationTask}, and when finished redisplay the menu
- IF P: Execute {partyModeWorkflow}, and when finished redisplay the menu
- IF C: Update frontmatter in output files with `stepsCompleted: [1]`, then load, read entire file, then execute {nextStepFile}
- IF Any other comments or queries: help user respond then [Redisplay Menu Options](#8-present-menu-options)

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:
- Existing work detected and routed to continue step (if applicable)
- Project type correctly identified (greenfield/brownfield)
- Input mode correctly selected (scan/provide/conversation)
- Output files created from templates
- Frontmatter initialized with correct values
- User confirmed and ready to proceed

### ❌ SYSTEM FAILURE:
- Not checking for existing work before starting fresh
- Creating output files without user confirmation
- Not recording project type and input mode in frontmatter
- Skipping project type or input mode questions
- Proceeding without user selecting 'C'

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
