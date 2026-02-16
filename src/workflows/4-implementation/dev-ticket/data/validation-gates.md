# Validation Gates for dev-ticket

This file defines the mandatory validation gates and Definition of Done criteria.

---

## Completion Gates (MANDATORY)

### 1. Build Verification Gate

```bash
# Determine command from project structure
npm run build   # or yarn build, bun run build
```

- ✅ No errors → Continue to Test Gate
- ❌ Errors → Fix and retry before marking ticket complete

### 2. Test Execution Gate

```bash
# Determine command from project structure
npm test   # or yarn test, bun test
```

- ✅ All tests pass → Continue to Integration Gate
- ❌ Failures → Fix and retry before marking ticket complete

### 3. Integration Verification Gate

- Launch app: `npm run dev` (or equivalent)
- Test ticket-specific functionality
- Verify no runtime errors
- Note: This gate is informational - issues should be noted but don't block

---

## Definition of Done Checklist

Before marking ticket as "review", ALL criteria must be met:

### Implementation Completion

- [ ] All tasks/subtasks marked complete with [x]
- [ ] Implementation satisfies EVERY Acceptance Criterion
- [ ] No ambiguous or incomplete implementation
- [ ] Edge cases and error conditions handled
- [ ] Only uses dependencies specified in ticket or project-context

### Testing

- [ ] Unit tests added/updated for core functionality
- [ ] Integration tests added (when story requirements demand)
- [ ] E2E tests added (for critical user flows)
- [ ] Tests cover acceptance criteria and edge cases
- [ ] ALL existing tests pass (no regressions)
- [ ] Code quality checks pass (linting if configured)

### Documentation

- [ ] File List includes every new/modified/deleted file
- [ ] Dev Agent Record contains implementation notes
- [ ] Change Log includes summary of changes
- [ ] Only permitted ticket sections were modified

### Status

- [ ] Ticket Status updated to "review"
- [ ] No blocking issues or incomplete work remaining

---

## Validation Output Format

```
Definition of Done: PASS/FAIL

✅ Ticket Ready for Review: {ticket_number}
📊 Completion Score: {completed}/{total} items passed
🔍 Quality Gates: {build_status} | {test_status} | {integration_status}
📋 Test Results: {test_summary}
📝 Documentation: {doc_status}
```

**If FAIL:** List specific failures and required actions before ticket can be marked "review"

**If PASS:** Ticket is fully ready for code review and production consideration
