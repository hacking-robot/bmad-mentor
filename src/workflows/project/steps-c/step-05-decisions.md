---
name: 'step-05-decisions'
description: 'Make core architectural decisions across data, auth, API, frontend, and infrastructure'

# File references
nextStepFile: './step-06-patterns.md'
architectureOutputFile: '{planning_artifacts}/architecture.md'

# Tasks
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 5: Core Architectural Decisions

## STEP GOAL:
To make and document core architectural decisions across all critical categories, ensuring AI agents have clear guidance for implementation.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:
- ✅ You are a technical architect facilitating decisions
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring architectural expertise and trade-off knowledge
- ✅ User brings their requirements and preferences

### Step-Specific Rules:
- 🎯 Focus ONLY on core decisions - one category at a time
- 🚫 FORBIDDEN to make recommendations - facilitate choices
- 💬 Present options and trade-offs, let user decide
- 🚪 Document decisions with rationale

## EXECUTION PROTOCOLS:
- 🎯 Process each decision category sequentially
- 💾 Append decisions to architecture file as approved
- 📖 Update frontmatter when complete
- 🚫 Don't skip any category

## CONTEXT BOUNDARIES:
- Foundation from step 04 documented
- Project analysis from step 03 available
- Focus: Make critical architectural decisions
- Dependencies: Steps 01-04 complete

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Review Foundation

"**Let's make the core architectural decisions.**

From our foundation:
- [Starter/Existing patterns documented]
- [Scale and complexity assessed]

Now I'll guide you through each decision category."

### 2. Data Architecture

"**First, let's decide on Data Architecture.**

**Questions to answer:**

#### Database Choice
- What database(s) will you use?
- Options: PostgreSQL, MySQL, MongoDB, SQLite, Redis, etc.
- Consider: Data relationships, scale, team familiarity

#### Data Modeling
- How will you model data?
- ORM vs raw SQL vs query builder?
- Schema management approach?

#### Data Validation
- Where does validation happen?
- Client-side, server-side, or both?
- Validation library preference?

#### Caching Strategy
- Do you need caching?
- Redis, in-memory, CDN?

**What are your preferences for data architecture?**"

**Menu after discussion:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Auth

### 3. Authentication & Security

"**Next, Authentication & Security.**

**Questions:**

#### Authentication Method
- How will users authenticate?
- Options: Email/password, OAuth, magic links, Web3?
- Auth provider vs self-hosted?

#### Authorization Patterns
- Role-based access control (RBAC)?
- Permission-based?
- How granular?

#### Security Middleware
- What security headers/middleware needed?
- CORS configuration?
- Rate limiting?

**What are your security requirements?**"

**Menu after discussion:** [A] Advanced Elicitation [P] Party Mode [C] Continue to API

### 4. API & Communication

"**API & Communication patterns.**

**Questions:**

#### API Style
- REST, GraphQL, tRPC, or gRPC?
- Consider: Team experience, data complexity, client needs

#### API Documentation
- How will APIs be documented?
- OpenAPI/Swagger, GraphQL schema, other?

#### Error Handling
- Standard error response format?
- HTTP status code conventions?
- Error logging approach?

**What API patterns work for your project?**"

**Menu after discussion:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Frontend

### 5. Frontend Architecture (If Applicable)

"**Frontend Architecture.**

**Questions:**

#### State Management
- How is state managed?
- Local state, Context, Redux, Zustand, other?

#### Component Architecture
- How are components organized?
- Atomic design, feature-based, other?

#### Performance
- Code splitting strategy?
- Lazy loading approach?
- Bundle optimization?

**What frontend patterns fit your needs?**"

**Menu after discussion:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Infrastructure

### 6. Infrastructure & Deployment

"**Infrastructure & Deployment.**

**Questions:**

#### Hosting
- Where will this be deployed?
- Vercel, AWS, GCP, Azure, self-hosted?

#### CI/CD
- What's your CI/CD approach?
- GitHub Actions, GitLab CI, other?

#### Environments
- How many environments?
- Dev, staging, production?

#### Monitoring
- How will you monitor the application?
- Logging, metrics, alerts?

**What infrastructure decisions work for you?**"

**Menu after discussion:** [A] Advanced Elicitation [P] Party Mode [C] Continue

### 7. Document All Decisions

**Append to `{architectureOutputFile}`:**

```markdown
---

## Core Architectural Decisions

### Data Architecture

**Database:**
- Choice: [decision]
- Rationale: [why]

**Data Modeling:**
- Approach: [decision]
- ORM/Tool: [if applicable]

**Data Validation:**
- Strategy: [decision]

**Caching:**
- Approach: [decision]

### Authentication & Security

**Authentication:**
- Method: [decision]
- Provider: [if applicable]

**Authorization:**
- Pattern: [decision]

**Security Middleware:**
- [decisions]

### API & Communication

**API Style:**
- Choice: [decision]

**API Documentation:**
- Approach: [decision]

**Error Handling:**
- Format: [decision]

### Frontend Architecture

**State Management:**
- Approach: [decision]

**Component Architecture:**
- Pattern: [decision]

**Performance:**
- Strategy: [decision]

### Infrastructure & Deployment

**Hosting:**
- Platform: [decision]

**CI/CD:**
- Approach: [decision]

**Environments:**
- [decision]

**Monitoring:**
- [decision]
```

### 8. Present MENU OPTIONS

Display: **Core decisions documented. Ready for implementation patterns?** [A] Advanced Elicitation [P] Party Mode [C] Continue

#### EXECUTION RULES:
- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution, return to this menu

#### Menu Handling Logic:
- IF A: Execute {advancedElicitationTask}, and when finished redisplay the menu
- IF P: Execute {partyModeWorkflow}, and when finished redisplay the menu
- IF C: Update frontmatter with `stepsCompleted: [1, 2, 3, 4, 5]`, then load, read entire file, then execute {nextStepFile}
- IF Any other comments or queries: help user respond then [Redisplay Menu Options](#8-present-menu-options)

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:
- All 5 decision categories covered
- User made choices (not AI recommendations)
- Decisions documented with rationale
- Each category approved before proceeding

### ❌ SYSTEM FAILURE:
- Skipping decision categories
- Making recommendations instead of facilitating
- Not documenting decisions
- Proceeding without user approval

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
