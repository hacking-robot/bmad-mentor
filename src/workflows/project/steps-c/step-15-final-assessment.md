---
name: 'step-15-final-assessment'
description: 'Final assessment, completion summary, and workflow handoff'

# File references
contextOutputFile: '{planning_artifacts}/project-context.md'
architectureOutputFile: '{planning_artifacts}/architecture.md'

# Tasks
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 15: Final Assessment

## STEP GOAL:
To provide a comprehensive final assessment, celebrate completion, and guide the user on next steps.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:
- ✅ You are completing the workflow
- ✅ Celebrate the achievement!
- ✅ Provide clear guidance for next steps
- ✅ User has completed something significant

### Step-Specific Rules:
- 🎯 Focus on completion and celebration
- 🚫 FORBIDDEN to add more content
- 💬 Provide clear next steps
- 🚪 This is the final step!

## EXECUTION PROTOCOLS:
- 🎯 Summarize everything accomplished
- 💾 Update frontmatter for workflow complete
- 📖 Provide implementation guidance
- 🚫 Workflow ends here

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Celebration

"**🎉🎉🎉 Congratulations, {user_name}! 🎉🎉🎉**

You've completed the Project Workflow!

Together, we created comprehensive documentation that will guide AI agents to implement your project consistently and correctly."

### 2. Summary of Accomplishments

"**What We Built Together:**

**Phase 1: Project Context** ✅
- Discovered your tech stack and patterns
- Generated implementation rules across all categories
- Created `project-context.md` optimized for AI agents

**Phase 2: Architecture** ✅
- Analyzed project scale and complexity
- Made core architectural decisions
- Defined implementation patterns for consistency
- Created complete project structure
- Validated and completed `architecture.md`

**Phase 3: Validation** ✅
- Verified document alignment
- Performed quality review
- Confirmed implementation readiness"

### 3. Documents Created

"**Your Project Documentation:**

| Document | Purpose | Status |
|----------|---------|--------|
| `project-context.md` | LLM implementation rules | ✅ Complete |
| `architecture.md` | Technical decisions & patterns | ✅ Complete |

**Location:** `{planning_artifacts}/`"

### 4. Readiness Assessment

"**Implementation Readiness:**

✅ **Ready for AI-assisted development!**

Your documentation provides:
- Clear tech stack guidance
- Specific implementation rules
- Architectural decisions with rationale
- Consistency patterns for multiple agents
- Complete project structure"

### 5. Next Steps

"**What's Next?**

**Immediate Actions:**
1. Review both documents for any final adjustments
2. Share with your development team (if applicable)
3. Begin implementation using AI agents

**When Using AI Agents:**
- Provide both documents as context
- Agents will follow the rules and patterns
- Decisions are already made - just implement

**Future Updates:**
- Use **Edit Mode** to modify documents
- Use **Validate Mode** to check document quality
- Re-run workflow for major changes"

### 6. Update Final Frontmatter

**Update both output files frontmatter:**

```yaml
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
lastStep: 'step-15-final-assessment'
currentPhase: 3
status: 'complete'
completedAt: '{{current_date}}'
```

### 7. Final Menu

"**Workflow Complete!**

Thank you for collaborating on this project documentation.

**What would you like to do?**

| Option | Description |
|--------|-------------|
| **[R]eview** | Review the created documents |
| **[Q]uestions** | Ask questions about the documents |
| **[E]xit** | End the workflow |

**Your choice:**"

#### Menu Handling Logic:
- IF R: Display summary of both documents, then redisplay menu
- IF Q: Answer questions about the documentation, then redisplay menu
- IF E: Display final goodbye and end workflow
- IF Any other: Help user, then redisplay menu

### 8. Final Goodbye

"**Thank you for using the Project Workflow!**

Your `project-context.md` and `architecture.md` are ready to guide AI agents through consistent implementation.

Happy coding! 🚀"

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:
- Both documents complete and validated
- Frontmatter updated to complete status
- User guided on next steps
- Workflow properly concluded

### ❌ SYSTEM FAILURE:
- Not updating frontmatter
- Not providing clear next steps
- Ending without celebration
- Missing final guidance

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
