---
name: 'step-v-04-brief-coverage-validation'
description: 'Validate PRD covers all content from Product Brief'

nextStepFile: './step-v-05-measurability-validation.md'
prdFile: '{prd_file_path}'
validationReportPath: '{validation_report_path}'
productBriefPath: '{product_brief_path}'
---

# Step V-4: Product Brief Coverage Validation

## STEP GOAL:

Validate that the PRD covers all content from the Product Brief (if one was provided).

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
- ✅ You bring coverage analysis expertise
- ✅ This step runs autonomously - no user input needed

### Step-Specific Rules:

- 🎯 Focus ONLY on brief coverage
- 🚫 FORBIDDEN to validate other aspects
- 💬 Approach: Content mapping
- 🚪 This is a validation sequence step - auto-proceeds

## EXECUTION PROTOCOLS:

- 🎯 Map brief content to PRD sections
- 💾 Flag uncovered content
- 📖 Append findings to validation report
- 🚫 FORBIDDEN to pause or request user input

## CONTEXT BOUNDARIES:

- Available context: PRD file, Product Brief (if provided)
- Focus: Coverage mapping
- Limits: Don't validate other aspects
- Dependencies: Step 1 discovered input documents

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise.

### 1. Check for Product Brief

**IF no Product Brief was provided:**

Append to report:
```markdown
## Product Brief Coverage

**Status:** SKIPPED - No Product Brief provided

**Note:** To validate brief coverage, provide a Product Brief in step V-1.
```

Display: "**Brief Coverage: Skipped (no brief provided)**

**Proceeding to next check...**"

→ Load {nextStepFile}

**IF Product Brief was provided:**
Continue to step 2.

### 2. Extract Brief Content

**Load Product Brief and extract:**

| Content Type | Items |
|--------------|-------|
| Vision/Goals | [List] |
| Target Users | [List] |
| Key Features | [List] |
| Success Metrics | [List] |
| Constraints | [List] |
| Other Requirements | [List] |

### 3. Map to PRD Coverage

**For each brief item:**

| Brief Item | PRD Location | Status |
|------------|--------------|--------|
| [Item 1] | [Section/FR] | Covered / Missing / Partial |
| [Item 2] | [Section/FR] | Covered / Missing / Partial |
| ... | ... | ... |

### 4. Calculate Coverage

```
Coverage Score = (Covered + 0.5×Partial) / Total × 100
```

**Severity:**
- **Pass:** >90% coverage
- **Warning:** 70-90% coverage
- **Critical:** <70% coverage

### 5. Report Coverage Findings

**Append to validation report:**

```markdown
## Product Brief Coverage

**Brief:** [Brief filename]
**Coverage Score:** [X]%

### Coverage Summary

| Category | Covered | Partial | Missing |
|----------|---------|---------|---------|
| Vision/Goals | [X]/[Y] | [X] | [X] |
| Target Users | [X]/[Y] | [X] | [X] |
| Key Features | [X]/[Y] | [X] | [X] |
| Success Metrics | [X]/[Y] | [X] | [X] |
| Constraints | [X]/[Y] | [X] | [X] |

### Missing Content

[List items from brief not covered in PRD]

### Severity: [Pass/Warning/Critical]

### Recommendations
[Suggestions for improving coverage]
```

### 6. Display Progress and Auto-Proceed

Display: "**Brief Coverage Complete**

Coverage: [X]% ([Severity])

**Proceeding to next check...**"

→ Load {nextStepFile}

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Brief content extracted (if provided)
- Coverage mapping complete
- Missing items identified
- Score calculated
- Findings reported
- Auto-proceeds to next step

### ❌ SYSTEM FAILURE:

- Not checking for brief
- Incomplete mapping
- Not reporting findings
- Not auto-proceeding

**Master Rule:** All brief content should appear in PRD. Nothing should be lost.
