---
name: 'step-v-12-completeness-validation'
description: 'Final comprehensive completeness check before report generation'

nextStepFile: './step-v-13-report-complete.md'
prdFile: '{prd_file_path}'
validationReportPath: '{validation_report_path}'
prdFrontmatter: '{prd_frontmatter}'
---

# Step V-12: Completeness Validation

## STEP GOAL:

Final comprehensive completeness check - validate no template variables remain, each section has required content, section-specific completeness, and frontmatter is properly populated.

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
- ✅ You bring attention to detail and completeness verification
- ✅ This step runs autonomously - no user input needed

### Step-Specific Rules:

- 🎯 Focus ONLY on completeness verification
- 🚫 FORBIDDEN to validate quality (done in step 11)
- 💬 Approach: Systematic checklist-style verification
- 🚪 This is a validation sequence step - auto-proceeds

## EXECUTION PROTOCOLS:

- 🎯 Check template completeness
- 📖 Validate content completeness
- 💾 Verify frontmatter completeness
- 🚫 FORBIDDEN to pause or request user input

## CONTEXT BOUNDARIES:

- Available context: Complete PRD file, frontmatter
- Focus: Completeness verification (final gate)
- Limits: Don't assess quality
- Dependencies: Steps 1-11 completed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise.

### 1. Template Completeness Check

**Scan for remaining template variables:**

| Pattern | Count | Locations |
|---------|-------|-----------|
| `{variable}` | [X] | [Lines] |
| `{{variable}}` | [X] | [Lines] |
| `[placeholder]` | [X] | [Lines] |
| `{{document_title}}` | [X] | [Lines] |

**Result:** Template variables found: [X]
- 0 = Complete ✓
- >0 = Incomplete

### 2. Content Completeness by Section

**For each required section:**

| Section | Status | Required Content | Gap |
|---------|--------|------------------|-----|
| Executive Summary | Complete / Incomplete / Missing | Vision + Differentiator | [Gap] |
| Success Criteria | Complete / Incomplete / Missing | User + Business + Technical | [Gap] |
| Product Scope | Complete / Incomplete / Missing | MVP + Growth + Vision | [Gap] |
| User Journeys | Complete / Incomplete / Missing | User types + narratives | [Gap] |
| Functional Requirements | Complete / Incomplete / Missing | FRs in proper format | [Gap] |
| Non-Functional Requirements | Complete / Incomplete / Missing | NFRs with metrics | [Gap] |

### 3. Section-Specific Completeness

**Success Criteria Measurability:** All / Some / None measurable
**User Journeys Coverage:** Yes / Partial / No (covers all user types)
**FRs Cover MVP Scope:** Yes / Partial / No
**NFRs Have Specific Criteria:** All / Some / None

### 4. Frontmatter Completeness

| Field | Present | Notes |
|-------|---------|-------|
| stepsCompleted | Yes / No | [Value] |
| classification | Yes / No | [Value] |
| inputDocuments | Yes / No | [Value] |
| date | Yes / No | [Value] |

**Frontmatter Completeness:** [X]/4

### 5. Calculate Overall Completeness

```
Completeness Score = (Complete Sections / Total Sections) × 100
```

**Severity:**
- **Critical:** Template variables exist OR critical sections missing
- **Warning:** Minor gaps
- **Pass:** Complete

### 6. Report Completeness Findings

**Append to validation report:**

```markdown
## Completeness Validation

### Template Completeness

**Template Variables Found:** [X]
[If >0, list variables with line numbers]
[If 0: No template variables remaining ✓]

### Content Completeness by Section

| Section | Status | Gap |
|---------|--------|-----|
| [Sections with status and gaps] |

### Section-Specific Completeness

- Success Criteria Measurability: [All/Some/None]
- User Journeys Coverage: [Yes/Partial/No]
- FRs Cover MVP Scope: [Yes/Partial/No]
- NFRs Have Specific Criteria: [All/Some/None]

### Frontmatter Completeness

- stepsCompleted: [Present/Missing]
- classification: [Present/Missing]
- inputDocuments: [Present/Missing]
- date: [Present/Missing]

**Frontmatter Completeness:** [X]/4

### Overall Completeness: [X]%

### Critical Gaps: [count]
[List if any]

### Minor Gaps: [count]
[List if any]

### Severity: [Critical/Warning/Pass]

### Recommendation
[Based on severity: fix before use / address gaps / ready for use]
```

### 7. Display Progress and Auto-Proceed

Display: "**Completeness Validation Complete**

Overall Completeness: [X]% ([severity])

**Proceeding to final step...**"

→ Load {nextStepFile}

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Scanned for template variables
- Validated each section for required content
- Validated section-specific completeness
- Validated frontmatter completeness
- Completeness matrix built
- Severity assessed
- Findings reported
- Auto-proceeds to final step

### ❌ SYSTEM FAILURE:

- Not scanning for template variables
- Missing section-specific checks
- Not validating frontmatter
- Not building completeness matrix
- Not auto-proceeding

**Master Rule:** Final gate to ensure document is complete. Template variables or critical gaps must be fixed.
