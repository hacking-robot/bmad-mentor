---
name: 'step-04-edit-architecture'
description: 'Edit architecture.md sections'

# File references
nextStepFile: './step-05-complete.md'
outputFile: '{planning_artifacts}/architecture.md'
contextOutputFile: '{planning_artifacts}/project-context.md'

# Tasks
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 4: Edit Architecture

## STEP GOAL:
To update the selected sections in architecture.md based on what changed.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

## MANDATORY SEQUENCE

### 1. Load Current Content

Load `{outputFile}` and display the sections to be edited.

### 2. Check Alignment with Context

**IF project-context was also edited:**
- Check for alignment between changes
- Flag any inconsistencies

### 3. Edit Each Section

**For each selected section:**

"**Current {section name}:**
[Display current content]

**What changes are needed?**"

**Facilitate the update:**
- Understand what changed
- Update decisions/patterns to reflect new reality
- Maintain consistency with other sections

### 4. Review Changes

"**Updated {section name}:**
[Display updated content]

**Is this correct?** [Y/N]"

### 5. Save Changes

**After all sections updated:**
- Save the updated document
- Update frontmatter with edit date

### 6. Present MENU OPTIONS

Display: **Architecture updated.** [A] Advanced Elicitation [P] Party Mode [C] Continue

#### Menu Handling Logic:
- IF A: Execute {advancedElicitationTask}, then redisplay menu
- IF P: Execute {partyModeWorkflow}, then redisplay menu
- IF C: Load {nextStepFile}

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:
- All selected sections updated
- Alignment with context maintained
- Changes saved

### ❌ SYSTEM FAILURE:
- Not saving changes
- Breaking alignment with context

**Master Rule:** Skipping steps is FORBIDDEN.
