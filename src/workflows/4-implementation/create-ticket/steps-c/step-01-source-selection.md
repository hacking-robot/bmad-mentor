---
name: 'step-01-source-selection'
description: 'Select ticket source (Jira or Project Breakdown) and capture ticket details'

nextStepFile: './step-02-discovery.md'
outputFile: '{implementation_artifacts}/ticket_{ticket_number}.md'
projectBreakdownFile: '{project-root}/_bmad-output/planning/project-breakdown.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 1: Source Selection

## STEP GOAL:

To determine the ticket source (Jira or Project Breakdown), capture ticket details, and set the workflow mode before proceeding to context discovery.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a Ticket Context Specialist helping capture ticket details
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring workflow expertise, user brings their ticket context
- ✅ Together we ensure the ticket source is properly captured

### Step-Specific Rules:

- 🎯 Focus only on source selection, ticket details, and mode preference
- 🚫 FORBIDDEN to start analysis before capturing ticket details
- 💬 Be thorough when capturing ticket content - this drives the entire workflow
- 🔢 Store ticket details as session variables for downstream steps

## EXECUTION PROTOCOLS:

- 🎯 Ask for ticket source first
- 💾 Store all ticket details for use in discovery and creation steps
- 🔀 Ask for mode preference after source selection
- 📖 Pass all context to subsequent steps

## CONTEXT BOUNDARIES:

- This is the first step - no prior context exists
- Focus: Get ticket source, details, and mode preference
- Dependencies: None (this is initialization)

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Welcome and Ask Source

"**Welcome to Create Ticket!**

I'll help you create a comprehensive ticket file. First, where is your ticket information coming from?

**Select Source:**

- **[J]ira Ticket** - Enter ticket number and details manually
- **[P]roject Breakdown** - Select from existing epic/story in project breakdown"

**Wait for user selection:**
- **J** → Proceed to [Handle Jira Path](#2-handle-jira-path)
- **P** → Proceed to [Handle Project Breakdown Path](#3-handle-project-breakdown-path)

---

### 2. Handle Jira Path

#### 2.1 Get Ticket Number

"**What's the Jira ticket number?**

(e.g., 'PROJ-123', 'ABC-456')"

**Wait for user input.**

**Store as:** `{ticket_number}`

#### 2.2 Get Ticket Title

"**What's the ticket title/summary?**

Enter the title as it appears in Jira:"

**Wait for user input.**

**Store as:** `{ticket_title}`

#### 2.3 Get Ticket Content

"**Please paste the ticket description/content.**

Include the full description and any acceptance criteria. This will be used to drive the ticket file creation."

**Wait for user input.**

**Store as:** `{ticket_content}`

#### 2.4 Set Source Metadata

Set session variables:
- `{ticket_source}` = "jira"
- `{epic_name}` = null (not applicable for Jira)

**Proceed to [Check for Existing Ticket File](#4-check-for-existing-ticket-file)**

---

### 3. Handle Project Breakdown Path

#### 3.1 Load Project Breakdown File

Read `{projectBreakdownFile}`.

**If file NOT found:**

"🚫 **Error:** Project breakdown file not found at:
`_bmad-output/planning/project-breakdown.md`

Would you like to:
- **[J]ira** - Switch to Jira ticket entry instead
- **[R]etry** - Check again (maybe you need to generate it first)
- **[Q]uit** - Exit the workflow"

**Wait for user selection and handle accordingly.**

#### 3.2 Parse and Present Epics

**Parse the project breakdown to extract epics.**

"**Select an Epic:**

[List all epics found in the project breakdown, numbered]

Enter the number of the epic this ticket belongs to:"

**Wait for user selection.**

**Store as:** `{epic_name}` (the selected epic name)

#### 3.3 Present Stories in Selected Epic

**Parse stories within the selected epic.**

"**Stories in {epic_name}:**

[List all stories in the selected epic, numbered]

Enter the number of the story for this ticket:"

**Wait for user selection.**

#### 3.4 Extract Story Details

**Extract from the selected story:**
- Story title → Store as `{ticket_title}`
- Story description/content → Store as `{ticket_content}`
- Generate ticket number from story reference if available, or ask for one

"**What ticket number should I use for the output file?**

(e.g., 'PROJ-123', or use the story reference if available)"

**Wait for user input.**

**Store as:** `{ticket_number}`

#### 3.5 Set Source Metadata

Set session variables:
- `{ticket_source}` = "breakdown"

**Proceed to [Check for Existing Ticket File](#4-check-for-existing-ticket-file)**

---

### 4. Check for Existing Ticket File

Check if `{implementation_artifacts}/ticket_{ticket_number}.md` already exists.

**If file exists:**

"A ticket file already exists for ticket {ticket_number}.

**What would you like to do?**

- **[O]verwrite** - Replace the existing file
- **[N]ew number** - Use a different ticket number
- **[Q]uit** - Exit without changes"

**Wait for user selection and handle accordingly.**

---

### 5. Get Mode Preference

"**How would you like to work?**

- **[C]ollaborative** - I'll show findings at each phase and get your input
- **[A]utonomous** - I'll do all the work and report results at the end

Collaborative is good for complex changes where you want to guide the analysis.
Autonomous is faster for straightforward changes."

**Wait for user selection:**
- **C** → Set `{mode}` = "collaborative"
- **A** → Set `{mode}` = "autonomous"

---

### 6. Confirm and Summarize

"**Perfect! Here's what we have:**

| Field | Value |
|-------|-------|
| **Source** | {ticket_source} |
| **Ticket #** | {ticket_number} |
| **Title** | {ticket_title} |
| **Mode** | {mode} |
| **Output** | ticket_{ticket_number}.md |

**Ticket Content Preview:**
> {first 200 chars of ticket_content}...

Ready to discover additional context from your codebase."

---

### 7. Present MENU OPTIONS

Display: **Select an Option:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Discovery

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

#### Menu Handling Logic:

- IF A: Execute {advancedElicitationTask}
- IF P: Execute {partyModeWorkflow}
- IF C: Store all session variables (`{ticket_source}`, `{ticket_number}`, `{ticket_title}`, `{ticket_content}`, `{epic_name}`, `{mode}`), then load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then redisplay menu

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:

- Ticket source selected (Jira or Project Breakdown)
- Ticket number obtained and stored
- Ticket title obtained and stored
- Ticket content obtained and stored
- Mode preference obtained (collaborative or autonomous)
- Output file path determined
- User confirmed and ready to proceed

### ❌ SYSTEM FAILURE:

- Proceeding without ticket source
- Proceeding without ticket title
- Proceeding without ticket content
- Proceeding without mode selection
- Not handling missing project breakdown file gracefully
- Skipping user confirmation

**Master Rule:** All ticket details MUST be captured before proceeding to discovery.
