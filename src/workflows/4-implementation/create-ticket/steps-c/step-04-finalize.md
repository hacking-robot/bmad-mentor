---
name: 'step-04-finalize'
description: 'Save ticket file and report completion'

outputFile: '{implementation_artifacts}/ticket_{ticket_number}.md'
---

# Step 4: Finalize

## STEP GOAL:

To save the completed ticket file and report workflow completion to the user.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 📖 CRITICAL: Read the complete step file before taking any action
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are completing the ticket creation workflow
- ✅ Ensure the ticket is properly saved
- ✅ Provide clear next steps for the user

### Step-Specific Rules:

- 🎯 Save the ticket file to the correct location
- 🚫 FORBIDDEN to modify ticket content in this step
- 💬 Provide a clear completion summary
- 📋 No menu in this step - automatic completion

## EXECUTION PROTOCOLS:

- 🎯 Save the ticket file
- 💾 Confirm file was created
- 📖 Report completion with next steps

## CONTEXT BOUNDARIES:

- Available: Complete ticket content from step-03
- Focus: Saving and reporting
- This is the FINAL step - workflow ends here

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

---

### 1. Save Ticket File

**Write the complete ticket content to:**

`{implementation_artifacts}/ticket_{ticket_number}.md`

**Ensure:**
- File is created at the correct path
- All content from step-03 is included
- File is properly formatted markdown

---

### 2. Verify File Creation

**Confirm the file was created successfully:**

- Check that `{outputFile}` exists
- Verify file is not empty

**If file creation failed:**
"🚫 **Error:** Failed to create ticket file at `{outputFile}`

Please check:
- Directory exists: `{implementation_artifacts}/`
- Write permissions are available
- Disk space is sufficient"

**HALT and wait for user to resolve issue.**

---

### 3. Report Completion

**Display completion summary:**

"---

## 🎫 **Ticket Created Successfully!**

**Ticket:** `{ticket_number}`
**File:** `{outputFile}`
**Status:** ready-for-dev

---

### **What's in the ticket:**

| Section | Description |
|---------|-------------|
| Summary | Overview of what this ticket implements |
| Context | Git changes, related commits, related tickets |
| Acceptance Criteria | Testable requirements for completion |
| Tasks | Actionable implementation steps with AC mappings |
| Implementation Notes | Architecture patterns, key files, dependencies |
| Quality Gates | Build and test verification steps |
| References | Source documents and related code |
| Dev Agent Record | Files to modify/create, completion tracking |

---

### **Next Steps:**

1. **Review the ticket:** Open `{outputFile}` and review the content
2. **Start development:** Begin implementation following the tasks
3. **Track progress:** Check off tasks and update the Dev Agent Record as you work
4. **Verify quality:** Run the quality gates before marking complete

---

### **Quick Commands:**

```bash
# View the ticket
cat {outputFile}

# Start development (if using dev workflow)
# Run your dev workflow with the ticket file

# Run build verification
# [Project-specific build command]

# Run test verification
# [Project-specific test command]
```

---

**Happy coding, {user_name}! 🚀**"

---

### 4. Workflow Complete

**This is the final step.**

The workflow has completed successfully. No further steps are needed.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS:

### ✅ SUCCESS:

- Ticket file saved to correct location
- File contains complete content
- User receives clear completion summary
- Next steps are provided
- Workflow ends cleanly

### ❌ SYSTEM FAILURE:

- Failing to save the file
- Saving incomplete content
- Not providing completion summary
- Not providing next steps

**Master Rule:** The workflow isn't complete until the ticket file is saved and the user knows what to do next.
