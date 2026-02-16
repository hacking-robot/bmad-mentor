---
name: 'step-02-build-plan'
description: 'Extract ACs/Tasks from ticket, cross-reference with git, build the review attack plan'

nextStepFile: './step-03-execute-review.md'
checklistFile: '../data/checklist.md'
---

# Step 2: Build Review Attack Plan

## STEP GOAL:

To extract all Acceptance Criteria and Tasks from the ticket, cross-reference with git changes, and build a comprehensive review attack plan.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a Senior Developer / Code Review Specialist
- ✅ This step PLANS the review - execution comes next
- ✅ Be thorough - capture everything from the ticket
- ✅ This plan drives the adversarial review

### Step-Specific Rules:

- 🎯 Focus only on extracting and planning - no review yet
- 🚫 FORBIDDEN to start reviewing code in this step
- 💬 Extract EXACTLY what's in the ticket - don't interpret
- 📋 Document all tasks with their completion status

## EXECUTION PROTOCOLS:

- 🎯 Extract ALL ACs and ALL Tasks from ticket sections
- 💾 Store the attack plan as session variables
- 📖 Cross-reference plan with file discrepancies
- 🚫 Planning only - review happens in step 3

## CONTEXT BOUNDARIES:

- Ticket sections loaded from step 1
- Git changes discovered from step 1
- Focus: Planning the attack, not executing
- Dependencies: Step 1 must be complete

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Extract Acceptance Criteria

**From `{{ticket_sections}}`, extract ALL Acceptance Criteria.**

For each AC, record:
- AC number (e.g., "AC1", "AC2")
- AC text (exact wording from ticket)
- Linked tasks (if indicated like "Task 1.1 (AC: 1)")

**Set session variable:**
- `{{acceptance_criteria}}` = array of {number, text, linked_tasks}

**Count:** Display count of ACs found.

### 2. Extract Tasks and Subtasks

**From `{{ticket_sections}}`, extract ALL Tasks with completion status.**

For each task, record:
- Task number (e.g., "1", "2.1", "2.2")
- Task text (exact wording)
- Completion status: `[x]` = completed, `[ ]` = incomplete
- Linked AC (if indicated)
- Subtasks (if any, with their own status)

**Set session variable:**
- `{{tasks}}` = array of {number, text, status, linked_ac, subtasks}
- `{{completed_tasks}}` = count of [x] tasks
- `{{total_tasks}}` = total task count

### 3. Extract File List from Dev Agent Record

**From `{{ticket_sections}}`, extract Files Modified/Created.**

This is what the developer CLAIMS to have changed.

**Set session variable:**
- `{{claimed_files}}` = array of files from Dev Agent Record

### 4. Build Review Attack Plan

**Create the attack plan structure:**

```
## Review Attack Plan

### 1. AC Validation
For each AC:
- AC#: [text]
- Evidence needed: [what to look for]
- Status: PENDING

### 2. Task Audit
For each [x] task:
- Task#: [text]
- Evidence needed: [what proves it's done]
- Status: PENDING (will become VERIFIED or FAILED)

### 3. File Review
For each file in combined list (claimed + git):
- File: [path]
- From: ticket/git/both
- Review focus: Security, Performance, Quality
- Status: PENDING

### 4. Quality Gates Check
- Build Verification: [status from ticket]
- Test Execution: [status from ticket]
```

**Set session variable:**
- `{{attack_plan}}` = the complete attack plan

### 5. Identify High-Priority Targets

**Flag items requiring special attention:**

1. **CRITICAL targets** (will be CRITICAL findings if failed):
   - Tasks marked [x] that need verification

2. **HIGH targets** (will be HIGH findings if failed):
   - ACs that must be implemented
   - Files claimed in ticket but not in git

3. **MEDIUM targets**:
   - Files in git but not documented
   - Quality Gates checkboxes

**Set session variable:**
- `{{critical_targets}}` = count of [x] tasks to verify
- `{{high_targets}}` = count of ACs to validate

### 6. Display Attack Plan Summary

Present the attack plan:

```
**Review Attack Plan Built**

| Category | Count | Priority |
|----------|-------|----------|
| Acceptance Criteria | {{count}} | HIGH |
| Completed Tasks to Verify | {{completed_tasks}} | CRITICAL |
| Total Tasks | {{total_tasks}} | - |
| Files to Review | {{file_count}} | - |

**File Scope:**
- Claimed in ticket: {{claimed_count}}
- In git changes: {{git_count}}
- Combined unique: {{combined_count}}

**Discrepancies to Investigate:**
{{#if file_discrepancies}}
- Undocumented files: {{count}}
- Claimed but unchanged: {{count}}
{{else}}
- None detected
{{/if}}

**Attack Strategy:**
1. Verify each [x] task (CRITICAL - false claims = CRITICAL findings)
2. Validate each AC (HIGH - missing ACs = HIGH findings)
3. Review all files for quality issues
4. Check Quality Gates status
5. Find minimum 3 issues total

Ready to execute the adversarial review.
```

### 7. Present MENU OPTIONS

Display: "**Select:** [C] Continue to Execute Review"

#### Menu Handling Logic:

- IF C: Store attack plan variables, then load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then [Redisplay Menu Options](#7-present-menu-options)

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:

- ALL Acceptance Criteria extracted
- ALL Tasks with completion status documented
- File list compiled (claimed + git)
- Attack plan structure built
- High-priority targets identified

### ❌ SYSTEM FAILURE:

- Missing ACs from extraction
- Not capturing task completion status
- Ignoring file discrepancies
- Proceeding without complete plan

**Master Rule:** The attack plan must be COMPLETE. Missing items = failed review.
