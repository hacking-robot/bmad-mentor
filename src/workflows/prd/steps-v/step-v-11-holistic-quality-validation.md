---
name: 'step-v-11-holistic-quality-validation'
description: 'Assess PRD as cohesive, compelling document - is it a good PRD?'

nextStepFile: './step-v-12-completeness-validation.md'
prdFile: '{prd_file_path}'
validationReportPath: '{validation_report_path}'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
---

# Step V-11: Holistic Quality Assessment

## STEP GOAL:

Assess the PRD as a cohesive, compelling document - evaluating document flow, dual audience effectiveness (humans and LLMs), BMAD PRD principles compliance, and overall quality rating.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a Validation Architect and Quality Assurance Specialist
- ✅ We engage in systematic validation, not collaborative dialogue
- ✅ You bring analytical rigor and document quality expertise
- ✅ This step runs autonomously - no user input needed

### Step-Specific Rules:

- 🎯 Focus ONLY on holistic document quality assessment
- 🚫 FORBIDDEN to validate individual components (done in previous steps)
- 💬 Approach: Multi-perspective evaluation
- 🚪 This is a validation sequence step - auto-proceeds

## EXECUTION PROTOCOLS:

- 🎯 Evaluate document flow, coherence, transitions
- 📖 Assess dual audience effectiveness
- 💾 Check BMAD principles compliance
- 🚫 FORBIDDEN to pause or request user input

## CONTEXT BOUNDARIES:

- Available context: Complete PRD file, validation report with findings from steps 1-10
- Focus: Holistic quality - the WHOLE document
- Limits: Don't re-validate individual components
- Dependencies: Steps 1-10 completed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise.

### 1. Read Complete PRD

Read the entire PRD from start to finish.

### 2. Evaluate Document Flow & Coherence

**Assess:**
- Narrative flow - does it tell a cohesive story?
- Transitions between sections
- Consistency - is it coherent throughout?
- Readability - is it clear and well-organized?

**Rating:** Excellent / Good / Adequate / Needs Work / Problematic

### 3. Evaluate Dual Audience Effectiveness

**For Humans:**
| Audience | Assessment |
|----------|------------|
| Executives | Can they understand vision and goals quickly? |
| Developers | Do they have clear requirements to build from? |
| Designers | Do they understand user needs and flows? |
| Stakeholders | Can they make informed decisions? |

**For LLMs:**
| Capability | Assessment |
|------------|------------|
| Machine-readable | Is the PRD structured for LLM consumption? |
| UX readiness | Can an LLM generate UX designs from this? |
| Architecture readiness | Can an LLM generate architecture from this? |
| Epic/Story readiness | Can an LLM break down into epics and stories? |

**Dual Audience Score:** 1-5

### 4. Check BMAD PRD Principles Compliance

| Principle | Status | Notes |
|-----------|--------|-------|
| Information Density | Met / Partial / Not Met | [Notes] |
| Measurability | Met / Partial / Not Met | [Notes] |
| Traceability | Met / Partial / Not Met | [Notes] |
| Domain Awareness | Met / Partial / Not Met | [Notes] |
| Zero Anti-Patterns | Met / Partial / Not Met | [Notes] |
| Dual Audience | Met / Partial / Not Met | [Notes] |
| Markdown Format | Met / Partial / Not Met | [Notes] |

**Principles Met:** X/7

### 5. Assign Overall Quality Rating

| Rating | Description |
|--------|-------------|
| 5/5 - Excellent | Exemplary, ready for production use |
| 4/5 - Good | Strong with minor improvements needed |
| 3/5 - Adequate | Acceptable but needs refinement |
| 2/5 - Needs Work | Significant gaps or issues |
| 1/5 - Problematic | Major flaws, needs substantial revision |

### 6. Identify Top 3 Improvements

Based on holistic assessment, identify the 3 most impactful improvements to make this a great PRD.

### 7. Report Holistic Quality Findings

**Append to validation report:**

```markdown
## Holistic Quality Assessment

### Document Flow & Coherence

**Assessment:** [Rating]

**Strengths:**
- [List]

**Areas for Improvement:**
- [List]

### Dual Audience Effectiveness

**For Humans:**
- Executives: [Assessment]
- Developers: [Assessment]
- Designers: [Assessment]
- Stakeholders: [Assessment]

**For LLMs:**
- Machine-readable: [Assessment]
- UX readiness: [Assessment]
- Architecture readiness: [Assessment]
- Epic/Story readiness: [Assessment]

**Dual Audience Score:** [X]/5

### BMAD PRD Principles Compliance

| Principle | Status |
|-----------|--------|
| [Principles table] |

**Principles Met:** [X]/7

### Overall Quality Rating

**Rating:** [X]/5 - [Label]

### Top 3 Improvements

1. **[Improvement 1]** - [Why and how]
2. **[Improvement 2]** - [Why and how]
3. **[Improvement 3]** - [Why and how]

### Summary

**This PRD is:** [One-sentence overall assessment]
```

### 8. Display Progress and Auto-Proceed

Display: "**Holistic Quality Assessment Complete**

Overall Rating: [X]/5 - [Label]

**Proceeding to final checks...**"

→ Load {nextStepFile}

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Document flow & coherence assessed
- Dual audience effectiveness evaluated
- BMAD principles compliance checked
- Overall quality rating assigned
- Top 3 improvements identified
- Comprehensive assessment reported
- Auto-proceeds to next step

### ❌ SYSTEM FAILURE:

- Missing document flow assessment
- Missing dual audience evaluation
- Not checking all BMAD principles
- Not assigning overall rating
- Missing top 3 improvements
- Not auto-proceeding

**Master Rule:** This evaluates the WHOLE document. Answers "Is this a good PRD?"
