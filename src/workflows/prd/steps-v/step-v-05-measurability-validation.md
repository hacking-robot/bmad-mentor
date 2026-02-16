---
name: 'step-v-05-measurability-validation'
description: 'Validate all requirements are measurable and testable'

nextStepFile: './step-v-06-traceability-validation.md'
prdFile: '{prd_file_path}'
validationReportPath: '{validation_report_path}'
---

# Step V-5: Measurability Validation

## STEP GOAL:

Validate that all requirements (FRs and NFRs) are measurable and testable with clear criteria.

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
- ✅ You bring testability expertise
- ✅ This step runs autonomously - no user input needed

### Step-Specific Rules:

- 🎯 Focus ONLY on measurability
- 🚫 FORBIDDEN to validate other aspects
- 💬 Approach: Check each requirement for testability
- 🚪 This is a validation sequence step - auto-proceeds

## EXECUTION PROTOCOLS:

- 🎯 Check each FR and NFR for measurability
- 💾 Flag non-measurable requirements
- 📖 Append findings to validation report
- 🚫 FORBIDDEN to pause or request user input

## CONTEXT BOUNDARIES:

- Available context: PRD file
- Focus: Requirement measurability
- Limits: Don't validate other aspects
- Dependencies: Steps 1-4 completed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise.

### 1. Extract Requirements

**From PRD, extract:**
- All Functional Requirements (FR-001, FR-002, etc.)
- All Non-Functional Requirements (NFR-001, NFR-002, etc.)

### 2. Check Each Requirement for Measurability

**For each FR, check:**

| Criterion | Pass? |
|-----------|-------|
| Has clear actor | Y/N |
| Has specific capability | Y/N |
| Can be tested (pass/fail) | Y/N |
| No vague terms ("fast", "easy", "good") | Y/N |

**For each NFR, check:**

| Criterion | Pass? |
|-----------|-------|
| Has specific metric | Y/N |
| Has target value | Y/N |
| Has measurement method | Y/N |
| No vague terms ("performant", "scalable") | Y/N |

### 3. Identify Non-Measurable Requirements

**For each failing requirement:**

| ID | Issue | Vague Terms | Suggestion |
|----|-------|-------------|------------|
| [ID] | [Issue] | [Terms] | [How to fix] |

### 4. Calculate Measurability Score

```
FR Measurability = Measurable FRs / Total FRs × 100
NFR Measurability = Measurable NFRs / Total NFRs × 100
Overall = (Measurable FRs + Measurable NFRs) / (Total FRs + Total NFRs) × 100
```

**Severity:**
- **Pass:** >90% measurable
- **Warning:** 70-90% measurable
- **Critical:** <70% measurable

### 5. Report Measurability Findings

**Append to validation report:**

```markdown
## Measurability Validation

**Total FRs:** [X]
**Total NFRs:** [Y]

### FR Measurability: [X]%
**Measurable:** [Count]
**Non-Measurable:** [Count]

### NFR Measurability: [Y]%
**Measurable:** [Count]
**Non-Measurable:** [Count]

### Overall Measurability: [Z]%

### Non-Measurable Requirements

| ID | Issue | Suggestion |
|----|-------|------------|
| [ID] | [Issue] | [Suggestion] |

### Common Issues
[List patterns of non-measurability found]

### Severity: [Pass/Warning/Critical]

### Recommendations
[Suggestions for improving measurability]
```

### 6. Display Progress and Auto-Proceed

Display: "**Measurability Validation Complete**

Measurability: [X]% ([Severity])

**Proceeding to next check...**"

→ Load {nextStepFile}

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- All FRs and NFRs checked
- Non-measurable requirements identified
- Score calculated
- Improvement suggestions provided
- Findings reported
- Auto-proceeds to next step

### ❌ SYSTEM FAILURE:

- Not checking all requirements
- Missing non-measurable detection
- Not providing suggestions
- Not auto-proceeding

**Master Rule:** If you can't measure it, you can't test it. Every requirement needs criteria.
