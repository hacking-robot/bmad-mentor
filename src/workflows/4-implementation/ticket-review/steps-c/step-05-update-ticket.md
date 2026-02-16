---
name: 'step-05-update-ticket'
description: 'Update ticket status based on review outcome, add review notes to Dev Agent Record, output final summary'
---

# Step 5: Update Ticket and Complete Review

## STEP GOAL:

To determine the ticket's new status based on review outcome, update the ticket file with review notes, and output a final summary of the completed review.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a Senior Developer / Code Review Specialist
- ✅ Final step - wrap up the review properly
- ✅ Status must accurately reflect reality
- ✅ Document everything for future reference

### Step-Specific Rules:

- 🎯 Focus on accurate status and documentation
- 🚫 FORBIDDEN to mark "done" if issues remain
- 💬 Be honest about ticket state
- 📋 Save all review notes to Dev Agent Record

## EXECUTION PROTOCOLS:

- 🎯 Determine correct status based on review outcome
- 💾 Update ticket file with review notes
- 📖 Output final summary
- 🚪 This is the FINAL step - workflow ends here

## CONTEXT BOUNDARIES:

- Review findings from step 3
- User decision from step 4
- Focus: Finalizing the review
- Dependencies: Steps 1-4 must be complete

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Determine New Status

**Based on review outcome, determine ticket status:**

**If `{{user_choice}}` = "fix":**
```
Were ALL issues fixed?
- All CRITICAL issues fixed? ✅
- All HIGH issues fixed? ✅
- All ACs validated as IMPLEMENTED? ✅
- All [x] tasks verified as done? ✅

IF all YES → Status = "done"
IF any NO → Status = "in-progress"
```

**If `{{user_choice}}` = "action_items":**
```
Action items were added, meaning issues remain.
Status = "in-progress"
```

**If any CRITICAL findings remain unresolved:**
```
Status = "in-progress" (regardless of other factors)
```

**Set session variable:**
- `{{new_status}}` = "done" | "in-progress"

### 2. Build Review Notes

**Create Review Notes section for Dev Agent Record:**

```markdown
### Review Notes ({{date}})

**Reviewer:** AI Code Review ({{agent_model}})

**Review Summary:**
- Files reviewed: {{file_count}}
- ACs validated: {{ac_count}}
- Tasks audited: {{task_count}}
- Issues found: {{total_count}} ({{critical_count}} CRITICAL, {{high_count}} HIGH, {{medium_count}} MEDIUM, {{low_count}} LOW)

**Action Taken:** {{user_choice}}
- {{#if user_choice == "fix"}}Issues fixed: {{fix_count}}{{/if}}
- {{#if user_choice == "action_items"}}Action items added: {{action_items_added}}{{/if}}

**Status Change:** {{ticket_status}} → {{new_status}}

**Key Findings:**
{{#each critical_findings}}
- CRITICAL: {{description}} [{{file}}:{{line}}]
{{/each}}
{{#each high_findings}}
- HIGH: {{description}} [{{file}}:{{line}}]
{{/each}}

**Recommendations:**
{{#if new_status == "in-progress"}}
- Address remaining action items before marking complete
{{else}}
- Code review passed. Ready for merge/deployment.
{{/if}}
```

**Set session variable:**
- `{{review_notes}}` = the formatted review notes

### 3. Update Ticket File

**Read the current ticket file.**

**Apply updates:**

1. **Update Status field:**
   ```markdown
   Status: {{new_status}}
   ```

2. **Append Review Notes to Dev Agent Record:**
   - Add under "### Review Notes (date)" or create if doesn't exist
   - Include all review metadata

3. **If fixes were applied:**
   - Update "Files Modified/Created" if new files were touched
   - Update "Completion Notes" with fix summary

4. **If action items added:**
   - Tasks section already updated in Step 4

**Save the ticket file.**

### 4. Update File List (If Fixes Applied)

**If `{{user_choice}}` = "fix" and files were modified:**

1. Get list of files actually modified during fixes
2. Cross-reference with existing File List
3. Add any new files to File List
4. Update Dev Agent Record

### 5. Output Final Summary

**Display the final review summary:**

```markdown
# ✅ Ticket Review Complete

**Ticket:** #{{ticket_number}}
**Path:** {{ticket_path}}

---

## Review Results

| Metric | Value |
|--------|-------|
| Files Reviewed | {{file_count}} |
| ACs Validated | {{ac_count}} |
| Tasks Audited | {{task_count}} |
| Issues Found | {{total_count}} |

## Issue Breakdown

| Severity | Found | {{#if user_choice == "fix"}}Fixed{{else}}Action Items{{/if}} |
|----------|-------|-------|
| 🔴 CRITICAL | {{critical_count}} | {{critical_addressed}} |
| 🟠 HIGH | {{high_count}} | {{high_addressed}} |
| 🟡 MEDIUM | {{medium_count}} | {{medium_addressed}} |
| 🟢 LOW | {{low_count}} | {{low_addressed}} |

## Status Update

**Previous Status:** {{ticket_status}}
**New Status:** {{new_status}}

{{#if new_status == "done"}}
✅ **All issues resolved.** Ticket is ready for completion.
{{else}}
🔄 **Issues remain.** Address the action items before marking complete.
{{/if}}

---

## What Happened

{{#if user_choice == "fix"}}
**Fixes Applied:** {{fix_count}} issues were automatically fixed.
- Files modified: {{modified_files}}
{{else}}
**Action Items Added:** {{action_items_added}} items added to ticket Tasks.
- Review the "Review Follow-ups (AI)" section in the ticket.
{{/if}}

---

## Next Steps

{{#if new_status == "done"}}
1. Verify fixes work as expected
2. Run tests to ensure nothing broke
3. Mark ticket as complete in your tracking system
{{else}}
1. Review the action items in the ticket
2. Address CRITICAL and HIGH items first
3. Re-run this review workflow after fixes
{{/if}}

---

**Review completed on {{date}}**
```

### 6. Workflow Complete

**This is the FINAL step. No menu options.**

The workflow is now complete. The ticket has been reviewed, findings have been documented, and appropriate actions have been taken.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:

- Correct status determined based on review outcome
- Ticket file updated with review notes
- Status field updated
- Final summary output
- User understands next steps

### ❌ SYSTEM FAILURE:

- Marking "done" when issues remain
- Not saving review notes to ticket
- Inaccurate status reflection
- Missing final summary

**Master Rule:** The review is only complete when the ticket accurately reflects reality. Status must match actual state.
