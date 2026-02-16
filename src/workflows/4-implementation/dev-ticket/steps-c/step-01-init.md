---
name: 'step-01-init'
description: 'Initialize dev-ticket workflow - get ticket number and locate ticket file'

nextStepFile: './step-02-load-context.md'
ticketFilePattern: '{implementation_artifacts}/ticket_{ticket_number}.md'
createTicketWorkflow: '{project-root}/_bmad/bmm/workflows/4-implementation/create-ticket/workflow.md'
---

# Step 1: Initialize

## STEP GOAL:

To gather the ticket number from the user and locate the corresponding ticket file. If the ticket file does not exist, HALT and instruct the user to run the create-ticket workflow first.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a Senior Developer / Implementation Specialist
- ✅ You help the user develop their ticket with precision
- ✅ This is a partnership - you bring expertise, user brings requirements
- ✅ Together we implement the ticket correctly

### Step-Specific Rules:

- 🎯 Focus only on getting the ticket number and locating the file
- 🚫 FORBIDDEN to proceed without a valid ticket file
- 💬 Be concise - this is a quick setup step
- 🔢 Store ticket_number as a session variable

## EXECUTION PROTOCOLS:

- 🎯 Ask for ticket number
- 💾 Search for ticket file in implementation_artifacts
- 📖 If found: Store path and proceed to step 2
- 🚫 If not found: HALT with clear instructions

## CONTEXT BOUNDARIES:

- This is the first step - no prior context exists
- Focus: Get ticket number, locate ticket file
- Dependencies: None (this is initialization)

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Welcome and Explain Workflow

"**Welcome to Dev Ticket!**

I'll help you implement your ticket using red-green-refactor methodology:

1. **Load** your ticket and project context
2. **Implement** each task with tests first
3. **Validate** all acceptance criteria
4. **Complete** when all tasks are done

First, I need your ticket number."

### 2. Get Ticket Number

"**What's the ticket number?**

This should match a ticket file created by the create-ticket workflow (e.g., 'PROJ-123', '456', 'feature-auth').

The file should be located at: `{implementation_artifacts}/ticket_{ticket_number}.md`"

**Wait for user input.**

**Store the ticket number as session variable:** `{ticket_number}`

### 3. Search for Ticket File

Search for the ticket file at: `{implementation_artifacts}/ticket_{ticket_number}.md`

**If file EXISTS:**

"**✅ Ticket Found**

- **Ticket:** {ticket_number}
- **File:** ticket_{ticket_number}.md

Loading ticket context..."

**Immediately proceed to Step 2** - Load `{nextStepFile}`

**If file DOES NOT EXIST:**

"**🚫 Ticket Not Found**

No ticket file found at: `{implementation_artifacts}/ticket_{ticket_number}.md`

**What would you like to do?**

1. **[R]etry** - Enter a different ticket number
2. **[C]reate** - Run the create-ticket workflow first
3. **[Q]uit** - Exit this workflow"

**Wait for user selection:**

- **IF R:** Return to step 2 (Get Ticket Number)
- **IF C:** HALT - Instruct user: "Please run the create-ticket workflow first to create ticket_{ticket_number}.md, then run dev-ticket again."
- **IF Q:** HALT - "Workflow ended. Run dev-ticket again when you have a ticket file ready."
- **IF Any other:** Help user, then redisplay options

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:

- Ticket number obtained from user
- Ticket file found at correct location
- Ready to proceed to step 2 (load context)

### ❌ SYSTEM FAILURE:

- Proceeding without ticket number
- Proceeding without finding ticket file
- Not offering alternatives when ticket not found

**Master Rule:** A valid ticket file is REQUIRED before proceeding. Never start development without it.
