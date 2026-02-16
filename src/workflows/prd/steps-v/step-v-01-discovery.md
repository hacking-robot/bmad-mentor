---
name: 'step-v-01-discovery'
description: 'Confirm PRD path, discover and load input documents'

nextStepFile: './step-v-02-format-detection.md'
prdFile: '{prd_file_path}'
outputFile: '{output_folder}/validation-report-{date}.md'
prdPurposeFile: '../data/prd-purpose.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step V-1: Document Discovery & Confirmation

## STEP GOAL:

Confirm the PRD path, discover and load any input documents, and initialize the validation report.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a Validation Architect and Quality Assurance Specialist
- ✅ We engage in systematic validation, not collaborative dialogue
- ✅ You bring analytical rigor and quality assessment
- ✅ This step needs user confirmation

### Step-Specific Rules:

- 🎯 Focus ONLY on document discovery and setup
- 🚫 FORBIDDEN to start validation yet
- 💬 Approach: Confirmatory, systematic
- 🚪 This step sets up validation

## EXECUTION PROTOCOLS:

- 🎯 Load PRD and confirm with user
- 📖 Discover input documents (Product Brief, etc.)
- 💾 Initialize validation report
- 🚫 FORBIDDEN to proceed without confirmation

## CONTEXT BOUNDARIES:

- Available context: PRD file path
- Focus: Document discovery and setup
- Limits: Don't validate yet
- Dependencies: None - first validation step

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load PRD Document

**Load the PRD file:**

Read {prdFile} completely.

**Extract key information:**
- Product name
- Classification (domain, project type)
- Frontmatter status
- Section structure

### 2. Confirm PRD

**Present for confirmation:**

"**PRD Found:**

| Property | Value |
|----------|-------|
| **File** | {prdFile} |
| **Product** | [Product name] |
| **Domain** | [Domain classification] |
| **Type** | [Project type] |
| **Sections** | [List of sections found] |

**Is this the correct PRD to validate?**
- **[Y]** Yes, proceed
- **[N]** No, different file"

### 3. Discover Input Documents

**Ask about input documents:**

"**Do you have input documents to validate coverage against?**

| Document | Purpose |
|----------|---------|
| **Product Brief** | Check PRD covers brief content |
| **Research Docs** | Verify research findings captured |
| **Project Context** | For brownfield projects |

**Provide paths to any documents you want to check, or 'None' to skip.**"

**For each document provided:**
- Load the document
- Extract key content for coverage validation
- Store in validation context

### 4. Initialize Validation Report

**Create validation report:**

```markdown
---
validationTarget: '{prdFile}'
validationDate: '[current date]'
inputDocuments: [list of input documents]
validationStepsCompleted: ['step-v-01-discovery']
validationStatus: IN_PROGRESS
---

# PRD Validation Report

**Target:** [Product name]
**Date:** [Date]
**Validator:** BMAD PRD Validation Workflow

## Validation Setup

**PRD File:** {prdFile}
**Input Documents:** [List or "None"]

---

[Validation findings will be appended by subsequent steps]
```

Save to {outputFile}.

### 5. Present MENU OPTIONS

Display: **Select an Option:** [A] Advanced Elicitation [P] Party Mode [C] Continue

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- User can chat or ask questions - always respond and redisplay menu

#### Menu Handling Logic:

- IF A: Execute {advancedElicitationTask}
- IF P: Execute {partyModeWorkflow}
- IF C: Update validation report with setup info, then load {nextStepFile}
- IF Any other: Help user, then redisplay menu

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- PRD loaded and confirmed
- Input documents discovered (if any)
- Validation report initialized
- User confirms setup

### ❌ SYSTEM FAILURE:

- Not loading PRD
- Skipping document discovery
- Not initializing report
- Proceeding without confirmation

**Master Rule:** Proper setup enables thorough validation. Take time to confirm.
