---
name: 'step-e-01b-legacy-conversion'
description: 'Analyze legacy PRD and propose conversion strategy'

nextStepFile: './step-e-02-review.md'
prdFile: '{prd_file_path}'
outputFile: '{output_folder}/prd.md'
templateFile: '../templates/prd-template.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step E-1B: Legacy Conversion Assessment

## STEP GOAL:

Analyze the legacy/non-standard PRD and propose a conversion strategy to BMAD format.

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
- ✅ You bring conversion and format expertise
- ✅ User brings knowledge of the legacy content

### Step-Specific Rules:

- 🎯 Focus ONLY on conversion assessment
- 🚫 FORBIDDEN to convert without user approval
- 💬 Approach: Analytical, thorough, collaborative
- 🚪 This step creates a conversion plan

## EXECUTION PROTOCOLS:

- 🎯 Analyze legacy PRD structure
- 📖 Map legacy content to BMAD structure
- 💾 Propose conversion strategy
- 🚫 FORBIDDEN to convert without approval

## CONTEXT BOUNDARIES:

- Available context: Legacy PRD file
- Focus: Conversion assessment
- Limits: Don't convert yet
- Dependencies: Step E-1 identified non-standard format

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Analyze Legacy PRD Structure

**Read the complete legacy PRD:**

Identify:
- Document structure (sections, headers)
- Content types (vision, requirements, etc.)
- Format issues (missing sections, wrong format)
- Quality issues (vague requirements, missing metrics)

### 2. Map to BMAD Structure

**Create a mapping:**

| Legacy Section | BMAD Section | Status |
|----------------|--------------|--------|
| [Legacy section] | [BMAD section] | [Maps directly / Needs work / Missing] |

**Identify gaps:**
- Missing BMAD sections
- Content that needs restructuring
- Requirements that need reformatting

### 3. Assess Conversion Effort

**Categorize the conversion:**

| Category | Description |
|----------|-------------|
| **Direct map** | Content can move directly to BMAD section |
| **Needs reformat** | Content exists but needs format changes |
| **Needs enhancement** | Content exists but is incomplete |
| **Missing** | BMAD section has no corresponding content |

### 4. Propose Conversion Strategy

**Present to user:**

"**Here's my assessment of your legacy PRD:**

### Content Analysis

| BMAD Section | Status | Notes |
|--------------|--------|-------|
| Executive Summary | [Status] | [Notes] |
| Success Criteria | [Status] | [Notes] |
| Product Scope | [Status] | [Notes] |
| User Journeys | [Status] | [Notes] |
| Functional Requirements | [Status] | [Notes] |
| Non-Functional Requirements | [Status] | [Notes] |

### Conversion Strategy

**Direct conversion:** [X sections]
**Needs reformatting:** [X sections]
**Needs enhancement:** [X sections]
**Missing:** [X sections]

### Recommended Approach

[Step-by-step approach to conversion]

**Does this assessment look accurate?**"

### 5. Confirm Conversion Approach

**Ask user to confirm:**

"**How would you like to proceed?**

| Option | Description |
|--------|-------------|
| **[F] Full conversion** | Convert everything to BMAD format |
| **[P] Partial conversion** | Convert some sections, leave others |
| **[R] Review first** | Go through section by section |
| **[X] Cancel** | Don't convert, edit as-is |

**Please select:** [F] Full / [P] Partial / [R] Review / [X] Cancel"

**IF F (Full):**
- Proceed with full conversion plan

**IF P (Partial):**
- Ask which sections to convert
- Modify plan accordingly

**IF R (Review):**
- Go through each section, asking about conversion

**IF X (Cancel):**
- Return to step E-1 with legacy_mode: true

### 6. Store Conversion Plan

**Document the approved conversion plan for step E-2.**

### 7. Present MENU OPTIONS

Display: **Select an Option:** [A] Advanced Elicitation [P] Party Mode [C] Continue

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- User can chat or ask questions - always respond and redisplay menu

#### Menu Handling Logic:

- IF A: Execute {advancedElicitationTask}
- IF P: Execute {partyModeWorkflow}
- IF C: Store conversion plan, update stepsCompleted, then load {nextStepFile}
- IF Any other: Help user, then redisplay menu

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Legacy PRD analyzed thoroughly
- Mapping to BMAD structure complete
- Gaps identified
- Conversion strategy proposed
- User confirms approach

### ❌ SYSTEM FAILURE:

- Incomplete analysis
- Missing sections in mapping
- Not presenting options
- Proceeding without user approval

**Master Rule:** Conversion should preserve all valuable content while improving structure.
