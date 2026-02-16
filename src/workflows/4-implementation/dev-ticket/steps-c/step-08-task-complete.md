---
name: 'step-08-task-complete'
description: 'Validate completion gates and mark task complete, then loop or proceed'

nextStepFile: './step-09-ticket-complete.md'
loopStepFile: './step-05-implementation.md'
ticketFile: '{implementation_artifacts}/ticket_{ticket_number}.md'
---

# Step 8: Task Complete

## STEP GOAL:

To validate all completion gates are met, mark the current task/subtask as complete, and either loop back to implement the next task or proceed to ticket completion.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input (unless autonomous mode)
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a Senior Developer / Implementation Specialist
- ✅ Tasks are only complete when ALL gates pass
- ✅ No shortcuts on validation
- ✅ Together we maintain quality standards

### Step-Specific Rules:

- 🎯 Verify ALL completion gates pass
- 🚫 FORBIDDEN to mark complete without validation
- 🚫 FORBIDDEN to proceed with unchecked task
- 📋 Update ticket file sections
- 🔄 Loop to step 5 if more tasks remain

## EXECUTION PROTOCOLS:

- 🎯 Run completion gate validation
- ✅ Mark task complete [x]
- 📝 Update File List
- 📝 Update Dev Agent Record
- 🔄 Loop or proceed based on remaining tasks

## CONTEXT BOUNDARIES:

- Implementation validated in step 07
- Tests pass, ACs satisfied
- Focus: Mark complete and determine next step
- Dependencies: steps 05-07 completed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Completion Gate Validation

**CRITICAL:** Never mark a task complete unless ALL gates pass.

**Gates:**
- [ ] All tests for this task/subtask ACTUALLY EXIST and PASS 100%
- [ ] Implementation matches EXACTLY what the task/subtask specifies
- [ ] ALL related acceptance criteria are satisfied
- [ ] Full test suite passes (no regressions)

**If ANY gate fails:**
- STOP - Do NOT mark task complete
- Return to step 05 to fix issues

"**🚫 Completion Gate Failed**
- Gate failed: {which_gate}
- Returning to implementation to fix..."

### 2. Handle Review Follow-ups (If Applicable)

**If this task is a review follow-up (has [AI-Review] prefix):**

1. Extract review item details (severity, description)
2. Mark task checkbox [x] in "Tasks/Subtasks → Review Follow-ups (AI)"
3. Find matching action item in "Senior Developer Review → Action Items"
4. Mark that action item checkbox [x] as resolved
5. Add to Dev Agent Record → Completion Notes:
   "✅ Resolved review finding [{severity}]: {description}"

### 3. Mark Task Complete

**ONLY if ALL gates pass:**

1. **Mark task checkbox [x]** in ticket file
2. **Update File List section** with all modified/created files:
   ```markdown
   ## File List
   - path/to/file1.ts (modified)
   - path/to/file2.ts (created)
   ```
3. **Add Completion Notes** to Dev Agent Record:
   - What was implemented
   - Tests added
   - Key decisions

"**✅ Task Complete**
- Task: {task_description}
- Files modified: {file_count}
- Tests added: {test_count}"

### 4. Update Change Log

**Add entry to ticket Change Log:**

```markdown
## Change Log
- {date}: Completed task - {task_description} ({tests_added} tests added)
```

### 5. Save Ticket File

Save all updates to the ticket file.

### 6. Determine Next Step

**Check if more tasks remain:**

**Scan Tasks/Subtasks section for unchecked [ ] items.**

**If unchecked tasks remain:**
- Identify next task
- **Loop to step 05** - Load `{loopStepFile}`

"**🔄 Continuing to next task**
- Next: {next_task_description}
- Proceeding to implementation..."

**If NO unchecked tasks remain:**
- **Proceed to step 09** - Load `{nextStepFile}`

"**🎯 All tasks complete!**
- Proceeding to ticket completion..."

### 7. Present MENU OPTIONS (Only if issues detected)

**This step normally auto-proceeds, but if user intervention needed:**

Display: **Select:** [C] Continue

#### EXECUTION RULES:

- Auto-proceed to next step or loop
- Only halt if user intervention required

#### Menu Handling Logic:

- IF C: Load appropriate next step file
- IF Any other: help user, then proceed

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:

- All completion gates verified
- Task marked [x] in ticket file
- File List updated
- Dev Agent Record updated
- Correctly loops or proceeds

### ❌ SYSTEM FAILURE:

- Marking complete without gate validation
- Skipping file list update
- Not updating Dev Agent Record
- Wrong routing (loop vs proceed)

**Master Rule:** Tasks are ONLY complete when ALL gates pass. NO exceptions.
