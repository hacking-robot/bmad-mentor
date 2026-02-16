---
name: 'step-08-scoping'
description: 'Define MVP boundaries and prioritize features across phases'

nextStepFile: './step-09-functional.md'
outputFile: '{output_folder}/prd.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 8: Scoping Exercise

## STEP GOAL:

Define MVP boundaries and prioritize features across phases (MVP, Growth, Vision) to ensure we build the right things first.

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
- ✅ You bring prioritization frameworks and scope management
- ✅ User brings their business priorities and constraints

### Step-Specific Rules:

- 🎯 Focus ONLY on scope definition and prioritization
- 🚫 FORBIDDEN to write detailed requirements yet
- 💬 Approach: Ruthless prioritization, phase thinking
- 🚪 This step defines WHAT we build, not HOW

## EXECUTION PROTOCOLS:

- 🎯 Identify all potential features, then prioritize
- 💾 Append Product Scope section to PRD
- 📖 Challenge scope creep, push for realistic MVP
- 🚫 FORBIDDEN to let MVP become everything

## CONTEXT BOUNDARIES:

- Available context: All discovery from steps 1-7
- Focus: What's in, what's out, what's later
- Limits: Don't write detailed requirements
- Dependencies: Steps 1-7 completed - full discovery done

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Compile Potential Features

**Review everything discovered so far:**

"**Let's define what we're building.**

Based on everything we've discussed, here are the features/capabilities I've heard:

[List all features mentioned in discovery:
- From success criteria
- From user journeys
- From domain requirements
- From innovation analysis
- From project-type requirements]

**Are there any features I'm missing? Anything else you want to consider?**"

**Add any missing features to the list.**

### 2. Define MVP Criteria

**Ask:**

"**Before we prioritize, let's define what MVP means for this project.**

The MVP is the smallest version that still delivers value. Think about:

- **What's the core value proposition?** (What must work for this to be useful?)
- **What's the minimum user journey?** (What's the shortest path to value?)
- **What's your timeline constraint?** (When do you need something usable?)
- **What's your resource constraint?** (Team size, budget, etc.)

**What defines success for your MVP?**"

**Document MVP success criteria.**

### 3. Categorize by Phase

**For each feature:**

"**For [feature]:**

- Is this essential for MVP? (Product doesn't work without it)
- Is this important but could come after MVP? (Growth phase)
- Is this nice to have for the future? (Vision phase)

**Where does it belong?**"

**Create three buckets:**

| MVP (Phase 1) | Growth (Phase 2) | Vision (Phase 3) |
|---------------|------------------|------------------|
| [Features] | [Features] | [Features] |

### 4. Challenge the MVP

**Review the MVP bucket:**

"**Your MVP currently has [X] features.**

Let me challenge this:
- Are ALL of these truly essential?
- Could any be simplified for MVP and enhanced later?
- Is this achievable in your timeline with your resources?

**What can we cut or simplify?**"

**Push for ruthless prioritization.**

### 5. Define What's Out

**Ask:**

"**What are we explicitly NOT building?**

This is important - knowing what's out of scope prevents scope creep.

What have you considered but decided against? What did we discuss that won't be in any phase?"

**Document out-of-scope items.**

### 6. Confirm Scope

**Present the complete scope:**

"**Here's the scope we've defined:**

### MVP (Phase 1) - [Timeline if known]
[Features]

### Growth (Phase 2)
[Features]

### Vision (Phase 3)
[Features]

### Out of Scope
[What we're not building]

**Is this realistic? Are you confident in this scope?**"

### 7. Append to PRD

**Add Product Scope section to PRD:**

```markdown
## Product Scope

### MVP (Phase 1)

**Definition of Done:**
[MVP success criteria]

**Features:**
- [Feature 1]
- [Feature 2]
- ...

### Growth (Phase 2)

**Features:**
- [Feature 1]
- [Feature 2]
- ...

### Vision (Phase 3)

**Features:**
- [Feature 1]
- [Feature 2]
- ...

### Out of Scope

- [What's explicitly not being built]
```

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

- All potential features identified
- MVP criteria defined
- Features categorized into phases
- MVP challenged and refined
- Out-of-scope items documented
- User confident in scope
- PRD updated with scope section

### ❌ SYSTEM FAILURE:

- Letting MVP become too large
- Not challenging scope
- Missing out-of-scope documentation
- Proceeding without user confidence

**Master Rule:** MVP should be minimal. Everything else can wait.
