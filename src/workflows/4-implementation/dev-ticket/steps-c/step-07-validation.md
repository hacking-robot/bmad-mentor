---
name: 'step-07-validation'
description: 'Run validations and tests to ensure implementation quality'

nextStepFile: './step-08-task-complete.md'
ticketFile: '{implementation_artifacts}/ticket_{ticket_number}.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 7: Validation

## STEP GOAL:

To run all validations including tests, linting, and acceptance criteria checks to ensure the implementation is complete and correct.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input (unless autonomous mode)
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a Senior Developer / Implementation Specialist
- ✅ Validation catches issues before they become problems
- ✅ No task is complete until validation passes
- ✅ Together we ensure quality

### Step-Specific Rules:

- 🎯 Run ALL validation checks
- 🚫 FORBIDDEN to skip validation
- 🚫 FORBIDDEN to proceed with failing tests
- 🔍 Use subprocess (Pattern 4) for parallel validation if available

## EXECUTION PROTOCOLS:

- 🎯 Run full test suite
- 📏 Run linting/code quality checks
- ✅ Validate acceptance criteria
- 📋 Report validation results

## CONTEXT BOUNDARIES:

- Tests created in step 06
- Implementation from step 05
- Focus: Validate implementation quality
- Dependencies: steps 05-06 completed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Run Full Test Suite

**Execute the project's test command for ALL tests:**

- Run all existing tests
- Run all new tests
- Verify NO regressions

"**🧪 Running Full Test Suite**
- Total tests: {total_count}
- Passed: {passed_count}
- Failed: {failed_count}"

**If ANY tests fail:**
- STOP and fix issues
- Do NOT proceed until all tests pass

"⚠️ **Test failures detected.**
Fixing issues before continuing..."

### 2. Run Linting/Code Quality

**If the project has linting configured:**

Run the project's lint command.

"**📏 Running Linting**
- Errors: {error_count}
- Warnings: {warning_count}"

**If lint errors exist:**
- Fix critical errors
- Warnings can be addressed but shouldn't block

### 3. Validate Acceptance Criteria

**For the current task, verify each related AC is satisfied:**

Review the ticket's Acceptance Criteria section.

For each AC related to this task:
- Verify the implementation satisfies it
- Check that tests cover it
- Confirm it's demonstrable

"**✅ Acceptance Criteria Validation**
- AC #{n}: ✓ Satisfied
- AC #{m}: ✓ Satisfied
- All related ACs satisfied"

**If any AC not satisfied:**
- STOP and complete the implementation
- Do NOT mark task complete

### 4. Check for Regressions

**Verify the implementation didn't break existing functionality:**

- All existing tests still pass
- No unexpected behavior changes
- No breaking changes to APIs

"**🔄 Regression Check**
- Existing tests: ✓ All pass
- No regressions detected"

### 5. Validation Summary

"**📊 Validation Summary**
- Tests: ✓ All pass ({count} tests)
- Linting: ✓ No errors
- ACs: ✓ All satisfied
- Regressions: ✓ None detected

**Implementation validated successfully.**"

### 6. Present MENU OPTIONS

Display: **Select an Option:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Task Complete

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

- All tests pass (new and existing)
- Linting passes
- All related ACs satisfied
- No regressions
- Ready to mark task complete

### ❌ SYSTEM FAILURE:

- Tests failing
- Lint errors not fixed
- ACs not satisfied
- Regressions not addressed
- Proceeding without validation

**Master Rule:** Validation MUST pass before marking any task complete.
