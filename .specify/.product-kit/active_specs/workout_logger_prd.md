# PRD: Frictionless Workout Logger

**Status:** In-Review  
**Date:** 2026-03-05  
**Hypothesis:** `workout_logger_hypothesis.md`  
**Spec-Kit Reference:** `.product-kit/product_constitution.md`

---

## 1. Executive Summary

We are building a **minimal-friction web-based workout logger** for gym-goers who need to quickly log their strength training exercises during a workout. The core value proposition is speed: users can log an exercise (name, sets, reps, weight) in under 10 seconds, eliminating the friction that causes them to abandon tracking and resort to paper or memory. Success is measured by achieving >70% workout logging completion rate among beta users.

---

## 2. The Problem Space

**User Pain Point:**  
Gym-goers want to track their workouts to monitor progress and ensure progression, but existing fitness apps require 30+ seconds per exercise entry (dropdowns, form fields, confirmation screens). This friction is so high that users abandon the app mid-workout and return to paper notebooks or stop tracking entirely.

**Evidence:**  
- Existing apps (MyFitnessPal, Strong, JEFIT) require tapping through 5-8 UI elements per exercise
- Users report: "Entering data takes longer than doing the exercise"
- Paper loggers (notebook + pen) remain popular because a single line of notation takes 5-8 seconds
- Gym environments demand speed: mid-set, sweaty hands, limited attention

**Current Workaround:**  
Users either:
1. **Paper notebook:** Fastest (5-8 seconds per entry), but data is siloed, no digital record
2. **Phone camera:** Photograph lifts or notebook, process photos later (defeats real-time tracking)
3. **Post-workout entry:** Fill in app after gym (15+ minutes of data entry, high error rate)
4. **No tracking:** Skip it entirely due to friction (most common outcome)

**Why Now:**  
The fitness market is saturated with complex apps, but there's a gap for a **hyper-focused, frictionless logger**. Gym-goers have proven they WANT to track (they use paper), they just need a tool that's faster than paper and synchronizes data.

---

## 3. Goals & Success Metrics (KPIs)

**Primary Goal:**  
Build a web app that becomes the default logging tool for gym-goers by eliminating entry friction—proving that <10 second per-exercise entry times drive >70% completion rates.

**Non-Goals:**  
- ❌ Replace social fitness apps (no social features, competition, sharing)
- ❌ Build an AI-powered coaching or analytics platform
- ❌ Support cardio, running, yoga, or non-strength activities
- ❌ Implement user accounts or cloud synchronization in v1 (local storage only)
- ❌ Create custom exercise libraries or premium pricing tiers

**Success Metrics (from hypothesis):**

| KPI | Target | Success Threshold | Failure Threshold |
| :--- | :--- | :--- | :--- |
| **Workout Completion Rate** | 70% | >70% of user workouts logged in-app | <40% indicates friction too high |
| **Time Per Entry** | <10 sec | Median entry time <10 seconds | >20 seconds = UX redesign required |
| **User Sentiment: Ease** | 80% | >80% agree "This was fast to use" | <50% = product misses core value |
| **4-Week Retention** | 60% | >60% still active after 4 weeks | <30% = doesn't solve real need |
| **NPS Score** | >40 | >40 (specialized utility tool standard) | <20 = users don't find it valuable |

---

## 4. User Stories & Functional Requirements

*Prioritized by criticality to hypothesis validation (P0 = must have for MVP, P1 = should have for beta, P2 = nice to have post-validation)*

| ID | User Story | Priority | Technical Requirement | Acceptance Criteria |
| :--- | :--- | :--- | :--- | :--- |
| **US.1** | As a gym-goer, I want to log an exercise (name, sets, reps, weight) in under 10 seconds so that I can track my workout without losing focus or breaking momentum. | **P0** | Exercise input form must be 3 fields max; keyboard/text input optimized for speed; no modals or multi-step forms. | User can complete a full exercise entry in <10 seconds (timed); input persists to local storage. |
| **US.2** | As a gym-goer, I want to see my previous exercises and workouts so that I can refer to last week's weight/reps and ensure progression. | **P0** | Display past workouts (date, exercise, sets/reps/weight); sortable/filterable by exercise name. | User can view past 20 workouts; can find previous exercise attempt in <5 seconds. |
| **US.3** | As a gym-goer, I want to log multiple exercises in a single workout session so that I can track a full routine (e.g., 5 exercises in one session). | **P0** | Session/workout grouping; timestamp each entry; persist full workout as atomic record. | User can log 5+ exercises in one session; all exercises appear under "Today's Workout" heading. |
| **US.4** | As a gym-goer, I want to export my data as CSV so that I can back up my logs or analyze them in Excel/Google Sheets. | **P1** | CSV export functionality; format: Date, Exercise, Sets, Reps, Weight. | User can download full log as CSV file; data is accurate and importable into spreadsheet. |
| **US.5** | As a gym-goer, I want the app to work offline (no internet required) so that I can use it in the gym even if WiFi is unavailable. | **P0** | All data stored locally (browser localStorage or IndexedDB); no API/server dependency. | User can log exercises with zero network connection; data syncs if connectivity returns later (v2). |
| **US.6** | As a gym-goer, I want the app to be mobile-responsive so that I can use my phone at the gym. | **P0** | Mobile-first design; touch-optimized buttons; works on iOS Safari and Android Chrome. | App is fully usable on mobile devices; buttons are large enough for sweaty fingers (min 44x44px). |
| **US.7** | As a gym-goer, I want to delete or edit an incorrect exercise entry so that I can correct mistakes without starting over. | **P1** | Edit/delete buttons for each entry; confirmation modal for deletion (per Constitution Undo Rule). | User can edit any previous entry; deletion shows confirmation "Are you sure?" before removing. |
| **US.8** | As a gym-goer, I want a quick-reference view of today's workout so that I can see what I've already logged and what's left to do. | **P1** | Today's workout summary; progress indicator (e.g., "4 of 6 exercises logged"). | User sees clear "Today's Workout" list on app load; can see at a glance what's complete. |

---

## 5. User Experience & Flow

### **Primary Path: "Log a Workout"**

**Setup (First Time):**
1. User opens web app → sees empty state ("Start your first workout")
2. Guided by prompt: "What's the date of your workout?"
3. Once date selected, app displays "Ready to log. Tap Exercise Name to start."

**Happy Path (Logging Exercise):**
1. User taps **Exercise Name field** → autocomplete list appears (Squat, Bench Press, Deadlift, etc.)
2. User types "Squat" → filtered list shows matches
3. User selects "Squat"
4. User taps **Sets field** → numeric input appears (e.g., "4")
5. User taps **Reps field** → numeric input (e.g., "8")
6. User taps **Weight field** → numeric input in lbs (e.g., "225")
7. User taps **Log** button → entry saved to local storage, form clears
8. **Total time: <10 seconds**
9. App shows: "Squat • 4 sets • 8 reps • 225 lbs ✓" in today's workout list
10. User continues to next exercise or ends session

**Ending a Session:**
1. User taps **"Finish Workout"** button
2. App saves timestamp and displays summary: "Great work! You logged 5 exercises today."
3. Workout is stored in "Past Workouts" history

---

### **Secondary Paths (Edge Cases)**

**Path B: Viewing Past Workouts**
1. User taps **"History"** tab
2. App shows list of past workouts (newest first)
3. Each row: Date, exercise count, and exercises listed (e.g., "Mar 3 • 5 exercises • Squat, Bench, Deadlift...")
4. User taps a past workout → expanded view shows all exercises with sets/reps/weight
5. User can compare to today's workout for progression

**Path C: Editing an Entry**
1. User notices a mistake (entered 225 lbs instead of 185 lbs)
2. User taps the incorrect entry → edit mode activates
3. User changes weight field to 185
4. User taps **"Update"** → entry updated and saved
5. ✅ No re-entry required

**Path D: Deleting an Entry**
1. User realizes they logged the wrong exercise (Squat instead of Leg Press)
2. User taps entry → menu appears with **Edit** and **Delete** options
3. User taps **Delete** → confirmation modal: "Delete this exercise? This cannot be undone."
4. User confirms → entry removed from today's workout

**Path E: Offline Use**
1. User is in gym, WiFi drops
2. User continues logging exercises → app stores data locally (no network call)
3. User completes workout and closes app
4. User leaves gym, WiFi returns → app detects connectivity
5. **v2 feature:** Data syncs to cloud (if user account created)

**Path F: Exporting Data**
1. User taps **"Settings"** → **"Export"**
2. File dialog appears: "Download as CSV?"
3. User confirms → `workout_log_2026-03-05.csv` downloads
4. CSV contains: Date, Exercise, Sets, Reps, Weight (one row per exercise)

---

### **Empty States (Per Constitution Zero-Data State Rule)**

**First Load (No Workouts Yet):**
```
┌─────────────────────────────┐
│  Workout Logger             │
├─────────────────────────────┤
│                             │
│  💪 No workouts yet         │
│                             │
│  Start by logging your      │
│  first exercise:            │
│                             │
│  [Select Exercise]          │
│  [Sets] [Reps] [Weight]     │
│  [ Log ]                    │
│                             │
│  Tip: You can log sets one  │
│  at a time, or enter the    │
│  full exercise at once.     │
│                             │
└─────────────────────────────┘
```

**Completed Workout (No More Exercises):**
```
┌─────────────────────────────┐
│  Today's Workout ✓          │
├─────────────────────────────┤
│  Squat • 4 × 8 • 225 lbs   │
│  Bench • 4 × 6 • 185 lbs   │
│  Deadlift • 3 × 3 • 315 lbs│
│                             │
│  [ Log Another Exercise ]   │
│  [ Finish Workout ]         │
│                             │
└─────────────────────────────┘
```

---

## 6. Technical Constraints & Dependencies

### **Tech Stack (TBD - To Be Refined During `/plan` Phase)**

**Frontend Candidates:**
- React (recommended for rapid iteration and component reusability)
- Vue.js or vanilla HTML/CSS/JS for simplicity

**Storage:**
- Browser localStorage (simple, no backend needed)
- IndexedDB (for larger datasets, more complex queries)

**No External Dependencies Required:**
- ❌ No API backend (v1)
- ❌ No database (local storage only)
- ❌ No third-party SDKs
- ❌ No user authentication

**Performance Requirements:**
- **Time to Interactive:** <2 seconds on 4G mobile
- **Exercise Entry:** <1 second from form input to saved (perceived speed, no network latency)
- **Data Export:** <3 seconds to generate CSV

**Browser Support:**
- iOS Safari 12+
- Android Chrome 80+
- Desktop Chrome/Firefox/Safari (secondary)

**Security & Privacy:**
- **No PII collected:** Only workout data (exercises, sets, reps, weight)
- **Data stored locally:** User retains 100% control (no cloud, no tracking)
- **No analytics:** We do NOT track user behavior (per Constitution Privacy principle)

---

## 7. Out of Scope (The "Anti-Spec")

This section explicitly defines what we are NOT building in v1 to prevent scope creep during implementation.

| Feature | Reason | When Reconsidered |
| :--- | :--- | :--- |
| **User Accounts / Cloud Sync** | Adds authentication complexity; local-only proves hypothesis faster. | v2 (if >70% completion achieved) |
| **Social Features** (sharing, leaderboards, friend challenges) | Contradicts "Clarity EVEN OVER Features" pillar; adds UI complexity. | v3 (post-validation) |
| **Cardio/Running/Yoga Tracking** | Out of scope; only gym strength training. | Separate product v2 |
| **AI Coaching** ("Do 5 more reps!") | Feature richness without clarity; no evidence users want this in logger. | Post-MVP feedback |
| **Advanced Analytics** (graphs, PRs, 1RM calculations) | Complex; distracts from logging friction hypothesis. | v2 (if completion rate validates) |
| **Custom Exercises** | Fixed library reduces data entry friction; custom exercises = more typing. | v2 |
| **Workout Plans / Programs** | Out of scope; app is logger-only, not a program builder. | Separate tool or v3 |
| **Integration with Wearables** (Apple Watch, Fitbit) | v1 is web-only, no device integration. | v2+ |
| **Offline-to-Cloud Sync** | v1 is local only; sync adds complexity. | v2 |
| **Mobile Native Apps** (iOS/Android) | v1 is web; responsive design is sufficient for gym use. | v2 |

**Rationale for Out-of-Scope Items:**

Per ProductKit Constitution principles:
- **Clarity EVEN OVER Features:** We build one focused tool (logging) rather than a feature-bloated app
- **Frictionless Handoff:** Cloud sync, accounts, and social features add friction, not remove it
- **Complete Audit Trail:** Logging data is the MVP; advanced features come later with user feedback

**If a user requests a feature from the "Out of Scope" list, the response is:**
> "That would be great to add after v1 launch. Right now, we're validating that users will actually log 70% of their workouts. Once we prove that, we can add [feature]."

---

## 8. Data Model (Information Architecture)

### **Core Entities**

**Workout (Session)**
```
{
  id: "workout_2026-03-05",
  date: "2026-03-05",
  createdAt: "2026-03-05T14:30:00Z",
  exercises: [ /* array of Exercise records */ ],
  notes: "" (optional)
}
```

**Exercise (Entry)**
```
{
  id: "exercise_uuid",
  name: "Squat",
  sets: 4,
  reps: 8,
  weight: 225,
  unit: "lbs",
  timestamp: "2026-03-05T14:35:00Z",
  notes: "" (optional)
}
```

**Exercise Library (Autocomplete)**
```
[
  "Squat",
  "Bench Press",
  "Deadlift",
  "Barbell Row",
  "Overhead Press",
  "Pull-ups",
  "Leg Press",
  "Leg Curl",
  "Leg Extension",
  "Dumbbell Curl",
  "Tricep Dips",
  ... (50+ common gym exercises)
]
```

**Storage Location:**  
Browser localStorage: `workouts_v1` (JSON array of Workout objects)

---

## 9. Acceptance Criteria (Validation Framework)

The app is **READY FOR BETA** when:

- ✅ User can log an exercise in <10 seconds (timed user test)
- ✅ Data persists in localStorage after page refresh
- ✅ Mobile-responsive design works on iPhone SE and Android phones
- ✅ User can view past 5 workouts in <5 seconds
- ✅ Export to CSV produces valid, importable file
- ✅ All buttons and form fields are accessible (WCAG 2.1 AA)
- ✅ Empty states are designed and guide first-time users
- ✅ Edit/delete functions include confirmation (per Constitution Undo Rule)
- ✅ App works fully offline (no network calls required)
- ✅ All exercises in library are spelled correctly and relevant to gym-goers

The **HYPOTHESIS IS VALIDATED** when:

- ✅ Beta test with 15-20 users shows >70% workout completion rate
- ✅ Median time per entry is <10 seconds
- ✅ >80% of users report "This was fast to use"
- ✅ >60% still active (logging workouts) after 4 weeks
- ✅ NPS score >40

---

## 10. Success Metrics (Recap)

| Metric | Target | How Measured |
| :--- | :--- | :--- |
| **Workout Completion Rate** | >70% | (# logged workouts) / (# workouts user did) × 100 |
| **Time Per Entry** | <10 sec | Timed user testing; in-app event logging (optional v2) |
| **Ease Sentiment** | >80% report "fast to use" | Post-session survey: "This was fast to use" (Y/N) |
| **Retention (4-week)** | >60% active | DAU count after 28 days of launch |
| **NPS Score** | >40 | Survey: "How likely to recommend?" (0-10) |

---

## 📋 Checklist (For `/plan` Phase)

When the technical plan is drafted, verify:

- ✅ All US.1-US.8 requirements are covered by technical tasks
- ✅ Storage strategy (localStorage vs IndexedDB) is chosen and justified
- ✅ Mobile responsiveness is explicitly tested (iOS Safari, Android Chrome)
- ✅ Accessibility audit (WCAG 2.1 AA) is included in task list
- ✅ Export CSV format is specified in detail
- ✅ Empty state UI/UX is designed
- ✅ Launch plan includes beta user recruitment (15-20 gym-goers)
- ✅ Measurement plan is defined (how to track 70% completion rate)

---

## 🤖 AI Instructions for `/plan` Phase

> **When generating the technical implementation plan:**
> 
> 1. ✅ Ensure all requirements in Section 4 (User Stories) are mapped to specific tasks
> 2. ✅ Check every functional requirement against the `product_constitution.md` Pillars:
>    - Does this support "Crystal-Clear Specifications"?
>    - Does this remove friction ("Frictionless Handoffs")?
>    - Is every decision traceable to user need ("Complete Audit Trail")?
> 3. ✅ Verify UX Guardrails are met:
>    - Undo/confirmation for destructive actions (US.7 - delete with modal)
>    - WCAG 2.1 AA accessibility for all buttons/inputs
>    - Empty state designs for first-time users (Section 5)
> 4. ❌ **REJECT any out-of-scope features** (Section 7) that are proposed as "nice to haves"
> 5. ✅ Confirm that <10 second entry time is technically feasible (no hidden API calls, no slow rendering)

---

## ✅ PRD APPROVED FOR `/plan` PHASE

**Status:** Ready for Technical Planning  
**Next Step:** Generate implementation plan in `workout_logger_tech_plan.md`  
**Measurement:** Validate >70% completion rate in beta (4-week sprint)

