---
name: 'step-03-create'
description: 'Create ticket file from gathered context using structured template'

nextStepFile: './step-04-finalize.md'
outputFile: '{implementation_artifacts}/ticket_{ticket_number}.md'
templateFile: '../template.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 3: Create Ticket

## STEP GOAL:

To generate a comprehensive ticket file from all gathered context, populating each section of the structured template with meaningful, actionable content.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input (in collaborative mode)
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a Ticket Context Specialist creating actionable implementation guidance
- ✅ You transform raw context into structured, useful ticket content
- ✅ User brings their understanding of requirements and priorities
- ✅ Together we create tickets that lead to flawless implementation

### Step-Specific Rules:

- 🎯 Generate ALL sections of the ticket template
- 🚫 FORBIDDEN to leave sections empty or generic
- 💬 In collaborative mode: Show draft, get feedback, refine
- 🔇 In autonomous mode: Generate complete ticket
- 📝 Use Brainstorming for task breakdown if needed

## EXECUTION PROTOCOLS:

- 🎯 Follow the MANDATORY SEQUENCE exactly
- 💾 Create the ticket file using the template
- 📖 Ensure all sections are populated with meaningful content
- 🚫 Do NOT save the file yet - that happens in step-04

## CONTEXT BOUNDARIES:

- Available: All context gathered in step-02
- Focus: Transforming context into structured ticket content
- Dependencies: Requires completed context discovery

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

---

### 1. Load Template and Context

**Load the ticket template from:** `{templateFile}`

**Recall gathered context:**
- Git diff analysis results
- Relevant commits
- Previous ticket learnings
- Document findings (PRD, architecture, project-context)
- Codebase patterns and files

---

### 2. Generate Summary Section

**Create the Summary:**

From git diff analysis, generate a concise summary that explains:
- WHAT is being changed/added
- WHY this change is needed (if discernible)
- The overall scope of the ticket

**Template:**
```markdown
## Summary

[2-3 sentences describing what this ticket implements and why]
```

---

### 3. Generate Context Section

**Create the Context:**

Populate the Context section with:

#### 3.1 Git Changes
```markdown
### Git Changes

**Files Modified:**
- `path/to/file1.ts` - [brief description of change]
- `path/to/file2.ts` - [brief description of change]

**Summary:** [What these changes accomplish]
```

#### 3.2 Related Commits
```markdown
### Related Commits

- `abc1234` - [commit message summary]
- `def5678` - [commit message summary]
```

#### 3.3 Related Tickets (if any)
```markdown
### Related Tickets

- `ticket_123.md` - [brief summary of relation]
```

---

### 4. Generate Acceptance Criteria

**Create Acceptance Criteria:**

From the git changes and gathered context, derive acceptance criteria that define "done":

```markdown
## Acceptance Criteria

1. [AC1: Functional requirement derived from changes]
2. [AC2: Technical requirement from architecture]
3. [AC3: Quality requirement (tests, etc.)]
4. [AC4: Integration requirement if applicable]
```

**Guidelines:**
- Each AC should be testable/verifiable
- Number ACs for task mapping
- Include both positive and edge cases
- Reference architecture requirements where applicable

---

### 5. Generate Tasks

**Create Tasks with Subtasks:**

**Use Brainstorming if the task breakdown is complex.**

Analyze the changes and generate a task breakdown:

```markdown
## Tasks

- [ ] Task 1: [Descriptive task name] (AC: #)
  - [ ] Subtask 1.1: [Specific action]
  - [ ] Subtask 1.2: [Specific action]
- [ ] Task 2: [Descriptive task name] (AC: #, #)
  - [ ] Subtask 2.1: [Specific action]
- [ ] Task 3: Write tests for new functionality (AC: #)
  - [ ] Subtask 3.1: Unit tests
  - [ ] Subtask 3.2: Integration tests (if applicable)
- [ ] Task 4: Update documentation (AC: #)
```

**Task Guidelines:**
- Map each task to relevant ACs
- Break down into specific, actionable subtasks
- Include testing tasks
- Include documentation tasks if applicable
- Order logically (implementation → testing → docs)

---

### 6. Generate Implementation Notes

**Create Implementation Notes:**

Populate from architecture and codebase analysis:

```markdown
## Implementation Notes

### Architecture Patterns
- [Relevant patterns from architecture docs]
- [Patterns observed in existing codebase]

### Key Files
**Files to Modify:**
- `path/to/file1.ts` - [what needs to change]
- `path/to/file2.ts` - [what needs to change]

**Files to Create:**
- `path/to/new-file.ts` - [purpose]

### Dependencies
- [Libraries/frameworks used]
- [Services or APIs involved]
- [Other components this depends on]

### Code Reuse Opportunities
- [Existing utility/function that can be reused]
- [Similar implementation to reference]
```

---

### 7. Generate Quality Gates

**Create Quality Gates:**

```markdown
## Quality Gates

### Build Verification
- [ ] Application builds successfully with no errors
- [ ] No TypeScript/compilation errors
- [ ] No linting errors

**Action:** Run build command and verify successful completion

### Test Execution
- [ ] All existing tests pass
- [ ] New unit tests written and passing
- [ ] New integration tests written and passing (if applicable)

**Action:** Run test command and verify all tests pass
```

**Customize build/test commands based on project:**
- Check package.json for scripts
- Check for Makefile, build scripts, etc.
- Use appropriate commands for the project type

---

### 8. Generate References

**Create References:**

```markdown
## References

- [PRD: section or feature name] - `{path/to/prd.md}`
- [Architecture: relevant section] - `{path/to/architecture.md}`
- [Related code: component/file] - `path/to/code.ts`
- [Previous ticket: related work] - `ticket_XXX.md`
```

---

### 9. Generate Dev Agent Record

**Initialize Dev Agent Record:**

```markdown
## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Files Modified/Created

**To be modified:**
- `path/to/file1.ts`
- `path/to/file2.ts`

**To be created:**
- `path/to/new-file.ts`

### Completion Notes

[To be filled during implementation]
```

---

### 10. Assemble Complete Ticket

**Combine all sections into the complete ticket file.**

#### 10.1 If Mode = Collaborative

"**📝 Ticket Draft Ready!**

Here's the ticket I've created:

---
[Display complete ticket content]
---

**How does this look? Would you like me to:**
- **[R]efine** a specific section
- **[A]dd** something I missed
- **[C]ontinue** if it looks good"

**Wait for user feedback and iterate as needed.**

#### 10.2 If Mode = Autonomous

"**📝 Ticket Created**

I've generated a complete ticket file with:
- ✅ Summary
- ✅ Context (git changes, commits, related tickets)
- ✅ Acceptance Criteria
- ✅ Tasks with subtasks
- ✅ Implementation Notes
- ✅ Quality Gates
- ✅ References
- ✅ Dev Agent Record

Ready to save and finalize."

---

### 11. Present MENU OPTIONS

Display: **Select an Option:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Finalize

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

#### Menu Handling Logic:

- IF A: Execute {advancedElicitationTask}
- IF P: Execute {partyModeWorkflow}
- IF C: Store ticket content, then load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then redisplay menu

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:

- All template sections populated
- Summary is concise and meaningful
- Context includes all gathered information
- Acceptance criteria are testable
- Tasks are specific and actionable
- Implementation notes include relevant patterns
- Quality gates are appropriate for the project
- References point to actual sources
- User approved (in collaborative mode)

### ❌ SYSTEM FAILURE:

- Leaving sections empty or generic
- Creating vague acceptance criteria
- Tasks without AC mappings
- Missing implementation guidance
- Skipping quality gates
- Not including references
- Proceeding without user approval (in collaborative mode)

**Master Rule:** Every section must contain meaningful, actionable content. Generic tickets lead to implementation failures.
