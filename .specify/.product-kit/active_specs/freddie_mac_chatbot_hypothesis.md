# Hypothesis: AI-Powered Freddie Mac Seller/Servicer Guide Assistant

**ID:** HYP-002-FREDDIE-MAC  
**Owner:** [Your Name]  
**Status:** Discovery / Testing  
**Date:** 2026-03-05

---

## 1. The Core Assumption

*Based on ProductKit principles and seller/servicer pain points, we believe that:*

> **"If we** build an AI chatbot that instantly answers questions about Freddie Mac's Seller Servicer Guide (SSG) **for** sellers and servicers who need quick compliance guidance **then** they will save time looking up answers manually **and** our solution will achieve >80% answer accuracy and >75% adoption within first 4 weeks."

**Note:** This assumption is draft-stage based on limited discovery context. The discovery folder is currently empty. We need to validate these assumptions against real user interviews.

---

## 2. Supporting Evidence (The "Why Now?")

*Currently, we have limited discovery data. Based on typical regulatory workflows, we hypothesize:*

- **Observation A:** Freddie Mac's Seller Servicer Guide is 1000+ pages, dense regulatory document → manual lookup is slow and error-prone
- **Observation B:** Sellers/servicers need quick answers during loan origination/servicing workflows (mortgage closing, document review, compliance checks)
- **Observation C:** Current workaround is "Google SSG doc" or "Email compliance team" (delays deals, creates bottlenecks)
- **Observation D:** Regulatory domain knowledge varies widely → different users get different answers from the same document

**⚠️ CRITICAL CONTEXT GAP:** The discovery folder is empty. Before proceeding, we need:
- User interviews with 3-5 sellers/servicers
- Data on current lookup time (baseline)
- Examples of common questions they ask
- Impact if answers are wrong (legal risk, deal loss, compliance violations)
- Which specific SSG sections cause the most confusion

**ACTION REQUIRED:** Can you provide any of the following?
- User interview notes or testimonials?
- Examples of questions sellers/servicers ask?
- Current process for finding answers (tools they use)?
- Any existing feedback about pain points?

---

## 3. The "Leap of Faith" Questions

*What must be true for this hypothesis to work?*

- **Technical:** Can we reliably extract and index Freddie Mac's SSG document? Will an LLM (GPT-4, Claude) trained on SSG answer regulatory questions accurately enough?
- **Behavioral:** Will sellers/servicers trust an AI to answer compliance questions, or will they demand human review?
- **Regulatory:** Does Freddie Mac allow us to build on their official guide? Are there liability issues if the AI gives incorrect advice?
- **Business:** Who is liable if the chatbot gives wrong guidance that costs a deal or creates compliance violations?
- **Accuracy:** What's the acceptable error rate? (0%? 5%? 10%?) Mortgage compliance errors are expensive.

---

## 4. The Experiment (The "MVP")

*How do we validate this with minimal risk?*

**Test Format:** **Prototype + User Feedback + Accuracy Audit**

**Phase 1 - Feasibility Test (Week 1):**
1. **Source & Process SSG:** Obtain official Freddie Mac SSG document
2. **Chunk & Embed:** Break SSG into searchable sections; test with embeddings (vector DB like Pinecone or Supabase)
3. **Prototype Chatbot:** Simple React UI + Claude API (RAG pattern: retrieval-augmented generation)
4. **Ask 5 Sample Questions:** Test accuracy on known questions from SSG
   - Example: "What are the required loan documentation for a conventional mortgage?"
   - Example: "What's the appeal process for denied claims?"
5. **Capture Latency:** Measure response time (target: <5 seconds)

**Phase 2 - User Validation (Week 2):**
1. **Recruit 5-10 beta users:** Sellers or servicers who actively use SSG
2. **Guided Interview:** "Would you use this instead of manually searching SSG?"
3. **Accuracy Testing:** Have users ask 10 real questions they encounter; compare chatbot answers to official SSG
4. **Measure Trust:** Ask "Would you trust this to give you compliance guidance?" (Y/N and why?)
5. **Collect Feedback:** "What questions does it miss? What would make you trust it more?"

**Phase 3 - Limited Beta (Weeks 3-4):**
1. **Deploy to 10-20 users** (closed beta, with disclaimer: "For research only, verify answers with SSG")
2. **Track Usage:** Questions asked, answer rating (👍/👎), time saved vs. manual lookup
3. **Measure Accuracy:** Audit sample of answers against SSG source material (target: >80% correct)
4. **Retention:** How many return after first use? (Goal: >75% within 4 weeks)

---

## 5. Success Signals & Failure Triggers

*Define the "Go/No-Go" metrics before building.*

| Signal | Success Threshold | Failure Trigger |
| :--- | :--- | :--- |
| **Primary Metric: Answer Accuracy** | >80% of answers are factually correct per SSG | <60% accuracy = liability risk, cannot launch |
| **Secondary Metric: User Adoption** | >75% of beta users use chatbot at least 3x in 4 weeks | <40% adoption = users don't trust it |
| **User Sentiment: Trust** | >70% of users agree "I trust this for guidance" | <50% trust = product does not solve confidence problem |
| **Response Latency** | <5 seconds median response time | >15 seconds = too slow for workflow |
| **Time Savings** | Users report "Faster than manual lookup" | Users report "No faster than opening SSG PDF" |
| **Error Rate (False Negatives)** | <5% of questions get "I don't know" | >20% "I don't know" = not comprehensive |

---

## 🔴 **CRITICAL DECISIONS NEEDED BEFORE PROCEEDING**

### **User Definition (Required)**
- **Primary User:** Sellers? Servicers? Loan officers? Compliance teams?
- **User Volume:** How many potential users? (100? 1,000? 10,000?)
- **Question Pattern:** What types of questions (e.g., documentation, timelines, eligibility, appeal process)?

### **Accuracy & Liability (Required)**
- **Acceptable Error Rate:** What's the cost of wrong guidance? (Deal loss? Compliance fine? Reputational damage?)
- **Liability Approach:** 
  - A) Include disclaimer: "For informational use only, always verify with official SSG"?
  - B) Require human review of critical answers?
  - C) Only answer low-risk questions (e.g., definitions, timelines)?
- **Verification:** Should answers cite specific SSG sections for user verification?

### **Competitive Landscape (Required)**
- **Existing Solutions:** Do sellers/servicers currently use other tools? (ChatGPT on SSG PDF? Compliance software subscriptions?)
- **Differentiation:** What makes our solution better than "ask ChatGPT directly"?

### **Source Material (Required)**
- **SSG Access:** Do you have rights to use the official Freddie Mac SSG?
- **Updates:** How often does SSG change? (Our knowledge cutoff may be outdated)
- **Scope:** Just SSG, or also Fannie Mae, FHA, VA guides?

### **Business Model (Required)**
- **Revenue:** Free tool? Subscription? Enterprise only?
- **Integration:** Standalone web app? Embed in existing tool?
- **Support:** Who provides customer support if the chatbot gives wrong answers?

---

## 💡 ProductKit Constitution Alignment

This hypothesis needs alignment checks:

- ✅ **Clear Specification:** Success metrics are measurable (>80% accuracy, <5s latency, >75% adoption)
- ✅ **Customer-Centric:** Based on real seller/servicer pain (slow manual lookup)
- ⚠️ **Clarity EVEN OVER Features:** Current scope is broad (all SSG questions). We may need to narrow to a specific question category (e.g., only loan documentation, not appeals)
- ⚠️ **Traceability:** Must cite specific SSG sections in answers (audit trail)
- ⚠️ **Actionable & Testable:** Accuracy is testable, but requires manual audit against SSG

**Potential Risk:** If accuracy <80%, this violates **Crystal-Clear Specifications** pillar (unclear/wrong answers = rework). We may need a narrower MVP (e.g., only FAQs, not full SSG).

---

## 🎯 **HYPOTHESIS STATUS: WAITING FOR CLARIFICATION**

**Before we proceed to PRD, please address:**

1. **Primary User:** Who is the main user persona? (Seller? Servicer? Loan Officer?)
2. **Top 3 Pain Points:** What specific questions/tasks are hardest for them today?
3. **Accuracy Standard:** What error rate is acceptable given regulatory risk?
4. **Source Material:** Do you have access to/rights to use Freddie Mac SSG?
5. **Baseline Metrics:** How long does manual lookup currently take? What % of lookups result in wrong answers?
6. **Discovery Data:** Any user interviews, feedback, or market research to share?

**Once you provide these, we can:**
- ✅ Lock in success metrics
- ✅ Define the MVP scope (full SSG or just key sections?)
- ✅ Proceed to PRD with confidence

**What would you like to clarify first?**

---

## 📋 Appendix: Sample Questions the Chatbot Might Answer

*(For context, these are likely SSG topics:)*

1. "What documentation is required for a conventional loan with 15% down payment?"
2. "What's the timeline for seller to provide title docs?"
3. "Can a buyer use a gift from a non-family member?"
4. "What are the appeal procedures if a claim is denied?"
5. "What's the definition of 'satisfactory appraisal'?"
6. "Who bears the cost of appraisal repairs?"
7. "What's the maximum loan amount for a jumbo mortgage?"
8. "How long does the servicing transfer process take?"

**Question:** Are these the types of questions you expect users to ask? Or different?
