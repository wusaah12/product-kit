Since you have your **Constitution**, **PRD**, and **Hypothesis** templates ready, the "manual" implementation is about creating a **Gated Workflow**.

In a Spec-Kit environment, the goal is to prevent "context drift." You do this by ensuring each step serves as the strict input for the next. Here is the step-by-step manual execution guide.

---

## Step 1: Initialize the Environment

First, organize your local repository so the AI agent (Cursor, Claude Code, or Copilot) knows where to look for instructions.

1. **Create the Directory:** `mkdir .product-kit`
2. **Move your Files:**
* `.product-kit/product_constitution.md`
* `.product-kit/templates/prd_template.md`
* `.product-kit/templates/hypothesis-template.md`


3. **The "Active" Folder:** Create a folder called `active_specs/`. This is where the actual living documents for your current feature will live.

---

## Step 2: Phase 0 — The Discovery Prompt

Before writing a PRD, you must validate the idea.

**The Action:** Create a new file `active_specs/feature_name_hypothesis.md` using your template.
**The Manual Command (to your AI):**

> "Read `.product-kit/product_constitution.md` and `.product-kit/templates/hypothesis-template.md`. Based on these, help me fill out a hypothesis for [Feature Idea]. Look at my existing `discovery/` folder for context. Do not proceed to a PRD until we agree on the Success Metrics."

---

## Step 3: Phase 1 — The `/specify` Manual Trigger

Once the hypothesis is "Validated" (you've decided it's worth building), move to the Spec.

**The Action:** Create `active_specs/feature_name_prd.md`.
**The Manual Command:**

> "Using the validated hypothesis in `active_specs/feature_name_hypothesis.md` and the format in `.product-kit/templates/prd_template.md`, draft a full PRD.
> **CRITICAL:** Check every requirement against the 'Trade-offs' in our `product_constitution.md`. If I suggest a feature that violates a pillar, stop and alert me."

---

## Step 4: Phase 2 — The Technical Handoff (`/plan`)

Now you bridge the gap to the original **Spec-Kit** logic. You are turning "Product Needs" into "System Architecture."

**The Action:** Create `active_specs/feature_name_tech_plan.md`.
**The Manual Command:**

> "Review the approved PRD in `active_specs/feature_name_prd.md`. Generate a technical implementation plan.
> 1. List the files that need to be created/modified.
> 2. Define the data structures.
> 3. Ensure the tech stack aligns with the 'Technical Guardrails' in the Constitution."
> 
> 

---

## Step 5: Phase 3 — Task Extraction (`/tasks`)

Don't let the AI just "start coding." Force it to break the plan into a checklist.

**The Action:** Append a `# Task List` to your tech plan or create `active_specs/feature_name_tasks.md`.
**The Manual Command:**

> "Break the technical plan into a list of atomic, testable tasks. Each task should be small enough to complete in one coding pass. Label them T1, T2, etc."

---

## Step 6: Phase 4 — Execution (`/implement`)

This is where the code actually happens.

**The Manual Command:**

> "Implement **Task T1** from our task list. Refer to the PRD for the user logic and the Tech Plan for the architecture. Once finished, run tests and move to T2."

---

## 🛠️ Pro-Tip: The "Context Anchor"

To make this manual process feel like a "Kit," I recommend adding a small text snippet to the top of your **Product Constitution**:

> **AI INSTRUCTION:** "Whenever I mention 'Product Kit,' always prioritize the rules in this file and the structure in `.product-kit/templates/`. Never skip from Hypothesis to Code without an approved PRD and Tech Plan."

---

### What's next for you?

Would you like to try running **Phase 0** right now? Tell me a feature idea, and we can use your **Hypothesis Template** to draft the first "Active Spec."