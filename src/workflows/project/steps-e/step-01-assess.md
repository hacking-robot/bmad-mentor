---
name: 'step-01-assess'
description: 'Assess existing documents and determine what to edit'

# File references
contextOutputFile: '{planning_artifacts}/project-context.md'
architectureOutputFile: '{planning_artifacts}/architecture.md'
nextStepFile: './step-02-select-edits.md'

# Tasks
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 1: Assess Existing Documents

## STEP GOAL:
To assess which documents exist, their completeness, and determine what the user wants to edit.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:
- ✅ You are assessing existing documentation
- ✅ We engage in collaborative dialogue
- ✅ You bring assessment expertise
- ✅ User brings knowledge of what changed

### Step-Specific Rules:
- 🎯 Focus ONLY on assessment
- 🚫 FORBIDDEN to start editing yet
- 💬 Determine what needs updating
- 🚪 Check document compliance

## EXECUTION PROTOCOLS:
- 🎯 Check for existing documents
- 💾 Document assessment findings
- 📖 Route to appropriate edit path
- 🚫 Don't proceed without understanding needs

## MANDATORY SEQUENCE

### 1. Welcome to Edit Mode

"**Welcome to Edit Mode!**

I'll help you update your existing project documentation.

Let me check what documents you have..."

### 2. Check for Existing Documents

**Search for:**
- `{contextOutputFile}` - project-context.md
- `{architectureOutputFile}` - architecture.md

### 3. Display Findings

"**Document Status:**

| Document | Exists | Status |
|----------|--------|--------|
| project-context.md | ✅/❌ | [status] |
| architecture.md | ✅/❌ | [status] |"

### 4. Check Compliance

**For each existing document:**
- Check frontmatter for BMAD compliance
- Check for stepsCompleted array
- Check for required sections

**IF non-compliant:**
"**⚠️ This document doesn't appear to be BMAD-compliant.**

Would you like to:
- **[C]onvert** - Convert to BMAD format using create mode
- **[E]dit anyway** - Make changes without conversion
- **[S]tart fresh** - Create new documents"

### 5. Determine Edit Scope

"**What would you like to update?**

| Option | Description |
|--------|-------------|
| **[1]** | Project Context (project-context.md) |
| **[2]** | Architecture (architecture.md) |
| **[3]** | Both documents |

**Your choice:**"

### 6. Understand Changes

"**What's changed since these documents were created?**

- New features added?
- Technology updated?
- Patterns changed?
- Something else?"

### 7. Present MENU OPTIONS

Display: **Assessment complete. Ready to select edits?** [A] Advanced Elicitation [P] Party Mode [C] Continue

#### Menu Handling Logic:
- IF A: Execute {advancedElicitationTask}, then redisplay menu
- IF P: Execute {partyModeWorkflow}, then redisplay menu
- IF C: Load {nextStepFile}

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:
- All existing documents identified
- Compliance checked
- Edit scope determined
- User needs understood

### ❌ SYSTEM FAILURE:
- Not checking for existing documents
- Not assessing compliance
- Proceeding without understanding needs

**Master Rule:** Skipping steps is FORBIDDEN.
