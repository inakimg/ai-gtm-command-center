# SDLC Pain Map for Strategic Selling

Map developer lifecycle pains to Cursor-relevant narratives. Use this in Account Plan Generator context.

## SDLC stages and buyer pains

```
Plan → Code → Review → Test → Deploy → Operate
         ↑                    ↑
    Shadow AI            AI-generated risk
    Context switch       in production
```

## Pain map by stage

| SDLC stage | Common pain | Signals to research | Cursor narrative (hypothesis) |
|------------|-------------|---------------------|----------------------------|
| **Plan / Design** | Specs out of sync with code | Jira + Confluence + AI experiments | Repo-aware AI helps align implementation |
| **Code** | Slow onboarding, legacy code fear | Hiring spikes, monorepo mentions | Codebase indexing speeds ramp-up |
| **Code** | Shadow AI in browser tabs | AppSec hiring, AI policy job mentions | Govern AI where code is written |
| **Review** | AI PRs lack context | Review bottleneck complaints | In-IDE generation → reviewable diffs |
| **Test** | Flaky tests, low coverage | QA automation hiring | AI assists test authoring (validate) |
| **Deploy** | Pipeline complexity | Platform eng hiring | Less direct — partner with DevOps narrative |
| **Operate** | Incidents from bad AI code | Postmortem culture (hard to source) | Prevention via IDE governance |

## Persona × pain matrix

| Persona | Top pain | Metric they care about |
|---------|----------|------------------------|
| VP Engineering | Feature velocity | Cycle time, PR throughput |
| VP AppSec | Unapproved AI tools | Policy violations, audit findings |
| Staff Engineer | Refactor risk | Defect rate, review time |
| DX / Platform | Tool sprawl | Developer NPS, support tickets |
| Procurement | Vendor consolidation | Seat count, contract simplicity |

## Account research checklist

Use Signal Radar to find evidence for each row:

- [ ] Hiring: platform, AppSec, AI engineer roles
- [ ] Tech stack: Copilot, internal LLM gateway, Cursor mentions
- [ ] Leadership: new VP Eng / CISO / DX
- [ ] News: digital transformation, AI mandate
- [ ] Security: shadow AI, data leakage incidents (only if sourced)

## Facts vs hypotheses

| Type | Example |
|------|---------|
| **Fact** | "12 open roles for AI Platform Engineer (LinkedIn, Jun 2026)" |
| **Hypothesis** | "Platform team lacks unified AI coding governance" |
| **Never say** | "They lost $2M from shadow AI" (unless sourced incident) |

## Next step in Command Center

Phase 1 Account Plan turns this pain map into account-specific sections. Phase 4 Shadow AI Risk Agent will deep-dive security narratives.
