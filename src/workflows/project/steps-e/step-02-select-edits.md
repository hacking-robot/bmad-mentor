---
name: 'step-02-select-edits'
description: 'Select specific sections to edit'

# File references
nextStepContext: './step-03-edit-context.md'
nextStepArchitecture: './step-04-edit-architecture.md'
nextStepBoth: './step-03-edit-context.md'
contextOutputFile: '{planning_artifacts}/project-context.md'
architectureOutputFile: '{planning_artifacts}/architecture.md'
---

# Step 2: Select Edits

## STEP GOAL:
To identify specific sections that need updating based on what changed.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

## MANDATORY SEQUENCE

### 1. Load Selected Document(s)

Load the document(s) identified in step 01.

### 2. Present Sections

"**Available sections to edit:**

**In project-context.md:**
1. Technology Stack
2. Language Rules
3. Framework Rules
4. Testing Rules
5. Quality Rules
6. Workflow Rules
7. Anti-Patterns
8. Critical Reminders

**In architecture.md:**
1. Technology Decisions
2. Core Architectural Decisions
3. Implementation Patterns
4. Project Structure
5. AI Agent Guidelines"

### 3. Select Sections

"**Which sections need updating?**

Enter numbers separated by commas (e.g., '1,3,5') or 'all':"

### 4. Confirm Selection

"**You selected:**
- [List selected sections]

**Is this correct?** [Y/N]"

### 5. Route to Edit Step

**IF editing project-context.md:**
→ Load `{nextStepContext}`

**IF editing architecture.md:**
→ Load `{nextStepArchitecture}`

**IF editing both:**
→ Load `{nextStepBoth}` (context first, then architecture)

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:
- Sections correctly identified
- User confirmed selection
- Routed to correct edit step

### ❌ SYSTEM FAILURE:
- Not presenting all sections
- Routing incorrectly

**Master Rule:** Skipping steps is FORBIDDEN.
