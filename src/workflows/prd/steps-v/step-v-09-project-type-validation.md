---
name: 'step-v-09-project-type-validation'
description: 'Validate project-type specific requirements are documented'

nextStepFile: './step-v-10-smart-validation.md'
prdFile: '{prd_file_path}'
validationReportPath: '{validation_report_path}'
projectTypesFile: '../data/project-types.csv'
---

# Step V-9: Project-Type Compliance Validation

## STEP GOAL:

Validate that project-type specific requirements are properly documented based on the project type classification.

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
- ✅ You bring project-type expertise
- ✅ This step runs autonomously - no user input needed

### Step-Specific Rules:

- 🎯 Focus ONLY on project-type compliance
- 🚫 FORBIDDEN to validate other aspects
- 💬 Approach: Type-specific checklist
- 🚪 This is a validation sequence step - auto-proceeds

## EXECUTION PROTOCOLS:

- 🎯 Check project type from frontmatter
- 📖 Apply type-specific validation
- 💾 Report compliance status
- 🚫 FORBIDDEN to pause or request user input

## CONTEXT BOUNDARIES:

- Available context: PRD file, project type classification
- Focus: Project-type compliance
- Limits: Don't validate other aspects
- Dependencies: Steps 1-8 completed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise.

### 1. Check Project Type Classification

**Read PRD frontmatter for projectType:**

- If missing or unknown: Note as gap, continue with general check
- If present: Load type-specific requirements

### 2. Load Project-Type Requirements

**Load {projectTypesFile}** and extract for the PRD's project type:
- `required_sections`
- `key_questions` (should have been answered)

### 3. Validate Required Sections

**For each required section:**

| Section | Present? | Quality | Notes |
|---------|----------|---------|-------|
| [Section 1] | Yes/No | 1-5 | [Notes] |
| [Section 2] | Yes/No | 1-5 | [Notes] |

### 4. Check for Type-Specific Content

**Based on project type, check for appropriate content:**

**API Backend:**
- Endpoint specifications?
- Authentication model?
- Data schemas?
- Error handling?

**Mobile App:**
- Platform requirements?
- Device permissions?
- Offline capabilities?

**SaaS B2B:**
- Multi-tenancy?
- Permission model?
- Subscription tiers?

**Web App:**
- Browser support?
- Responsive design?
- Accessibility?

**[Apply type-specific checks based on classification]**

### 5. Calculate Type Compliance

```
Type Compliance = (Present Sections / Required Sections) × 100
```

**Severity:**
- **Pass:** >90% compliance
- **Warning:** 70-90% compliance
- **Critical:** <70% compliance

### 6. Report Type Compliance

**Append to validation report:**

```markdown
## Project-Type Compliance Validation

**Project Type:** [Type]

### Required Sections

| Section | Present | Quality | Gap |
|---------|---------|---------|-----|
| [Sections with status] |

### Type-Specific Content Check

| Content Area | Addressed | Notes |
|--------------|-----------|-------|
| [Type-specific areas] |

### Type Compliance Score: [X]%

### Severity: [Pass/Warning/Critical]

### Recommendations

[Specific recommendations for project type]

**Note:** Different project types have different requirements. Ensure all type-specific concerns are addressed.
```

### 7. Display Progress and Auto-Proceed

Display: "**Project-Type Compliance Complete**

Compliance: [X]% ([Severity])

**Proceeding to next check...**"

→ Load {nextStepFile}

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Project type checked
- Required sections validated
- Type-specific content checked
- Compliance score calculated
- Findings reported
- Auto-proceeds to next step

### ❌ SYSTEM FAILURE:

- Not checking project type
- Not applying type-specific validation
- Missing required sections
- Not auto-proceeding

**Master Rule:** Different project types need different requirements. Validate accordingly.
