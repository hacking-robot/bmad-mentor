---
name: 'step-01-init'
description: 'Load ticket file, parse sections, discover git changes, cross-reference against ticket claims'

nextStepFile: './step-02-build-plan.md'
ticketFile: '{ticket_path}'
checklistFile: '../data/checklist.md'
---

# Step 1: Load Ticket and Discover Changes

## STEP GOAL:

To load the ticket file, parse all sections, discover actual git changes, and cross-reference ticket claims against git reality.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a Senior Developer / Code Review Specialist
- ✅ This is an adversarial review - be critical, not accepting
- ✅ You bring code quality expertise, user brings implementation context
- ✅ Work together to find real issues

### Step-Specific Rules:

- 🎯 Focus only on loading and parsing - no review yet
- 🚫 FORBIDDEN to start reviewing code in this step
- 💬 If ticket_path not provided, ask user or search for it
- ⚙️ SUBPROCESS FALLBACK: If subprocess unavailable, parse ticket in main thread

## EXECUTION PROTOCOLS:

- 🎯 Discover and load the ticket file
- 💾 Store all extracted data as session variables
- 📖 Cross-reference git changes vs ticket claims
- 🚫 This step only LOADS - review happens in step 3

## CONTEXT BOUNDARIES:

- User has a ticket file to review
- Git repository should exist in working directory
- Focus: Data gathering, not judgment
- Dependencies: None - this is the first step

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Get Ticket Path

**If `{ticket_path}` was provided:**
- Use the provided path

**If no path provided:**

Ask user: "**Which ticket would you like me to review?**

Please provide the path to the ticket file (e.g., `tickets/ticket_001.md` or just the ticket number like `001`):"

Wait for user input, then resolve the full path.

### 2. Load and Parse Ticket File

**Read the complete ticket file.**

Use subprocess (Pattern 1 - Grep) to extract sections efficiently:

```
Launch a subprocess to parse ticket sections:
- Extract: Status, Summary, Context, Acceptance Criteria, Tasks, Quality Gates, Dev Agent Record
- Return: Structured section map
```

**Parse these sections:**
- **Status** - Current ticket status
- **Summary** - What the ticket is about
- **Context** - Git Changes, Related Commits, Related Tickets
- **Acceptance Criteria** - All numbered ACs
- **Tasks** - All tasks with [x]/[ ] status and subtasks
- **Quality Gates** - Build Verification, Test Execution
- **Dev Agent Record** - Agent Model, Files Modified/Created, Completion Notes

**Set session variables:**
- `{{ticket_path}}` = full path to ticket file
- `{{ticket_number}}` = extracted from filename (e.g., "001" from "ticket_001.md")
- `{{ticket_status}}` = current status field
- `{{ticket_sections}}` = parsed section map

### 3. Discover Git Changes

**Check if git repository exists in current directory.**

Run these git commands:

```bash
git status --porcelain     # Uncommitted changes
git diff --name-only       # Modified files (unstaged)
git diff --cached --name-only  # Staged files
```

**Set session variables:**
- `{{git_uncommitted}}` = list from git status --porcelain
- `{{git_modified}}` = list from git diff --name-only
- `{{git_staged}}` = list from git diff --cached --name-only
- `{{all_git_changes}}` = combined unique list

### 4. Cross-Reference File List vs Git

**Extract File List from Dev Agent Record → Files Modified/Created**

Compare ticket's File List with `{{all_git_changes}}`:

**Identify discrepancies:**
- Files in git but NOT in ticket File List → Document as "Undocumented changes"
- Files in ticket File List but NO git changes → Document as "Claimed but unchanged"

**Set session variable:**
- `{{file_discrepancies}}` = map of discrepancies

### 5. Load Review Checklist

Load `{checklistFile}` for reference during review.

### 6. Display Initialization Summary

Present the initialization summary:

```
**Ticket Review Initialized**

| Field | Value |
|-------|-------|
| **Ticket** | #{{ticket_number}} |
| **Status** | {{ticket_status}} |
| **Path** | {{ticket_path}} |

**Git Status:**
- Uncommitted files: {{count}}
- Modified files: {{count}}
- Staged files: {{count}}

**File Discrepancies:**
{{#if file_discrepancies}}
- Undocumented changes: {{count}} files
- Claimed but unchanged: {{count}} files
{{else}}
- None detected
{{/if}}

**Ticket Sections Loaded:**
- Acceptance Criteria: {{count}}
- Tasks: {{count}} ({{completed}} completed)
- Quality Gates: {{count}}

Ready to build the review plan.
```

### 7. Present MENU OPTIONS

Display: "**Select:** [C] Continue to Build Review Plan"

#### Menu Handling Logic:

- IF C: Store session variables, then load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then [Redisplay Menu Options](#7-present-menu-options)

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:

- Ticket file loaded and all sections parsed
- Ticket number extracted from filename
- Git commands executed successfully
- File discrepancies identified
- Session variables stored for next steps

### ❌ SYSTEM FAILURE:

- Proceeding without loading complete ticket
- Not running git commands
- Skipping discrepancy check
- Not storing session variables

**Master Rule:** Complete data gathering before proceeding. Missing data = failed review.
