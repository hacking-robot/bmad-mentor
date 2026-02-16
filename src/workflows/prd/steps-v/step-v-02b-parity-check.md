---
name: 'step-v-02b-parity-check'
description: 'Analyze non-standard PRD gaps to achieve BMAD parity'

nextStepFile: './step-v-03-density-validation.md'
prdFile: '{prd_file_path}'
validationReportPath: '{validation_report_path}'
prdPurposeFile: '../data/prd-purpose.md'
---

# Step V-2B: Document Parity Check

## STEP GOAL:

Analyze gaps in non-standard PRDs to determine what would be needed to achieve BMAD parity.

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
- ✅ You bring gap analysis expertise
- ✅ This step runs autonomously

### Step-Specific Rules:

- 🎯 Focus ONLY on parity analysis
- 🚫 FORBIDDEN to validate content quality
- 💬 Approach: Gap-focused, actionable
- 🚪 This step auto-proceeds when complete

## EXECUTION PROTOCOLS:

- 🎯 Compare to BMAD standards
- 📖 Identify specific gaps
- 💾 Report parity findings
- 🚫 FORBIDDEN to pause for user input

## CONTEXT BOUNDARIES:

- Available context: Non-standard PRD, format detection results
- Focus: Gap analysis for parity
- Limits: Don't validate content quality
- Dependencies: Step V-2 identified non-standard format

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load BMAD Standards

**Load {prdPurposeFile}** to understand BMAD PRD standards.

### 2. Gap Analysis

**For each BMAD requirement:**

| Requirement | Present | Quality | Gap Notes |
|-------------|---------|---------|-----------|
| **Frontmatter** |
| stepsCompleted | Yes/No | N/A | [Notes] |
| classification | Yes/No | N/A | [Notes] |
| date | Yes/No | N/A | [Notes] |
| inputDocuments | Yes/No | N/A | [Notes] |
| **Sections** |
| Executive Summary | Yes/No | 1-5 | [Notes] |
| Success Criteria | Yes/No | 1-5 | [Notes] |
| Product Scope | Yes/No | 1-5 | [Notes] |
| User Journeys | Yes/No | 1-5 | [Notes] |
| FRs (proper format) | Yes/No | 1-5 | [Notes] |
| NFRs (with metrics) | Yes/No | 1-5 | [Notes] |

### 3. Calculate Parity Score

**Parity calculation:**

```
Parity Score = (Elements Present / Total Elements) × 100
Quality Score = Average of quality ratings for present elements
```

**Severity assessment:**
- **Critical:** < 50% parity
- **Warning:** 50-80% parity
- **Acceptable:** > 80% parity

### 4. Generate Conversion Recommendations

**For each gap:**

Provide actionable recommendation:
- What's missing
- Why it matters
- How to address it

### 5. Report Parity Findings

**Append to validation report:**

```markdown
## BMAD Parity Analysis

**Parity Score:** [X]%
**Quality Score:** [X]/5
**Severity:** [Critical/Warning/Acceptable]

### Gap Summary

| Category | Present | Missing | Parity |
|----------|---------|---------|--------|
| Frontmatter | [X]/4 | [X] | [X]% |
| Required Sections | [X]/6 | [X] | [X]% |

### Detailed Gaps

**Missing Elements:**
[List each missing element with impact]

**Quality Issues:**
[List quality issues with recommendations]

### Conversion Recommendations

To achieve BMAD parity:
1. [Recommendation 1]
2. [Recommendation 2]
3. ...

**Estimated effort:** [Low/Medium/High]
```

### 6. Display and Proceed

Display: "**Parity Analysis Complete**

Parity Score: [X]% ([Severity])

**Proceeding to content validation...**"

→ Load {nextStepFile} (step-v-03-density-validation.md)

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- All BMAD requirements checked
- Gaps identified with specificity
- Parity score calculated
- Recommendations provided
- Findings reported

### ❌ SYSTEM FAILURE:

- Incomplete gap analysis
- Missing parity calculation
- Vague recommendations
- Not reporting findings

**Master Rule:** Parity analysis provides a roadmap to BMAD compliance.
