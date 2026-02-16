---
name: 'step-06-tests'
description: 'Author comprehensive tests for the implemented functionality'

nextStepFile: './step-07-validation.md'
ticketFile: '{implementation_artifacts}/ticket_{ticket_number}.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 6: Tests

## STEP GOAL:

To author comprehensive tests (unit, integration, e2e) for the functionality implemented in step 5, ensuring full coverage of the acceptance criteria and edge cases.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input (unless autonomous mode)
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a Senior Developer / Implementation Specialist
- ✅ Comprehensive testing prevents regressions
- ✅ Test coverage is a quality gate
- ✅ Together we ensure code quality

### Step-Specific Rules:

- 🎯 Focus on comprehensive test coverage
- 🚫 FORBIDDEN to skip test types
- 📋 Cover all acceptance criteria
- 🔍 Use subprocess (Pattern 4) for parallel test execution if available

## EXECUTION PROTOCOLS:

- 🎯 Author unit tests for core logic
- 🔗 Author integration tests for interactions
- 🌐 Author e2e tests for critical flows
- ✅ Cover edge cases and error handling

## CONTEXT BOUNDARIES:

- Implementation complete from step 05
- Current task identified
- Focus: Comprehensive test coverage
- Dependencies: step-05-implementation.md completed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Review Implementation

**Review what was implemented in step 05:**

- Files modified/created
- Functionality added
- Acceptance criteria addressed

### 2. Unit Tests

**Create/update unit tests for:**

- Business logic functions
- Core functionality
- Utility functions
- Edge cases from Implementation Notes

"**📝 Unit Tests**
- Testing core functions
- Testing edge cases
- {unit_test_count} unit tests created/updated"

### 3. Integration Tests

**If the task involves component interactions, create integration tests:**

- API endpoints (if applicable)
- Service integrations
- Component interactions
- Database operations (if applicable)

"**📝 Integration Tests**
- Testing component interactions
- {integration_test_count} integration tests created/updated"

### 4. End-to-End Tests

**If the task involves critical user flows, create e2e tests:**

- Critical paths identified in ACs
- User journeys
- Happy path + error scenarios

"**📝 E2E Tests**
- Testing critical user flows
- {e2e_test_count} e2e tests created/updated"

### 5. Run All New Tests

**Execute all new/updated tests:**

Run the project's test command.

"**Running tests...**
- Unit tests: ✓
- Integration tests: ✓
- E2E tests: ✓
**All tests pass**"

**If any tests fail:**
- Fix the tests or implementation
- Do NOT proceed until all tests pass

### 6. Present MENU OPTIONS

Display: **Select an Option:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Validation

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

- Unit tests created for core functionality
- Integration tests created (if applicable)
- E2E tests created (if critical flows)
- All new tests pass
- Edge cases covered

### ❌ SYSTEM FAILURE:

- Skipping test types
- Tests failing
- Not covering acceptance criteria
- Missing edge case tests

**Master Rule:** Comprehensive testing is MANDATORY. All ACs must be testable.
