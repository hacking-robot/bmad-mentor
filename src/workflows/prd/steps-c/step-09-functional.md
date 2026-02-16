---
name: 'step-09-functional'
description: 'Synthesize all discovery into comprehensive Functional Requirements'

nextStepFile: './step-10-nonfunctional.md'
outputFile: '{output_folder}/prd.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 9: Functional Requirements Synthesis

## STEP GOAL:

Synthesize all discovery into comprehensive Functional Requirements in the proper format: "[Actor] can [capability]".

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
- ✅ You bring requirements synthesis expertise
- ✅ User brings detailed product knowledge

### Step-Specific Rules:

- 🎯 Focus ONLY on Functional Requirements
- 🚫 FORBIDDEN to include implementation details
- 💬 Approach: Synthesize from discovery, format properly
- 🚪 FRs describe WHAT, not HOW

## EXECUTION PROTOCOLS:

- 🎯 Convert discovery into proper FR format
- 💾 Append Functional Requirements table to PRD
- 📖 Ensure traceability to sources (journeys, success criteria)
- 🚫 FORBIDDEN to include technology/implementation in FRs

## CONTEXT BOUNDARIES:

- Available context: All discovery and scope from steps 1-8
- Focus: Functional requirements only
- Limits: No implementation details, no NFRs
- Dependencies: Steps 1-8 completed - full discovery and scope done

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Review Discovery Sources

**Review what we've gathered:**

"**Now let's turn all our discovery into Functional Requirements.**

From our work together, I have:
- Success criteria
- User journeys (for each user type)
- Domain requirements
- Innovation requirements
- Project-type requirements
- MVP scope

Let me synthesize these into Functional Requirements."

### 2. Generate FR Draft

**For each MVP feature from scope:**

Convert into one or more Functional Requirements using the format:

**"[Actor] can [capability]"**

Examples:
- ✓ "User can create an account"
- ✓ "Admin can manage user permissions"
- ✗ "System will use PostgreSQL" (implementation)
- ✗ "User can quickly login" (vague - should be specific)

**Group by user type or feature area.**

### 3. Present FR Draft

**Show the draft:**

"**Here are the Functional Requirements I've synthesized:**

### [User Type/Feature Area]

| ID | Requirement | Priority | Source |
|----|-------------|----------|--------|
| FR-001 | [Actor] can [capability] | Must | [Journey X] |
| FR-002 | [Actor] can [capability] | Must | [Success Criteria Y] |
| ...

**Review these:**
- Are they accurate?
- Is anything missing?
- Are any unclear?

**What needs to change?**"

### 4. Refine with User

**For each concern:**

- **If missing:** "Tell me about [missing requirement] - what should the user be able to do?"
- **If unclear:** "Let me rephrase [FR] - [new version]. Is that clearer?"
- **If wrong:** "Let me fix that - what SHOULD it say?"

**Iterate until user is satisfied.**

### 5. Check for Implementation Leakage

**Scan FRs for implementation details:**

"**Quick check - let me make sure we haven't accidentally included implementation:**

[Review each FR]

These look clean - they describe WHAT, not HOW.

**If I spotted implementation details, I'd ask you to rephrase.**"

**Implementation leakage warning signs:**
- Technology names (React, PostgreSQL, AWS)
- Architecture decisions (microservices, REST API)
- Implementation patterns (cache, queue, batch)

**If found:** Ask user to rephrase without implementation.

### 6. Confirm Traceability

**Ensure each FR traces to a source:**

"**Let me confirm each FR traces back to our discovery:**

| FR | Source |
|----|--------|
| FR-001 | User Journey: Primary User / Step 1 |
| FR-002 | Success Criteria: User Success / Task Completion |
| ...

**This traceability ensures we're building what we planned.**"

### 7. Append to PRD

**Add Functional Requirements section to PRD:**

```markdown
## Functional Requirements

### [User Type/Feature Area]

| ID | Requirement | Priority | Phase |
|----|-------------|----------|-------|
| FR-001 | [Actor] can [capability] | Must | MVP |
| FR-002 | [Actor] can [capability] | Must | MVP |
| FR-003 | [Actor] can [capability] | Should | Growth |
| ...

**Traceability:** Each FR traces to discovery sources (journeys, success criteria, domain requirements).
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

- All MVP features converted to FRs
- FRs in "[Actor] can [capability]" format
- No implementation details in FRs
- Traceability to sources documented
- User confirms accuracy and completeness
- PRD updated with FR section

### ❌ SYSTEM FAILURE:

- Missing FRs from discovery
- Wrong format (not "[Actor] can [capability]")
- Implementation leakage in FRs
- No traceability to sources
- Proceeding without user confirmation

**Master Rule:** FRs describe WHAT the system does, not HOW it's built.
