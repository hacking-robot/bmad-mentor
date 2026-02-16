---
name: 'step-06-innovation'
description: 'Detect and explore innovative aspects of the product (optional)'

nextStepFile: './step-07-project-type.md'
altNextStepFile: './step-07-project-type.md'
outputFile: '{output_folder}/prd.md'
projectTypesFile: '../data/project-types.csv'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
brainstormingTask: '{project-root}/_bmad/core/tasks/brainstorming.xml'
---

# Step 6: Innovation Discovery

## STEP GOAL:

Detect and explore innovative aspects of the product to ensure novel features and approaches are properly captured and considered.

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
- ✅ You bring creativity and innovation frameworks
- ✅ User brings their vision for what's new/different

### Step-Specific Rules:

- 🎯 Focus ONLY on innovative aspects
- 🚫 FORBIDDEN to force innovation where none exists
- 💬 Approach: Curious, exploratory, encouraging
- 🚪 This step is OPTIONAL - skip if no innovation detected

## EXECUTION PROTOCOLS:

- 🎯 Detect innovation signals from project type and user input
- 💾 Append innovation analysis to PRD (if applicable)
- 📖 Use brainstorming/party mode for creative exploration
- 🚫 FORBIDDEN to invent innovation that isn't there

## CONTEXT BOUNDARIES:

- Available context: PRD with classification, success criteria, journeys
- Focus: What's new, different, or innovative?
- Limits: Don't force innovation
- Dependencies: Steps 1-5 completed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Detect Innovation Signals

**Load {projectTypesFile}** and check `innovation_signals` column for the project type.

**Also review what you've learned so far:**
- Does the user mention new technology?
- Novel approaches to existing problems?
- Unique combinations of capabilities?
- AI/ML features?
- New business models?

**Ask:**

"**Let's talk about innovation.**

What makes this product different from what's already out there?

- Is there new technology you're applying?
- A novel approach to an existing problem?
- Something that hasn't been done before?
- AI or machine learning capabilities?
- A unique combination of features?"

### 2. Assess Innovation Level

**Based on response:**

- **Strong innovation signals:** User describes novel technology, unique approach, never-done-before features
- **Moderate innovation:** Some new aspects but mostly established patterns
- **Minimal innovation:** Standard product, no significant novelty

**IF Minimal innovation:**
Display: "This appears to be a straightforward [project type] without significant novel aspects. That's perfectly fine - not every product needs to be revolutionary.

**Proceeding to next step...**"
→ Load {altNextStepFile} (step-07-project-type.md)

**IF Strong or Moderate innovation:**
Continue to step 3.

### 3. Explore Innovation Areas

**For each innovation identified:**

"**Tell me more about [innovation]:**

- What's the core innovation here?
- What problem does it solve that others can't?
- What makes it possible now? (technology, market timing, etc.)
- What are the risks or unknowns?
- What would it take to pull this off?"

**Use brainstorming or party mode** if the user wants to explore creatively:
- "Would you like to brainstorm this further with different perspectives?"

### 4. Document Innovation

**Compile innovation analysis:**

"**Here's what I understand about the innovation:**

**Innovation:** [Description]
**Problem Solved:** [What it enables]
**Enablers:** [Why possible now]
**Risks:** [Unknowns/challenges]
**Requirements:** [What it needs to succeed]

**Is this accurate? Anything to add?**"

### 5. Append to PRD

**Add Innovation Analysis section to PRD:**

```markdown
## Innovation Analysis

### [Innovation Name]

**Description:**
[What it is]

**Problem Solved:**
[What it enables]

**Enabling Factors:**
[Why possible now]

**Risks and Unknowns:**
[Challenges]

**Critical Requirements:**
[What it needs to succeed]
```

### 6. Present MENU OPTIONS

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

- Innovation signals properly detected
- Genuine innovation explored thoroughly
- Innovation documented in PRD (if present)
- Non-innovative products correctly skipped
- User confirms accuracy

### ❌ SYSTEM FAILURE:

- Forcing innovation where none exists
- Missing genuine innovation signals
- Not exploring innovation deeply enough
- Skipping when user wants to explore

**Master Rule:** Innovation is optional. Some products are just good execution of known patterns.
