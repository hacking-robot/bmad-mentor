---
name: 'step-v-08-domain-compliance-validation'
description: 'Validate domain-specific requirements for high-complexity domains'

nextStepFile: './step-v-09-project-type-validation.md'
prdFile: '{prd_file_path}'
validationReportPath: '{validation_report_path}'
domainComplexityFile: '../data/domain-complexity.csv'
---

# Step V-8: Domain Compliance Validation

## STEP GOAL:

Validate domain-specific requirements are properly documented for high-complexity domains (healthcare, fintech, etc.).

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
- ✅ You bring domain compliance expertise
- ✅ This step runs autonomously - no user input needed

### Step-Specific Rules:

- 🎯 Focus ONLY on domain compliance
- 🚫 FORBIDDEN to validate other aspects
- 💬 Approach: Domain-specific checklist
- 🚪 This is a validation sequence step - auto-proceeds

## EXECUTION PROTOCOLS:

- 🎯 Check domain from frontmatter
- 📖 Apply domain-specific validation
- 💾 Report compliance status
- 🚫 FORBIDDEN to pause or request user input

## CONTEXT BOUNDARIES:

- Available context: PRD file, domain classification
- Focus: Domain compliance
- Limits: Don't validate other aspects
- Dependencies: Steps 1-7 completed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise.

### 1. Check Domain Classification

**Read PRD frontmatter for domain:**

- If `domain: general` or `complexity: low`: Skip this validation
- If `complexity: high` or domain is known high-complexity: Continue

### 2. Load Domain Requirements

**Load {domainComplexityFile}** and extract for the PRD's domain:
- `key_concerns`
- `required_knowledge`
- `special_sections`

### 3. Validate Domain Coverage

**For each key concern:**

| Concern | Addressed? | Location | Gap |
|---------|------------|----------|-----|
| [Concern 1] | Yes/No/Partial | [Section] | [Notes] |
| [Concern 2] | Yes/No/Partial | [Section] | [Notes] |

### 4. Check for Required Sections

**For each special section:**

| Section | Present? | Quality | Notes |
|---------|----------|---------|-------|
| [Section 1] | Yes/No | 1-5 | [Notes] |
| [Section 2] | Yes/No | 1-5 | [Notes] |

### 5. Calculate Domain Compliance

```
Domain Compliance = (Addressed + 0.5×Partial) / Total Concerns × 100
```

**Severity:**
- **Pass:** >90% compliance
- **Warning:** 70-90% compliance
- **Critical:** <70% compliance (may block launch)

### 6. Report Domain Compliance

**Append to validation report:**

```markdown
## Domain Compliance Validation

**Domain:** [Domain]
**Complexity:** [High/Medium/Low]

### Key Concerns Coverage

| Concern | Status | Notes |
|---------|--------|-------|
| [Concerns with status] |

### Required Sections

| Section | Present | Quality |
|---------|---------|---------|
| [Sections with status] |

### Domain Compliance Score: [X]%

### Severity: [Pass/Warning/Critical]

### Gaps and Recommendations

[Specific gaps and how to address them]

**⚠️ WARNING:** High-complexity domains may have regulatory requirements that block launch if not addressed.
```

### 7. Display Progress and Auto-Proceed

Display: "**Domain Compliance Complete**

Compliance: [X]% ([Severity])

**Proceeding to next check...**"

→ Load {nextStepFile}

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Domain classification checked
- Domain-specific concerns validated
- Required sections checked
- Compliance score calculated
- Findings reported
- Auto-proceeds to next step

### ❌ SYSTEM FAILURE:

- Not checking domain
- Not applying domain-specific validation
- Missing regulatory concerns
- Not auto-proceeding

**Master Rule:** Domain compliance is non-negotiable for regulated industries.
