---
name: 'step-04-report'
description: 'Generate final validation report'

# File references
contextOutputFile: '{planning_artifacts}/project-context.md'
architectureOutputFile: '{planning_artifacts}/architecture.md'
reportFile: '{planning_artifacts}/validation-report.md'
---

# Step 4: Validation Report

## STEP GOAL:
To generate a final validation report summarizing all findings.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

## MANDATORY SEQUENCE

### 1. Compile Results

Gather results from all validation steps:
- Project Context validation
- Architecture validation
- Alignment validation

### 2. Generate Report

**Create `{reportFile}`:**

```markdown
# Project Documentation Validation Report

**Date:** {{current_date}}
**Project:** {{project_name}}

---

## Summary

**Overall Status:** ✅ PASS / ⚠️ ISSUES FOUND

---

## project-context.md

| Check | Status | Notes |
|-------|--------|-------|
| Structure | ✅/❌ | |
| Completeness | ✅/❌ | |
| Specificity | ✅/❌ | |
| LLM Optimization | ✅/❌ | |

## architecture.md

| Check | Status | Notes |
|-------|--------|-------|
| Structure | ✅/❌ | |
| Decisions | ✅/❌ | |
| Patterns | ✅/❌ | |
| Structure Spec | ✅/❌ | |

## Cross-Document Alignment

| Check | Status |
|-------|--------|
| Tech Stack | ✅/❌ |
| Naming | ✅/❌ |
| Patterns | ✅/❌ |

---

## Issues Found

[List any issues by severity]

---

## Recommendations

[Any recommendations for improvement]
```

### 3. Display Summary

"**Validation Complete!**

**Summary:**
- project-context.md: ✅/⚠️
- architecture.md: ✅/⚠️
- Alignment: ✅/⚠️

**Report saved to:** `{reportFile}`"

### 4. Final Menu

"**What would you like to do?**

| Option | Description |
|--------|-------------|
| **[V]iew** | View the full report |
| **[E]dit** | Edit documents to fix issues |
| **[D]one** | End validation session |

**Your choice:**"

#### Menu Handling Logic:
- IF V: Display report, then redisplay menu
- IF E: Offer to route to edit mode
- IF D: Display goodbye and end

### 5. Goodbye

"**Validation complete!**

Your validation report is ready at `{reportFile}`.

Happy coding! 🚀"
