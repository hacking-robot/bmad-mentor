---
name: 'step-09-ticket-complete'
description: 'Run completion gates, validate definition of done, and mark ticket for review'

nextStepFile: './step-10-finalize.md'
ticketFile: '{implementation_artifacts}/ticket_{ticket_number}.md'
checklistFile: '../data/validation-gates.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 9: Ticket Complete

## STEP GOAL:

To run mandatory completion gates (build, test, integration), validate against the Definition of Done, and mark the ticket status as "review".

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input (unless autonomous mode)
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a Senior Developer / Implementation Specialist
- ✅ Completion gates are MANDATORY
- ✅ No ticket is complete until all gates pass
- ✅ Together we ensure production readiness

### Step-Specific Rules:

- 🎯 Run ALL completion gates
- 🚫 FORBIDDEN to skip any gate
- 🚫 FORBIDDEN to mark "review" with failing gates
- 📋 Execute Definition of Done checklist
- 🔍 Use subprocess (Pattern 4) for parallel gate execution if available

## EXECUTION PROTOCOLS:

- 🎯 Run build gate
- 🧪 Run test gate
- 🔗 Run integration gate
- ✅ Validate Definition of Done
- 📝 Update status to "review"

## CONTEXT BOUNDARIES:

- All tasks marked complete from step 08
- Focus: Final validation and status update
- Dependencies: All implementation steps completed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Build Verification Gate (MANDATORY)

**Run the project's build command:**

Determine build command from project structure:
- `npm run build`, `yarn build`, `bun run build`
- Or project-specific build command

"**🏗️ Build Verification Gate**
Running: {build_command}
..."

**If build succeeds:**
"✅ Build successful → Continue to Test Gate"

**If build fails:**
"❌ Build failed
Fix errors before marking ticket complete."

**HALT** - Fix build errors, do not proceed.

### 2. Test Execution Gate (MANDATORY)

**Run the full test suite:**

Determine test command from project structure:
- `npm test`, `yarn test`, `bun test`
- Or project-specific test command

"**🧪 Test Execution Gate**
Running: {test_command}
..."

**If all tests pass:**
"✅ All tests pass → Continue to Integration Gate"

**If tests fail:**
"❌ Tests failed
Fix failing tests before marking ticket complete."

**HALT** - Fix test failures, do not proceed.

### 3. Integration Verification Gate

**If applicable, verify integration:**

- Launch app if possible
- Test ticket-specific functionality
- Verify no runtime errors

"**🔗 Integration Verification Gate**
- App launches: ✓
- Ticket functionality works: ✓
- No runtime errors: ✓"

**If integration issues:**
"⚠️ Integration issues detected"

**Note:** This gate is informational - issues should be noted but don't necessarily block.

### 4. Verify All Tasks Complete

**Re-scan the ticket file:**

Verify ALL tasks and subtasks are marked [x].

"**📋 Task Completion Check**
- Total tasks: {total}
- Completed: {completed}
- Remaining: {remaining}"

**If ANY task is unchecked:**
"❌ Incomplete tasks detected
- {incomplete_task_list}"

**HALT** - Return to step 05 to complete remaining tasks.

### 5. Definition of Done Validation

**Execute the Definition of Done checklist:**

- [ ] All tasks/subtasks marked complete [x]
- [ ] Every Acceptance Criterion satisfied
- [ ] Unit tests added/updated for core functionality
- [ ] Integration tests added (when required)
- [ ] E2E tests added (for critical flows)
- [ ] All tests pass (no regressions)
- [ ] Code quality checks pass
- [ ] File List complete with all changed files
- [ ] Dev Agent Record contains implementation notes
- [ ] Change Log updated
- [ ] Only permitted sections modified

"**✅ Definition of Done**
- {passed}/{total} criteria met"

**If ANY criterion fails:**
"❌ Definition of Done failed"
**HALT** - Address failures before proceeding.

### 6. Update Ticket Status

**Update the ticket Status field to "review":**

"**📝 Updating Status**
Status: in-progress → review"

### 7. Save Ticket File

Save all updates to the ticket file.

### 8. Present MENU OPTIONS

Display: **Select an Option:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Finalize

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

#### Menu Handling Logic:

- IF A: Execute {advancedElicitationTask}, and when finished redisplay the menu
- IF P: Execute {partyModeWorkflow}, and when finished redisplay the menu
- IF C: Proceed to load `{nextStepFile}`
- IF Any other: help user, then redisplay menu

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:

- Build gate passed
- Test gate passed
- All tasks verified complete
- Definition of Done passed
- Status updated to "review"
- Ready for finalization

### ❌ SYSTEM FAILURE:

- Skipping completion gates
- Proceeding with failing tests
- Proceeding with incomplete tasks
- Not validating Definition of Done
- Not updating status

**Master Rule:** ALL gates MUST pass. Ticket cannot be marked "review" otherwise.
