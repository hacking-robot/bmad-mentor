---
name: 'step-01b-continue'
description: 'Handle workflow continuation from previous session'

# File references
contextOutputFile: '{planning_artifacts}/project-context.md'
architectureOutputFile: '{planning_artifacts}/architecture.md'
workflowFile: '../workflow.md'

# Step routing map
nextStepOptions:
  step-02: './step-02-init-architecture.md'
  step-03: './step-03-analyze-context.md'
  step-04: './step-04-starter-or-existing.md'
  step-05: './step-05-decisions.md'
  step-06: './step-06-patterns.md'
  step-07: './step-07-structure.md'
  step-08: './step-08-validate-architecture.md'
  step-09: './step-09-complete-architecture.md'
  step-10: './step-10-discover-context.md'
  step-11: './step-11-generate-context.md'
  step-12: './step-12-complete-context.md'
  step-13: './step-13-validate-alignment.md'
  step-14: './step-14-quality-review.md'
  step-15: './step-15-final-assessment.md'
---

# Step 1b: Continue Workflow

## STEP GOAL:
To resume the workflow from where it was left off in a previous session, routing to the correct next step.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step, ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:
- ✅ You are a technical architect and project documentation expert
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You help users resume their work seamlessly
- ✅ User brings context of what they were working on

### Step-Specific Rules:
- 🎯 Focus ONLY on resumption and routing
- 🚫 FORBIDDEN to restart the workflow from scratch
- 💬 Help user understand where they left off
- 🚪 Route to the correct next step based on progress

## EXECUTION PROTOCOLS:
- 🎯 Read stepsCompleted from the most complete output file
- 💾 Preserve all existing work
- 📖 Route to the step AFTER the last completed step
- 🚫 This is a routing step only - no content generation

## CONTEXT BOUNDARIES:
- User has run this workflow before
- At least one output file exists with stepsCompleted
- Need to determine the correct next step
- Dependencies: Output file from previous session

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Welcome Back

"**Welcome back!**

Let me check where we left off..."

### 2. Determine Which Output File to Use

**Check both output files:**

1. Check if `{contextOutputFile}` exists and has `stepsCompleted`
2. Check if `{architectureOutputFile}` exists and has `stepsCompleted`

**Priority:**
- Use the file with the highest `stepsCompleted` count
- If both exist with same count, prefer `{architectureOutputFile}` (later phase)

**IF no file has stepsCompleted:**
- Display: "I found output files but no progress recorded. Let me help you determine where to resume."
- Ask user which phase they were working on
- Route to step 1 of that phase

### 3. Read Progress from Output File

Load the selected output file and read frontmatter:

```yaml
stepsCompleted: [1, 2, 3, ...]
lastStep: 'step-XX-name'
currentPhase: [1, 2, or 3]
projectType: 'greenfield' | 'brownfield'
inputMode: 'scan' | 'provide' | 'conversation'
```

### 4. Display Progress Summary

"**Here's where you left off:**

**Project Type:** {projectType}
**Input Mode:** {inputMode}
**Current Phase:** {currentPhase} ({Phase Name})
**Last Completed Step:** {lastStep}
**Steps Completed:** {stepsCompleted}

**Phase Overview:**
- Phase 1: Architecture (Steps 1-9) - {Complete/In Progress/Not Started}
- Phase 2: Project Context (Steps 10-12) - {Complete/In Progress/Not Started}
- Phase 3: Validation (Steps 13-15) - {Complete/In Progress/Not Started}"

### 5. Determine Next Step

**Calculate next step from stepsCompleted:**

```
lastCompleted = max(stepsCompleted)
nextStep = lastCompleted + 1
```

**IF nextStep > 15:**
- All steps completed
- Display: "Congratulations! Your project documentation is complete!"
- Offer: Start fresh / Validate existing / Edit existing

**IF nextStep exists in nextStepOptions:**
- Identify the next step file
- Confirm with user

### 6. Confirm and Route

"**Ready to continue with Step {nextStep}?**

[C] Continue - Resume from Step {nextStep}
[R] Restart - Start fresh from Step 1
[V] View - View current output files first"

**Handle Response:**

#### IF C (Continue):

"**Resuming from Step {nextStep}...**"

- Load, read entire file, and execute the next step file from `{nextStepOptions}`

#### IF R (Restart):

"**Are you sure you want to restart? This will:**
- Keep existing output files (renamed with backup date)
- Start fresh from Step 1

**Confirm restart?** [Y/N]"

- IF Y: Rename existing files, load `{workflowFile}` for fresh start
- IF N: Return to menu

#### IF V (View):

Display summary of current output files, then return to menu.

### 7. Handle Missing Files

**IF expected next step file doesn't exist:**

"**I see you completed Step {lastCompleted}, but I can't find the next step file.**

This might happen if:
- The workflow was updated
- Files were moved

**Options:**
- [S] Start fresh from Step 1
- [M] Manual - Tell me which step you want to resume"

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:
- Correctly identifies last completed step
- Displays accurate progress summary
- Routes to correct next step
- Preserves all existing work
- User confirms before proceeding

### ❌ SYSTEM FAILURE:
- Not reading stepsCompleted from output file
- Routing to wrong step
- Losing existing work by not backing up
- Restarting without user confirmation
- Not handling missing step files gracefully

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
