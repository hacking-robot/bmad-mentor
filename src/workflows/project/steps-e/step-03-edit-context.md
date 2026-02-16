---
name: 'step-03-edit-context'
description: 'Edit project-context.md sections'

# File references
nextStepFile: './step-04-edit-architecture.md'
completeFile: './step-05-complete.md'
outputFile: '{planning_artifacts}/project-context.md'

# Tasks
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 3: Edit Project Context

## STEP GOAL:
To update the selected sections in project-context.md based on what changed.

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

### 2. Edit Each Section

**For each selected section:**

"**Current {section name}:**
[Display current content]

**What changes are needed?**"

**Facilitate the update:**
- Understand what changed
- Update rules to reflect new reality
- Maintain consistency with other sections

### 3. Review Changes

"**Updated {section name}:**
[Display updated content]

**Is this correct?** [Y/N]"

### 4. Save Changes

**After all sections updated:**
- Save the updated document
- Update frontmatter with edit date

### 5. Present MENU OPTIONS

Display: **Project context updated.** [A] Advanced Elicitation [P] Party Mode [C] Continue

#### Menu Handling Logic:
- IF A: Execute {advancedElicitationTask}, then redisplay menu
- IF P: Execute {partyModeWorkflow}, then redisplay menu
- IF C: 
  - IF architecture also being edited: Load {nextStepFile}
  - ELSE: Load {completeFile}

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:
- All selected sections updated
- Changes saved
- User approved changes

### ❌ SYSTEM FAILURE:
- Not saving changes
- Skipping sections

**Master Rule:** Skipping steps is FORBIDDEN.
