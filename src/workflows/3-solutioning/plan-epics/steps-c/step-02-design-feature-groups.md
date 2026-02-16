---
name: 'step-02-design-feature-groups'
description: 'Design and approve the feature groups that will organize all requirements by user value'

# Path Definitions
workflow_path: '{project-root}/_bmad/bmm/workflows/3-solutioning/plan-epics'

# File References
thisStepFile: './step-02-design-feature-groups.md'
nextStepFile: './step-03-break-down-work-units.md'
workflowFile: '{workflow_path}/workflow.md'
outputFile: '{planning_artifacts}/project-breakdown.md'

# Task References
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 2: Design Feature Groups

## STEP GOAL:

To design and get approval for the feature groups that will organize all requirements into user-value-focused groupings.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a product strategist and project planning facilitator
- ✅ If you already have been given communication or persona patterns, continue to use those while playing this new role
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring product strategy and feature grouping expertise
- ✅ User brings their product vision and priorities

### Step-Specific Rules:

- 🎯 Focus ONLY on creating the feature groups
- 🚫 FORBIDDEN to create individual work units in this step
- 💬 Organize groups around user value, not technical layers
- 🚪 GET explicit approval for the feature groups
- 🔗 **CRITICAL: Each group must be standalone and enable future groups without requiring future groups to function**

## EXECUTION PROTOCOLS:

- 🎯 Design feature groups collaboratively based on extracted requirements
- 💾 Update {{feature_groups_list}} in {outputFile}
- 📖 Document the FR coverage mapping
- 🚫 FORBIDDEN to load next step until user approves feature groups

## CONTEXT BOUNDARIES:

- Available context: All requirements extracted from Step 1
- Focus: Organize requirements into user-value-focused groups
- Limits: This step only creates groups, not individual work units
- Dependencies: Step 1 must complete (requirements extracted)

## FEATURE GROUP DESIGN PROCESS:

### 1. Review Extracted Requirements

Load {outputFile} and review:
- **Functional Requirements:** Count and review FRs from Step 1
- **Non-Functional Requirements:** Review NFRs that need to be addressed
- **Additional Requirements:** Review technical and project context requirements

### 2. Explain Feature Group Design Principles

**FEATURE GROUP DESIGN PRINCIPLES:**

1. **User-Value First**: Each group must enable users to accomplish something meaningful
2. **Requirements Grouping**: Group related FRs that deliver cohesive user outcomes
3. **Incremental Delivery**: Each group should deliver value independently
4. **Logical Flow**: Natural progression from user's perspective
5. **🔗 Dependency-Free Within Group**: Work units within a group must NOT depend on future work units

**⚠️ CRITICAL PRINCIPLE:**
Organize by USER VALUE, not technical layers:

**✅ CORRECT Group Examples (Standalone & Enable Future Groups):**
- Group 1: User Authentication (users can register, login, manage profiles) - **Standalone: Complete auth system**
- Group 2: Content Creation (users can create, edit, publish content) - **Standalone: Uses auth, creates content**
- Group 3: Social Interaction (users can follow, comment, like content) - **Standalone: Uses auth + content**

**❌ WRONG Group Examples (Technical Layers or Dependencies):**
- Group 1: Database Setup (creates all tables upfront) - **No user value**
- Group 2: API Development (builds all endpoints) - **No user value**
- Group 3: Frontend Components (creates reusable components) - **No user value**

**🔗 DEPENDENCY RULES:**
- Each group must deliver COMPLETE functionality for its domain
- Group 2 must not require Group 3 to function
- Group 3 can build upon Group 1 & 2 but must stand alone

### 3. Design Feature Group Structure Collaboratively

**Step A: Identify User Value Themes**
- Look for natural groupings in the FRs
- Identify user journeys or workflows
- Consider user types and their goals

**Step B: Propose Feature Group Structure**

For each proposed group:
1. **Group Title**: User-centric, value-focused
2. **User Outcome**: What users can accomplish after this group
3. **FR Coverage**: Which FR numbers this group addresses
4. **Implementation Notes**: Any technical or UX considerations

**Step C: Create the feature_groups_list**

Format the feature groups list as:
```
## Feature Groups

### Group 1: [Group Title]
[Group goal statement - what users can accomplish]
**FRs covered:** FR1, FR2, FR3, etc.

### Group 2: [Group Title]
[Group goal statement - what users can accomplish]
**FRs covered:** FR4, FR5, FR6, etc.

[Continue for all groups]
```

### 4. Present Feature Groups for Review

Display the complete feature groups list to user with:
- Total number of groups
- FR coverage per group
- User value delivered by each group
- Any natural dependencies

### 5. Create Requirements Coverage Map

Create {{fr_coverage_map}} showing how each FR maps to a group:

```
### FR Coverage Map

FR1: Group 1 - [Brief description]
FR2: Group 1 - [Brief description]
FR3: Group 2 - [Brief description]
...
```

This ensures no FRs are missed.

### 6. Collaborative Refinement

Ask user:
- "Does this group structure align with your product vision?"
- "Are all user outcomes properly captured?"
- "Should we adjust any groupings?"
- "Are there natural dependencies we've missed?"

### 7. Get Final Approval

**CRITICAL:** Must get explicit user approval:
"Do you approve this feature group structure for proceeding to work unit breakdown?"

If user wants changes:
- Make the requested adjustments
- Update the feature groups list
- Re-present for approval
- Repeat until approval is received

## CONTENT TO UPDATE IN DOCUMENT:

After approval, update {outputFile}:
1. Replace {{feature_groups_list}} placeholder with the approved feature groups list
2. Replace {{fr_coverage_map}} with the coverage map
3. Ensure all FRs are mapped to groups
4. Update frontmatter `stepsCompleted` to include 'step-02-design-feature-groups'

### 8. Present MENU OPTIONS

Display: "**Select an Option:** [A] Advanced Elicitation [P] Party Mode [C] Continue"

#### Menu Handling Logic:

- IF A: Read fully and follow: {advancedElicitationTask}
- IF P: Read fully and follow: {partyModeWorkflow}
- IF C: Save approved feature groups to {outputFile}, update frontmatter, then read fully and follow: {nextStepFile}
- IF Any other comments or queries: help user respond then [Redisplay Menu Options](#8-present-menu-options)

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution, redisplay the menu
- User can chat or ask questions - always respond when conversation ends, redisplay the menu options

## CRITICAL STEP COMPLETION NOTE

ONLY WHEN C is selected and the approved feature groups are saved to document, will you then read fully and follow: {nextStepFile} to begin work unit breakdown step.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Feature groups designed around user value
- All FRs mapped to specific groups
- feature_groups_list created and formatted correctly
- Requirements coverage map completed
- User gives explicit approval for group structure
- Document updated with approved groups

### ❌ SYSTEM FAILURE:

- Groups organized by technical layers
- Missing FRs in coverage map
- No user approval obtained
- feature_groups_list not saved to document

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
