---
name: 'step-04-finalize-output'
description: 'Validate complete coverage and finalize the project breakdown document'

# Path Definitions
workflow_path: '{project-root}/_bmad/bmm/workflows/3-solutioning/plan-epics'

# File References
thisStepFile: './step-04-finalize-output.md'
workflowFile: '{workflow_path}/workflow.md'
outputFile: '{planning_artifacts}/project-breakdown.md'

# Task References
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 4: Finalize and Output

## STEP GOAL:

To validate complete coverage of all requirements and finalize the project breakdown document for the PM to use when creating Jira tickets.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: Process validation sequentially without skipping
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a product strategist and project planning facilitator
- ✅ If you already have been given communication or persona patterns, continue to use those while playing this new role
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring validation expertise and quality assurance
- ✅ User brings their implementation priorities and final review

### Step-Specific Rules:

- 🎯 Focus ONLY on validating complete requirements coverage
- 🚫 FORBIDDEN to skip any validation checks
- 💬 Validate FR coverage, work unit completeness, and dependencies
- 🚪 ENSURE document is ready for the PM

## EXECUTION PROTOCOLS:

- 🎯 Validate every requirement has work unit coverage
- 💾 Check work unit dependencies and flow
- 📖 Verify completeness and quality
- 🚫 FORBIDDEN to approve incomplete coverage

## CONTEXT BOUNDARIES:

- Available context: Complete feature groups and work units from Step 3
- Focus: Final validation of requirements coverage and document readiness
- Limits: Validation only, no new content creation
- Dependencies: Completed work unit generation from Step 3

## VALIDATION PROCESS:

### 1. FR Coverage Validation

Review the complete breakdown to ensure EVERY FR is covered:

**CRITICAL CHECK:**
- Go through each FR from the Requirements Inventory
- Verify it appears in at least one work unit
- Check that acceptance criteria fully address the FR
- No FRs should be left uncovered

**If gaps found:**
- Note which FRs are missing coverage
- Return to Step 3 to add missing work units

### 2. Work Unit Quality Validation

**Each work unit must:**
- Be completable by a single developer in one session
- Have clear acceptance criteria using Given/When/Then format
- Reference specific FRs it implements
- Include sizing (Small/Medium/Large)
- **Not have forward dependencies** (can only depend on PREVIOUS work units)
- Be implementable without waiting for future work units

### 3. Group Structure Validation

**Check that:**
- Groups deliver user value, not technical milestones
- Dependencies flow naturally
- Each group is independently valuable
- No big upfront technical work

### 4. Dependency Validation (CRITICAL)

**Group Independence Check:**
- Does each group deliver COMPLETE functionality for its domain?
- Can Group 2 function without Group 3 being implemented?
- Can Group 3 function standalone using Group 1 & 2 outputs?
- ❌ WRONG: Group 2 requires Group 3 features to work
- ✅ RIGHT: Each group is independently valuable

**Within-Group Work Unit Dependency Check:**

For each group, review work units in order:
- Can Work Unit N.1 be completed without Work Units N.2, N.3, etc.?
- Can Work Unit N.2 be completed using only Work Unit N.1 output?
- Can Work Unit N.3 be completed using only Work Units N.1 & N.2 outputs?
- ❌ WRONG: "This work unit depends on a future work unit"
- ✅ RIGHT: Each work unit builds only on previous work units

### 5. Final Document Review

**Verify the document includes:**
- ✓ Project type (greenfield/brownfield)
- ✓ Existing code summary (if brownfield)
- ✓ Requirements inventory (FRs, NFRs, additional)
- ✓ FR coverage map
- ✓ Feature groups list
- ✓ All work units with acceptance criteria and sizing
- ✓ Dependency order
- ✓ Notes for PM (advisory nature)

### 6. Complete and Save

If all validations pass:
- Ensure proper formatting throughout
- Update frontmatter `stepsCompleted` to include 'step-04-finalize-output'
- Save the final project-breakdown.md

### 7. Present Final Summary

**Display to user:**

```
## Project Breakdown Complete!

**Summary:**
- Project Type: [greenfield/brownfield]
- Total Feature Groups: [count]
- Total Work Units: [count]
- All FRs Covered: ✓
- Dependencies Mapped: ✓

**Document Location:** {outputFile}

**Next Steps for PM:**
1. Review the breakdown document
2. Create Jira tickets based on work units
3. Adjust priorities based on business needs
4. Reorganize as needed - this is advisory!

**Remember:** This document is ADVISORY. You may reorganize, combine, or split work units as you see fit when creating Jira tickets.
```

### 8. Present Final Menu

Display: **All validations complete! [C] Complete Workflow**

When C is selected, the workflow is complete and the project-breakdown.md is ready for use.

## WORKFLOW COMPLETION

Upon completion:
1. Update frontmatter to mark workflow complete
2. Offer to answer any questions about the project breakdown
3. The document is ready for the PM to create Jira tickets

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- All FRs have work unit coverage
- All work units have acceptance criteria
- All work units have sizing
- Dependencies validated and correct
- Document is complete and well-formatted
- User receives final summary
- Document ready for PM to create Jira tickets

### ❌ SYSTEM FAILURE:

- Missing FR coverage
- Work units without acceptance criteria
- Forward dependencies detected
- Incomplete document sections
- Not presenting final summary

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
