---
name: 'step-03-success'
description: 'Define comprehensive success criteria (user, business, technical)'

nextStepFile: './step-04-journeys.md'
outputFile: '{output_folder}/prd.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 3: Success Criteria Definition

## STEP GOAL:

Define comprehensive success criteria across three dimensions: user success, business success, and technical success.

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
- ✅ You bring criteria frameworks and measurement thinking
- ✅ User brings their business knowledge and success vision

### Step-Specific Rules:

- 🎯 Focus ONLY on defining measurable success criteria
- 🚫 FORBIDDEN to write requirements without success criteria
- 💬 Approach: Probe for specificity and measurability
- 🚪 Success criteria become the foundation for requirements

## EXECUTION PROTOCOLS:

- 🎯 Ask about each success dimension separately
- 💾 Append success criteria to PRD
- 📖 Challenge vague criteria - push for measurability
- 🚫 FORBIDDEN to accept non-measurable criteria

## CONTEXT BOUNDARIES:

- Available context: PRD with classification, input documents
- Focus: What does success look like?
- Limits: Don't write requirements yet
- Dependencies: Step 2 completed - project understood

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Introduce Success Criteria

"**Now let's define what success looks like.**

Success criteria are critical - they'll guide everything we build and help us know when we're done. We'll define success from three perspectives:

1. **User Success** - How will users succeed with this product?
2. **Business Success** - What business outcomes matter?
3. **Technical Success** - What technical quality targets do we need?

Let's start with users."

### 2. Define User Success Criteria

**Ask:**

"**How will you know users are succeeding with this product?**

Think about:
- What will users be able to DO that they couldn't before?
- How will you know they're happy/satisfied?
- What behaviors indicate success?

For each criterion you mention, I'll help make it measurable."

**For each criterion, probe for measurability:**

| User says | You ask |
|-----------|---------|
| "Users should be happy" | "How would we measure happiness? NPS? Retention? Something else?" |
| "Users should complete tasks faster" | "What's an acceptable time? How much faster than today?" |
| "Users should find it easy" | "How would we measure 'easy'? Task completion rate? Time to learn?" |

**Capture measurable criteria.**

### 3. Define Business Success Criteria

**Ask:**

"**What business outcomes define success?**

Think about:
- Revenue, growth, or market goals?
- Cost savings or efficiency gains?
- Competitive positioning?
- Strategic objectives?

Be specific about targets and timelines."

**For each criterion, probe for specificity:**

| User says | You ask |
|-----------|---------|
| "We want to grow" | "What growth metric? By how much? In what timeframe?" |
| "We want to save money" | "How much? Where do the savings come from?" |
| "We want market share" | "What %? In which segment? By when?" |

### 4. Define Technical Success Criteria

**Ask:**

"**What technical quality targets matter for this product?**

Think about:
- Performance (response time, throughput)?
- Reliability (uptime, error rates)?
- Security (compliance, vulnerability targets)?
- Scalability (users, data volume)?
- Maintainability (deployment frequency, bug rates)?

What's 'good enough' for each?"

**For each criterion, probe for targets:**

| User says | You ask |
|-----------|---------|
| "It should be fast" | "What response time target? P95? P99?" |
| "It should be reliable" | "What uptime SLA? What error rate is acceptable?" |
| "It should be secure" | "Any compliance requirements? Security standards to meet?" |

### 5. Compile and Confirm

**Present all criteria:**

"**Here are the success criteria we've defined:**

### User Success Criteria
- [List with metrics]

### Business Success Criteria
- [List with metrics]

### Technical Success Criteria
- [List with metrics]

**Are these complete and accurate? Any additions or changes?**"

### 6. Append to PRD

**Add Success Criteria section to PRD:**

```markdown
## Success Criteria

### User Success Criteria
[Criteria with metrics]

### Business Success Criteria
[Criteria with metrics]

### Technical Success Criteria
[Criteria with metrics]
```

### 7. Present MENU OPTIONS

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

- User success criteria defined with metrics
- Business success criteria defined with metrics
- Technical success criteria defined with metrics
- All criteria are measurable
- PRD updated with success criteria section
- User confirms accuracy

### ❌ SYSTEM FAILURE:

- Accepting vague, non-measurable criteria
- Skipping any success dimension
- Not pushing for specificity
- Proceeding without user confirmation

**Master Rule:** If you can't measure it, you can't achieve it. Push for measurability.
