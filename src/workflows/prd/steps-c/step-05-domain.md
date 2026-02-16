---
name: 'step-05-domain'
description: 'Explore domain-specific requirements for complex domains (optional)'

nextStepFile: './step-06-innovation.md'
altNextStepFile: './step-07-project-type.md'
outputFile: '{output_folder}/prd.md'
domainComplexityFile: '../data/domain-complexity.csv'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 5: Domain-Specific Requirements

## STEP GOAL:

Explore domain-specific requirements for complex domains (healthcare, fintech, govtech, etc.) to ensure regulatory, compliance, and domain-specific needs are addressed.

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
- ✅ You bring domain knowledge from data files
- ✅ User brings their specific domain expertise

### Step-Specific Rules:

- 🎯 Focus ONLY on domain-specific requirements
- 🚫 FORBIDDEN to skip if domain is high-complexity
- 💬 Approach: Research-informed questioning
- 🚪 This step is REQUIRED for high-complexity domains, OPTIONAL otherwise

## EXECUTION PROTOCOLS:

- 🎯 Check domain complexity from frontmatter
- 💾 Append domain requirements to PRD (if applicable)
- 📖 Use web search for current regulatory information
- 🚫 FORBIDDEN to proceed without addressing domain concerns

## CONTEXT BOUNDARIES:

- Available context: PRD with classification, domain complexity
- Focus: Domain-specific considerations
- Limits: Don't write general requirements here
- Dependencies: Step 2 (domain classification) completed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Check Domain Complexity

**Read PRD frontmatter classification:**

- If `complexity: high` → REQUIRED: Proceed with domain exploration
- If `complexity: medium` → OPTIONAL: Ask user if they want domain exploration
- If `complexity: low` or `domain: general` → SKIP: Proceed to next step

**IF SKIP:**
Display: "Your domain is classified as [domain] with [complexity] complexity. No specialized domain exploration needed.

**Proceeding to next step...**"
→ Load {altNextStepFile} (step-07-project-type.md)

**IF OPTIONAL:**
Ask: "Your domain is [domain] with medium complexity. Would you like to explore domain-specific considerations?
- **[Y]** Yes, let's explore
- **[N]** No, skip to next step"

**IF REQUIRED or user selected Y:**
Continue to step 2.

### 2. Load Domain Information

**Load {domainComplexityFile}** and find the row for this domain.

Extract:
- `key_concerns` - Major domain concerns
- `required_knowledge` - What expertise is needed
- `web_searches` - Suggested research topics
- `special_sections` - Required PRD sections

### 3. Explore Key Concerns

**Present domain concerns:**

"For [domain], there are some important considerations:

**Key Concerns:**
[List key_concerns from CSV]

Let's explore each of these."

**For each concern:**

"**[Concern]:**
- What's your current understanding of this requirement?
- Are there specific regulations or standards that apply?
- Do you have compliance expertise on the team, or will you need guidance?

Tell me what you know, and I'll help identify gaps."

**Use web search** if needed to find current regulatory requirements.

### 4. Document Domain Requirements

**Compile domain-specific requirements:**

"**Based on our discussion, here are the domain-specific requirements:**

[Summarize requirements discovered]

**These should be added to the PRD. Does this capture everything?**"

### 5. Append to PRD

**Add Domain-Specific Requirements section to PRD:**

```markdown
## Domain-Specific Requirements

### [Domain Name] Compliance

**Key Concerns:**
[Concerns]

**Regulatory Requirements:**
[Requirements discovered]

**Compliance Approach:**
[How to address]

### Required Knowledge

[Expertise needed for this domain]
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

- Domain complexity checked correctly
- High-complexity domains fully explored
- Domain concerns addressed with user
- Regulatory requirements identified
- Domain requirements documented in PRD
- Web search used for current info (if needed)

### ❌ SYSTEM FAILURE:

- Skipping high-complexity domain exploration
- Not using domain data file
- Missing regulatory requirements
- Proceeding without user confirmation

**Master Rule:** Complex domains have non-negotiable requirements. Don't skip them.
