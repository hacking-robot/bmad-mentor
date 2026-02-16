---
name: 'step-14-quality-review'
description: 'Quality review of both documents against best practices'

# File references
nextStepFile: './step-15-final-assessment.md'
contextOutputFile: '{planning_artifacts}/project-context.md'
architectureOutputFile: '{planning_artifacts}/architecture.md'

# Subprocess optimization
# Pattern 2: Deep analysis of each document
# Pattern 4: Parallel quality checks
---

# Step 14: Quality Review

## STEP GOAL:
To perform a quality review of both documents against best practices for LLM-optimized documentation.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:
- ✅ You are performing quality assurance
- ✅ This is a validation check - auto-proceed when complete
- ✅ Document quality issues by severity

### Step-Specific Rules:
- 🎯 Check for LLM optimization
- 🚫 FORBIDDEN to skip quality checks
- ⚙️ Run checks in parallel where possible (Pattern 4)
- 💬 Pattern 2: Deep analysis per document
- 🚪 Auto-proceed to final assessment

## EXECUTION PROTOCOLS:
- 🎯 Run all quality checks
- 💾 Document results
- 📖 Auto-proceed to next step
- 🚫 Halt only if critical issues found

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Both Documents

Load `{contextOutputFile}` and `{architectureOutputFile}`.

### 2. Run Quality Checks

**Launch parallel quality checks (Pattern 4):**

**Check 1: Completeness**
- Are all required sections present?
- Are there placeholder texts remaining?
- Are all decisions documented?

**Check 2: Specificity**
- Are rules specific enough for AI agents?
- Are examples provided where needed?
- Are patterns concrete, not abstract?

**Check 3: Clarity**
- Is language unambiguous?
- Are contradictions absent?
- Is the document well-organized?

**Check 4: LLM Optimization**
- Is the document token-efficient?
- Is redundancy minimized?
- Are rules easily parseable?

**Check 5: Actionability**
- Can an AI agent implement from this?
- Are next steps clear?
- Are dependencies documented?

### 3. Deep Analysis (Pattern 2)

**For each document, perform deep analysis:**

**project-context.md Analysis:**
- Rule coverage complete?
- Anti-patterns documented?
- Critical reminders present?

**architecture.md Analysis:**
- All decision categories covered?
- Implementation patterns complete?
- Structure fully specified?

### 4. Aggregate Results

**Display quality results:**

```
## Quality Review Results

### project-context.md
✅ Completeness: All sections present
✅ Specificity: Rules are actionable
✅ Clarity: No ambiguities found
✅ LLM Optimization: Token-efficient
✅ Actionability: AI-ready

### architecture.md
✅ Completeness: All sections present
✅ Specificity: Decisions are specific
✅ Clarity: Well-organized
✅ LLM Optimization: No redundancy
✅ Actionability: Implementation-ready

### Quality Score: ✅ HIGH QUALITY

### Minor Suggestions:
- [Any minor improvements]
```

### 5. Handle Quality Issues

**IF critical issues found:**

"**⚠️ Critical Quality Issues:**

[List critical issues]

**These should be addressed before proceeding. Fix now?** [Y/N]"

**IF user chooses Yes:**
- Guide user to fix issues
- Re-run check

**IF only minor suggestions:**
- Note them for future improvement
- Proceed to final assessment

### 6. Auto-Proceed

"**Quality review complete.**

Proceeding to final assessment..."

→ Load, read entire file, then execute `{nextStepFile}`

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:
- All quality checks run
- Results documented
- No unresolved critical issues
- Proceeded to final assessment

### ❌ SYSTEM FAILURE:
- Skipping quality checks
- Not documenting results
- Proceeding with critical issues

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
