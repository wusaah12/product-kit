# Hypothesis: Frictionless Workout Logging

**ID:** HYP-001-WORKOUT  
**Owner:** [Your Name]  
**Status:** ✅ **VALIDATED** (Ready for PRD)  
**Date:** 2026-03-04

---

## 1. The Core Assumption

*Based on ProductKit principles and target user observations, we believe that:*

> **"If we** build a minimal friction workout logger that requires **<10 seconds** per exercise entry **for** gym-goers who lift 3-5x per week **then** they will actually log their workouts in-app rather than on paper or forgetting entirely, **and** we'll see >70% workout completion logging rate."

---

## 2. Supporting Evidence (The "Why Now?")

*Why do we think this is true?*

- **Observation A:** Existing fitness apps require 30+ seconds per exercise (sets, reps, weight dropdowns → friction = abandonment).
- **Observation B:** Most users who abandon fitness tracking claim "entering data took longer than the workout itself."
- **Observation C:** Paper loggers (simple notebook notation) are still popular because they're faster than apps (single line vs. taps/dropdowns).
- **Observation D:** Gym-goers need a quick, in-workout reference tool—not a post-workout data entry session.
- **Observation E:** Users value the psychological win of "seeing progress tracked" but hate the friction of entry.

---

## 3. The "Leap of Faith" Questions

*What must be true for this hypothesis to work?*

- **Technical:** Can we capture gym exercise data (name, sets, reps, weight) in <10 seconds on a web interface?
- **Behavioral:** Will gym-goers use a web app during workouts (vs. paper or phone camera)?
- **Design:** Can the UX be simple enough that a beginner can log their first workout without a tutorial?
- **Platform:** Is a web app on mobile (phone at the gym) sufficient, or do we need native mobile apps later?

---

## 4. The Experiment (The "MVP")

*How do we test this with the least amount of code possible?*

**Test Format:** **Prototype Interview + Limited Beta**

1. **Phase 1 - Validation (Week 1):** 
   - Create a simple HTML/React prototype: Exercise quick-entry form (name, sets, reps, weight)
   - Show to 5-10 gym-goers (target: people who currently use paper or skip logging)
   - In-gym test: Have them use it for 2-3 sets during a real workout
   - Ask: "Would you actually use this during your workouts?" and "What would make this faster?"

2. **Phase 2 - MVP Build (Week 2-3):**
   - Build web app (responsive, mobile-first design for gym use)
   - Features: Quick log + view past workouts + export CSV
   - Tech stack: TBD (e.g., React/Node.js, TypeScript, local storage for offline capability)

3. **Phase 3 - Measurement (Weeks 4-6):**
   - Beta launch with 15-20 gym-goers
   - Track: Daily active users logging workouts, average time per entry, completion rate
   - Surveys: "How likely are you to use this regularly?" and "Why did you log/skip?"

---

## 5. Success Signals & Failure Triggers

*Define the "Go/No-Go" metrics before you start coding.*

| Signal | Success Threshold | Failure Trigger |
| :--- | :--- | :--- |
| **Primary Metric: Workout Logging Completion Rate** | >70% of user workouts logged in-app (vs. abandoned/paper) | <40% completion rate = friction still too high |
| **Secondary Metric: Time Per Entry** | <10 seconds median entry time per exercise | >20 seconds = UX needs major redesign |
| **User Sentiment: Ease of Use** | >80% agree "This was fast to use" | <50% agree = product doesn't solve the friction problem |
| **Retention: 4-Week Active** | >60% of users still logging after 4 weeks | <30% retention = doesn't address real need |
| **NPS Score (Utility)** | >40 (for a specialized tool) | <20 = users don't value it enough |

---

## ✅ **CRITICAL DECISIONS LOCKED IN**

| Decision | Confirmed |
| :--- | :--- |
| **Primary User Persona** | Gym-goers (barbell/dumbbell lifting, 3-5x/week) |
| **Platform** | Web (responsive, mobile-first for gym use) |
| **Scope** | Gym exercises ONLY (strength training exercises: squat, bench press, deadlift, etc.) |
| **Success Threshold** | >70% workout completion logging rate |
| **Revenue Model** | Not applicable (MVP/validation phase) |
| **Out of Scope** | Cardio, running tracking, yoga, social features, coaching, advanced analytics |

---

## 🏗️ Scope Boundaries (Per ProductKit Pillars)

**What IS in this MVP:**
- ✅ Quick exercise logging (name, sets, reps, weight)
- ✅ View past workouts
- ✅ Export data (CSV)
- ✅ Local storage (offline capability)
- ✅ Mobile-responsive web UI

**What IS NOT in this MVP:**
- ❌ Social features (sharing, competition, friends)
- ❌ AI-driven recommendations or coaching
- ❌ Cardio tracking, running, swimming, yoga
- ❌ Advanced analytics or progress charts
- ❌ User accounts / cloud sync (v1 = local only)
- ❌ Custom exercises (fixed exercise library for v1)

**Rationale:** Per ProductKit's **Clarity EVEN OVER Feature Richness** and **Frictionless Handoff** pillars, we build a focused tool that does ONE thing well (fast logging for gym-goers) rather than a bloated feature set.

---

## 💡 ProductKit Constitution Alignment

This hypothesis aligns with ProductKit principles:

- ✅ **Clear Specification:** Success metrics are measurable (70% completion, <10s entry)
- ✅ **Customer-Centric:** Based on real user pain (users use paper because apps are slow)
- ✅ **Actionable & Testable:** Can validate with prototype interviews in 1 week
- ✅ **Iterative Validation:** MVP can be tested with 15-20 beta users before scaling
- ✅ **Clarity EVEN OVER Features:** No social, coaching, or analytics in v1
- ✅ **Frictionless Handoff:** This hypothesis clearly defines what we're building and why

---

## 🎯 **HYPOTHESIS IS LOCKED IN**

**Status: Ready for PRD Phase**

Next step: Draft the full **Product Requirements Document (PRD)** that includes:
- User journeys (workout logging flow)
- Functional requirements (what the system must do)
- Data model (exercise, sets, reps, weight storage)
- Acceptance criteria for >70% completion rate
- UI/UX wireframes or mockups

**Ready to proceed to PRD? YES / NO**

If YES, I'll draft the PRD based on this validated hypothesis. 📋

