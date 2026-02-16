---
name: 'step-01-validate'
description: 'Validate project-context.md structure and completeness'

# File references
nextStepFile: './step-02-validate-arch.md'
outputFile: '{planning_artifacts}/project-context.md'
reportFile: '{planning_artifacts}/validation-report.md'

# Subprocess optimization
# Pattern 2: Deep analysis of document
---

# Step 1: Validate Project Context

## STEP GOAL:
To validate project-context.md structure, completeness, and quality.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

## MANDATORY SEQUENCE

### 1. Load Document

Load `{outputFile}`.

**IF not found:**
"**❌ project-context.md not found.**

Create it first using create mode."

### 2. Structure Validation

**Check for required sections:**

- [ ] Technology Stack
- [ ] Language Rules
- [ ] Framework Rules
- [ ] Testing Rules
- [ ] Quality Rules
- [ ] Workflow Rules
- [ ] Anti-Patterns
- [ ] Critical Reminders

### 3. Content Validation

**Check each section for:**
- Specific, actionable rules
- Examples where needed
- No placeholder text
- No contradictions

### 4. LLM Optimization Check

**Check for:**
- Token efficiency
- No redundancy
- Clear structure
- Parseable format

### 5. Document Results

**Display:**
"**Project Context Validation Results:**

| Check | Status | Notes |
|-------|--------|-------|
| Structure | ✅/❌ | [notes] |
| Completeness | ✅/❌ | [notes] |
| Specificity | ✅/❌ | [notes] |
| LLM Optimization | ✅/❌ | [notes] |

**Overall:** ✅ PASS / ⚠️ ISSUES FOUND"

### 6. Auto-Proceed

"**Proceeding to architecture validation...**"

→ Load `{nextStepFile}`

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:
- All checks performed
- Results documented
- Proceeded to next step

### ❌ SYSTEM FAILURE:
- Skipping checks
- Not documenting results

**Master Rule:** Skipping steps is FORBIDDEN.
