# AI GTM Command Center

AI-native account research and planning workflow for strategic sellers.

Turn fragmented research across Gemini, Claude, LinkedIn, CRM, news, and spreadsheets into one command center with clear facts, hypotheses, and confidence levels.

## What it does (Phase 1)

**Account Research Agent** combines:

1. **Account Signal Radar** — scans hiring, news, leadership, tech stack, and partnership signals
2. **Account Plan Generator** — builds executive summary, sections, checklists, and next actions

### Core rules

- **Sourced facts** and **hypotheses** are always separated
- **Never invent customer claims** or fake logos/quotes
- Every item has a **confidence level** (high / medium / low)
- **Source links** included where possible
- **Mock data** used when no AI API key is configured

## Tech stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 16 (App Router) | Vercel-native, fast to deploy |
| Language | TypeScript | Type-safe agent outputs |
| Styling | Tailwind CSS v4 | Clean, ADHD-friendly UI |
| AI | OpenAI (optional) | JSON-mode structured outputs |
| Data | Mock-first | Works offline, no API required |

## Quick start

```bash
npm install
cp .env.example .env.local   # optional: add OPENAI_API_KEY
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) → **Account Research Agent**

## Deploy to Vercel

1. Push this repo to GitHub
2. Import in [vercel.com/new](https://vercel.com/new)
3. Add environment variable `OPENAI_API_KEY` (optional)
4. Deploy

## Project structure

```
src/
├── app/
│   ├── page.tsx              # Dashboard
│   ├── research/page.tsx     # Phase 1 workflow
│   └── api/research/         # Signal + plan endpoints
├── components/
│   ├── research/             # Workflow UI
│   ├── layout/               # Sidebar
│   └── ui/                   # Cards, badges, steps
└── lib/
    ├── types.ts              # Shared types
    ├── mock-data.ts          # Mock signal + plan data
    └── ai/provider.ts        # Live AI with mock fallback
docs/                         # GTM + Cursor reference docs
```

## Phase roadmap

| Phase | Agent | Status |
|-------|-------|--------|
| 1 | Account Research (Signal Radar + Plan) | ✅ Active |
| 2 | Top 10 Account Prioritization | Planned |
| 3 | Bottom-Up Champion Mapper | Planned |
| 4 | Shadow AI Risk Agent | Planned |
| 5 | Persona Outbound Sequence Generator | Planned |
| 6 | Discovery Question Generator | Planned |
| 7 | Interview Role-Play Simulator | Planned |

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENAI_API_KEY` | No | Enables live AI research |
| `OPENAI_MODEL` | No | Default: `gpt-4o-mini` |

## Docs

See the [`docs/`](./docs/) folder for:

- Cursor competitive positioning (`why-cursor.md`, `cursor-vs-*.md`)
- SDLC pain mapping and Singapore market plan
- Discovery questions and interview stories for seller prep

## License

Private — for strategic account executive workflow use.
