---
name: 'step-08-validate-architecture'
description: 'Validate architecture for coherence and completeness'

# File references
nextStepFile: './step-09-complete-architecture.md'
contextOutputFile: '{planning_artifacts}/project-context.md'
architectureOutputFile: '{planning_artifacts}/architecture.md'

# Tasks
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 8: Validate Architecture

## STEP GOAL:
To validate the architecture document for coherence, completeness, and implementation readiness.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:
- ✅ You are validating architectural coherence
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring quality assurance perspective
- ✅ User brings final approval authority

### Step-Specific Rules:
- 🎯 Check for contradictions and gaps
- 🚫 FORBIDDEN to skip validation checks
- 💬 Document any issues found
- 🚪 Ensure implementation readiness

## EXECUTION PROTOCOLS:
- 🎯 Run all validation checks
- 💾 Document validation results
- 📖 Update frontmatter when complete
- 🚫 Don't proceed with unresolved issues

## CONTEXT BOUNDARIES:
- Complete architecture document available
- project-context.md available for alignment check
- Focus: Quality and completeness
- Dependencies: Steps 01-07 complete

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Complete Architecture

Load `{architectureOutputFile}` and review all sections:
- Technology decisions
- Core architectural decisions
- Implementation patterns
- Project structure

### 2. Coherence Validation

"**Validating architectural coherence...**

#### Decision Compatibility
- Do all technology choices work together?
- Are there conflicting patterns?
- Do versions align?

#### Pattern Consistency
- Do patterns support the decisions?
- Are naming conventions consistent?
- Do structure patterns match the tech stack?"

**Display results:**
"**Coherence Check:** ✅ All decisions compatible" or
"**Coherence Check:** ⚠️ Found issues: [list]"

### 3. Completeness Validation

"**Validating completeness...**

#### Required Sections
- [x] Technology decisions
- [x] Core architectural decisions
- [x] Implementation patterns
- [x] Project structure
- [ ] Validation results

#### Decision Coverage
- Data architecture: [complete/incomplete]
- Authentication: [complete/incomplete]
- API patterns: [complete/incomplete]
- Frontend: [complete/incomplete]
- Infrastructure: [complete/incomplete]"

### 4. Context Alignment Check

"**Checking alignment with project-context.md...**

- Tech stack matches?
- Naming conventions align?
- Patterns consistent?"

### 5. Implementation Readiness

"**Checking implementation readiness...**

**Can AI agents implement from this?**
- Decisions specific enough?
- Patterns documented?
- Structure complete?
- Examples provided where needed?"

### 6. Document Validation Results

**Append to `{architectureOutputFile}`:**

```markdown
---

## Validation Results

### Coherence Validation

**Decision Compatibility:** ✅ All decisions work together

**Pattern Consistency:** ✅ Patterns support decisions

**Structure Alignment:** ✅ Structure matches tech stack

### Completeness Validation

**All Sections Present:** ✅

**Decision Coverage:**
- Data Architecture: ✅ Complete
- Authentication: ✅ Complete
- API Patterns: ✅ Complete
- Frontend: ✅ Complete
- Infrastructure: ✅ Complete

### Context Alignment

**Alignment with project-context.md:** ✅ Consistent

### Implementation Readiness

**AI Agent Readiness:** ✅ Ready

**Gaps Identified:** None / [list if any]

### Validation Status

**Overall Status:** ✅ VALIDATED

**Ready for implementation:** Yes
```

### 7. Present MENU OPTIONS

Display: **Architecture validated. Ready to complete?** [A] Advanced Elicitation [P] Party Mode [C] Continue

#### EXECUTION RULES:
- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution, return to this menu

#### Menu Handling Logic:
- IF A: Execute {advancedElicitationTask}, and when finished redisplay the menu
- IF P: Execute {partyModeWorkflow}, and when finished redisplay the menu
- IF C: Update frontmatter with `stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]`, then load, read entire file, then execute {nextStepFile}
- IF Any other comments or queries: help user respond then [Redisplay Menu Options](#7-present-menu-options)

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:
- All validation checks run
- Issues documented and addressed
- Validation results appended
- User confirmed readiness

### ❌ SYSTEM FAILURE:
- Skipping validation checks
- Ignoring coherence issues
- Not documenting results
- Proceeding with unresolved issues

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
