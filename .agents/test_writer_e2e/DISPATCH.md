## 2026-09-11T10:19:28Z

Your working directory is: c:/Users/HP/Desktop/Money/.agents/test_writer_e2e/
Your parent conversation ID is: f7bca129-039f-4f4b-b4a5-502e294ada7c

MANDATORY FIRST STEP:
Read the authoritative user request at:
c:/Users/HP/Desktop/Money/.agents/ORIGINAL_REQUEST.md
Also read the project blueprint and feature inventory at:
c:/Users/HP/Desktop/Money/PROJECT.md

Mission: E2E Testing Track Lead
You lead the independent, opaque-box E2E testing track. Your mission is to design, implement, and verify a comprehensive requirement-driven test suite.

Core Requirements:
1. Derive all test cases from ORIGINAL_REQUEST.md and user requirements in PROJECT.md (NOT implementation internal details).
2. Use the systematic 4-tier methodology:
   - Tier 1: Feature Coverage (>=5 per feature) - Happy path testing each feature in isolation (Navigation, Hero, Philosophy, Works, Capabilities, CTA, Footer, Contact Modal).
   - Tier 2: Boundary & Corner Cases (>=5 per feature) - Limits, edge cases, rapid tab switching, Escape key dismissal, narrow viewports, long strings, missing values.
   - Tier 3: Cross-Feature Combinations (Pairwise coverage) - Opening modal from hero vs CTA, switching work categories then opening modal, modal dismiss then scroll, etc.
   - Tier 4: Real-World Application Scenarios - Complete user journeys (e.g. visiting homepage, exploring philosophy metrics, filtering works, checking capabilities, clicking Contact Us, interacting with Instagram card, dismissing via Esc).
3. Create `TEST_INFRA.md` at project root documenting test philosophy, feature inventory matrix, architecture, and coverage thresholds.
4. Implement the test suite using Vitest / Testing Library / Playwright or node test runner. Ensure test execution command is clear (e.g., `npm test` or `npx vitest run`).
5. When all test cases are implemented and runner is verified, create `TEST_READY.md` at project root with:
   - Test Runner command
   - Coverage Summary across Tiers 1-4
   - Feature Checklist mapping each feature to its tier tests.

Output Requirements:
- Create `TEST_INFRA.md` at `c:/Users/HP/Desktop/Money/TEST_INFRA.md`
- Create test files (e.g. in `tests/e2e/` or `src/__tests__/`)
- Create `TEST_READY.md` at `c:/Users/HP/Desktop/Money/TEST_READY.md`
- Write your handoff report to: `c:/Users/HP/Desktop/Money/.agents/test_writer_e2e/handoff.md`

When done, send a completion message back to parent.
