---
name: 'step-v-13-report-complete'
description: 'Finalize report, summarize findings, present to user, offer next steps'

validationReportPath: '{validation_report_path}'
prdFile: '{prd_file_path}'
editWorkflowFile: '../workflow-edit-prd.md'
---

# Step V-13: Validation Report Complete

## STEP GOAL:

Finalize validation report, summarize all findings from steps 1-12, present summary to user conversationally, and offer actionable next steps.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a Validation Architect and Quality Assurance Specialist
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring synthesis and summary expertise
- ✅ This is the FINAL step - requires user interaction

### Step-Specific Rules:

- 🎯 Focus ONLY on summarizing findings and presenting options
- 🚫 FORBIDDEN to perform additional validation
- 💬 Approach: Conversational summary with clear next steps
- 🚪 This is the final step - no next step after this

## EXECUTION PROTOCOLS:

- 🎯 Load complete validation report
- 📖 Summarize all findings from steps 1-12
- 💾 Update report frontmatter with final status
- 💬 Present summary to user conversationally
- 💬 Offer menu options for next actions

## CONTEXT BOUNDARIES:

- Available context: Complete validation report with findings from all validation steps
- Focus: Summary and presentation only
- Limits: Don't add new findings
- Dependencies: Steps 1-12 completed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise.

### 1. Load Complete Validation Report

Read the entire validation report from {validationReportPath}.

### 2. Update Report Frontmatter

Update validation report frontmatter:

```yaml
validationStepsCompleted: ['step-v-01-discovery', 'step-v-02-format-detection', 'step-v-03-density-validation', 'step-v-04-brief-coverage-validation', 'step-v-05-measurability-validation', 'step-v-06-traceability-validation', 'step-v-07-implementation-leakage-validation', 'step-v-08-domain-compliance-validation', 'step-v-09-project-type-validation', 'step-v-10-smart-validation', 'step-v-11-holistic-quality-validation', 'step-v-12-completeness-validation']
validationStatus: COMPLETE
holisticQualityRating: '[rating from step 11]'
overallStatus: '[Pass/Warning/Critical based on all findings]'
```

### 3. Create Summary of Findings

**Determine Overall Status:**

| Status | Criteria |
|--------|----------|
| **Pass** | All critical checks pass, minor warnings acceptable |
| **Warning** | Some issues found but PRD is usable |
| **Critical** | Major issues that prevent PRD from being fit for purpose |

**Quick Results Table:**
- Format: [classification]
- Information Density: [severity]
- Measurability: [severity]
- Traceability: [severity]
- Implementation Leakage: [severity]
- Domain Compliance: [status]
- Project-Type Compliance: [score]
- SMART Quality: [percentage]
- Holistic Quality: [rating/5]
- Completeness: [percentage]

### 4. Present Summary to User

"**✓ PRD Validation Complete**

**Overall Status:** [Pass/Warning/Critical]

### Quick Results

| Check | Result |
|-------|--------|
| Format | [Classification] |
| Information Density | [Severity] |
| Product Brief Coverage | [Score] |
| Measurability | [Severity] |
| Traceability | [Severity] |
| Implementation Leakage | [Severity] |
| Domain Compliance | [Status] |
| Project-Type Compliance | [Score] |
| SMART Quality | [Percentage] |
| Holistic Quality | [Rating]/5 |
| Completeness | [Percentage] |

### Critical Issues: [count or "None"]
[List if any]

### Warnings: [count or "None"]
[List if any]

### Strengths
[List key strengths identified]

### Holistic Quality: [rating]/5 - [label]

### Top 3 Improvements
1. [Improvement 1]
2. [Improvement 2]
3. [Improvement 3]

### Recommendation
[Based on overall status:
- Pass: PRD is in good shape. Address minor improvements to make it great.
- Warning: PRD is usable but has issues. Review warnings and improve where needed.
- Critical: PRD has significant issues. Focus on critical issues above.]

**What would you like to do next?**"

### 5. Present MENU OPTIONS

"**Select an Option:**

| Option | Description |
|--------|-------------|
| **[R] Review** | Walk through validation report section by section |
| **[E] Edit** | Use validation report with Edit workflow for systematic improvements |
| **[F] Fix** | Immediate fixes for simple issues |
| **[X] Exit** | Exit and suggest next steps |

**Please select:** [R] Review / [E] Edit / [F] Fix / [X] Exit"

#### Menu Handling Logic:

**IF R (Review):**
- Walk through validation report section by section
- Present findings from each validation step
- Allow user to ask questions
- After review, return to menu

**IF E (Edit):**
- "The Edit workflow can use this validation report to systematically address issues. Edit mode will guide you through discovering what to edit, reviewing the PRD, and applying targeted improvements."
- "Would you like to launch Edit mode now?"
- If yes: Load {editWorkflowFile}
- If no: Return to menu

**IF F (Fix):**
- Offer immediate fixes for:
  - Template variables (fill in with appropriate content)
  - Conversational filler (remove wordy phrases)
  - Implementation leakage (remove technology names)
  - Missing section headers (add ## headers)
- "Which simple fixes would you like me to make?"
- Apply selected fixes and update validation report
- Return to menu

**IF X (Exit):**
- Display:
  "**Validation Report Saved:** {validationReportPath}"
  "**Summary:** {overall status} - {recommendation}"
- PRD Validation complete.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Complete validation report loaded
- All findings from steps 1-12 summarized
- Report frontmatter updated
- Overall status determined correctly
- Quick results presented
- Critical issues, warnings, strengths listed
- Holistic quality rating included
- Top 3 improvements presented
- Menu options with clear explanations
- User can review, edit, fix, or exit

### ❌ SYSTEM FAILURE:

- Not loading complete validation report
- Missing summary of findings
- Not updating report frontmatter
- Not determining overall status
- Missing menu options
- Unclear next steps

**Master Rule:** User needs clear summary and actionable next steps. Edit workflow is best for complex issues.
