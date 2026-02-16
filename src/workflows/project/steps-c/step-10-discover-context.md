---
name: 'step-10-discover-context'
description: 'Discover tech stack and existing patterns using the selected input mode'

# File references
nextStepFile: './step-11-generate-context.md'
outputFile: '{planning_artifacts}/project-context.md'

# Tasks
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 10: Discover Project Context

## STEP GOAL:
To discover the project's tech stack, patterns, and critical implementation rules using the input mode selected in step 01.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:
- ✅ You are a technical architect discovering project patterns
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring pattern recognition and tech expertise
- ✅ User brings their project knowledge and context

### Step-Specific Rules:
- 🎯 Focus ONLY on discovery - gather info, don't generate rules yet
- 🚫 FORBIDDEN to write rules in this step - that's step 03
- 💬 Adapt discovery approach based on inputMode (scan/provide/conversation)
- ⚙️ TOOL/SUBPROCESS FALLBACK: If scan subprocess unavailable, manually read files in main thread

## EXECUTION PROTOCOLS:
- 🎯 Use the inputMode from step 01 to guide discovery
- 💾 Store discovered information for step 03
- 📖 Update frontmatter when complete
- 🚫 Don't generate content - just discover

## CONTEXT BOUNDARIES:
- Architecture from Phase 1 available
- Project type (greenfield/brownfield) known
- Focus: Gather tech stack from architecture and existing patterns
- Dependencies: Phase 1 complete (Steps 01-09)

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Architecture from Phase 1

Load `{planning_artifacts}/architecture.md` to get:
- Technology decisions
- Implementation patterns
- Project structure

### 2. Branch by Input Mode

Execute the appropriate discovery sequence based on `inputMode`:

---

## IF inputMode == 'scan' (Brownfield Project Scan):

### 2a. Scan Project Files

"**I'll scan your project to discover the tech stack and patterns.**"

**Launch subprocess to scan project structure:**

Use Pattern 1 (Grep) to search for patterns across the project:

```
Scan {project-root} for:
- Package files: package.json, requirements.txt, Cargo.toml, go.mod, pom.xml, etc.
- Config files: tsconfig.json, .eslintrc, .prettierrc, jest.config, webpack.config, etc.
- Framework markers: next.config.js, nuxt.config, angular.json, etc.
- Database schemas: schema.prisma, migrations/, models/
- Test patterns: *.test.*, *.spec.*, __tests__/
- Documentation: README.md, docs/
```

**⚙️ TOOL/SUBPROCESS FALLBACK:** If subprocess unavailable, manually read key config files in main thread.

### 2b. Analyze Discovered Files

**Present findings to user:**

"**I discovered the following in your project:**

**Package Management:**
- [detected package file type and dependencies]

**Languages & Frameworks:**
- [detected languages, frameworks, versions]

**Build & Config:**
- [detected build tools, linters, formatters]

**Testing:**
- [detected test framework, patterns]

**Project Structure:**
- [key directories and their purposes]

**Does this accurately represent your project?**"

**Get user confirmation and corrections.**

### 2c. Extract Existing Patterns

"**Now let me look for existing patterns in your codebase...**"

Scan for:
- **Naming conventions**: How are files, components, functions named?
- **Code organization**: How is code structured?
- **Error handling patterns**: How are errors handled?
- **State patterns**: How is state managed?
- **API patterns**: How are APIs structured?

**Present patterns found and ask user:**
- "Are these patterns intentional and should be preserved?"
- "Are there anti-patterns we should flag?"

---

## IF inputMode == 'provide' (User Provides Files):

### 2a. Load Provided Documents

"**Loading your provided documents...**"

Load the documents user provided in step 01:
- Existing project-context.md (if provided)
- Existing architecture.md (if provided)
- Other relevant docs

### 2b. Extract Information

From provided documents, extract:
- Technology stack
- Existing rules and patterns
- Naming conventions
- Code organization
- Any gaps or outdated information

### 2c. Validate with User

"**From your documents, I extracted:**

[Summary of tech stack, patterns, rules]

**Questions:**
- Is this information current?
- What's changed since these were written?
- What's missing that should be added?"

---

## IF inputMode == 'conversation' (Discovery Through Conversation):

### 2a. Begin Tech Stack Discovery

"**Let's discover your tech stack through conversation.**

I'll ask about different areas - feel free to give brief answers and we'll elaborate as needed."

### 2b. Language & Runtime

"**What language(s) and runtime(s) are you using?**

Common options:
- TypeScript/JavaScript with Node.js
- Python
- Go
- Rust
- Java/Kotlin
- C#/.NET
- Other?"

### 2c. Framework

"**What framework(s) are you using (if any)?**

- Frontend: React, Vue, Angular, Svelte, Next.js, Nuxt, etc.?
- Backend: Express, NestJS, Fastify, Django, FastAPI, etc.?
- Mobile: React Native, Flutter, etc.?
- Desktop: Electron, Tauri, etc.?
- None/Custom?"

### 2d. Database

"**What database(s) and data storage are you using?**

- Relational: PostgreSQL, MySQL, SQLite, etc.?
- NoSQL: MongoDB, Redis, etc.?
- ORM: Prisma, TypeORM, Sequelize, etc.?
- Other storage solutions?"

### 2e. Testing

"**What's your testing setup?**

- Test framework: Jest, Vitest, Pytest, etc.?
- Testing patterns: Unit, integration, e2e?
- Coverage requirements?"

### 2f. Build & Quality Tools

"**What build and quality tools do you use?**

- Build: Webpack, Vite, esbuild, etc.?
- Linting: ESLint, Pylint, etc.?
- Formatting: Prettier, Black, etc.?
- CI/CD: GitHub Actions, GitLab CI, etc.?"

### 2g. Any Other Preferences

"**Anything else I should know about your tech stack?**

- Cloud provider preferences?
- Third-party integrations?
- Performance requirements?
- Security requirements?"

---

### 3. Consolidate Discovery Results

**Regardless of input mode, consolidate findings:**

"**Discovery Summary:**

**Technology Stack:**
- Languages: [list]
- Frameworks: [list]
- Databases: [list]
- Tools: [list]

**Existing Patterns:**
- Naming: [patterns found]
- Organization: [patterns found]
- Error handling: [patterns found]

**Key Decisions Made:**
- [any decisions discovered]

**Is this complete? Should we add anything before generating the context rules?**"

### 4. Update Output File

**Append discovery summary to `{outputFile}`:**

```markdown
## Technology Stack (Discovered)

### Languages & Runtimes
[discovered languages]

### Frameworks & Libraries
[discovered frameworks]

### Databases & Storage
[discovered databases]

### Tools & Utilities
[discovered tools]

---

## Existing Patterns (Discovered)

### Naming Conventions
[discovered naming patterns]

### Code Organization
[discovered organization patterns]

### Error Handling
[discovered error patterns]
```

### 5. Present MENU OPTIONS

Display: **Discovery complete. Ready to generate context rules?** [A] Advanced Elicitation [P] Party Mode [C] Continue

#### EXECUTION RULES:
- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution, return to this menu

#### Menu Handling Logic:
- IF A: Execute {advancedElicitationTask}, and when finished redisplay the menu
- IF P: Execute {partyModeWorkflow}, and when finished redisplay the menu
- IF C: Update frontmatter with `stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`, then load, read entire file, then execute {nextStepFile}
- IF Any other comments or queries: help user respond then [Redisplay Menu Options](#5-present-menu-options)

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:
- Input mode correctly determined and followed
- Tech stack completely discovered
- Existing patterns identified
- Gaps and questions addressed
- Discovery results consolidated and confirmed
- Information appended to output file

### ❌ SYSTEM FAILURE:
- Not adapting to input mode
- Incomplete discovery
- Not getting user confirmation
- Starting to generate rules (that's step 03)
- Not documenting discoveries

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
