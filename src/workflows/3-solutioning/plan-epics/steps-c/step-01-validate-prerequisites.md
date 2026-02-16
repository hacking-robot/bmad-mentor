---
name: 'step-01-validate-prerequisites'
description: 'Validate required documents exist and extract all requirements for project breakdown'

# Path Definitions
workflow_path: '{project-root}/_bmad/bmm/workflows/3-solutioning/plan-epics'

# File References
thisStepFile: './step-01-validate-prerequisites.md'
nextStepFile: './step-02-design-feature-groups.md'
workflowFile: '{workflow_path}/workflow.md'
outputFile: '{planning_artifacts}/project-breakdown.md'

# Task References
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 1: Validate Prerequisites and Extract Requirements

## STEP GOAL:

To validate that all required input documents exist and extract all requirements (FRs, NFRs, and additional requirements) needed for the project breakdown.

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
- ✅ You bring requirements extraction expertise
- ✅ User brings their product vision and context

### Step-Specific Rules:

- 🎯 Focus ONLY on extracting and organizing requirements
- 🚫 FORBIDDEN to start creating feature groups or work units in this step
- 💬 Extract requirements from ALL available documents
- 🚪 POPULATE the template sections exactly as needed

## EXECUTION PROTOCOLS:

- 🎯 Extract requirements systematically from all documents
- 💾 Update {outputFile} with extracted requirements
- 📖 Update frontmatter with extraction progress
- 🚫 FORBIDDEN to load next step until requirements are extracted and user confirms

## CONTEXT BOUNDARIES:

- Available context: Project type detected from step-00
- Focus: Extract ALL requirements from available documents
- Limits: This step only extracts requirements, does not organize them
- Dependencies: Step 0 must complete (project type detected)

## REQUIREMENTS EXTRACTION PROCESS:

### 1. Document Discovery and Validation

Search for required documents using these patterns:

**PRD Document Search Priority:**
1. `{planning_artifacts}/*prd*.md` (whole document)
2. `{planning_artifacts}/*prd*/index.md` (sharded version)

**Architecture Document Search Priority:**
1. `{planning_artifacts}/*architecture*.md` (whole document)
2. `{planning_artifacts}/*architecture*/index.md` (sharded version)

**Project Context Document:**
1. `{output_folder}/project-context.md`

Before proceeding, ask the user if there are any other documents to include for analysis, and if anything found should be excluded. Wait for user confirmation. Once confirmed, update the frontmatter `inputDocuments: []` array in {outputFile} with the list of files.

### 2. Extract Functional Requirements (FRs)

From the PRD document, read the entire document and extract ALL functional requirements:

**Extraction Method:**
- Look for numbered items like "FR1:", "Functional Requirement 1:", or similar
- Identify requirement statements that describe what the system must DO
- Include user actions, system behaviors, and business rules

**Format the FR list as:**
```
FR1: [Clear, testable requirement description]
FR2: [Clear, testable requirement description]
...
```

### 3. Extract Non-Functional Requirements (NFRs)

From the PRD document, extract ALL non-functional requirements:

**Extraction Method:**
- Look for performance, security, usability, reliability requirements
- Identify constraints and quality attributes
- Include technical standards and compliance requirements

**Format the NFR list as:**
```
NFR1: [Performance/Security/Usability requirement]
NFR2: [Performance/Security/Usability requirement]
...
```

### 4. Extract Additional Requirements from Architecture

Review the Architecture document for technical requirements that impact the breakdown:

**Look for:**
- Infrastructure and deployment requirements
- Integration requirements with external systems
- Data migration or setup requirements
- Monitoring and logging requirements
- API versioning or compatibility requirements
- Security implementation requirements

**Format Additional Requirements as:**
```
- [Technical requirement from Architecture]
- [Infrastructure setup requirement]
- [Integration requirement]
...
```

### 5. Extract Additional Requirements from Project Context

Review the project-context.md for coding rules and patterns that affect implementation:

**Look for:**
- Required technologies and frameworks
- Coding standards and patterns
- Testing requirements
- Documentation requirements

### 6. Update Output Document

After extraction and confirmation, update {outputFile} with:
- Complete FR list in {{fr_list}} section
- Complete NFR list in {{nfr_list}} section
- All additional requirements in {{additional_requirements}} section
- Update frontmatter `stepsCompleted` to include 'step-01-validate-prerequisites'

### 7. Present Extracted Requirements

Display to user:

**Functional Requirements Extracted:**
- Show count of FRs found
- Display the first few FRs as examples
- Ask if any FRs are missing or incorrectly captured

**Non-Functional Requirements Extracted:**
- Show count of NFRs found
- Display key NFRs
- Ask if any constraints were missed

**Additional Requirements:**
- Summarize technical requirements from Architecture
- Summarize requirements from Project Context
- Verify completeness

### 8. Get User Confirmation

Ask: "Do these extracted requirements accurately represent what needs to be built? Any additions or corrections?"

Update the requirements based on user feedback until confirmation is received.

## CONTENT TO SAVE TO DOCUMENT:

After extraction and confirmation, update {outputFile} with:
- Complete FR list in {{fr_list}} section
- Complete NFR list in {{nfr_list}} section
- All additional requirements in {{additional_requirements}} section

### 9. Present MENU OPTIONS

Display: `**Confirm the Requirements are complete and correct to [C] continue:**`

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- User can chat or ask questions - always respond and then end with display again of the menu option

#### Menu Handling Logic:

- IF C: Save all to {outputFile}, update frontmatter, then read fully and follow: {nextStepFile}
- IF Any other comments or queries: help user respond then [Redisplay Menu Options](#9-present-menu-options)

## CRITICAL STEP COMPLETION NOTE

ONLY WHEN C is selected and all requirements are saved to document and frontmatter is updated, will you then read fully and follow: {nextStepFile} to begin feature group design step.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- All required documents found and validated
- All FRs extracted and formatted correctly
- All NFRs extracted and formatted correctly
- Additional requirements from Architecture/Project Context identified
- User confirms requirements are complete and accurate
- Document updated with requirements

### ❌ SYSTEM FAILURE:

- Missing required documents
- Incomplete requirements extraction
- Not saving requirements to output file
- Not getting user confirmation

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
