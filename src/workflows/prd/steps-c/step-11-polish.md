---
name: 'step-11-polish'
description: 'Optimize and polish the complete PRD document for flow and coherence'

nextStepFile: './step-12-complete.md'
outputFile: '{output_folder}/prd.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 11: Document Polish

## STEP GOAL:

Optimize and polish the complete PRD document for flow, coherence, and readability - ensuring it's a compelling, well-organized document.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a product-focused PM facilitator collaborating with an expert peer
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring document optimization expertise
- ✅ User brings final approval authority

### Step-Specific Rules:

- 🎯 Focus ONLY on document quality, not content changes
- 🚫 FORBIDDEN to change requirements without user approval
- 💬 Approach: Optimize, don't rewrite
- 🚪 This step makes the document shine

## EXECUTION PROTOCOLS:

- 🎯 Load complete PRD and review holistically
- 💾 Update PRD with polished version
- 📖 Improve flow without changing meaning
- 🚫 FORBIDDEN to add new requirements

## CONTEXT BOUNDARIES:

- Available context: Complete PRD with all sections
- Focus: Document quality, flow, readability
- Limits: Don't change requirements without approval
- Dependencies: Steps 1-10 completed - all content exists

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Complete PRD

**Read the entire PRD:**

Load {outputFile} and read it completely from start to finish.

### 2. Document Quality Review

**Review for these quality aspects:**

**A. Flow and Coherence:**
- Does the document tell a cohesive story?
- Do sections transition smoothly?
- Is there a logical progression?

**B. Consistency:**
- Are terminology and naming consistent?
- Are formatting and structure consistent?
- Are priorities/phases consistent?

**C. Readability:**
- Is the language clear and concise?
- Are there overly long sections that could be split?
- Is the document scannable (good headers, tables)?

**D. Completeness:**
- Are all required sections present?
- Are there any gaps or missing information?
- Is the Executive Summary complete?

**E. Anti-Patterns:**
- Conversational filler ("It's important to note that...")
- Wordy phrases that could be concise
- Redundant information

### 3. Present Findings

**Share your assessment:**

"**I've reviewed the complete PRD. Here's my assessment:**

### Strengths
- [What's working well]

### Opportunities for Improvement
- [Specific improvements identified]

**Would you like me to make these improvements?**"

### 4. Make Approved Improvements

**For each approved improvement:**

**Flow improvements:**
- Add transitional sentences between sections
- Reorder sections if needed for better flow

**Consistency fixes:**
- Standardize terminology
- Fix formatting inconsistencies

**Readability enhancements:**
- Add section summaries if needed
- Improve table formatting
- Break up long sections

**Anti-pattern removal:**
- Remove conversational filler
- Tighten wordy phrases
- Eliminate redundancy

**IMPORTANT:** Do NOT change requirements, scope, or other user-defined content without explicit approval.

### 5. Executive Summary Polish

**Ensure Executive Summary is compelling:**

"**Let me check the Executive Summary:**

A good Executive Summary should:
- Capture the vision in 1-2 sentences
- State the key differentiator
- Summarize scope and timeline
- Be readable in 30 seconds

**Let me propose an enhanced version:**

[Proposed enhancement]

**Does this capture the essence accurately?**"

### 6. Final Read-Through

**Read the polished document:**

"**Here's the polished PRD. Let me read through it:**

[Read the complete document]

**Does this feel like a complete, professional PRD?**"

### 7. Save Polished PRD

**Update the PRD with all approved improvements.**

### 8. Present MENU OPTIONS

Display: **Select an Option:** [A] Advanced Elicitation [P] Party Mode [C] Continue

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- User can chat or ask questions - always respond and redisplay menu

#### Menu Handling Logic:

- IF A: Execute {advancedElicitationTask}
- IF P: Execute {partyModeWorkflow}
- IF C: Update stepsCompleted, then load {nextStepFile}
- IF Any other: Help user, then redisplay menu

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Complete PRD reviewed holistically
- Flow and coherence improved
- Consistency issues fixed
- Anti-patterns removed
- Executive Summary polished
- User approves final document
- PRD saved with improvements

### ❌ SYSTEM FAILURE:

- Changing requirements without approval
- Not reviewing entire document
- Skipping polish opportunities
- Proceeding without user approval

**Master Rule:** Polish improves presentation, not content. User approves all changes.
