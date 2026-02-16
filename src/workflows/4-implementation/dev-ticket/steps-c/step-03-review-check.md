---
name: 'step-03-review-check'
description: 'Detect if resuming after code review and extract review context'

nextStepFile: './step-04-mark-in-progress.md'
ticketFile: '{implementation_artifacts}/ticket_{ticket_number}.md'
---

# Step 3: Review Check

## STEP GOAL:

To detect if this workflow is resuming after a code review, and if so, extract the review action items for prioritized resolution.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a Senior Developer / Implementation Specialist
- ✅ Code review follow-ups take priority over regular tasks
- ✅ Resuming after review requires different handling
- ✅ Together we ensure review items are properly addressed

### Step-Specific Rules:

- 🎯 Focus only on detecting review state
- 🚫 FORBIDDEN to start implementation before checking review state
- 📋 Extract review items if they exist
- 🔄 Set review_continuation flag for later steps

## EXECUTION PROTOCOLS:

- 🎯 Check for Senior Developer Review section
- 📋 Extract action items if review exists
- 🔄 Set continuation flag
- 📖 Report findings to user

## CONTEXT BOUNDARIES:

- Ticket file loaded from step 02
- Focus: Detect review continuation state
- Dependencies: step-02-load-context.md completed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Check for Senior Developer Review Section

**Examine the ticket file for a "Senior Developer Review (AI)" section.**

**If section EXISTS:**

Set `{review_continuation}` = true

Extract from the review section:
- **Review outcome** (Approve/Changes Requested/Blocked)
- **Review date**
- **Action Items** - Count checked vs unchecked items
- **Severity breakdown** - Count High/Medium/Low items

**If section DOES NOT EXIST:**

Set `{review_continuation}` = false
Set `{pending_review_items}` = empty

### 2. Check for Review Follow-ups

**If review exists, check for "Review Follow-ups (AI)" subsection under Tasks/Subtasks.**

Count unchecked [ ] review follow-up tasks.

Store list of unchecked review items as: `{pending_review_items}`

### 3. Report Status

**If review_continuation = true:**

"⏯️ **Resuming After Code Review** ({review_date})

**Review Outcome:** {review_outcome}
**Action Items:** {unchecked_count} remaining to address
**Priorities:** {high_count} High, {med_count} Medium, {low_count} Low

**Strategy:** Will prioritize review follow-up tasks (marked [AI-Review]) before continuing with regular tasks."

**If review_continuation = false:**

"🚀 **Starting Fresh Implementation**

**Ticket:** {ticket_number}
**First incomplete task:** {first_task_description}"

### 4. Present MENU OPTIONS

Display: **Select:** [C] Continue to Mark In-Progress

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

#### Menu Handling Logic:

- IF C: Proceed to load `{nextStepFile}`
- IF Any other: help user, then redisplay menu

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:

- Review state correctly detected
- Review items extracted (if review exists)
- Continuation flag set appropriately
- User informed of state

### ❌ SYSTEM FAILURE:

- Not checking for review section
- Ignoring review items
- Wrong continuation flag
- Not reporting to user

**Master Rule:** Review continuation must be detected before implementation starts.
