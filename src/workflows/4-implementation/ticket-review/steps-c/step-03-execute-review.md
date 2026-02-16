---
name: 'step-03-execute-review'
description: 'Execute adversarial code review - validate ACs, audit tasks, review files, find 3-10 issues minimum'

nextStepFile: './step-04-present-findings.md'
checklistFile: '../data/checklist.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 3: Execute Adversarial Review

## STEP GOAL:

To execute an ADVERSARIAL code review that validates Acceptance Criteria, audits completed tasks, reviews all files for quality issues, and finds 3-10 specific problems minimum.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are an ADVERSARIAL Senior Developer / Code Review Specialist
- ✅ 🔥 YOUR JOB: Find what's wrong or missing! NEVER accept "looks good"
- ✅ Challenge everything: Are tasks marked [x] actually done? Are ACs really implemented?
- ✅ You are BETTER than the dev agent that wrote this code - find their mistakes

### Step-Specific Rules:

- 🎯 Focus ONLY on finding issues - minimum 3, target 3-10
- 🚫 FORBIDDEN to accept code as "good enough" - find problems
- 💬 DO NOT BE LAZY - For EACH file, launch a subprocess that analyzes it
- ⚙️ TOOL/SUBPROCESS FALLBACK: If subprocess unavailable, analyze in main thread
- 🔥 If total issues < 3: RE-EXAMINE more thoroughly

## EXECUTION PROTOCOLS:

- 🎯 Execute the attack plan from step 2
- 💾 Document EVERY finding with severity
- 📖 Categorize: CRITICAL, HIGH, MEDIUM, LOW
- 🚫 NEVER proceed with less than 3 issues

## CONTEXT BOUNDARIES:

- Attack plan from step 2 defines scope
- Ticket sections and git changes available
- Focus: Finding issues, not fixing them
- Dependencies: Steps 1 and 2 must be complete

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. AC Validation (HIGH Severity Potential)

**For EACH Acceptance Criterion in `{{acceptance_criteria}}`:**

1. Read the AC requirement
2. Search implementation files for evidence
3. Use Context7 MCP if needed to understand framework patterns
4. Determine status:
   - **IMPLEMENTED** - Clear evidence found
   - **PARTIAL** - Some evidence but incomplete
   - **MISSING** - No evidence found

5. **If PARTIAL or MISSING:** Create HIGH severity finding:
   ```
   Finding: AC# not fully implemented
   Severity: HIGH
   Evidence: [what was found or not found]
   Files: [relevant files]
   Recommendation: [what needs to be done]
   ```

**Set session variable:**
- `{{ac_validation_results}}` = array of {ac_number, status, evidence}

### 2. Task Completion Audit (CRITICAL Severity Potential)

**For EACH task marked [x] in `{{tasks}}`:**

1. Read the task description
2. Search files for evidence it was actually done
3. **CRITICAL CHECK:** If marked [x] but NOT done, this is a CRITICAL finding

4. **If NOT DONE:** Create CRITICAL severity finding:
   ```
   Finding: Task marked [x] but not implemented
   Severity: CRITICAL
   Task: [task text]
   Evidence: [why it's not done]
   Proof: [file:line or "not found"]
   ```

**Set session variable:**
- `{{task_audit_results}}` = array of {task_number, claimed_done, verified}

### 3. File Quality Review (Subprocess - Pattern 2 & 4)

**DO NOT BE LAZY - For EACH file in the combined file list:**

**Launch a subprocess (Pattern 2: Deep Analysis) for each file:**
- Analyze the file for: Security, Performance, Error Handling, Code Quality, Test Quality
- Return: Structured findings array

**If subprocess supports parallel execution (Pattern 4):**
- Launch file analyses in parallel
- Aggregate all findings

**For EACH file, check:**

**Security:**
- [ ] Injection vulnerabilities (SQL, XSS, command)
- [ ] Missing input validation
- [ ] Authentication/authorization issues
- [ ] Hardcoded secrets/credentials
- [ ] Vulnerable dependencies

**Performance:**
- [ ] N+1 queries
- [ ] Inefficient loops/algorithms
- [ ] Missing caching opportunities
- [ ] Memory leaks

**Error Handling:**
- [ ] Missing try/catch blocks
- [ ] Poor error messages
- [ ] Silent failures
- [ ] Improper error propagation

**Code Quality:**
- [ ] Overly complex functions
- [ ] Magic numbers (use constants)
- [ ] Poor naming conventions
- [ ] Dead code
- [ ] Missing documentation

**Test Quality:**
- [ ] Tests exist for functionality
- [ ] Real assertions (not placeholders)
- [ ] Edge cases covered

**For each issue found, create finding:**
```
Finding: [description]
Severity: [CRITICAL/HIGH/MEDIUM/LOW]
File: [path:line]
Category: [Security/Performance/ErrorHandling/CodeQuality/TestQuality]
Recommendation: [how to fix]
```

### 4. Quality Gates Review

**Check Quality Gates from ticket:**

**Build Verification:**
- Verify build command runs successfully
- If checkbox unchecked or build fails → MEDIUM finding

**Test Execution:**
- Verify tests pass
- If checkbox unchecked or tests fail → MEDIUM finding

### 5. Git vs Ticket Discrepancy Review

**Review `{{file_discrepancies}}`:**

- **Files in git but not in File List** → MEDIUM finding (incomplete documentation)
- **Files in File List but no git changes** → HIGH finding (false claims)
- **Uncommitted changes not documented** → MEDIUM finding

### 6. Minimum Issue Count Check

**CRITICAL REQUIREMENT: Count total issues found.**

```
Total Issues: {{total_count}}
- CRITICAL: {{critical_count}}
- HIGH: {{high_count}}
- MEDIUM: {{medium_count}}
- LOW: {{low_count}}
```

**If total_issues < 3:**

🚨 **NOT LOOKING HARD ENOUGH!** Find more problems!

Re-examine code for:
1. Edge cases and null handling
2. Architecture violations
3. Documentation gaps
4. Integration issues
5. Dependency problems
6. Missing type annotations
7. Inconsistent patterns

**Find at least 3 more specific, actionable issues.**

**Loop until total_issues >= 3**

### 7. Compile All Findings

**Create the findings summary:**

```
{{all_findings}} = combine and sort by severity:
- All CRITICAL findings first
- Then HIGH
- Then MEDIUM
- Then LOW
```

**Set session variable:**
- `{{all_findings}}` = complete sorted array
- `{{finding_counts}}` = {critical, high, medium, low, total}

### 8. Display Review Summary

Present the review summary:

```
**🔥 Adversarial Review Complete**

**Files Reviewed:** {{file_count}}
**ACs Validated:** {{ac_count}} ({{missing}} MISSING, {{partial}} PARTIAL)
**Tasks Audited:** {{task_count}} ({{failed}} false claims)

**Issues Found: {{total_count}}**

| Severity | Count |
|----------|-------|
| 🔴 CRITICAL | {{critical_count}} |
| 🟠 HIGH | {{high_count}} |
| 🟡 MEDIUM | {{medium_count}} |
| 🟢 LOW | {{low_count}} |

**Top 5 Most Critical Issues:**
1. [First CRITICAL or HIGH finding summary]
2. [Second finding summary]
3. [Third finding summary]
4. [Fourth finding summary]
5. [Fifth finding summary]

Ready to present findings and decide on actions.
```

### 9. Present MENU OPTIONS

Display: "**Select an Option:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Present Findings"

#### Menu Handling Logic:

- IF A: Execute {advancedElicitationTask}, and when finished redisplay the menu
- IF P: Execute {partyModeWorkflow}, and when finished redisplay the menu
- IF C: Store findings, then load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then [Redisplay Menu Options](#9-present-menu-options)

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:

- ALL ACs validated with status
- ALL [x] tasks verified
- ALL files reviewed
- Minimum 3 issues found
- Findings categorized by severity
- Ready for user decision

### ❌ SYSTEM FAILURE:

- Accepting "looks good" with < 3 issues
- Skipping task verification
- Not reviewing all files
- Missing severity categorization
- Proceeding without complete findings

**Master Rule:** Find minimum 3 issues. If you found less, you weren't looking hard enough.
