---
name: 'step-e-02-review'
description: 'Thoroughly review PRD, analyze validation findings, prepare change plan'

nextStepFile: './step-e-03-edit.md'
prdFile: '{prd_file_path}'
outputFile: '{output_folder}/prd.md'
validationReportPath: '{validation_report_path}'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step E-2: Deep Review & Analysis

## STEP GOAL:

Thoroughly review the PRD, analyze any validation findings, and prepare a detailed change plan for the edit.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a product-focused PM facilitator collaborating with an expert peer
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring analytical and review expertise
- ✅ User brings knowledge of what matters

### Step-Specific Rules:

- 🎯 Focus ONLY on review and analysis
- 🚫 FORBIDDEN to make changes yet
- 💬 Approach: Thorough, systematic
- 🚪 This step prepares for editing

## EXECUTION PROTOCOLS:

- 🎯 Review complete PRD systematically
- 📖 Analyze validation findings (if present)
- 💾 Prepare detailed change plan
- 🚫 FORBIDDEN to edit yet

## CONTEXT BOUNDARIES:

- Available context: PRD, edit goals, validation report (if present)
- Focus: Deep review and analysis
- Limits: Don't make changes
- Dependencies: Step E-1 completed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Review Complete PRD

**Read the entire PRD:**

For each section, note:
- Content quality
- Completeness
- Issues or concerns
- Alignment with edit goals

### 2. Analyze Validation Findings (If Present)

**IF validation report exists:**

Load {validationReportPath} and analyze:
- Critical issues
- Warnings
- Recommendations
- Holistic quality rating

**Map validation findings to edit goals:**
- Which findings relate to planned changes?
- Which findings should be addressed separately?
- Priority order for addressing findings

### 3. Section-by-Section Analysis

**For each PRD section:**

| Section | Quality | Issues | Changes Needed |
|---------|---------|--------|----------------|
| Executive Summary | [Assessment] | [Issues] | [Changes] |
| Success Criteria | [Assessment] | [Issues] | [Changes] |
| Product Scope | [Assessment] | [Issues] | [Changes] |
| User Journeys | [Assessment] | [Issues] | [Changes] |
| Functional Requirements | [Assessment] | [Issues] | [Changes] |
| Non-Functional Requirements | [Assessment] | [Issues] | [Changes] |

### 4. Prepare Change Plan

**Create detailed change plan:**

"**Based on my review, here's the change plan:**

### Change Plan

**Priority 1 (Critical):**
1. [Change description]
   - Section: [Section]
   - Action: [Add/Update/Delete]
   - Details: [Specific change]

**Priority 2 (Important):**
1. [Change description]
   - Section: [Section]
   - Action: [Add/Update/Delete]
   - Details: [Specific change]

**Priority 3 (Nice to have):**
1. [Change description]

### Summary
- **Total changes:** [Count]
- **Sections affected:** [List]
- **Estimated impact:** [Assessment]"

### 5. Confirm Change Plan

**Ask user to approve:**

"**Does this change plan capture everything you want to do?**

- Any changes to add?
- Any changes to remove?
- Any priority adjustments?

**Please review and confirm.**"

### 6. Present MENU OPTIONS

Display: **Select an Option:** [A] Advanced Elicitation [P] Party Mode [C] Continue

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- User can chat or ask questions - always respond and redisplay menu

#### Menu Handling Logic:

- IF A: Execute {advancedElicitationTask}
- IF P: Execute {partyModeWorkflow}
- IF C: Store approved change plan, update stepsCompleted, then load {nextStepFile}
- IF Any other: Help user, then redisplay menu

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Complete PRD reviewed
- Validation findings analyzed (if present)
- Section-by-section assessment done
- Detailed change plan created
- User approves plan

### ❌ SYSTEM FAILURE:

- Incomplete review
- Ignoring validation findings
- Vague change plan
- Proceeding without approval

**Master Rule:** A good change plan makes editing smooth. Take time to plan well.
