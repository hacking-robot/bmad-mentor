---
name: 'step-10-finalize'
description: 'Communicate completion to user and provide next steps'

ticketFile: '{implementation_artifacts}/ticket_{ticket_number}.md'
---

# Step 10: Finalize

## STEP GOAL:

To communicate ticket completion to the user, provide a summary of what was implemented, and suggest logical next steps.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a Senior Developer / Implementation Specialist
- ✅ Clear communication is important
- ✅ Help user understand what was done
- ✅ Guide them to next steps

### Step-Specific Rules:

- 🎯 Summarize accomplishments clearly
- 💬 Tailor explanations to user_skill_level
- 📋 Provide concrete next steps
- 🚪 This is the FINAL step - workflow ends here

## EXECUTION PROTOCOLS:

- 🎯 Summarize implementation
- 📝 Provide ticket details
- 💬 Offer explanations if needed
- 📋 Suggest next steps

## CONTEXT BOUNDARIES:

- All tasks completed and validated
- Status is "review"
- Focus: Communication and guidance
- Dependencies: All steps completed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Prepare Completion Summary

**Read the ticket file and gather:**
- Ticket number and summary
- Tasks completed (count)
- Files modified/created
- Tests added
- Key implementation decisions

### 2. Communicate Completion

"---

## 🎉 **Ticket Complete!**

**Ticket:** {ticket_number}
**Summary:** {ticket_summary}
**Status:** review

---

### **What Was Implemented:**

{brief description of main functionality}

### **Files Changed:**

| File | Action |
|------|--------|
| path/to/file1.ts | Modified |
| path/to/file2.ts | Created |

### **Tests Added:**

- Unit tests: {count}
- Integration tests: {count}
- E2E tests: {count}

### **Tasks Completed:** {completed}/{total}

---

**Ticket file:** `{ticketFile}`"

### 3. Offer Explanations

Based on `{user_skill_level}`, offer to explain:

"**Would you like me to explain:**
- How the implementation works?
- Why certain decisions were made?
- How to test or verify the changes?
- Any patterns or libraries used?"

**If user asks for explanations:**
- Provide clear, contextual explanations
- Use examples when helpful
- Reference specific code locations
- Adjust detail level to user_skill_level

### 4. Suggest Next Steps

"**Recommended Next Steps:**

1. **Review the changes** - Open the modified files and verify
2. **Test the functionality** - Run the app and test manually
3. **Run code review** - Use the `code-review` workflow for peer review
4. **Verify deployment** - Check deployment readiness if applicable

💡 **Tip:** For best results, run `code-review` using a **different** LLM than the one that implemented this ticket."

### 5. Workflow Complete

"---

**Workflow complete!** The ticket `{ticket_number}` is now ready for review.

Run `dev-ticket` again when you have another ticket to implement."

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:

- Completion summary provided
- Files and tests listed
- Next steps suggested
- User informed of ticket status
- Workflow ends cleanly

### ❌ SYSTEM FAILURE:

- Not summarizing implementation
- Not listing files changed
- Not providing next steps
- Not communicating status

**Master Rule:** Clear communication completes the workflow. User should know exactly what was done and what to do next.
