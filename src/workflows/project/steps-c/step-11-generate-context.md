---
name: 'step-11-generate-context'
description: 'Generate project context rules collaboratively across all categories'

# File references
nextStepFile: './step-12-complete-context.md'
outputFile: '{planning_artifacts}/project-context.md'

# Tasks
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 11: Generate Context Rules

## STEP GOAL:
To collaboratively generate comprehensive implementation rules across all categories (language, framework, testing, quality, workflow, anti-patterns) that AI agents must follow.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:
- ✅ You are a technical architect defining implementation standards
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring best practices and pattern expertise
- ✅ User brings their project-specific preferences and constraints

### Step-Specific Rules:
- 🎯 Focus ONLY on generating rules - one category at a time
- 🚫 FORBIDDEN to skip categories or rush through
- 💬 Use A/P/C menus for each major section
- 🚪 Rules should be specific and actionable for AI agents

## EXECUTION PROTOCOLS:
- 🎯 Process each category sequentially
- 💾 Append rules to output file as each category is approved
- 📖 Update frontmatter when complete
- 🚫 Don't proceed to next category without user approval

## CONTEXT BOUNDARIES:
- Architecture from Phase 1 available
- Discovery results from step 10 available
- Focus: Generate actionable rules for AI agents
- Dependencies: Steps 01-10 complete

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Review Architecture and Discovery Results

Load `{outputFile}` and `{planning_artifacts}/architecture.md` to review:
- Technology decisions from architecture
- Discovery results from step 10
- Existing patterns found

"**Based on the architecture and discovery, let's generate the context rules.**

I'll work through each category with you, generating rules that AI agents will follow when implementing code."

### 2. Language Rules

"**Let's start with Language Rules.**

Based on your tech stack, here are the language-specific considerations:"

**Generate rules for:**

#### 2a. General Coding Standards
- Code style preferences
- Documentation requirements
- Comment standards

**Present rules and ask:**
"**Do these language rules look right? Anything to add or change?**"

**Menu:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Naming

#### 2b. Naming Conventions
- Variable naming (camelCase, snake_case, etc.)
- Function naming
- Class/Component naming
- File naming
- Constant naming

**Present rules and ask:**
"**Do these naming conventions match your project?**"

**Menu:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Organization

#### 2c. Code Organization
- File structure patterns
- Import/export patterns
- Module organization

**Present rules and ask:**
"**Does this organization pattern work for your project?**"

**Menu:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Framework Rules

### 3. Framework Rules

"**Now for Framework Rules.**

Based on your framework choice:"

#### 3a. Framework-Specific Patterns
- Component structure
- Hook/Composable usage
- Service patterns
- Middleware patterns

#### 3b. Component Structure
- Where components live
- How components are organized
- Component naming

#### 3c. State Management
- State management approach
- Where state lives
- State update patterns

**Present framework rules and ask:**
"**Do these framework rules capture your patterns?**"

**Menu:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Testing Rules

### 4. Testing Rules

"**Testing Rules next.**

Based on your testing setup:"

#### 4a. Test Organization
- Where tests live
- Test file naming
- Test structure

#### 4b. Test Naming Conventions
- How to name test cases
- Describe block patterns

#### 4c. Test Coverage Requirements
- Coverage minimums
- What must be tested
- What can skip tests

#### 4d. Mocking & Fixtures
- Mock patterns
- Fixture organization
- Test data patterns

**Present testing rules and ask:**
"**Do these testing rules match your expectations?**"

**Menu:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Quality Rules

### 5. Quality Rules

"**Quality Rules next.**

Based on your quality tools:"

#### 5a. Linting & Formatting
- Linting rules
- Formatting standards
- When to disable rules

#### 5b. Error Handling
- Error handling patterns
- Error logging
- User-facing errors

#### 5c. Logging Standards
- What to log
- Log levels
- Log format

#### 5d. Performance Guidelines
- Performance considerations
- Optimization patterns
- What to avoid

**Present quality rules and ask:**
"**Do these quality rules cover your standards?**"

**Menu:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Workflow Rules

### 6. Workflow Rules

"**Workflow Rules next.**

Based on your development workflow:"

#### 6a. Git & Version Control
- Branch naming
- Commit message format
- PR requirements

#### 6b. PR & Code Review
- PR size guidelines
- Review requirements
- Approval process

#### 6c. Deployment & CI/CD
- Deployment patterns
- CI/CD requirements
- Environment handling

**Present workflow rules and ask:**
"**Do these workflow rules match your process?**"

**Menu:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Anti-Patterns

### 7. Anti-Patterns

"**Finally, let's define Anti-Patterns.**

These are things AI agents must AVOID:"

#### 7a. Patterns to Avoid
- Common mistakes in this tech stack
- Deprecated approaches
- Known problematic patterns

#### 7b. Common Mistakes
- Frequent errors to watch for
- Gotchas specific to this project

#### 7c. Deprecated Approaches
- Old patterns that should not be used
- Migration notes if applicable

**Present anti-patterns and ask:**
"**Do these anti-patterns cover what should be avoided?**"

**Menu:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Critical Reminders

### 8. Critical Reminders

"**Let's add Critical Reminders.**

These are the MOST IMPORTANT things AI agents must remember:"

#### 8a. Must Always Do
- Non-negotiable rules
- Requirements for all code

#### 8b. Must Never Do
- Absolute prohibitions
- Things that break the system

#### 8c. Edge Cases to Handle
- Special cases
- Unusual scenarios

**Present critical reminders and ask:**
"**Are these the most critical things to remember?**"

**Menu:** [A] Advanced Elicitation [P] Party Mode [C] Continue

### 9. Append All Rules to Output

**After user confirms all categories:**

Append the complete rules section to `{outputFile}`:

```markdown
---

## Language Rules

### General Coding Standards
[generated rules]

### Naming Conventions
[generated rules]

### Code Organization
[generated rules]

---

## Framework Rules

[generated rules]

---

## Testing Rules

[generated rules]

---

## Quality Rules

[generated rules]

---

## Workflow Rules

[generated rules]

---

## Anti-Patterns

[generated rules]

---

## Critical Reminders

[generated rules]
```

### 10. Present MENU OPTIONS

Display: **Context rules generated! Ready to optimize and finalize?** [A] Advanced Elicitation [P] Party Mode [C] Continue

#### EXECUTION RULES:
- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution, return to this menu

#### Menu Handling Logic:
- IF A: Execute {advancedElicitationTask}, and when finished redisplay the menu
- IF P: Execute {partyModeWorkflow}, and when finished redisplay the menu
- IF C: Update frontmatter with `stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]`, then load, read entire file, then execute {nextStepFile}
- IF Any other comments or queries: help user respond then [Redisplay Menu Options](#10-present-menu-options)

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:
- All 6 rule categories generated
- Rules are specific and actionable
- User approved each category
- Rules appended to output file
- A/P/C menus presented at each stage

### ❌ SYSTEM FAILURE:
- Skipping rule categories
- Generic rules not tailored to project
- Not getting user approval
- Missing A/P/C menus
- Not appending to output file

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
