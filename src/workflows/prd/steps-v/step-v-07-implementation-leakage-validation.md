---
name: 'step-v-07-implementation-leakage-validation'
description: 'Ensure FRs and NFRs do not include implementation details'

nextStepFile: './step-v-08-domain-compliance-validation.md'
prdFile: '{prd_file_path}'
validationReportPath: '{validation_report_path}'
---

# Step V-7: Implementation Leakage Validation

## STEP GOAL:

Ensure FRs and NFRs do not include implementation details - they should describe WHAT, not HOW.

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
- ✅ You bring requirements purity expertise
- ✅ This step runs autonomously - no user input needed

### Step-Specific Rules:

- 🎯 Focus ONLY on implementation leakage
- 🚫 FORBIDDEN to validate other aspects
- 💬 Approach: Pattern detection
- 🚪 This is a validation sequence step - auto-proceeds

## EXECUTION PROTOCOLS:

- 🎯 Scan FRs/NFRs for implementation terms
- 💾 Flag leaked requirements
- 📖 Append findings to validation report
- 🚫 FORBIDDEN to pause or request user input

## CONTEXT BOUNDARIES:

- Available context: PRD file
- Focus: Implementation leakage
- Limits: Don't validate other aspects
- Dependencies: Steps 1-6 completed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise.

### 1. Define Implementation Leakage Patterns

**Technology names to detect:**
- Languages: JavaScript, Python, Java, Go, Rust, etc.
- Frameworks: React, Angular, Vue, Django, Spring, etc.
- Databases: PostgreSQL, MongoDB, Redis, etc.
- Cloud: AWS, Azure, GCP, Kubernetes, Docker, etc.
- Tools: Git, Jenkins, Terraform, etc.

**Architecture terms to detect:**
- microservices, monolith, REST, GraphQL, API gateway
- cache, queue, message broker, event-driven
- frontend, backend, full-stack

**Implementation patterns:**
- specific algorithms
- data structures
- design patterns

### 2. Scan Each Requirement

**For each FR and NFR:**

Check for implementation terms:
| ID | Terms Found | Location | Severity |
|----|-------------|----------|----------|
| [ID] | [Terms] | [Quote] | High/Medium/Low |

### 3. Assess Leakage Severity

**High:** Requirement specifies exact technology
- Example: "User can login using OAuth2 with Google"

**Medium:** Requirement implies specific approach
- Example: "System shall cache user data for performance"

**Low:** Requirement uses implementation-adjacent language
- Example: "System shall have fast database queries"

### 4. Calculate Purity Score

```
Purity Score = (Clean Requirements / Total Requirements) × 100
```

**Severity:**
- **Pass:** >95% pure (≤5% leakage)
- **Warning:** 90-95% pure
- **Critical:** <90% pure

### 5. Report Leakage Findings

**Append to validation report:**

```markdown
## Implementation Leakage Validation

### Leakage Summary

| Severity | Count | Examples |
|----------|-------|----------|
| High | [X] | [Examples] |
| Medium | [X] | [Examples] |
| Low | [X] | [Examples] |

### Detailed Leakage

| ID | Issue | Suggested Fix |
|----|-------|---------------|
| [ID] | [Issue] | [How to rephrase] |

### Purity Score: [X]%

### Severity: [Pass/Warning/Critical]

### Recommendations
[Suggestions for removing implementation leakage]

**Remember:** Requirements should describe WHAT the system does, not HOW it's built.
```

### 6. Display Progress and Auto-Proceed

Display: "**Implementation Leakage Validation Complete**

Purity: [X]% ([Severity])

**Proceeding to next check...**"

→ Load {nextStepFile}

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- All requirements scanned for leakage
- Implementation terms detected
- Severity assessed
- Fixes suggested
- Findings reported
- Auto-proceeds to next step

### ❌ SYSTEM FAILURE:

- Not scanning all requirements
- Missing implementation terms
- Not providing fixes
- Not auto-proceeding

**Master Rule:** Requirements are the capability contract. Implementation decisions come later.
