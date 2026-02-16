---
name: 'step-05-implementation'
description: 'Implement current task following red-green-refactor cycle'

nextStepFile: './step-06-tests.md'
loopStepFile: './step-05-implementation.md'
ticketFile: '{implementation_artifacts}/ticket_{ticket_number}.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 5: Implementation

## STEP GOAL:

To implement the current task/subtask following the red-green-refactor cycle: write failing tests first, implement minimal code to pass, then refactor for quality.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input (unless autonomous mode)
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a Senior Developer / Implementation Specialist
- ✅ Test-first development is mandatory
- ✅ Only implement what the task specifies
- ✅ Together we build quality software

### Step-Specific Rules:

- 🎯 Follow red-green-refactor EXACTLY
- 🚫 FORBIDDEN to implement without tests first
- 🚫 FORBIDDEN to implement anything not in the task/subtask
- 📋 Review current task from ticket file
- 🔍 Use subprocess (Pattern 2) for file analysis if available

## EXECUTION PROTOCOLS:

- 🎯 Identify current task/subtask from ticket
- 🔴 RED: Write failing tests
- 🟢 GREEN: Implement minimal code
- 🔵 REFACTOR: Improve code quality
- 💾 Document approach in Dev Agent Record

## CONTEXT BOUNDARIES:

- Ticket context available from step 02
- Review state known from step 03
- Status is in-progress from step 04
- Focus: Implement current task
- Dependencies: steps 01-04 completed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Identify Current Task

**Review the ticket file's Tasks/Subtasks section.**

**If review_continuation = true:**
- Find first unchecked task in "Review Follow-ups (AI)" subsection
- These tasks take priority over regular tasks

**If review_continuation = false:**
- Find first unchecked task [ ] in main Tasks/Subtasks section

**Extract:**
- Task description
- Related AC numbers (if noted)
- Subtasks (if any)

"**Implementing:** {task_description}
**Related ACs:** {ac_numbers}
**Subtasks:** {subtask_count} subtasks"

### 2. 🔴 RED Phase - Write Failing Tests

**CRITICAL:** Write tests BEFORE implementing.

**For the current task/subtask:**

1. **Identify test file location:**
   - Check project structure for test patterns
   - Use same naming conventions as existing tests

2. **Write failing tests that:**
   - Cover the functionality described in the task
   - Test the acceptance criteria
   - Include edge cases from ticket context

3. **Run tests to confirm they FAIL:**

   Execute the project's test command for the new tests.

   "**🔴 RED Phase**
   Tests written: {test_count} tests
   Running tests... **Expected: FAIL** ✓"

**If tests PASS unexpectedly:**
- The tests may not be testing the right thing
- Review and fix tests before proceeding

**HALT conditions:**
- If unable to determine test location: HALT and ask user
- If 3 consecutive test failures (test errors, not assertion failures): HALT

### 3. 🟢 GREEN Phase - Implement Minimal Code

**Implement ONLY what's needed to pass the tests.**

1. **Identify files to modify/create:**
   - Check ticket Implementation Notes for key files
   - Follow architecture patterns from context

2. **Write minimal implementation:**
   - Just enough to make tests pass
   - No extra features
   - No premature optimization

3. **Run tests to confirm they PASS:**

   "**🟢 GREEN Phase**
   Implementation complete.
   Running tests... **PASS** ✓"

**HALT conditions:**
- If new dependencies required: HALT for user approval
- If 3 consecutive implementation failures: HALT
- If required configuration missing: HALT

### 4. 🔵 REFACTOR Phase - Improve Code Quality

**While keeping tests green, improve the code.**

1. **Review implementation for:**
   - Code duplication
   - Naming clarity
   - Architecture compliance
   - Performance issues

2. **Refactor if needed:**
   - Extract common logic
   - Improve names
   - Follow project patterns

3. **Run tests after each change:**

   "**🔵 REFACTOR Phase**
   Refactoring complete.
   Running tests... **PASS** ✓"

### 5. Document Implementation

**Update ticket Dev Agent Record section:**

Add to Implementation Plan subsection:
- Technical approach used
- Key decisions made
- Files modified/created

### 6. Present MENU OPTIONS

Display: **Select an Option:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Tests

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

- Current task identified correctly
- RED phase: Failing tests written
- GREEN phase: Tests pass
- REFACTOR phase: Code quality improved
- Documentation updated

### ❌ SYSTEM FAILURE:

- Implementing without tests first
- Implementing features not in task
- Skipping RED phase
- Not running tests
- Extra features beyond task scope

**Master Rule:** RED-GREEN-REFACTOR is MANDATORY. No exceptions.
