---
name: 'step-12-complete-context'
description: 'Optimize project-context.md for LLM efficiency and finalize'

# File references
nextStepFile: './step-13-validate-alignment.md'
outputFile: '{planning_artifacts}/project-context.md'

# Tasks
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 12: Complete Project Context

## STEP GOAL:
To review and optimize the project-context.md document for LLM efficiency, ensuring it's concise, well-organized, and ready for AI agents to use.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:
- ✅ You are optimizing documentation for AI consumption
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring LLM optimization expertise
- ✅ User brings final approval authority

### Step-Specific Rules:
- 🎯 Focus ONLY on optimization and finalization
- 🚫 FORBIDDEN to add new content - only optimize existing
- 💬 Review for redundancy, clarity, and token efficiency
- 🚪 Ensure the document is AI-ready

## EXECUTION PROTOCOLS:
- 🎯 Review entire document for optimization opportunities
- 💾 Save optimized version
- 📖 Update frontmatter to mark Phase 1 complete
- 🚫 Don't proceed without user approval

## CONTEXT BOUNDARIES:
- All rules generated in step 11
- Architecture from Phase 1 available
- Focus: Optimize for LLM efficiency
- Dependencies: Steps 01-11 complete

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Complete Document

Load `{outputFile}` and `{planning_artifacts}/architecture.md` to review all content.

### 2. Document Optimization

"**I'll now optimize the document for LLM efficiency.**

Reviewing for:
1. **Redundancy** - Removing duplicate information while preserving essential details
2. **Clarity** - Ensuring rules are unambiguous
3. **Token Efficiency** - Consolidating where possible without losing meaning
4. **Structure** - Proper section headers and organization"

### 3. Perform Optimization

**Make improvements while maintaining:**
- General order of sections
- All essential information
- User's voice and intent

**Optimization tasks:**
- Remove redundant explanations
- Consolidate similar rules
- Improve section headers
- Add cross-references where helpful
- Ensure consistent formatting

### 4. Present Optimized Document

"**Here's the optimized project-context.md:**

[Show key sections or summary]

**Changes made:**
- [List optimizations applied]

**Is this optimized version acceptable?**"

### 5. Finalize Phase 1

**Update frontmatter in `{outputFile}`:**

```yaml
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
lastStep: 'step-12-complete-context'
currentPhase: 2
status: 'phase-2-complete'
```

### 6. Phase 2 Summary

"**🎉 Phase 2: Project Context Generation - Complete!**

✅ Created: `project-context.md`

**What's included:**
- Technology stack documentation
- Language rules
- Framework rules
- Testing rules
- Quality rules
- Workflow rules
- Anti-patterns
- Critical reminders

**Documents Complete:**
1. `architecture.md` - Technical decisions and patterns
2. `project-context.md` - LLM implementation rules

**Next:**
Phase 3: Validation (Steps 13-15)
- Cross-document alignment
- Quality review
- Final assessment"

### 7. Present MENU OPTIONS

Display: **Phase 2 Complete! Ready for final validation?** [A] Advanced Elicitation [P] Party Mode [C] Continue to Phase 3

#### EXECUTION RULES:
- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution, return to this menu

#### Menu Handling Logic:
- IF A: Execute {advancedElicitationTask}, and when finished redisplay the menu
- IF P: Execute {partyModeWorkflow}, and when finished redisplay the menu
- IF C: Update frontmatter with `stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]`, then load, read entire file, then execute {nextStepFile}
- IF Any other comments or queries: help user respond then [Redisplay Menu Options](#7-present-menu-options)

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:
- Document optimized for LLM efficiency
- Redundancy removed
- All essential information preserved
- User approved final version
- Phase 1 marked complete in frontmatter

### ❌ SYSTEM FAILURE:
- Removing essential information
- Not reviewing with user
- Not updating frontmatter
- Proceeding without approval

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
