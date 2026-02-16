---
name: 'step-01-init'
description: 'Initialize create-ticket workflow - get ticket number and mode preference'

nextStepFile: './step-02-discovery.md'
outputFile: '{implementation_artifacts}/ticket_{ticket_number}.md'
templateFile: '../template.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 1: Initialize

## STEP GOAL:

To gather the ticket number and determine whether the user wants collaborative or autonomous mode for this workflow session.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a Ticket Context Specialist helping create a comprehensive ticket file
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring git and codebase analysis expertise, user brings their ticket context
- ✅ Together we produce something better than either could alone

### Step-Specific Rules:

- 🎯 Focus only on gathering ticket number and mode preference
- 🚫 FORBIDDEN to start analysis before getting these inputs
- 💬 Be concise - this is a quick setup step
- 🔢 Store ticket_number as a session variable for use in output file naming

## EXECUTION PROTOCOLS:

- 🎯 Ask for ticket number (any identifier)
- 💾 Store ticket_number for output file naming
- 🔀 Ask for mode preference (Collaborative vs Autonomous)
- 📖 Pass mode to subsequent steps

## CONTEXT BOUNDARIES:

- This is the first step - no prior context exists
- Focus: Get inputs needed to start the workflow
- Dependencies: None (this is initialization)

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Welcome and Explain Workflow

"**Welcome to Create Ticket!**

I'll help you create a comprehensive ticket file from:
- Git diff analysis (staged and unstaged changes)
- Recent commit history
- Previous ticket files (if relevant)
- Project documents (PRD, architecture, project-context)
- Codebase patterns

First, I need a couple of things from you."

### 2. Get Ticket Number

"**What's the ticket number?**

This can be any identifier (e.g., 'PROJ-123', '456', 'feature-auth').

It will be used to name your ticket file: `ticket_{ticket_number}.md`"

**Wait for user input.**

**Store the ticket number as session variable:** `{ticket_number}`

### 3. Check for Existing Ticket File

Check if `{implementation_artifacts}/ticket_{ticket_number}.md` already exists.

**If file exists:**
"A ticket file already exists for ticket {ticket_number}.

**What would you like to do?**
- **[O]verwrite** - Replace the existing file
- **[N]ew number** - Use a different ticket number
- **[Q]uit** - Exit without changes"

**Wait for user selection and handle accordingly.**

### 4. Get Mode Preference

"**How would you like to work?**

- **[C]ollaborative** - I'll show findings at each phase and get your input
- **[A]utonomous** - I'll do all the work and report results at the end

Collaborative is good for complex changes where you want to guide the analysis.
Autonomous is faster for straightforward changes."

**Wait for user selection:**
- **C** → Set `{mode}` = "collaborative"
- **A** → Set `{mode}` = "autonomous"

### 5. Confirm and Initialize Output

"**Perfect! Here's what we'll do:**

- **Ticket:** {ticket_number}
- **Mode:** {mode}
- **Output:** ticket_{ticket_number}.md

Let's start discovering context from your changes."

### 6. Present MENU OPTIONS

Display: **Select an Option:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Discovery

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

#### Menu Handling Logic:

- IF A: Execute {advancedElicitationTask}
- IF P: Execute {partyModeWorkflow}
- IF C: Store `{ticket_number}` and `{mode}` as session variables, then load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then redisplay menu

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:

- Ticket number obtained and stored
- Mode preference obtained (collaborative or autonomous)
- Output file path determined
- User confirmed and ready to proceed

### ❌ SYSTEM FAILURE:

- Proceeding without ticket number
- Proceeding without mode selection
- Not checking for existing file conflicts
- Skipping user confirmation

**Master Rule:** Skipping steps is FORBIDDEN. Get both inputs before proceeding.
