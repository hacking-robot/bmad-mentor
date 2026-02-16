---
name: 'step-12-complete'
description: 'Complete the PRD workflow, update status, suggest next steps'

outputFile: '{output_folder}/prd.md'
validateWorkflowFile: '../workflow-validate-prd.md'
editWorkflowFile: '../workflow-edit-prd.md'
---

# Step 12: Workflow Completion

## STEP GOAL:

Complete the PRD workflow by finalizing the document status, presenting a summary to the user, and suggesting next steps.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a product-focused PM facilitator collaborating with an expert peer
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring workflow completion expertise
- ✅ User brings final approval

### Step-Specific Rules:

- 🎯 Focus ONLY on completion and next steps
- 🚫 FORBIDDEN to add new content to PRD
- 💬 Approach: Celebratory, forward-looking
- 🚪 This is the final step - no next step file

## EXECUTION PROTOCOLS:

- 🎯 Update PRD frontmatter to mark complete
- 💾 Present final summary
- 📖 Offer next step options
- 🚫 FORBIDDEN to proceed without user confirmation

## CONTEXT BOUNDARIES:

- Available context: Complete, polished PRD
- Focus: Completion and next steps
- Limits: No new content
- Dependencies: Steps 1-11 completed - PRD is complete

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Update PRD Frontmatter

**Mark the workflow as complete:**

Update PRD frontmatter:
```yaml
stepsCompleted: ['step-01-init', 'step-02-discovery', 'step-03-success', 'step-04-journeys', 'step-05-domain', 'step-06-innovation', 'step-07-project-type', 'step-08-scoping', 'step-09-functional', 'step-10-nonfunctional', 'step-11-polish', 'step-12-complete']
lastStep: 'step-12-complete'
lastCompleted: '[current date]'
status: COMPLETE
```

### 2. Present Completion Summary

"🎉 **PRD Complete!**

You've created a comprehensive Product Requirements Document. Here's what we built:

## Document Summary

**Product:** [Product name from PRD]
**Domain:** [Domain classification]
**Type:** [Project type classification]

### Sections Completed
- ✓ Executive Summary
- ✓ Success Criteria (User, Business, Technical)
- ✓ Product Scope (MVP, Growth, Vision)
- ✓ User Journeys
- ✓ [Domain-Specific Requirements (if applicable)]
- ✓ [Innovation Analysis (if applicable)]
- ✓ [Project-Type Requirements]
- ✓ Functional Requirements: [count] FRs
- ✓ Non-Functional Requirements: [count] NFRs

### Document Stats
- **Location:** {outputFile}
- **FRs Defined:** [count]
- **NFRs Defined:** [count]
- **MVP Features:** [count]

---

**Great work! This PRD is ready for the next phase.**"

### 3. Offer Next Steps

"**What would you like to do next?**

| Option | Description |
|--------|-------------|
| **[V] Validate** | Run validation workflow to quality-check this PRD |
| **[E] Edit** | Make changes to this PRD |
| **[R] Review** | Read through the complete PRD |
| **[X] Exit** | Complete and exit |

**Please select:** [V] Validate / [E] Edit / [R] Review / [X] Exit"

### 4. Handle User Selection

**IF V (Validate):**
- "Great choice! Let's validate this PRD against BMAD standards."
- Load and follow: {validateWorkflowFile}

**IF E (Edit):**
- "I can help you make changes to this PRD."
- Load and follow: {editWorkflowFile}

**IF R (Review):**
- Display the complete PRD
- "Would you like to make any changes?"
- If yes → Load {editWorkflowFile}
- If no → Redisplay next steps menu

**IF X (Exit):**
- Continue to final completion (step 5)

### 5. Final Completion

"**✓ PRD Workflow Complete**

**Document saved to:** {outputFile}

### Suggested Next Workflows

1. **Validate PRD** - Quality check before sharing
2. **Create UX Design** - Turn requirements into designs
3. **Create Architecture** - Design the technical approach
4. **Create Stories** - Break down into development tasks

---

**Thank you for using the BMAD PRD Workflow!**

Your PRD is ready to guide your product development. Remember:
- Keep it updated as you learn
- Use validation periodically
- Reference it in all downstream work

**Good luck with your product! 🚀**"

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- PRD frontmatter updated to COMPLETE
- Completion summary presented
- Next steps offered clearly
- User can validate, edit, review, or exit
- User feels accomplished and guided

### ❌ SYSTEM FAILURE:

- Not updating frontmatter
- Not offering validation option
- Not presenting summary
- Confusing next steps

**Master Rule:** End on a high note. User should feel accomplished and know what's next.
