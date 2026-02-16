---
name: 'step-05-complete'
description: 'Complete edit mode and offer validation'

# File references
contextOutputFile: '{planning_artifacts}/project-context.md'
architectureOutputFile: '{planning_artifacts}/architecture.md'
validateWorkflow: '../steps-v/step-01-validate.md'
---

# Step 5: Complete Edit

## STEP GOAL:
To complete the edit session and offer validation.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

## MANDATORY SEQUENCE

### 1. Summary of Changes

"**Edit Complete!**

**Changes Made:**
- project-context.md: [list updated sections]
- architecture.md: [list updated sections]

**Documents updated with current date.**"

### 2. Final Menu

"**What would you like to do?**

| Option | Description |
|--------|-------------|
| **[V]alidate** | Run validation to check document quality |
| **[R]eview** | Review the updated documents |
| **[E]xit** | End edit session |

**Your choice:**"

#### Menu Handling Logic:
- IF V: Load {validateWorkflow}
- IF R: Display document summaries, then redisplay menu
- IF E: Display goodbye and end workflow

### 3. Goodbye

"**Edit session complete!**

Your documents have been updated and are ready for use.

Happy coding! 🚀"
