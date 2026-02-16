---
name: 'step-v-03-density-validation'
description: 'Scan for anti-patterns that violate information density principles'

nextStepFile: './step-v-04-brief-coverage-validation.md'
prdFile: '{prd_file_path}'
validationReportPath: '{validation_report_path}'
---

# Step V-3: Information Density Validation

## STEP GOAL:

Scan the PRD for anti-patterns that violate information density principles - wordy phrases, conversational filler, and redundant content.

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
- ✅ You bring density analysis expertise
- ✅ This step runs autonomously - no user input needed

### Step-Specific Rules:

- 🎯 Focus ONLY on density anti-patterns
- 🚫 FORBIDDEN to validate other aspects
- 💬 Approach: Pattern matching, line-by-line
- 🚪 This is a validation sequence step - auto-proceeds

## EXECUTION PROTOCOLS:

- 🎯 Scan entire PRD for anti-patterns
- 💾 Flag each violation with line number
- 📖 Append findings to validation report
- 🚫 FORBIDDEN to pause or request user input

## CONTEXT BOUNDARIES:

- Available context: PRD file
- Focus: Information density only
- Limits: Don't validate other aspects
- Dependencies: Steps 1-2 completed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise.

### 1. Load PRD

Read {prdFile} completely.

### 2. Scan for Anti-Patterns

**Density anti-patterns to detect:**

| Anti-Pattern | Example | Suggestion |
|--------------|---------|------------|
| Conversational filler | "It's important to note that..." | Remove |
| Wordy phrases | "In order to" | "To" |
| Redundant qualifiers | "Very", "Really", "Quite" | Remove |
| Passive overuse | "It should be noted..." | Active voice |
| Hedge words | "Potentially", "Possibly", "Might" | Be specific |
| Obvious statements | "Users will use the system..." | Remove |
| Repeated content | Same info in multiple places | Consolidate |
| Empty sections | Headers with no content | Fill or remove |

### 3. Count Violations

**For each anti-pattern type:**
- Count occurrences
- Note line numbers
- Categorize severity:
  - **Minor:** 1-3 occurrences
  - **Moderate:** 4-10 occurrences
  - **Severe:** >10 occurrences

### 4. Report Density Findings

**Append to validation report:**

```markdown
## Information Density Validation

### Anti-Pattern Summary

| Anti-Pattern | Count | Severity | Example |
|--------------|-------|----------|---------|
| Conversational filler | [X] | [Severity] | [Example] |
| Wordy phrases | [X] | [Severity] | [Example] |
| Redundant qualifiers | [X] | [Severity] | [Example] |
| Passive voice overuse | [X] | [Severity] | [Example] |
| Hedge words | [X] | [Severity] | [Example] |
| Obvious statements | [X] | [Severity] | [Example] |
| Repeated content | [X] | [Severity] | [Example] |
| Empty sections | [X] | [Severity] | [Example] |

### Total Violations: [X]

### Severity Assessment
[Critical if >20 total, Warning if 10-20, Pass if <10]

### Recommendations
[List specific improvements with line numbers]
```

### 5. Display Progress and Auto-Proceed

Display: "**Density Validation Complete**

Anti-patterns found: [X] ([Severity])

**Proceeding to next check...**"

→ Load {nextStepFile}

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- All anti-pattern types scanned
- Violations counted and categorized
- Line numbers noted
- Severity assessed
- Findings reported
- Auto-proceeds to next step

### ❌ SYSTEM FAILURE:

- Incomplete scanning
- Missing anti-pattern types
- Not reporting findings
- Not auto-proceeding

**Master Rule:** Every sentence should carry weight. Remove what doesn't.
