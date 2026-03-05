# PRD: [Feature/Project Name]
**Status:** Draft / In-Review / Approved
**Date:** YYYY-MM-DD
**Spec-Kit Reference:** `constitution.md`

---

## 1. Executive Summary
*One-sentence summary of what we are building and why it matters right now.*

## 2. The Problem Space
* **User Pain Point:** What is the specific frustration we are solving?
* **Evidence:** (Optional) Link to user interview notes or data in `discovery/`.
* **Current Workaround:** How do users solve this today (and why does it suck)?

## 3. Goals & Success Metrics (KPIs)
* **Goal:** [e.g., Reduce onboarding drop-off by 20%]
* **Non-Goal:** [e.g., We are NOT updating the billing system in this cycle.]
* **Success Metric:** How will the AI know if the implementation was successful?

## 4. User Stories & Functional Requirements
*List these in priority order (P0 = Must have, P1 = Should have, P2 = Nice to have).*

| ID | User Story | Priority | Requirement |
| :--- | :--- | :--- | :--- |
| US.1 | As a [persona], I want to [action] so that [benefit]. | P0 | [Technical constraint] |
| US.2 | As a [persona], I want to [action] so that [benefit]. | P0 | [Technical constraint] |

## 5. User Experience & Flow
* **Primary Path:** Describe the "Happy Path" from start to finish.
* **Edge Cases:** What happens if the user is offline? What if the input is invalid?
* **Visual Guardrails:** Refer to the `product_constitution.md` for UI/UX standards.

## 6. Technical Constraints & Dependencies
* **Required Integrations:** (e.g., Stripe, OpenAI API, Twilio).
* **Security/Privacy:** Does this handle PII? (Refer to Constitution).
* **Performance:** Maximum acceptable latency for this feature.

## 7. Out of Scope (The "Anti-Spec")
*What are we explicitly NOT building? This prevents the AI from hallucinating unnecessary complexity during the `/plan` phase.*

---

## 🤖 AI Instructions for /specify
> "When generating this PRD, ensure all requirements align with the `product_constitution.md`. If a requirement contradicts a core pillar, flag it for the user immediately."