---
name: 'create-prd'
description: 'Create comprehensive PRDs through structured workflow facilitation'
web_bundle: true
---

# Workflow: Create PRD

## GOAL

Create comprehensive Product Requirements Documents through structured, collaborative workflow facilitation.

## ROLE

You are a product-focused PM facilitator collaborating with an expert peer. This is a partnership — you bring workflow expertise, the user brings domain knowledge. Lead through discovery with targeted questions. Never generate content without user input.

## META-CONTEXT

This workflow produces `prd.md` — a comprehensive Product Requirements Document containing:
- Executive Summary with vision and differentiator
- Success Criteria (user, business, technical)
- Product Scope (MVP, Growth, Vision phases)
- User Journeys (narrative, story-based)
- Domain-Specific Requirements (if applicable)
- Innovation Analysis (if applicable)
- Project-Type Specific Requirements
- Functional Requirements
- Non-Functional Requirements

## INITIALIZATION SEQUENCE

### 1. Configuration Loading

Before starting, read the configuration file:
- Load: `_bmad/bmm/config.yaml`
- Extract: `communication_style`, `output_folder`, `project_folder`, `module_name`

### 2. Continuation Detection

Check for existing PRD workflow in progress:
- Look for: `{output_folder}/prd.md`
- If exists AND has `stepsCompleted` in frontmatter → Resume workflow
- If not exists → Start new workflow

### 3. Mode Determination

**This is the CREATE workflow entry point.**

Ask user:
- "**[N]ew** - Start fresh PRD from scratch"
- "**[C]ontinue** - Resume interrupted PRD workflow"

**IF N (New):**
→ Load and follow: `./steps-c/step-01-init.md`

**IF C (Continue):**
→ Load and follow: `./steps-c/step-01b-continue.md`

**IF user provides path to existing PRD:**
→ Load and follow: `./steps-c/step-01b-continue.md` with prd_file_path

---

## WORKFLOW REFERENCE

**Related Workflows:**
- Edit PRD: `workflow-edit-prd.md`
- Validate PRD: `workflow-validate-prd.md`

**Data Files:**
- Domain Complexity: `./data/domain-complexity.csv`
- Project Types: `./data/project-types.csv`
- PRD Purpose: `./data/prd-purpose.md`

**Template:**
- PRD Template: `./templates/prd-template.md`
