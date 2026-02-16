---
name: 'step-07-project-type'
description: 'Conduct project-type specific discovery using CSV-driven guidance'

nextStepFile: './step-08-scoping.md'
outputFile: '{output_folder}/prd.md'
projectTypesFile: '../data/project-types.csv'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 7: Project-Type Deep Dive

## STEP GOAL:

Conduct project-type specific discovery using CSV-driven guidance to ensure all relevant considerations for this type of project are explored.

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
- ✅ You bring project-type expertise from data files
- ✅ User brings their specific project knowledge

### Step-Specific Rules:

- 🎯 Focus ONLY on project-type specific considerations
- 🚫 FORBIDDEN to skip questions from key_questions
- 💬 Approach: Informed, targeted questioning
- 🚪 This step ensures type-specific completeness

## EXECUTION PROTOCOLS:

- 🎯 Load project type data and ask all key questions
- 💾 Append project-type requirements to PRD
- 📖 Use web search for best practices (if triggered)
- 🚫 FORBIDDEN to proceed without addressing key questions

## CONTEXT BOUNDARIES:

- Available context: PRD with classification
- Focus: Project-type specific needs
- Limits: Don't re-ask general discovery questions
- Dependencies: Step 2 (project type classification) completed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Project Type Data

**Load {projectTypesFile}** and find the row for this project type.

Extract:
- `key_questions` - Questions to ask (semicolon-separated)
- `required_sections` - Sections this project type needs
- `skip_sections` - Sections not applicable
- `web_search_triggers` - When to search for best practices

### 2. Ask Key Questions

**Present project-type specific questions:**

"For a [project type], there are some specific considerations. Let me ask you about each:"

**For each question in key_questions:**

Ask the question directly and capture the answer.

Example for API Backend:
- "What endpoints are needed?"
- "What authentication method will you use?"
- "What data formats? (JSON, XML, etc.)"
- "Any rate limiting requirements?"
- "How will you handle versioning?"
- "Will you need an SDK?"

**For each answer, probe for specifics:**
- "Tell me more about that..."
- "What's your preference and why?"
- "Are there constraints I should know about?"

### 3. Check Required Sections

**Review required_sections:**

"For a [project type], we should make sure to cover:

[List required sections]

**Are there any of these you don't need, or others I should add?**"

**Update PRD section plan accordingly.**

### 4. Check Skip Sections

**Review skip_sections:**

"For a [project type], we typically DON'T need:

[List skip sections]

**Does that match your expectations, or do you need any of these?**"

### 5. Web Search (If Triggered)

**If the project type or answers trigger web search:**

"I'd like to look up some current best practices for [topic]."

**Perform web search** for relevant best practices and share findings.

**Ask:** "Do these best practices affect your approach?"

### 6. Document Project-Type Requirements

**Compile findings:**

"**For your [project type], here's what we've established:**

[Summarize key decisions and requirements]

**Does this capture everything?**"

### 7. Append to PRD

**Add Project-Type Specific Requirements section to PRD:**

```markdown
## [Project Type] Requirements

### Key Decisions
[Decisions made during this step]

### Required Sections
[Sections this PRD will include]

### Specific Requirements
[Type-specific requirements discovered]
```

### 8. Present MENU OPTIONS

Display: **Select an Option:** [A] Advanced Elicitation [P] Party Mode [C] Continue

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- User can chat or ask questions - always respond and redisplay menu

#### Menu Handling Logic:

- IF A: Execute {advancedElicitationTask}
- IF P: Execute {partyModeWorkflow}
- IF C: Update stepsCompleted, then load {nextStepFile}
- IF Any other: Help user, then redisplay menu

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- All key questions asked and answered
- Required sections identified
- Skip sections confirmed
- Web search performed (if triggered)
- Project-type requirements documented
- User confirms completeness

### ❌ SYSTEM FAILURE:

- Skipping key questions
- Not using project-types.csv data
- Missing type-specific requirements
- Proceeding without user confirmation

**Master Rule:** Different project types have different needs. Use the data to guide discovery.
