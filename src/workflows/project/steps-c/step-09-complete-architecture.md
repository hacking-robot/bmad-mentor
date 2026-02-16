---
name: 'step-09-complete-architecture'
description: 'Complete architecture document and provide handoff guidance'

# File references
nextStepFile: './step-10-discover-context.md'
contextOutputFile: '{planning_artifacts}/project-context.md'
architectureOutputFile: '{planning_artifacts}/architecture.md'

# Tasks
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 9: Complete Architecture

## STEP GOAL:
To finalize the architecture document and provide handoff guidance for implementation.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:
- ✅ You are completing the architecture phase
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring finalization expertise
- ✅ User brings final approval

### Step-Specific Rules:
- 🎯 Focus on completion and handoff
- 🚫 FORBIDDEN to add new decisions
- 💬 Provide clear guidance for next phase
- 🚪 Celebrate the milestone!

## EXECUTION PROTOCOLS:
- 🎯 Finalize document
- 💾 Update frontmatter for Phase 2 complete
- 📖 Provide handoff guidance
- 🚫 Don't proceed without user confirmation

## CONTEXT BOUNDARIES:
- Architecture validated in step 08
- Focus: Completion and handoff
- Dependencies: Steps 01-08 complete

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Review Complete Document

"**Let me review the complete architecture document...**"

Load `{architectureOutputFile}` and present summary:
- Technology decisions
- Core architectural decisions
- Implementation patterns
- Project structure
- Validation results

### 2. Optimize for Flow

"**I'll optimize the document for readability...**"

- Ensure smooth transitions between sections
- Remove any redundancy
- Verify all sections are complete

### 3. Add AI Agent Guidelines

**Append to `{architectureOutputFile}`:**

```markdown
---

## AI Agent Guidelines

### Mandatory Rules for All Agents

1. **Follow all decisions exactly** - Do not deviate from documented choices
2. **Use specified patterns** - Naming, structure, and format rules must be followed
3. **Respect boundaries** - Stay within defined architectural boundaries
4. **Reference this document** - For any architectural question, check here first

### Implementation Priority

**First Implementation Task:**
[Starter template command or first setup task]

**Recommended Sequence:**
1. Initialize project from starter (if greenfield)
2. Set up database schema
3. Implement authentication
4. Build core features
5. Add supporting functionality

### Quality Checklist

Before considering any feature complete:
- [ ] Follows naming conventions
- [ ] Placed in correct directory
- [ ] Uses specified patterns
- [ ] Includes appropriate tests
- [ ] Error handling follows patterns
```

### 4. Update Frontmatter

**Update `{architectureOutputFile}` frontmatter:**

```yaml
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9]
lastStep: 'step-09-complete-architecture'
currentPhase: 1
status: 'phase-1-complete'
```

### 5. Phase 1 Summary

"**🎉 Phase 1: Architecture Creation - Complete!**

✅ Created: `architecture.md`

**What's included:**
- Project analysis and scale assessment
- Technology decisions with rationale
- Core architectural decisions
- Implementation patterns for consistency
- Complete project structure
- Validation and readiness check
- AI agent guidelines

**Next:**
Phase 2: Project Context Generation (Steps 10-12)
- We'll create project-context.md with LLM-optimized rules based on architecture decisions"

### 6. Present MENU OPTIONS

Display: **Phase 1 Complete! Ready for Project Context?** [A] Advanced Elicitation [P] Party Mode [C] Continue to Phase 2

#### EXECUTION RULES:
- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution, return to this menu

#### Menu Handling Logic:
- IF A: Execute {advancedElicitationTask}, and when finished redisplay the menu
- IF P: Execute {partyModeWorkflow}, and when finished redisplay the menu
- IF C: Update frontmatter, then load, read entire file, then execute {nextStepFile}
- IF Any other comments or queries: help user respond then [Redisplay Menu Options](#6-present-menu-options)

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:
- Document finalized and optimized
- AI agent guidelines added
- Frontmatter updated for Phase 2 complete
- User confirmed completion

### ❌ SYSTEM FAILURE:
- Missing AI agent guidelines
- Not updating frontmatter
- Proceeding without confirmation
- Not celebrating the milestone

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
