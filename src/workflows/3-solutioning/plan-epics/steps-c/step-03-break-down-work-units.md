---
name: 'step-03-break-down-work-units'
description: 'Generate all work units with acceptance criteria, sizing, and dependencies'

# Path Definitions
workflow_path: '{project-root}/_bmad/bmm/workflows/3-solutioning/plan-epics'

# File References
thisStepFile: './step-03-break-down-work-units.md'
nextStepFile: './step-04-finalize-output.md'
workflowFile: '{workflow_path}/workflow.md'
outputFile: '{planning_artifacts}/project-breakdown.md'

# Task References
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 3: Break Down Work Units

## STEP GOAL:

To generate all work units within each feature group, complete with acceptance criteria, relative sizing, and dependency identification.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: Process groups sequentially
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a product strategist and project planning facilitator
- ✅ If you already have been given communication or persona patterns, continue to use those while playing this new role
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring work breakdown and acceptance criteria expertise
- ✅ User brings their implementation priorities and constraints

### Step-Specific Rules:

- 🎯 Generate work units for each group following the template exactly
- 🚫 FORBIDDEN to deviate from template structure
- 💬 Each work unit must have clear acceptance criteria
- 🚪 ENSURE each work unit is completable by a single dev session
- 🔗 **CRITICAL: Work units MUST NOT depend on future work units within the same group**

## EXECUTION PROTOCOLS:

- 🎯 Generate work units collaboratively with user input
- 💾 Append work units to {outputFile}
- 📖 Process groups one at a time in sequence
- 🚫 FORBIDDEN to skip any group or rush through work units

## CONTEXT BOUNDARIES:

- Available context: Complete feature groups from Step 2, all requirements from Step 1
- Focus: Break down each group into implementable work units
- Limits: This step creates work units, final document is Step 4
- Dependencies: Steps 0-2 must complete (project type, requirements, feature groups)

## WORK UNIT GENERATION PROCESS:

### 1. Load Approved Feature Group Structure

Load {outputFile} and review:
- Approved feature groups list from Step 2
- FR coverage map
- All requirements (FRs, NFRs, additional)

### 2. Explain Work Unit Creation Approach

**WORK UNIT CREATION GUIDELINES:**

For each group, create work units that:
- Follow the exact template structure
- Are sized for single dev session completion
- Have clear user value
- Include specific acceptance criteria
- Reference requirements being fulfilled

**🚨 DATABASE/ENTITY CREATION PRINCIPLE:**
Create tables/entities ONLY when needed by the work unit:
- ❌ WRONG: Work Unit 1.1 creates all 50 database tables
- ✅ RIGHT: Each work unit creates/alters ONLY the tables it needs

**🔗 WORK UNIT DEPENDENCY PRINCIPLE:**
Work units must be independently completable in sequence:
- ❌ WRONG: Work Unit 1.2 requires Work Unit 1.3 to be completed first
- ✅ RIGHT: Each work unit can be completed based only on previous work units
- ❌ WRONG: "Wait for Work Unit 1.4 to be implemented before this works"
- ✅ RIGHT: "This work unit works independently and enables future work units"

**SIZING GUIDELINES:**

| Size | Description | Typical Scope |
|------|-------------|---------------|
| **Small** | Single focus, straightforward | One endpoint, one component, one utility |
| **Medium** | Multiple related pieces | Feature with a few parts, integration work |
| **Large** | Complex, many moving parts | Multi-component feature, significant integration |

**WORK UNIT FORMAT:**

```
### Work Unit {G}.{W}: {work_unit_title}

**Size:** [Small/Medium/Large]
**FRs covered:** FR1, FR2, etc.

As a {user_type},
I want {capability},
So that {value_benefit}.

**Acceptance Criteria:**
**Given** {precondition}
**When** {action}
**Then** {expected_outcome}
**And** {additional_criteria}

**Dependencies:** [List any dependencies on previous work units or groups]
```

### 3. Process Groups Sequentially

For each group in the approved feature groups list:

#### A. Group Overview

Display:
- Group number and title
- Group goal statement
- FRs covered by this group
- Any NFRs or additional requirements relevant

#### B. Work Unit Breakdown

Work with user to break down the group into work units:
- Identify distinct user capabilities
- Ensure logical flow within the group
- Size work units appropriately (single dev session)

#### C. Generate Each Work Unit

For each work unit in the group:
1. **Work Unit Title**: Clear, action-oriented
2. **Size**: Small/Medium/Large
3. **FR Coverage**: Which FRs this implements
4. **User Story**: Complete the As a/I want/So that format
5. **Acceptance Criteria**: Write specific, testable criteria using Given/When/Then
6. **Dependencies**: List any dependencies on previous work units

**AC Writing Guidelines:**
- Use Given/When/Then format
- Each AC should be independently testable
- Include edge cases and error conditions
- Reference specific requirements when applicable

#### D. Collaborative Review

After writing each work unit:
- Present the work unit to user
- Ask: "Does this work unit capture the requirement correctly?"
- "Is the scope appropriate for a single dev session?"
- "Are the acceptance criteria complete and testable?"
- "Is the sizing accurate?"

#### E. Append to Document

When work unit is approved:
- Append it to {outputFile} following template structure
- Use correct numbering (Group N, Work Unit M)
- Maintain proper markdown formatting

### 4. Group Completion

After all work units for a group are complete:
- Display group summary
- Show count of work units created
- Verify all FRs for the group are covered
- Get user confirmation to proceed to next group

### 5. Repeat for All Groups

Continue the process for each group in the approved list, processing them in order.

### 6. Final Document Completion

After all groups and work units are generated:
- Verify the document follows template structure exactly
- Ensure all placeholders are replaced
- Confirm all FRs are covered
- Check formatting consistency

### 7. Create Dependency Order Summary

After all work units are created, create a dependency order summary:

```
## Dependency Order

### Recommended Implementation Sequence:
1. Group 1 (all work units) - Foundation
2. Group 2 (all work units) - Builds on Group 1
3. Group 3 (all work units) - Builds on Groups 1-2
...

### Cross-Group Dependencies:
[List any work units that depend on work units from other groups]
```

Replace {{dependency_order}} placeholder in the document.

### 8. Update Document

Update {outputFile}:
- Replace {{feature_groups_content}} with all group sections and work units
- Replace {{dependency_order}} with the dependency summary
- Update frontmatter `stepsCompleted` to include 'step-03-break-down-work-units'

### 9. Present MENU OPTIONS

Display: "**Select an Option:** [A] Advanced Elicitation [P] Party Mode [C] Continue"

#### Menu Handling Logic:

- IF A: Read fully and follow: {advancedElicitationTask}
- IF P: Read fully and follow: {partyModeWorkflow}
- IF C: Save content to {outputFile}, update frontmatter, then read fully and follow: {nextStepFile}
- IF Any other comments or queries: help user respond then [Redisplay Menu Options](#9-present-menu-options)

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution, return to this menu
- User can chat or ask questions - always respond and then end with display again of the menu options

## CRITICAL STEP COMPLETION NOTE

ONLY WHEN C is selected and all work units are saved to document following the template structure exactly, will you then read fully and follow: `{nextStepFile}` to begin final output step.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- All groups processed in sequence
- Work units created for each group
- Template structure followed exactly
- All FRs covered by work units
- Work units appropriately sized
- Acceptance criteria are specific and testable
- Dependencies identified
- Document is ready for final output

### ❌ SYSTEM FAILURE:

- Deviating from template structure
- Missing groups or work units
- Work units too large or unclear
- Missing acceptance criteria
- Not following proper formatting

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
