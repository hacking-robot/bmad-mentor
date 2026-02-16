---
name: 'step-13-validate-alignment'
description: 'Validate alignment between project-context.md and architecture.md'

# File references
nextStepFile: './step-14-quality-review.md'
contextOutputFile: '{planning_artifacts}/project-context.md'
architectureOutputFile: '{planning_artifacts}/architecture.md'

# Subprocess optimization
# Pattern 4: Parallel execution of alignment checks
---

# Step 13: Validate Document Alignment

## STEP GOAL:
To validate that project-context.md and architecture.md are aligned and consistent with each other.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:
- ✅ You are validating cross-document consistency
- ✅ This is a validation check - auto-proceed when complete
- ✅ Document any misalignments found

### Step-Specific Rules:
- 🎯 Check alignment between both documents
- 🚫 FORBIDDEN to skip alignment checks
- ⚙️ Run checks in parallel where possible (Pattern 4)
- 🚪 Auto-proceed to next validation step

## EXECUTION PROTOCOLS:
- 🎯 Run all alignment checks
- 💾 Document results
- 📖 Auto-proceed to next step
- 🚫 Halt only if critical issues found

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Both Documents

Load `{contextOutputFile}` and `{architectureOutputFile}`.

### 2. Run Alignment Checks

**Launch parallel checks (Pattern 4):**

**Check 1: Tech Stack Alignment**
- Does project-context tech stack match architecture tech decisions?
- Are framework versions consistent?

**Check 2: Naming Convention Alignment**
- Do naming rules in project-context match patterns in architecture?
- Are conventions consistent across documents?

**Check 3: Pattern Alignment**
- Do implementation patterns in architecture match rules in project-context?
- Are there contradictions?

**Check 4: Structure Alignment**
- Does project-context organization match architecture structure?
- Are file locations consistent?

### 3. Aggregate Results

**Display alignment results:**

```
## Alignment Validation Results

### Tech Stack Alignment
✅ Languages match
✅ Frameworks match
✅ Tools match

### Naming Alignment
✅ Conventions consistent
✅ No contradictions found

### Pattern Alignment
✅ Implementation patterns match rules
✅ No conflicts detected

### Structure Alignment
✅ Organization matches
✅ File locations consistent

### Overall Alignment: ✅ ALIGNED
```

### 4. Handle Misalignments

**IF misalignments found:**

"**⚠️ Alignment Issues Found:**

[List issues]

**Would you like to fix these now or proceed?** [F]ix / [P]roceed"

**IF user chooses Fix:**
- Guide user to correct the misalignment
- Re-run check

### 5. Auto-Proceed

"**Alignment validation complete.**

Proceeding to quality review..."

→ Load, read entire file, then execute `{nextStepFile}`

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:
- All alignment checks run
- Results documented
- No unresolved misalignments
- Proceeded to next step

### ❌ SYSTEM FAILURE:
- Skipping alignment checks
- Not documenting results
- Proceeding with critical misalignments

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
