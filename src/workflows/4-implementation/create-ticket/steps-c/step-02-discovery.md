---
name: 'step-02-discovery'
description: 'Discover context from git diff, commits, previous tickets, documents, and codebase'

nextStepFile: './step-03-create.md'
outputFile: '{implementation_artifacts}/ticket_{ticket_number}.md'
templateFile: '../template.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 2: Context Discovery

## STEP GOAL:

To comprehensively analyze git changes, commit history, previous tickets, project documents, and the codebase to gather all context needed for creating a meaningful ticket file.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input (in collaborative mode)
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a Ticket Context Specialist gathering comprehensive implementation context
- ✅ You bring git analysis, codebase scanning, and document discovery expertise
- ✅ User brings their knowledge of what the changes mean
- ✅ Together we ensure nothing important is missed

### Step-Specific Rules:

- 🎯 Gather context from MULTIPLE sources in parallel when possible
- 🚫 FORBIDDEN to skip any discovery phase
- 💬 In collaborative mode: Check in after each phase
- 🔇 In autonomous mode: Gather all context, summarize at end
- 🎯 Use subprocesses for parallel analysis when available
- ⚙️ TOOL/SUBPROCESS FALLBACK: If subprocess unavailable, perform sequentially in main thread

### Subprocess Optimization Rules:

- 🔍 Pattern 1: Use subprocess for grep/regex across many files
- 📊 Pattern 2: Use subprocess per file for deep analysis
- ⚡ Pattern 4: Launch discovery tasks in PARALLEL when possible
- 💬 Subprocesses must return structured findings, not raw content

## EXECUTION PROTOCOLS:

- 🎯 Follow the MANDATORY SEQUENCE exactly
- 💾 Store all gathered context for use in step-03
- 📖 Track what sources were analyzed
- 🚫 Do NOT create ticket content yet - only gather context

## CONTEXT BOUNDARIES:

- Available: ticket_number and mode from step-01
- Focus: Git changes, related history, relevant documents, codebase patterns
- Dependencies: Requires git repository

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

---

### 1. Check Prerequisites

**Verify git repository exists:**

Run `git rev-parse --is-inside-work-tree`

**If NOT a git repository:**
"🚫 **Error:** No git repository found. This workflow requires a git repository to analyze changes.

Please run this workflow from within a git repository."

**HALT - Cannot proceed without git.**

---

### 2. Git Diff Analysis

**PRIMARY INPUT - Analyze current changes:**

#### 2.1 Check for Staged Changes

Run `git diff --cached --stat` to see staged changes.

#### 2.2 Check for Unstaged Changes

Run `git diff --stat` to see unstaged changes.

#### 2.3 Analyze the Diff Content

**If changes exist (staged OR unstaged):**
- Run `git diff HEAD` to get complete diff
- Analyze WHAT changed:
  - Files modified/added/deleted
  - Types of changes (new feature, bug fix, refactor, etc.)
  - Key functions/components affected
- Extract meaningful summary of the changes

**If NO changes:**
"ℹ️ **Note:** No uncommitted changes found. Will rely on commit history analysis."

#### 2.4 Collaborative Check (If Mode = collaborative)

"**📊 Git Diff Analysis Complete**

I found changes in these files:
- [List files with brief description of changes]

**Do these changes look correct? Any additional context you'd like to add?**"

**Wait for user response before continuing.**

---

### 3. Commit History Analysis

**Analyze recent commits with relevance detection:**

#### 3.1 Get Recent Commits

Run `git log --oneline -20` to get recent commits.

#### 3.2 Analyze Commits for Relevance

**Launch subprocess (Pattern 4 - Parallel):**
"Analyze recent commits to identify which are relevant to the current ticket context. Return:
- Commit hash and message
- Files modified
- Brief summary of what the commit did
- Relevance score (high/medium/low)"

**Relevance Detection Rules:**
- HIGH: Commits touching same files as current diff
- MEDIUM: Commits in same feature area or module
- LOW: Commits in unrelated areas

**Stop analyzing when:**
- 5 consecutive commits have LOW relevance, OR
- Commits are older than 2 weeks

#### 3.3 Summarize Relevant Commits

Create a summary of relevant commits that provide context for the current changes.

#### 3.4 Collaborative Check (If Mode = collaborative)

"**📚 Commit History Analysis**

Recent relevant commits:
- [List relevant commits with summaries]

**Any commits I should know more about?**"

**Wait for user response before continuing.**

---

### 4. Previous Ticket Analysis

**Look for and analyze previous ticket files:**

#### 4.1 Find Previous Tickets

Search `{implementation_artifacts}/` for `ticket_*.md` files.

#### 4.2 Analyze Previous Tickets for Relevance

**If tickets found:**
- List all previous ticket files
- For each ticket, determine relevance to current ticket:
  - Check if same files/areas are mentioned
  - Check if related to same feature/module
  - Check if provides useful patterns/learnings

#### 4.3 Extract Relevant Learnings

From relevant previous tickets, extract:
- Dev notes and patterns used
- Files that were modified
- Testing approaches
- Problems encountered and solutions

#### 4.4 Collaborative Check (If Mode = collaborative)

"**🎫 Previous Tickets Found**

Related tickets:
- [List relevant previous tickets with brief summaries]

**Should I incorporate learnings from any of these?**"

**Wait for user response before continuing.**

---

### 5. Document Discovery

**Find and analyze project documents:**

#### 5.1 Discover PRD

Search for PRD files:
- `{planning_artifacts}/*prd*.md`
- `{project-root}/docs/*prd*.md`
- `{project-root}/*prd*.md`

**If found, load and extract:**
- Relevant requirements for current feature
- Business context
- User stories related to changes

#### 5.2 Discover Architecture

Search for architecture files:
- `{planning_artifacts}/*architecture*.md`
- `{project-root}/docs/*architecture*.md`

**If found, load and extract:**
- Technical stack (languages, frameworks, libraries)
- Code organization patterns
- API patterns
- Database schemas (if relevant)
- Testing standards

#### 5.3 Discover Project Context

Search for project-context files:
- `**/project-context.md`
- `{project-root}/docs/project*.md`

**If found, load and extract:**
- Project overview
- Key conventions
- Important constraints

#### 5.4 Collaborative Check (If Mode = collaborative)

"**📄 Documents Discovered**

Found and analyzed:
- [PRD: found/not found - relevant sections]
- [Architecture: found/not found - relevant patterns]
- [Project Context: found/not found - relevant info]

**Any specific documents or sections I should focus on?**"

**Wait for user response before continuing.**

---

### 6. Codebase Scanning

**Intelligently scan codebase for relevant patterns:**

#### 6.1 Identify Relevant Areas

Based on git diff and documents, identify:
- Key directories to scan
- File patterns to look for
- Components/modules involved

#### 6.2 Scan for Patterns

**Launch subprocess (Pattern 1 - Grep):**
"Search the codebase for patterns relevant to this ticket:
- Existing implementations of similar features
- Utility functions that could be reused
- Test patterns for similar functionality
- Configuration files that may need updates"

#### 6.3 Analyze Key Files

**Launch subprocess (Pattern 2 - Per File Analysis):**
"For each key file identified in the diff:
- Analyze its structure and purpose
- Identify dependencies
- Note any patterns or conventions used
- Check for related tests"

#### 6.4 Summarize Codebase Findings

Create a summary of:
- Existing patterns to follow
- Code reuse opportunities
- Files that will need modification
- Related components to consider

#### 6.5 Collaborative Check (If Mode = collaborative)

"**🔍 Codebase Analysis**

Key findings:
- [Patterns identified]
- [Files to modify]
- [Reuse opportunities]
- [Related components]

**Does this align with your understanding of the codebase?**"

**Wait for user response before continuing.**

---

### 7. Context Summary

**Compile all gathered context:**

#### 7.1 If Mode = Collaborative

"**📋 Context Discovery Complete!**

Here's everything I've gathered:

**Git Changes:**
[Summary of staged/unstaged changes]

**Relevant Commits:**
[Recent commits that provide context]

**Previous Tickets:**
[Related tickets and learnings]

**Documents:**
[PRD, Architecture, Project Context highlights]

**Codebase:**
[Patterns, files, reuse opportunities]

**Ready to create the ticket file with this context?**"

#### 7.2 If Mode = Autonomous

"**📋 Context Discovery Complete**

I've analyzed:
- ✅ Git diff (staged and unstaged changes)
- ✅ Recent commits (relevance-filtered)
- ✅ Previous ticket files
- ✅ Project documents (PRD, architecture, context)
- ✅ Codebase patterns and related files

Ready to create the ticket file."

---

### 8. Present MENU OPTIONS

Display: **Select an Option:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Create Ticket

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

#### Menu Handling Logic:

- IF A: Execute {advancedElicitationTask}
- IF P: Execute {partyModeWorkflow}
- IF C: Store gathered context, then load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then redisplay menu

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:

- Git diff analyzed (or noted if empty)
- Commit history analyzed with relevance detection
- Previous ticket files checked
- Project documents discovered and analyzed
- Codebase scanned for patterns
- Context compiled and ready for ticket creation
- User confirmed (in collaborative mode)

### ❌ SYSTEM FAILURE:

- Skipping any discovery phase
- Not checking for git repository
- Proceeding without analyzing git diff
- Not using relevance detection for commits
- Ignoring previous tickets
- Creating ticket content in this step (belongs in step-03)

**Master Rule:** Gather ALL context before proceeding. Missing context leads to incomplete tickets.
