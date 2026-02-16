---
name: 'step-v-02-format-detection'
description: 'Classify PRD format (BMAD Standard/Variant/Non-Standard)'

nextStepFile: './step-v-03-density-validation.md'
altNextStepFile: './step-v-02b-parity-check.md'
prdFile: '{prd_file_path}'
validationReportPath: '{validation_report_path}'
prdPurposeFile: '../data/prd-purpose.md'
---

# Step V-2: Format Detection & Structure Analysis

## STEP GOAL:

Classify the PRD format (BMAD Standard, BMAD Variant, or Non-Standard) and analyze its structure for subsequent validation.

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
- ✅ You bring format analysis expertise
- ✅ This step runs autonomously

### Step-Specific Rules:

- 🎯 Focus ONLY on format detection
- 🚫 FORBIDDEN to validate content yet
- 💬 Approach: Analytical, systematic
- 🚪 This step auto-proceeds when complete

## EXECUTION PROTOCOLS:

- 🎯 Analyze PRD structure
- 📖 Classify format
- 💾 Report findings
- 🚫 FORBIDDEN to pause for user input

## CONTEXT BOUNDARIES:

- Available context: PRD file
- Focus: Format classification
- Limits: Don't validate content
- Dependencies: Step V-1 completed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Analyze PRD Structure

**Check for BMAD indicators:**

| Indicator | Present? | Notes |
|-----------|----------|-------|
| YAML frontmatter | Yes/No | |
| `stepsCompleted` array | Yes/No | |
| `classification` object | Yes/No | |
| `date` field | Yes/No | |
| Proper section headers | Yes/No | |
| Required sections present | Yes/No | |

**Required BMAD sections:**
- Executive Summary
- Success Criteria
- Product Scope
- User Journeys
- Functional Requirements
- Non-Functional Requirements

### 2. Classify Format

**Determine classification:**

| Classification | Criteria |
|----------------|----------|
| **BMAD Standard** | All indicators present, all required sections, proper frontmatter |
| **BMAD Variant** | Most indicators present, minor deviations, recognizable structure |
| **Non-Standard** | Missing frontmatter, different structure, significant deviations |

### 3. Analyze Structure Gaps

**For Non-Standard or Variant:**

Identify specific gaps:
- Missing frontmatter fields
- Missing sections
- Structural issues
- Format inconsistencies

### 4. Report Findings

**Append to validation report:**

```markdown
## Format Detection

**Classification:** [BMAD Standard / BMAD Variant / Non-Standard]

### Structure Analysis

| Element | Status | Notes |
|---------|--------|-------|
| Frontmatter | [Present/Missing/Partial] | [Notes] |
| stepsCompleted | [Present/Missing] | [Notes] |
| classification | [Present/Missing] | [Notes] |
| Executive Summary | [Present/Missing] | [Notes] |
| Success Criteria | [Present/Missing] | [Notes] |
| Product Scope | [Present/Missing] | [Notes] |
| User Journeys | [Present/Missing] | [Notes] |
| Functional Requirements | [Present/Missing] | [Notes] |
| Non-Functional Requirements | [Present/Missing] | [Notes] |

### Gap Analysis

[If Non-Standard or Variant, list specific gaps]
```

### 5. Route Based on Classification

**IF BMAD Standard:**
- Display: "**Format: BMAD Standard ✓**
- Proceeding to content validation..."
- → Load {nextStepFile} (step-v-03-density-validation.md)

**IF BMAD Variant or Non-Standard:**
- Display: "**Format: [Classification]**
- Gaps detected - running parity check..."
- → Load {altNextStepFile} (step-v-02b-parity-check.md)

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- PRD structure analyzed
- Format classified correctly
- Gaps identified
- Findings reported
- Correct routing based on classification

### ❌ SYSTEM FAILURE:

- Not analyzing structure
- Wrong classification
- Missing gap identification
- Not reporting findings

**Master Rule:** Format detection determines validation approach. Be thorough.
