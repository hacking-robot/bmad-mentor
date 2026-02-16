---
name: 'step-03-alignment'
description: 'Validate cross-document alignment'

# File references
nextStepFile: './step-04-report.md'
contextOutputFile: '{planning_artifacts}/project-context.md'
architectureOutputFile: '{planning_artifacts}/architecture.md'

# Subprocess optimization
# Pattern 4: Parallel alignment checks
---

# Step 3: Cross-Document Alignment

## STEP GOAL:
To validate alignment between project-context.md and architecture.md.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

## MANDATORY SEQUENCE

### 1. Load Both Documents

Load `{contextOutputFile}` and `{architectureOutputFile}`.

### 2. Alignment Checks

**Run parallel checks (Pattern 4):**

**Tech Stack Alignment:**
- Do frameworks match?
- Do languages match?
- Do tools match?

**Naming Alignment:**
- Are naming conventions consistent?
- Any contradictions?

**Pattern Alignment:**
- Do patterns reference each other correctly?
- Any conflicts?

### 3. Document Results

**Display:**
"**Alignment Validation Results:**

| Check | Status |
|-------|--------|
| Tech Stack | ✅/❌ |
| Naming | ✅/❌ |
| Patterns | ✅/❌ |

**Overall Alignment:** ✅ ALIGNED / ⚠️ MISALIGNMENTS FOUND"

### 4. Auto-Proceed

"**Proceeding to final report...**"

→ Load `{nextStepFile}`

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:
- All alignment checks run
- Results documented
- Proceeded to report

### ❌ SYSTEM FAILURE:
- Skipping alignment checks

**Master Rule:** Skipping steps is FORBIDDEN.
