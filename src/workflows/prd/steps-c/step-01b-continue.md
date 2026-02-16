---
name: 'step-01b-continue'
description: 'Resume interrupted PRD workflow from last completed step'

# File references (ONLY variables used in this step)
outputFile: '{output_folder}/prd.md'
workflowFile: '../workflow-create-prd.md'

# Step routing map (all possible next steps)
stepRouting:
  step-01-init: './step-02-discovery.md'
  step-02-discovery: './step-03-success.md'
  step-03-success: './step-04-journeys.md'
  step-04-journeys: './step-05-domain.md'
  step-05-domain: './step-06-innovation.md'
  step-06-innovation: './step-07-project-type.md'
  step-07-project-type: './step-08-scoping.md'
  step-08-scoping: './step-09-functional.md'
  step-09-functional: './step-10-nonfunctional.md'
  step-10-nonfunctional: './step-11-polish.md'
  step-11-polish: './step-12-complete.md'
---

# Step 1b: Continue Workflow

## STEP GOAL:

Resume the PRD workflow from where it was left off in a previous session, welcoming the user back and routing to the correct next step.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a product-focused PM facilitator collaborating with an expert peer
- ✅ If you already have been given communication or persona patterns, continue to use those while playing this new role
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring continuity and context awareness
- ✅ User brings their product vision and domain knowledge

### Step-Specific Rules:

- 🎯 Focus ONLY on resuming the workflow correctly
- 🚫 FORBIDDEN to restart or reset progress
- 💬 Approach: Welcoming back, context-aware
- 🚪 This step auto-routes - no extended interaction needed

## EXECUTION PROTOCOLS:

- 🎯 Read stepsCompleted from PRD frontmatter
- 📖 Identify the correct next step
- 🔄 Route to that step immediately
- 🚫 FORBIDDEN to lose or reset progress

## CONTEXT BOUNDARIES:

- User has run this workflow before
- PRD file exists with stepsCompleted array
- Need to route to the correct next step
- Preserve all context from previous session

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Welcome Back

Display:

"👋 **Welcome back!** Let me check where we left off..."

### 2. Read PRD Progress

**Load the PRD file:**
- Read {outputFile}
- Extract frontmatter `stepsCompleted` array
- Extract `lastStep` value
- Extract `date` of last update

### 3. Display Progress Summary

Show the user what's been completed:

"**Progress Summary:**

| Step | Status |
|------|--------|
| [List all steps with ✓ for completed, ○ for remaining] |

**Last completed:** {lastStep}
**Date:** {date}"

### 4. Determine Next Step

**From the stepsCompleted array, identify the next step:**

- Find the last item in `stepsCompleted`
- Look up the corresponding next step from `stepRouting`
- If `stepsCompleted` is empty or only has step-01-init, route to step-02

**Step Routing Logic:**
```yaml
step-01-init → step-02-discovery
step-02-discovery → step-03-success
step-03-success → step-04-journeys
step-04-journeys → step-05-domain
step-05-domain → step-06-innovation
step-06-innovation → step-07-project-type
step-07-project-type → step-08-scoping
step-08-scoping → step-09-functional
step-09-functional → step-10-nonfunctional
step-10-nonfunctional → step-11-polish
step-11-polish → step-12-complete
step-12-complete → WORKFLOW COMPLETE
```

### 5. Offer Resume Options

Display:

"**Where would you like to continue?**

| Option | Description |
|--------|-------------|
| **[C] Continue** | Resume from where you left off: {next_step_name} |
| **[R] Review** | Review completed sections before continuing |
| **[S] Start Over** | Discard progress and start fresh |

**Please select:** [C] Continue / [R] Review / [S] Start Over"

#### Menu Handling Logic:

**IF C (Continue):**
- Display: "**Resuming at {next_step_name}...**"
- Load and follow the next step file

**IF R (Review):**
- Display the current PRD content
- Ask which sections to review
- After review, return to menu

**IF S (Start Over):**
- Confirm: "**Are you sure? This will discard all progress.** [Y/N]"
- IF Y: Delete PRD, load step-01-init.md
- IF N: Return to menu

### 6. Auto-Proceed (Default)

**If user selects C or no response after welcome:**

Display: "**Continuing from {next_step_name}...**"

Immediately load and follow the appropriate next step file.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- PRD file loaded successfully
- stepsCompleted array read correctly
- Next step identified correctly
- User welcomed back warmly
- Progress summary displayed
- Routed to correct next step

### ❌ SYSTEM FAILURE:

- Not loading the PRD file
- Misinterpreting stepsCompleted
- Routing to wrong step
- Losing progress information
- Not offering user options

**Master Rule:** Never lose user progress. Always route to the correct next step based on stepsCompleted.
