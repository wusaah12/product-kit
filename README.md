# ProductKit

**A framework for turning ideas into shipped products with clarity, speed, and confidence.**

ProductKit is an opinionated system for managing the journey from customer insight to implementation. It eliminates ambiguity, enforces clear handoffs between roles, and provides AI-assisted workflows to accelerate product development without sacrificing quality.

---

## 🎯 What Problem Does ProductKit Solve?

Building products is messy. Ideas get lost in translation, requirements are ambiguous, handoffs fail, and teams waste weeks on rework. ProductKit fixes this by:

- **Eliminating ambiguity** upfront with structured specifications
- **Creating clear handoffs** between Product, Design, and Engineering roles
- **Accelerating iteration** through AI-assisted specification and planning
- **Maintaining a complete audit trail** of decisions and assumptions
- **Scaling teams** without sacrificing clarity or speed

---

## 🏗️ Core Principles

ProductKit is built on five non-negotiable principles:

### I. Customer-Centric Requirements
Real user needs—not assumptions—drive all features. Every requirement traces back to a validated problem.

### II. Clear Handoff Protocol
Specifications are the contract between roles. All ambiguity is resolved before handoff; incomplete specs block progress.

### III. Actionable & Testable Specifications
Requirements are concrete, measurable, and implementable. Vague language ("user-friendly," "intuitive") is forbidden without definition.

### IV. Collaborative Transparency
All stakeholders have visibility into the same requirements and decisions. Assumptions and trade-offs are documented.

### V. Iterative Validation
Requirements evolve through feedback loops with real users. Small iterations beat perfect-on-first-try planning.

---

## 🚀 The ProductKit Workflow

ProductKit guides you through a structured workflow from idea to implementation:

```
Discovery
    ↓
Hypothesis [HYP-001]
    ↓
PRD (Product Requirements Document)
    ↓
Specification [spec.md]
    ↓
Plan [plan.md]
    ↓
Tasks [tasks.md]
    ↓
Implementation
    ↓
Validation
```

Each stage builds on the previous one, with clear handoff criteria and AI-assisted generation.

### Stage 1: Hypothesis
Document your core assumption in the form:
> "If we [build feature X] for [specific persona], then [measurable outcome Z] will happen."

**Files:** `.product-kit/active_specs/*_hypothesis.md`

### Stage 2: PRD (Product Requirements Document)
Transform the hypothesis into a detailed requirements document with:
- Executive summary
- Problem statement and evidence
- User stories and functional requirements
- Success metrics and KPIs
- Out-of-scope items

**Files:** `.product-kit/active_specs/*_prd.md`

### Stage 3: Specification (spec.md)
Deep dive into implementation details:
- Detailed functional requirements
- User flows and edge cases
- Technical constraints
- Data models and API contracts
- Acceptance criteria for each story

### Stage 4: Plan (plan.md)
High-level architecture and implementation strategy:
- System design decisions
- Tech stack and dependencies
- Phasing and release plan
- Risk mitigation strategies

### Stage 5: Tasks (tasks.md)
Actionable, dependency-ordered tasks ready for implementation:
- Grouped by feature and priority
- Includes exact file paths
- Clear acceptance criteria
- Dependencies marked

### Stage 6: Implementation
Execute tasks and validate against specs.

---

## 📁 Project Structure

```
product-kit/
├── README.md                          # This file
├── .product-kit/                      # ProductKit definition
│   ├── product_constitution.md        # Core values, pillars, trade-offs
│   ├── active_specs/                  # Active project specifications
│   │   ├── data_scientist_git_hypothesis.md
│   │   ├── workout_logger_hypothesis.md
│   │   └── workout_logger_prd.md
│   └── templates/                     # Reusable specification templates
│       ├── hypothesis-template.md    # Hypothesis template
│       ├── prd-template.md            # PRD template
│       ├── spec-template.md           # Detailed spec template
│       ├── plan-template.md           # Implementation plan template
│       ├── tasks-template.md          # Task list template
│       ├── checklist-template.md      # Feature checklist template
│       ├── constitution-template.md
│       └── agent-file-template.md     # Development guidelines
├── .specify/                          # Specification framework directory
│   ├── templates/                     # Global templates
│   │   └── [shared templates]
│   └── notes/                         # Project documentation
├── .github/
│   ├── agents/                        # Speckit AI agents
│   │   ├── speckit.specify.agent.md
│   │   ├── speckit.plan.agent.md
│   │   ├── speckit.tasks.agent.md
│   │   ├── speckit.implement.agent.md
│   │   ├── speckit.clarify.agent.md
│   │   ├── speckit.analyze.agent.md
│   │   ├── speckit.checklist.agent.md
│   │   └── speckit.taskstoissues.agent.md
│   └── prompts/                       # Agent system prompts
│       ├── speckit.specify.prompt.md
│       ├── speckit.plan.prompt.md
│       ├── speckit.tasks.prompt.md
│       └── [other agent prompts]
├── .vscode/                           # VS Code configuration
│   └── settings.json
└── .git/                              # Git repository

```

---

## 🤖 AI-Assisted Workflows (Speckit Agents)

ProductKit includes specialized AI agents that accelerate each stage:

### **speckit.specify**
Transforms a feature idea into a detailed PRD
- Asks clarifying questions to resolve ambiguity
- Generates structured requirements
- Maps user stories to success metrics

### **speckit.plan**
Creates a technical implementation plan
- Proposes system architecture
- Identifies dependencies and risks
- Suggests phasing and milestones

### **speckit.tasks**
Generates actionable, dependency-ordered tasks
- Creates task list with exact file paths
- Marks dependencies between tasks
- Includes acceptance criteria

### **speckit.implement**
Orchestrates the implementation of all tasks
- Coordinates execution across tasks
- Validates completion against specs
- Tracks progress and blockers

### **speckit.clarify**
Identifies underspecified requirements
- Asks targeted clarification questions
- Resolves ambiguities in existing specs
- Validates completeness

### **speckit.analyze**
Quality checks specs, plans, and tasks
- Validates cross-artifact consistency
- Identifies gaps and contradictions
- Flags risk areas

### **speckit.checklist**
Generates custom feature checklists
- Creates quality gates for implementation
- Maps checklist items to tasks
- Enables progress tracking

### **speckit.taskstoissues**
Converts tasks into GitHub issues
- Creates properly formatted GitHub issues
- Preserves task dependencies
- Auto-assigns to team members

---

## 🔑 Core Components

### **Product Constitution**
The foundation of ProductKit. Defines:
- **Core Principles:** Non-negotiable values (shown above)
- **Core Product Pillars:** What we will not compromise on
- **Strategic Trade-offs:** "Even Over" rules for decision-making
- **Voice & Tone:** How ProductKit communicates
- **Target Personas:** Who ProductKit serves
- **Anti-Personas:** Who we explicitly do NOT serve

**File:** `.product-kit/product_constitution.md`

### **Templates**
Starting points for specifications at each stage:
- **Hypothesis Template:** Captures core assumption with evidence
- **PRD Template:** Structures requirements and success metrics
- **Spec Template:** Details behavior, flows, and acceptance criteria
- **Plan Template:** High-level implementation strategy
- **Tasks Template:** Actionable task list with dependencies
- **Checklist Template:** Quality gates and validation steps

**Directory:** `.product-kit/templates/`

### **Active Specifications**
Real projects in various stages:
- **Data Scientist Git Tool** (Discovery stage)
- **Workout Logger** (In Review)

**Directory:** `.product-kit/active_specs/`

---

## 🎓 How to Use ProductKit

### **Starting a New Project**

1. **Create a Hypothesis**
   ```bash
   # Copy the hypothesis template
   cp .product-kit/templates/hypothesis-template.md \
      .product-kit/active_specs/my_project_hypothesis.md
   ```
   
   Fill in:
   - Your core assumption
   - Supporting evidence
   - Key questions to answer
   - Success metrics
   - How you'll test it

2. **Write a PRD**
   ```bash
   # Copy the PRD template
   cp .product-kit/templates/prd-template.md \
      .product-kit/active_specs/my_project_prd.md
   ```
   
   Use the **speckit.specify** agent to transform your hypothesis into a detailed PRD:
   - Define the problem and evidence
   - List user stories and requirements
   - Specify success metrics
   - Call out non-goals and scope boundaries

3. **Generate a Specification (spec.md)**
   Use the **speckit.specify** agent to create `spec.md`:
   - Detailed requirements and user flows
   - Edge cases and error handling
   - Technical constraints and dependencies
   - Acceptance criteria per user story

4. **Create an Implementation Plan (plan.md)**
   Use the **speckit.plan** agent to generate `plan.md`:
   - System architecture and design decisions
   - Tech stack selection
   - Phasing and release plan
   - Risk identification and mitigation

5. **Generate Tasks (tasks.md)**
   Use the **speckit.tasks** agent to create `tasks.md`:
   - Dependency-ordered task list
   - Exact file paths for implementation
   - Acceptance criteria for each task
   - Story grouping and priority levels

6. **Execute and Validate**
   - Use **speckit.implement** to orchestrate task execution
   - Track progress against spec.md
   - Update requirements if assumptions change

---

## 🎯 Key Features

### **Structured Handoffs**
- Specifications are contracts, not suggestions
- Clear acceptance criteria prevent interpretation gaps
- Every requirement has a source (customer insight, research, or team decision)

### **Ambiguity Detection**
- Vague language is flagged automatically
- Measurements are required for all metrics
- "Nice to have" features are explicitly separated from P0 requirements

### **Full Traceability**
- Every feature traces back to a hypothesis
- Every task traces back to a user story
- Every decision is documented with its rationale

### **Iterative Refinement**
- Specs can be clarified at any stage
- **speckit.clarify** identifies gaps before implementation starts
- Learning from early iterations feeds back into requirements

### **Team Scaling**
- Onboard new developers with unambiguous specs
- No "tribal knowledge"
- Clear ownership and decision history

---

## 💡 Example Projects

ProductKit includes working examples at various stages:

### **Workout Logger** (Most Complete)
A frictionless web app for logging gym workouts in <10 seconds per exercise.
- **Status:** PRD approved, ready for spec → plan → tasks
- **Files:** 
  - `active_specs/workout_logger_hypothesis.md`
  - `active_specs/workout_logger_prd.md`

### **Data Scientist Git Tool** (Discovery)
Helping data scientists feel comfortable with Git through training, tooling, or platform integration.
- **Status:** Hypothesis in discovery, multiple directions being explored
- **Files:** `active_specs/data_scientist_git_hypothesis.md`

### **Freddie Mac Chatbot** (In Progress)

## 🛠️ Customization & Extension

### **Adapt the Constitution**
Edit `.product-kit/product_constitution.md` to define your organization's values, pillars, and trade-offs. All other templates will align to it.

### **Create Custom Templates**
Add new templates to `.product-kit/templates/` for specialized document types (e.g., security review, data model spec).

### **Integrate with Your Workflow**
ProductKit specs integrate seamlessly with:
- GitHub Issues (use **speckit.taskstoissues** to auto-generate)
- Jira/Linear (import tasks.md)
- Design tools (reference design from spec.md)
- CI/CD pipelines (use acceptance criteria for automated testing)

---

## 🚦 Status Definitions

ProductKit tracks status through its lifecycle:

| Status | Meaning |
| :--- | :--- |
| **Discovery** | Exploring the problem space, gathering evidence |
| **Testing** | Running experiments, validating hypothesis |
| **Validated** | Hypothesis proven, ready to move to PRD |
| **Refuted** | Hypothesis disproven, archived |
| **Draft** | PRD in progress, not ready for spec stage |
| **In-Review** | PRD complete, awaiting stakeholder approval |
| **Approved** | Ready for spec → plan → tasks → implementation |
| **Implemented** | Feature shipped and in production |

---

## 📚 Best Practices

### **Requirements Clarity**
- Use measurable metrics, not vague adjectives
- Include exact thresholds (e.g., "< 2 seconds" not "fast")
- Define acceptance criteria before starting implementation

### **Handoff Discipline**
- Never move to the next stage without resolving ambiguities
- Use **speckit.clarify** to identify gaps
- Document trade-offs and "why not" decisions

### **Iterative Validation**
- Run early prototypes against specs
- Update specs when assumptions prove wrong
- Keep the audit trail (don't delete changes, mark them as "superseded")

### **Scope Management**
- Be aggressive about non-goals
- Reference the constitution when prioritizing
- Say "yes" only if it aligns with a core pillar

---

## 🤝 Contributing

ProductKit evolves through feedback. To improve it:

1. **Report Issues:** If a template is incomplete or ambiguous, file a GitHub issue
2. **Suggest Templates:** If you need a new document type, propose it with examples
3. **Share Results:** Document how ProductKit improved your workflow; we learn from real usage

---

## 📖 Further Reading

- **[Product Constitution](./.product-kit/product_constitution.md):** Core values and principles
- **[Hypothesis Template](./.product-kit/templates/hypothesis-template.md):** How to capture assumptions
- **[PRD Template](./.product-kit/templates/prd-template.md):** How to write requirements
- **[Tasks Template](./.product-kit/templates/tasks-template.md):** How to break work into actionable steps

---

## 📝 License

[Add your license here, e.g., MIT, Apache 2.0, etc.]

---

## 🎓 FAQ

**Q: When should I use ProductKit?**  
A: Use ProductKit for any project where clarity across roles is critical. Works best for teams of 2+ or solo makers building for others.

**Q: Can I skip stages (e.g., go straight from idea to spec)?**  
A: No. The hypothesis stage forces you to validate assumptions before investing in detailed specs. This saves massive rework.

**Q: How long does it take to use ProductKit?**  
A: A simple hypothesis takes 30 minutes. A PRD takes 2-4 hours. A full spec → plan → tasks pipeline takes 2-5 days, depending on complexity.

**Q: Can I use ProductKit for non-software projects?**  
A: Yes. The templates are generic enough for any product (physical, service, content, etc.).

**Q: How does ProductKit work with Agile/Scrum?**  
A: ProductKit's spec → plan → tasks maps cleanly to sprint planning. Use tasks.md as your backlog, leverage AI agents to generate epics and user stories.

---

**Created:** 2026-03-06  
**Last Updated:** 2026-03-06  
**Version:** 1.0.0
