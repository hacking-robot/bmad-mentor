# Ticket Review Checklist

Use this checklist during adversarial code review to ensure thorough coverage.

---

## Pre-Review Setup

- [ ] Ticket file loaded from `{{ticket_path}}`
- [ ] Ticket Status verified as reviewable
- [ ] Ticket number extracted from filename
- [ ] Git repository detected and status captured
- [ ] File List extracted from Dev Agent Record
- [ ] Git changes vs File List cross-referenced

---

## Acceptance Criteria Validation

For each Acceptance Criterion:

- [ ] AC requirement understood
- [ ] Evidence searched in implementation files
- [ ] Status determined: IMPLEMENTED / PARTIAL / MISSING
- [ ] If MISSING/PARTIAL → HIGH SEVERITY finding recorded

---

## Task Completion Audit

For each task marked `[x]`:

- [ ] Task description read
- [ ] Evidence searched in implementation
- [ ] **CRITICAL**: If marked [x] but NOT DONE → CRITICAL finding
- [ ] Proof recorded (file:line)

---

## Code Quality Review

For each file in review scope:

### Security
- [ ] No injection vulnerabilities (SQL, XSS, command)
- [ ] Input validation present
- [ ] Authentication/authorization checks
- [ ] No hardcoded secrets/credentials
- [ ] Dependencies checked for known vulnerabilities

### Performance
- [ ] No N+1 queries
- [ ] No inefficient loops or algorithms
- [ ] Appropriate caching where needed
- [ ] No memory leaks

### Error Handling
- [ ] Try/catch blocks where needed
- [ ] Meaningful error messages
- [ ] Proper error propagation
- [ ] No silent failures

### Code Quality
- [ ] Functions not overly complex
- [ ] No magic numbers (use constants)
- [ ] Clear naming conventions
- [ ] Proper code organization
- [ ] No dead code

### Test Quality
- [ ] Tests exist for the functionality
- [ ] Tests have real assertions (not placeholders)
- [ ] Edge cases covered
- [ ] Error paths tested

---

## Quality Gates Review

### Build Verification
- [ ] Build command runs successfully
- [ ] No TypeScript/compilation errors
- [ ] No linting errors (if configured)

### Test Execution
- [ ] All existing tests pass
- [ ] New tests written (if applicable)
- [ ] Test coverage acceptable

---

## Git vs Ticket Discrepancies

- [ ] Files in git but not in File List → MEDIUM finding
- [ ] Files in File List but no git changes → HIGH finding
- [ ] Uncommitted changes not documented → MEDIUM finding

---

## Severity Classification

| Severity | Criteria |
|----------|----------|
| **CRITICAL** | Tasks marked [x] but not done, Security vulnerabilities |
| **HIGH** | ACs not implemented, False claims in File List |
| **MEDIUM** | Missing documentation, Performance issues, Poor test coverage |
| **LOW** | Code style, Documentation gaps, Minor improvements |

---

## Minimum Issue Count

⚠️ **CRITICAL REQUIREMENT**: Find minimum 3 specific, actionable issues.

If less than 3 found:
1. Re-examine code for edge cases
2. Check null handling
3. Review architecture compliance
4. Look for integration issues
5. Examine dependency problems

---

_Reviewer: {{user_name}} on {{date}}_
