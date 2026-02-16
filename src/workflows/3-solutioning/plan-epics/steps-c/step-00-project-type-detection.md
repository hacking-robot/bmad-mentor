---
name: 'step-00-project-type-detection'
description: 'Detect project type (greenfield/brownfield) and scan codebase if needed'

# Path Definitions
workflow_path: '{project-root}/_bmad/bmm/workflows/3-solutioning/plan-epics'

# File References
thisStepFile: './step-00-project-type-detection.md'
nextStepFile: './step-01-validate-prerequisites.md'
workflowFile: '{workflow_path}/workflow.md'
outputFile: '{planning_artifacts}/project-breakdown.md'
templateFile: '{workflow_path}/templates/project-breakdown-template.md'

# Source Code Indicators for Brownfield Detection
sourceCodeIndicators:
  - 'src/'
  - 'app/'
  - 'lib/'
  - 'package.json'
  - 'requirements.txt'
  - 'Cargo.toml'
  - 'go.mod'
  - 'pom.xml'
  - 'build.gradle'
  - 'Gemfile'
---

# Step 0: Project Type Detection

## STEP GOAL:

To detect whether this is a greenfield or brownfield project by scanning for existing source code, and prepare the workflow context accordingly.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step, ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a product strategist and project planning facilitator
- ✅ If you already have been given communication or persona patterns, continue to use those while playing this new role
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring project analysis expertise
- ✅ User brings their project context and vision

### Step-Specific Rules:

- 🎯 Focus ONLY on detecting project type and initial setup
- 🚫 FORBIDDEN to start extracting requirements in this step
- 💬 If brownfield detected, scan codebase to understand existing implementations
- 🚪 AUTO-PROCEED to step-01 after detection (no menu)

## EXECUTION PROTOCOLS:

- 🎯 Scan project root for source code indicators
- 💾 Initialize output document from template with project type
- 📖 If brownfield, perform codebase analysis
- 🚫 FORBIDDEN to load next step until detection is complete and documented

## CONTEXT BOUNDARIES:

- Available context: Project root directory
- Focus: Detect greenfield vs brownfield
- Limits: This step only identifies project type, not full requirements
- Dependencies: None - this is the first step

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Welcome and Overview

Welcome {user_name} to the Project Planning workflow!

"This workflow will help you create a comprehensive project breakdown document that maps your functional requirements to logical work units. This is an **advisory document** for creating Jira tickets - you can reorganize it however you see fit."

### 2. Project Type Detection

**Scan the project root for existing source code:**

Look for these indicators:
- `src/`, `app/`, `lib/` directories
- `package.json`, `requirements.txt`, `Cargo.toml`, `go.mod`
- `pom.xml`, `build.gradle`, `Gemfile`

**Detection Logic:**

IF any source code indicators found:
- **Project Type: BROWNFIELD**
- Proceed to codebase analysis (Section 3)

IF no source code indicators found:
- **Project Type: GREENFIELD**
- Skip codebase analysis
- Proceed directly to Section 4

### 3. Brownfield Codebase Analysis (Conditional)

**Only execute if project type is BROWNFIELD:**

Perform a codebase scan to understand what already exists:

**A. Identify Project Structure:**
- Main directories and their purposes
- Technology stack (from config files)
- Key modules/components

**B. Identify Existing Features:**
- List main features already implemented
- Identify API endpoints, UI components, data models
- Note any patterns or architectural decisions visible

**C. Summary for User:**
Present findings:
- Technology stack detected
- Existing components/modules
- Approximate scope of existing implementation

**Ask user:** "Does this summary accurately reflect your existing codebase? Any major components I missed?"

### 4. Initialize Output Document

Create the output document from the template:

1. Copy {templateFile} to {outputFile}
2. Set frontmatter:
   - `projectType: greenfield` or `projectType: brownfield`
   - `date: [current date]`
   - `stepsCompleted: ['step-00-project-type-detection']`
3. Replace placeholders:
   - `{{project_name}}` with actual project name from config
   - `{{project_type}}` with detected type
   - If brownfield: populate `{{existing_code_summary}}` with findings

### 5. Present Summary to User

Display the detected project type and any brownfield findings:

"**Project Type Detected:** [greenfield/brownfield]"

If brownfield:
"**Existing Codebase Summary:**
[Brief summary of what was found]"

### 6. Auto-Proceed to Next Step

This step auto-proceeds - no menu needed.

Display: "**Proceeding to prerequisites validation...**"

Then immediately load, read entire file, and execute: {nextStepFile}

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Project type correctly detected
- Output document initialized with correct project type
- If brownfield: codebase analysis performed and summarized
- User confirms understanding of project type
- Document frontmatter updated with stepsCompleted

### ❌ SYSTEM FAILURE:

- Not scanning for source code indicators
- Incorrectly detecting project type
- Not initializing output document
- Skipping brownfield analysis when needed
- Not updating frontmatter

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
