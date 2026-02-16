---
name: 'step-02-validate-arch'
description: 'Validate architecture.md structure and completeness'

# File references
nextStepFile: './step-03-alignment.md'
outputFile: '{planning_artifacts}/architecture.md'
reportFile: '{planning_artifacts}/validation-report.md'

# Subprocess optimization
# Pattern 2: Deep analysis of document
---

# Step 2: Validate Architecture

## STEP GOAL:
To validate architecture.md structure, completeness, and quality.

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
"**❌ architecture.md not found.**

Create it first using create mode."

### 2. Structure Validation

**Check for required sections:**

- [ ] Project Analysis
- [ ] Technology Decisions
- [ ] Core Architectural Decisions
- [ ] Implementation Patterns
- [ ] Project Structure
- [ ] Validation Results (if complete)
- [ ] AI Agent Guidelines

### 3. Decision Completeness

**Check each decision category:**
- Data Architecture
- Authentication & Security
- API & Communication
- Frontend Architecture
- Infrastructure & Deployment

### 4. Pattern Validation

**Check for:**
- Naming patterns defined
- Structure patterns defined
- Format patterns defined
- Communication patterns defined

### 5. Document Results

**Display:**
"**Architecture Validation Results:**

| Check | Status | Notes |
|-------|--------|-------|
| Structure | ✅/❌ | [notes] |
| Decisions | ✅/❌ | [notes] |
| Patterns | ✅/❌ | [notes] |
| Structure Spec | ✅/❌ | [notes] |

**Overall:** ✅ PASS / ⚠️ ISSUES FOUND"

### 6. Auto-Proceed

"**Proceeding to alignment validation...**"

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
