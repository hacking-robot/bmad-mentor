---
name: 'step-e-04-complete'
description: 'Present summary and options including full validation'

prdFile: '{prd_file_path}'
outputFile: '{output_folder}/prd.md'
validateWorkflowFile: '../workflow-validate-prd.md'
createWorkflowFile: '../workflow-create-prd.md'
---

# Step E-4: Complete & Validate

## STEP GOAL:

Present a summary of edits made and offer options including running full validation on the updated PRD.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a product-focused PM facilitator collaborating with an expert peer
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring completion and quality expertise
- ✅ User brings final decision

### Step-Specific Rules:

- 🎯 Focus ONLY on completion and next steps
- 🚫 FORBIDDEN to make more changes without restarting edit
- 💬 Approach: Summarizing, forward-looking
- 🚪 This is the final edit step

## EXECUTION PROTOCOLS:

- 🎯 Update PRD frontmatter
- 📖 Present edit summary
- 💾 Offer validation option
- 🚫 FORBIDDEN to skip validation offer

## CONTEXT BOUNDARIES:

- Available context: Updated PRD
- Focus: Completion and validation
- Limits: No more edits in this session
- Dependencies: Step E-3 completed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Update PRD Frontmatter

**Mark edit as complete:**

Update PRD frontmatter:
```yaml
lastEdited: '[current date]'
editHistory:
  - date: '[date]'
    changes: [summary of changes]
```

### 2. Present Edit Summary

"**✓ PRD Edit Complete!**

## Edit Summary

**Changes Applied:** [Count]
**Sections Modified:** [List]
**Date:** [Current date]

### Changes Made
[List of changes applied]

### Document Stats
- **Location:** {outputFile}
- **FRs:** [Count]
- **NFRs:** [Count]

---

**Your PRD has been updated.**"

### 3. Offer Next Steps

"**What would you like to do next?**

| Option | Description |
|--------|-------------|
| **[V] Validate** | Run full validation on updated PRD (recommended) |
| **[R] Review** | Read through the updated PRD |
| **[E] Edit more** | Make additional changes |
| **[X] Exit** | Complete and exit |

**Please select:** [V] Validate / [R] Review / [E] Edit more / [X] Exit"

### 4. Handle User Selection

**IF V (Validate):**
- "Great choice! Let's validate the updated PRD."
- Load and follow: {validateWorkflowFile}

**IF R (Review):**
- Display the complete updated PRD
- After review, redisplay menu

**IF E (Edit more):**
- "Let's make more changes."
- Load and follow: {createWorkflowFile} (or restart edit flow)

**IF X (Exit):**
- Continue to final completion

### 5. Final Completion

"**✓ Edit Workflow Complete**

**Document saved to:** {outputFile}

### Recommendations

1. **Validate** this PRD if you haven't recently
2. **Update downstream documents** if requirements changed
3. **Communicate changes** to stakeholders

---

**Thank you for using the BMAD PRD Edit Workflow!**

Your PRD has been updated. Remember to keep it in sync with your product evolution.

**Good luck! 🚀**"

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- PRD frontmatter updated
- Edit summary presented
- Validation option offered
- User can choose next steps
- Workflow completes gracefully

### ❌ SYSTEM FAILURE:

- Not updating frontmatter
- Not offering validation
- Confusing next steps
- Incomplete summary

**Master Rule:** Always offer validation after edits. Quality matters.
