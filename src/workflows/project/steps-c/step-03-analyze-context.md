---
name: 'step-03-analyze-context'
description: 'Analyze project context and assess complexity for architecture decisions'

# File references
nextStepFile: './step-04-starter-or-existing.md'
contextOutputFile: '{planning_artifacts}/project-context.md'
architectureOutputFile: '{planning_artifacts}/architecture.md'

# Tasks
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 3: Analyze Project Context

## STEP GOAL:
To deeply analyze the project context and assess the project's scale and complexity to inform appropriate architectural decisions.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:
- ✅ You are a technical architect analyzing project scope
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring architectural expertise
- ✅ User brings project knowledge

### Step-Specific Rules:
- 🎯 Focus ONLY on analysis and complexity assessment
- 🚫 FORBIDDEN to make architectural decisions in this step
- 💬 Collaboratively assess scope and complexity
- 🚪 Prepare for appropriate decision-making

## EXECUTION PROTOCOLS:
- 🎯 Analyze all available context
- 💾 Document analysis in architecture file
- 📖 Update frontmatter when complete
- 🚫 Don't make decisions yet

## CONTEXT BOUNDARIES:
- project-context.md available
- Requirements from step 02 analyzed
- Focus: Assess scale and complexity
- Dependencies: Step 02 complete

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Project Context

Load `{contextOutputFile}` and review:
- Technology stack
- Framework decisions
- Existing patterns
- Critical rules

### 2. Scale Assessment

"**Let's assess the scale of your project.**

**How would you describe this project?**

| Scale | Description | Examples |
|-------|-------------|----------|
| **Small** | Single-purpose, limited scope | Landing page, CLI tool, simple API |
| **Medium** | Multiple features, moderate complexity | Web app with auth, mobile app |
| **Large** | Complex, many features, integrations | SaaS platform, e-commerce, enterprise app |
| **Enterprise** | High scale, multiple teams, microservices | Large distributed system |

**Where does your project fit?** [S/M/L/E]"

### 3. Complexity Assessment

"**Now let's assess complexity factors:**

**Team size:**
- Solo developer?
- Small team (2-5)?
- Multiple teams?

**Integration needs:**
- Standalone?
- External APIs?
- Third-party services?
- Multiple databases?

**Performance requirements:**
- Standard web performance?
- Real-time features?
- High throughput?
- Low latency critical?

**Security requirements:**
- Basic auth sufficient?
- Role-based access?
- Compliance requirements?
- Sensitive data handling?"

### 4. Identify Technical Challenges

"**Based on the context, I see these potential technical challenges:**

- [List challenges based on tech stack and requirements]

**Are there other challenges I should know about?**"

### 5. Document Analysis

**Append to `{architectureOutputFile}`:**

```markdown
## Project Analysis

### Scale & Complexity

**Project Scale:** [Small/Medium/Large/Enterprise]

**Complexity Factors:**
- Team size: [solo/small/multiple teams]
- Integration needs: [list]
- Performance requirements: [list]
- Security requirements: [list]

### Key Technical Challenges

[Document identified challenges]

### Constraints & Requirements

**Technical Constraints:**
- [From project-context.md]

**Business Requirements:**
- [From requirements analysis]

**Non-Functional Requirements:**
- [Performance, security, scalability]
```

### 6. Confirm Analysis

"**Project Analysis Summary:**

- Scale: [assessed scale]
- Key challenges: [summary]
- Critical decisions needed: [preview]

**Does this analysis accurately reflect your project?**"

### 7. Present MENU OPTIONS

Display: **Analysis complete. Ready for starter/existing architecture review?** [A] Advanced Elicitation [P] Party Mode [C] Continue

#### EXECUTION RULES:
- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution, return to this menu

#### Menu Handling Logic:
- IF A: Execute {advancedElicitationTask}, and when finished redisplay the menu
- IF P: Execute {partyModeWorkflow}, and when finished redisplay the menu
- IF C: Update frontmatter with `stepsCompleted: [1, 2, 3]`, then load, read entire file, then execute {nextStepFile}
- IF Any other comments or queries: help user respond then [Redisplay Menu Options](#7-present-menu-options)

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:
- Scale accurately assessed
- Complexity factors identified
- Technical challenges documented
- Analysis appended to architecture file
- User confirmed analysis

### ❌ SYSTEM FAILURE:
- Not assessing scale collaboratively
- Missing complexity factors
- Not documenting in architecture file
- Proceeding without confirmation

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
