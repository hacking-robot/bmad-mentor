---
name: 'step-04-journeys'
description: 'Map ALL user types with narrative story-based journeys'

nextStepFile: './step-05-domain.md'
outputFile: '{output_folder}/prd.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 4: User Journey Mapping

## STEP GOAL:

Map ALL user types with narrative story-based journeys to understand how different users will experience the product.

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
- ✅ You bring journey mapping and user-centered thinking
- ✅ User brings knowledge of their users

### Step-Specific Rules:

- 🎯 Focus ONLY on understanding and documenting user journeys
- 🚫 FORBIDDEN to write requirements yet
- 💬 Approach: Story-based, narrative, empathetic
- 🚪 Journeys become the source for functional requirements

## EXECUTION PROTOCOLS:

- 🎯 Identify ALL user types, not just primary
- 💾 Append user journeys to PRD
- 📖 Use narrative story format, not feature lists
- 🚫 FORBIDDEN to skip secondary/tertiary users

## CONTEXT BOUNDARIES:

- Available context: PRD with classification and success criteria
- Focus: Who uses this and how?
- Limits: Don't write requirements yet
- Dependencies: Step 3 completed - success defined

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Identify All User Types

**Ask:**

"**Let's understand everyone who will use this product.**

Start with: **Who are ALL the different types of people who will interact with this product?**

Think beyond just the primary user:
- End users (different roles/personas)?
- Administrators?
- Support staff?
- Partners/integrators?
- Internal teams?

List everyone you can think of."

**Document all user types identified.**

### 2. Prioritize User Types

**Ask:**

"Of these user types, which are:

- **Primary:** The main users we're building for
- **Secondary:** Important but not the main focus
- **Tertiary:** Occasional or edge case users

This helps us prioritize, but we'll still consider everyone."

### 3. Map Primary User Journey

**For the primary user type:**

"**Let's walk through [primary user]'s journey.**

Tell me a story about this user:
- Who are they? What's their context?
- What triggers them to use this product?
- What do they do first? Then what?
- What are they trying to achieve at each step?
- What would delight them?
- What would frustrate them?

Paint the picture - make it feel real."

**Listen and capture the narrative. Ask follow-up questions:**
- "What happens if [edge case]?"
- "How do they feel at this point?"
- "What would make this step amazing?"

**Document as a story-based journey.**

### 4. Map Secondary User Journeys

**For each secondary user type:**

"**Now let's consider [secondary user].**

What's their story? How is their journey different from [primary user]?"

**Capture each journey with its unique aspects.**

### 5. Note Tertiary Users

**For tertiary users:**

"**For [tertiary user types], what do they need?**

We may not need detailed journeys, but let's capture their key needs."

**Brief summary of their interaction.**

### 6. Identify Journey Insights

**Synthesize what you've learned:**

"**Based on these journeys, I'm seeing some key insights:**

[Share 3-5 insights you observed]

- [Insight about pain points]
- [Insight about opportunities]
- [Insight about critical moments]

**Does this resonate? Anything I'm missing?**"

### 7. Append to PRD

**Add User Journeys section to PRD:**

```markdown
## User Journeys

### [Primary User Type]

[Story-based journey narrative]

### [Secondary User Type 1]

[Story-based journey narrative]

### [Secondary User Type 2]

[Story-based journey narrative]

### Other Users

[Brief summary of tertiary user needs]
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

- All user types identified
- Primary user journey documented as narrative
- Secondary user journeys documented
- Tertiary users noted
- Journey insights captured
- PRD updated with user journeys section
- User confirms accuracy

### ❌ SYSTEM FAILURE:

- Only documenting primary user
- Using feature lists instead of narratives
- Not capturing emotional/empathetic aspects
- Proceeding without user confirmation

**Master Rule:** Users are people, not personas. Tell their stories.
