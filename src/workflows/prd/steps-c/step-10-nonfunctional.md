---
name: 'step-10-nonfunctional'
description: 'Define quality attributes (Non-Functional Requirements) that matter for this specific product'

nextStepFile: './step-11-polish.md'
outputFile: '{output_folder}/prd.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 10: Non-Functional Requirements

## STEP GOAL:

Define quality attributes (Non-Functional Requirements) that matter for this specific product, with specific metrics and measurement methods.

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
- ✅ You bring quality attribute knowledge
- ✅ User brings product-specific quality needs

### Step-Specific Rules:

- 🎯 Focus ONLY on Non-Functional Requirements
- 🚫 FORBIDDEN to include implementation details
- 💬 Approach: What quality matters for THIS product?
- 🚪 NFRs must have metrics and measurement methods

## EXECUTION PROTOCOLS:

- 🎯 Focus on NFRs that matter for this product
- 💾 Append NFR table to PRD
- 📖 Ensure each NFR has a metric and target
- 🚫 FORBIDDEN to include technology/implementation

## CONTEXT BOUNDARIES:

- Available context: PRD with FRs, success criteria, domain requirements
- Focus: Quality attributes, constraints
- Limits: No implementation details
- Dependencies: Step 9 (FRs) completed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Review Technical Success Criteria

**Start from what we already defined:**

"**Let's define Non-Functional Requirements.**

In Step 3, we defined Technical Success Criteria:
[List technical success criteria from Step 3]

These are a starting point. Now let's expand them into full NFRs."

### 2. Explore Quality Categories

**For each quality category, ask if it matters:**

"**For your product, which quality attributes matter?**

| Category | Example | Matters? |
|----------|---------|----------|
| **Performance** | Response time, throughput | ? |
| **Reliability** | Uptime, error rates | ? |
| **Security** | Authentication, encryption | ? |
| **Scalability** | Users, data volume | ? |
| **Usability** | Learnability, accessibility | ? |
| **Maintainability** | Code quality, deployment | ? |
| **Compatibility** | Browsers, platforms | ? |
| **Compliance** | Regulations, standards | ? |

**Which of these are important for your product?**"

### 3. Define Each Important NFR

**For each category that matters:**

"**Let's define NFRs for [category]:**

[Category-specific questions]

What's the target? How will we measure it?"

**Category-specific probing:**

**Performance:**
- "What response time is acceptable? (e.g., P95 < 200ms)"
- "What throughput do you need? (e.g., 1000 requests/second)"

**Reliability:**
- "What uptime SLA? (e.g., 99.9%)"
- "What error rate is acceptable? (e.g., < 0.1%)"

**Security:**
- "What authentication method? (describe capability, not implementation)"
- "What data needs encryption?"
- "Any compliance requirements? (GDPR, HIPAA, etc.)"

**Scalability:**
- "How many concurrent users at peak?"
- "How much data will you store?"

**Usability:**
- "Accessibility requirements? (WCAG level?)"
- "Learning curve expectations?"

### 4. Format as NFRs

**Convert each into proper NFR format:**

| ID | Requirement | Metric | Target | Measurement Method |
|----|-------------|--------|--------|-------------------|
| NFR-001 | System responds to user actions | Response time (P95) | < 200ms | APM monitoring |
| NFR-002 | System remains available | Uptime | 99.9% | Uptime monitoring |
| NFR-003 | User data is protected | Encryption at rest | AES-256 | Security audit |

### 5. Check for Implementation Leakage

**Scan NFRs for implementation details:**

"**Quick check - no implementation details:**

[Review each NFR]

**Implementation leakage warning signs:**
- Technology names (Redis, Kubernetes, OAuth)
- Architecture decisions

**If found:** Ask user to rephrase as a quality requirement."

### 6. Confirm with User

**Present all NFRs:**

"**Here are the Non-Functional Requirements:**

| ID | Requirement | Metric | Target |
|----|-------------|--------|--------|
| [All NFRs]

**Are these:**
- Complete? (Nothing missing?)
- Accurate? (Targets are right?)
- Measurable? (Can we verify?)

**Any changes needed?**"

### 7. Append to PRD

**Add Non-Functional Requirements section to PRD:**

```markdown
## Non-Functional Requirements

| ID | Requirement | Metric | Target | Measurement |
|----|-------------|--------|--------|-------------|
| NFR-001 | [Quality requirement] | [Metric] | [Target] | [How measured] |
| NFR-002 | [Quality requirement] | [Metric] | [Target] | [How measured] |
| ...
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

- Relevant quality categories identified
- Each NFR has metric and target
- No implementation details
- NFRs trace to technical success criteria
- User confirms accuracy
- PRD updated with NFR section

### ❌ SYSTEM FAILURE:

- Generic NFRs that don't fit the product
- Missing metrics or targets
- Implementation leakage
- Proceeding without user confirmation

**Master Rule:** NFRs define HOW WELL the system performs, not what technology it uses.
