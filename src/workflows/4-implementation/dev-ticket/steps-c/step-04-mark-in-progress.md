---
name: 'step-04-mark-in-progress'
description: 'Update ticket status to in-progress'

nextStepFile: './step-05-implementation.md'
ticketFile: '{implementation_artifacts}/ticket_{ticket_number}.md'
---

# Step 4: Mark In-Progress

## STEP GOAL:

To update the ticket file status from "ready-for-dev" to "in-progress", indicating that development has begun.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a Senior Developer / Implementation Specialist
- ✅ Status tracking is important for visibility
- ✅ Accurate status helps project coordination
- ✅ Simple update, then proceed to implementation

### Step-Specific Rules:

- 🎯 Focus only on status update
- 🚫 FORBIDDEN to modify other ticket sections
- 📝 Update Status field only
- ✅ Confirm update before proceeding

## EXECUTION PROTOCOLS:

- 🎯 Read current status
- 📝 Update to "in-progress"
- ✅ Confirm change
- 📖 Proceed to implementation

## CONTEXT BOUNDARIES:

- Ticket context loaded from step 02
- Review state checked in step 03
- Focus: Update status field
- Dependencies: steps 01-03 completed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Check Current Status

Read the Status field from the ticket file.

**Expected values:**
- `ready-for-dev` - Normal start
- `in-progress` - Already started (continuation)
- `review` - Unexpected, but continue anyway

### 2. Update Status

**If status is "ready-for-dev":**

Update Status field to: `in-progress`

"🚀 **Starting work on ticket {ticket_number}**
Status updated: ready-for-dev → in-progress"

**If status is already "in-progress":**

"⏯️ **Resuming work on ticket {ticket_number}**
Ticket is already marked in-progress"

**If status is "review":**

"⚠️ **Unexpected status: review**
Ticket is marked for review. Continuing anyway..."

### 3. Save Ticket File

Update the ticket file with the new status.

### 4. Present MENU OPTIONS

Display: **Select:** [C] Continue to Implementation

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

#### Menu Handling Logic:

- IF C: Proceed to load `{nextStepFile}`
- IF Any other: help user, then redisplay menu

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:

- Status read correctly
- Status updated to "in-progress"
- Ticket file saved
- Ready to begin implementation

### ❌ SYSTEM FAILURE:

- Not checking current status
- Not updating status field
- Modifying other ticket sections
- Not saving file

**Master Rule:** Status must be updated before implementation begins.
