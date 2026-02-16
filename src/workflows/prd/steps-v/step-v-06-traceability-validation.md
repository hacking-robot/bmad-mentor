---
name: 'step-v-06-traceability-validation'
description: 'Validate traceability chain from vision to FRs'

nextStepFile: './step-v-07-implementation-leakage-validation.md'
prdFile: '{prd_file_path}'
validationReportPath: '{validation_report_path}'
---

# Step V-6: Traceability Validation

## STEP GOAL:

Validate the traceability chain: Vision → Success Criteria → User Journeys → Functional Requirements.

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
- ✅ You bring traceability analysis expertise
- ✅ This step runs autonomously - no user input needed

### Step-Specific Rules:

- 🎯 Focus ONLY on traceability chain
- 🚫 FORBIDDEN to validate other aspects
- 💬 Approach: Link mapping
- 🚪 This is a validation sequence step - auto-proceeds

## EXECUTION PROTOCOLS:

- 🎯 Map traceability links
- 💾 Flag orphan requirements
- 📖 Append findings to validation report
- 🚫 FORBIDDEN to pause or request user input

## CONTEXT BOUNDARIES:

- Available context: PRD file
- Focus: Traceability chain
- Limits: Don't validate other aspects
- Dependencies: Steps 1-5 completed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise.

### 1. Extract Traceability Elements

**From PRD, extract:**
- Vision statement
- Success criteria (user, business, technical)
- User journeys
- Functional requirements

### 2. Build Traceability Matrix

**Map the chain:**

```
Vision → Success Criteria → User Journeys → FRs
```

**For each FR, trace back:**
| FR | Journey Step | Success Criterion | Vision Alignment |
|----|--------------|-------------------|------------------|
| FR-001 | [Journey/Step] | [Criterion] | Aligned / Unclear / Orphan |
| FR-002 | [Journey/Step] | [Criterion] | Aligned / Unclear / Orphan |

### 3. Identify Orphan Requirements

**Orphan detection:**
- FRs with no journey reference
- FRs with no success criterion connection
- FRs that don't support the vision

**Unclear detection:**
- FRs with weak/vague traceability
- FRs that might be out of scope

### 4. Check Reverse Traceability

**For each user journey step:**
- Is there at least one FR that enables it?

**For each success criterion:**
- Is there at least one FR that contributes to it?

### 5. Calculate Traceability Score

```
Traceability Score = (Aligned FRs / Total FRs) × 100
```

**Severity:**
- **Pass:** >90% traceable
- **Warning:** 70-90% traceable
- **Critical:** <70% traceable

### 6. Report Traceability Findings

**Append to validation report:**

```markdown
## Traceability Validation

### Traceability Matrix

| FR | Journey | Success | Vision | Status |
|----|---------|---------|--------|--------|
| [List all FRs with traceability] |

### Orphan Requirements

[List FRs with no traceability]

### Ungrounded Journey Steps

[List journey steps without FRs]

### Unaddressed Success Criteria

[List success criteria without FRs]

### Traceability Score: [X]%

### Severity: [Pass/Warning/Critical]

### Recommendations
[Suggestions for improving traceability]
```

### 7. Display Progress and Auto-Proceed

Display: "**Traceability Validation Complete**

Traceability: [X]% ([Severity])

**Proceeding to next check...**"

→ Load {nextStepFile}

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Traceability matrix built
- Orphan requirements identified
- Ungrounded elements found
- Score calculated
- Findings reported
- Auto-proceeds to next step

### ❌ SYSTEM FAILURE:

- Not building traceability matrix
- Missing orphan detection
- Not checking reverse traceability
- Not auto-proceeding

**Master Rule:** Every requirement should trace to user value. No orphans allowed.
