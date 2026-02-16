---
name: 'step-04-present-findings'
description: 'Present review findings with severity breakdown and let user choose: fix automatically, add action items, or examine details'

nextStepFile: './step-05-update-ticket.md'
---

# Step 4: Present Findings and User Decision

## STEP GOAL:

To present all review findings with clear severity categorization and let the user decide: fix issues automatically, add action items to ticket, or examine details first.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a Senior Developer / Code Review Specialist
- ✅ Present findings clearly and objectively
- ✅ Help user make an informed decision
- ✅ Be ready to fix or document as user chooses

### Step-Specific Rules:

- 🎯 Present ALL findings with severity
- 🚫 FORBIDDEN to hide or minimize issues
- 💬 Explain implications of each choice
- 📋 User's decision determines next action

## EXECUTION PROTOCOLS:

- 🎯 Display findings organized by severity
- 💾 Apply user's choice (fix or action items)
- 📖 Track what was fixed vs documented
- 🚫 Don't proceed until user makes a choice

## CONTEXT BOUNDARIES:

- Findings from step 3 available in `{{all_findings}}`
- Focus: Presenting and acting on findings
- User makes the final decision
- Dependencies: Step 3 must be complete

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Display Findings Report

**Present the complete findings report:**

```markdown
# 🔥 CODE REVIEW FINDINGS

**Ticket:** #{{ticket_number}}
**Total Issues:** {{total_count}}

---

## 🔴 CRITICAL ISSUES ({{critical_count}})

{{#each critical_findings}}
### Finding {{@index}}: {{title}}
- **Severity:** CRITICAL
- **Category:** {{category}}
- **File:** {{file}}:{{line}}
- **Issue:** {{description}}
- **Evidence:** {{evidence}}
- **Recommendation:** {{recommendation}}

{{/each}}

---

## 🟠 HIGH ISSUES ({{high_count}})

{{#each high_findings}}
### Finding {{@index}}: {{title}}
- **Severity:** HIGH
- **Category:** {{category}}
- **File:** {{file}}:{{line}}
- **Issue:** {{description}}
- **Recommendation:** {{recommendation}}

{{/each}}

---

## 🟡 MEDIUM ISSUES ({{medium_count}})

{{#each medium_findings}}
- **{{category}}:** {{description}} [{{file}}:{{line}}]

{{/each}}

---

## 🟢 LOW ISSUES ({{low_count}})

{{#each low_findings}}
- **{{category}}:** {{description}} [{{file}}]

{{/each}}

---

## Summary

| Severity | Count | Must Fix |
|----------|-------|----------|
| 🔴 CRITICAL | {{critical_count}} | ✅ YES |
| 🟠 HIGH | {{high_count}} | ✅ YES |
| 🟡 MEDIUM | {{medium_count}} | Recommended |
| 🟢 LOW | {{low_count}} | Optional |
```

### 2. Explain Options

**Present user options with implications:**

```markdown
**What should I do with these issues?**

| Option | Action | Result |
|--------|--------|--------|
| **[1]** | Fix automatically | I'll fix all CRITICAL, HIGH, and MEDIUM issues in the code |
| **[2]** | Add action items | I'll add these as tasks to the ticket for later |
| **[3]** | Show details | Deep dive into specific issues before deciding |

**Recommendation:**
{{#if critical_count > 0}}
⚠️ You have {{critical_count}} CRITICAL issues. Recommend [1] Fix automatically or address them immediately.
{{else if high_count > 0}}
⚠️ You have {{high_count}} HIGH issues. Recommend fixing these before marking ticket done.
{{else}}
Issues are MEDIUM/LOW. [2] Add action items may be appropriate if time-boxed.
{{/if}}
```

### 3. Branch Logic

**Wait for user selection:**

#### IF User Selects [1] - Fix Automatically

**Execute fixes for all CRITICAL, HIGH, and MEDIUM issues:**

1. For each CRITICAL/HIGH/MEDIUM finding:
   - Apply the fix as described in recommendation
   - Update the file
   - Record the fix

2. Update tests if needed

3. Update File List in Dev Agent Record if new files created

**Set session variable:**
- `{{fixed_issues}}` = array of issues that were fixed
- `{{fix_count}}` = number of issues fixed
- `{{user_choice}}` = "fix"

**Display:**
```
**✅ Fixes Applied**

Fixed {{fix_count}} issues:
{{#each fixed_issues}}
- {{description}} [{{file}}:{{line}}]
{{/each}}

Files modified: {{modified_files}}
```

**Proceed to Step 5.**

#### IF User Selects [2] - Add Action Items

**Add review follow-ups to ticket Tasks:**

1. Add new subsection to Tasks: "Review Follow-ups (AI)"

2. For each CRITICAL/HIGH/MEDIUM finding:
   ```
   - [ ] [AI-Review][{{severity}}] {{description}} [{{file}}:{{line}}]
   ```

**Set session variable:**
- `{{action_items_added}}` = count of items added
- `{{user_choice}}` = "action_items"

**Display:**
```
**📋 Action Items Added**

Added {{action_items_added}} action items to ticket Tasks:
- [AI-Review][CRITICAL] x{{critical_count}}
- [AI-Review][HIGH] x{{high_count}}
- [AI-Review][MEDIUM] x{{medium_count}}

These can be addressed in a follow-up.
```

**Proceed to Step 5.**

#### IF User Selects [3] - Show Details

**Deep dive into a specific issue:**

Ask user: "**Which issue would you like to examine in detail?**

Enter the finding number (e.g., '1' for first CRITICAL issue, or 'H2' for second HIGH issue):"

1. Show complete details for that issue:
   - Full code context
   - Why it's a problem
   - Multiple fix options
   - Trade-offs

2. After viewing, ask: "**What now?**
   - [1] Fix this issue
   - [2] Add as action item
   - [3] Examine another issue
   - [C] Continue with original choice"

3. Handle response and loop if needed

### 4. Track Decision

**After user makes final decision:**

**Set session variable:**
- `{{review_outcome}}` = "fixed" | "action_items" | "mixed"
- `{{issues_addressed}}` = count of issues addressed

### 5. Proceed to Step 5

Load, read entire file, then execute `{nextStepFile}`

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:

- All findings displayed with severity
- User makes informed decision
- Choice executed (fixes applied OR action items added)
- Session variables set for Step 5

### ❌ SYSTEM FAILURE:

- Hiding or minimizing findings
- Proceeding without user decision
- Not applying user's choice correctly
- Missing tracking variables

**Master Rule:** User decides. Present options clearly, execute their choice faithfully.
