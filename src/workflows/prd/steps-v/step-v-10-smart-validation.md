---
name: 'step-v-10-smart-validation'
description: 'Validate Functional Requirements meet SMART quality criteria'

nextStepFile: './step-v-11-holistic-quality-validation.md'
prdFile: '{prd_file_path}'
validationReportPath: '{validation_report_path}'
---

# Step V-10: SMART Requirements Validation

## STEP GOAL:

Validate Functional Requirements meet SMART quality criteria (Specific, Measurable, Attainable, Relevant, Traceable), ensuring high-quality requirements.

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
- ✅ You bring requirements engineering expertise
- ✅ This step runs autonomously - no user input needed

### Step-Specific Rules:

- 🎯 Focus ONLY on FR quality assessment using SMART framework
- 🚫 FORBIDDEN to validate other aspects
- 💬 Approach: Score each FR on SMART criteria
- 🚪 This is a validation sequence step - auto-proceeds

## EXECUTION PROTOCOLS:

- 🎯 Extract all FRs from PRD
- 📖 Score each FR on SMART criteria (1-5 scale)
- 💾 Flag FRs with score < 3 in any category
- 🚫 FORBIDDEN to pause or request user input

## CONTEXT BOUNDARIES:

- Available context: PRD file
- Focus: FR quality assessment using SMART framework
- Limits: Don't validate NFRs or other aspects
- Dependencies: Steps 2-9 completed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise.

### 1. Extract All Functional Requirements

From the PRD's Functional Requirements section, extract:
- All FRs with their FR numbers (FR-001, FR-002, etc.)
- Count total FRs

### 2. Score Each FR on SMART Criteria

**For each FR, score (1-5):**

| Criterion | 5 (Excellent) | 3 (Acceptable) | 1 (Poor) |
|-----------|---------------|----------------|----------|
| **Specific** | Clear, unambiguous, well-defined | Somewhat clear | Vague, ambiguous |
| **Measurable** | Quantifiable, testable | Partially measurable | Not measurable |
| **Attainable** | Realistic, achievable | Probably achievable | Unrealistic |
| **Relevant** | Clearly aligned with goals | Somewhat relevant | Not relevant |
| **Traceable** | Traces to journey/objective | Partially traceable | Orphan |

### 3. Build Scoring Table

| FR # | Specific | Measurable | Attainable | Relevant | Traceable | Average | Flag |
|------|----------|------------|------------|----------|-----------|---------|------|
| FR-001 | [s1] | [m1] | [a1] | [r1] | [t1] | [avg] | [X if any <3] |
| FR-002 | [s2] | [m2] | [a2] | [r2] | [t2] | [avg] | [X if any <3] |

### 4. Calculate Overall Quality

```
All scores ≥ 3: [count]/[total] = [percentage]%
All scores ≥ 4: [count]/[total] = [percentage]%
Average score: [sum]/[total*5]
```

**Severity:**
- **Critical:** >30% flagged FRs
- **Warning:** 10-30% flagged FRs
- **Pass:** <10% flagged FRs

### 5. Report SMART Findings

**Append to validation report:**

```markdown
## SMART Requirements Validation

**Total Functional Requirements:** [count]

### Scoring Summary

**All scores ≥ 3:** [percentage]% ([count]/[total])
**All scores ≥ 4:** [percentage]% ([count]/[total])
**Overall Average Score:** [average]/5.0

### Scoring Table

| FR # | S | M | A | R | T | Avg | Flag |
|------|---|---|---|---|---|-----|------|
| [Table rows] |

**Legend:** 1=Poor, 3=Acceptable, 5=Excellent
**Flag:** X = Score < 3 in one or more categories

### Low-Scoring FRs

**FR-[number]:** [Improvement suggestion]
[For each FR with score < 3 in any category]

### Severity: [Critical/Warning/Pass]

### Recommendation
[Based on severity: revise flagged FRs / focus on improvements / good quality]
```

### 6. Display Progress and Auto-Proceed

Display: "**SMART Requirements Validation Complete**

FR Quality: [percentage]% with acceptable scores ([severity])

**Proceeding to next check...**"

→ Load {nextStepFile}

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- All FRs extracted from PRD
- Each FR scored on all 5 SMART criteria
- FRs with scores < 3 flagged
- Improvement suggestions provided
- Scoring table built
- Overall quality calculated
- Findings reported
- Auto-proceeds to next step

### ❌ SYSTEM FAILURE:

- Not scoring all FRs on all SMART criteria
- Missing improvement suggestions
- Not building scoring table
- Not auto-proceeding

**Master Rule:** FRs should be high-quality, not just present. SMART provides objective quality measure.
