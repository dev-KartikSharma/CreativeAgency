# Dead Ends Tracking

| Iteration | Approach Tried | Why It Failed | Files Touched |
|---|---|---|---|
| 1 | Synthetic mock E2E test suite asserting against static fixtures (`fixtures/specifications.js`) and in-memory mock harness (`AppStateHarness`) without evaluating `src/` files | Failed Forensic Audit (INTEGRITY VIOLATION) and Challenger 2 (REJECT). Tests were self-certifying and would pass even if `src/` were deleted or corrupted. | `tests/e2e/*.js` |
