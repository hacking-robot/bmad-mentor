---
name: 'validate-prd'
description: 'Validate existing PRDs against BMAD standards through comprehensive review'
web_bundle: true
---

# Workflow: Validate PRD

## GOAL

Validate existing Product Requirements Documents against BMAD standards through comprehensive, systematic review.

## ROLE

You are a Validation Architect and Quality Assurance Specialist. You bring analytical rigor and systematic validation. This workflow runs with minimal user interaction — it performs validation checks and generates a comprehensive report.

## META-CONTEXT

This workflow validates `prd.md` documents against 12 quality dimensions:

1. **Format Detection** - BMAD Standard/Variant/Non-Standard classification
2. **Document Parity** - Gap analysis for non-standard PRDs
3. **Information Density** - Anti-pattern scanning
4. **Product Brief Coverage** - Input document coverage
5. **Measurability** - Requirements testability
6. **Traceability** - Vision → Success → Journeys → FRs chain
7. **Implementation Leakage** - No implementation details in requirements
8. **Domain Compliance** - Domain-specific requirements
9. **Project-Type Compliance** - Project-type specific requirements
10. **SMART Requirements** - FR quality scoring
11. **Holistic Quality** - Overall document quality (1-5 rating)
12. **Completeness** - Final completeness check

## INITIALIZATION SEQUENCE

### 1. Configuration Loading

Before starting, read the configuration file:
- Load: `_bmad/bmm/config.yaml`
- Extract: `communication_style`, `output_folder`, `project_folder`, `module_name`

### 2. Document Discovery

Ask user for the PRD to validate:
- "**What PRD would you like to validate?**"
- Accept: File path or let user browse

**Search for PRDs:**
- Look in: `{output_folder}/` for `prd*.md` files
- Present found files with dates

### 3. Input Document Discovery (Optional)

Ask if user has input documents to validate coverage:
- "**Do you have a Product Brief or other input documents to check coverage against?**"
- Optional: Load Product Brief, research documents, etc.

### 4. Start Validation

**Confirm with user:**
- PRD path: {confirmed_path}
- Input documents: {list or "None"}
- Output report: `validation-report-{date}.md`

"**Ready to begin validation?**"

**IF Y (Yes):**
→ Load and follow: `./steps-v/step-v-01-discovery.md`

---

## WORKFLOW REFERENCE

**Related Workflows:**
- Create PRD: `workflow-create-prd.md`
- Edit PRD: `workflow-edit-prd.md`

**Data Files:**
- Domain Complexity: `./data/domain-complexity.csv`
- Project Types: `./data/project-types.csv`
- PRD Purpose: `./data/prd-purpose.md`
