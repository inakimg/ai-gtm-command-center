import type { PhaseStatus } from "./types";

export const APP_NAME = "AI GTM Command Center";

export const PHASES: PhaseStatus[] = [
  {
    id: 1,
    name: "Account Research Agent",
    slug: "research",
    status: "active",
    description: "Signal Radar + Account Plan Generator",
  },
  {
    id: 2,
    name: "Top 10 Prioritization",
    slug: "prioritize",
    status: "planned",
    description: "Score and rank target accounts",
  },
  {
    id: 3,
    name: "Champion Mapper",
    slug: "champions",
    status: "planned",
    description: "Bottom-up stakeholder mapping",
  },
  {
    id: 4,
    name: "Shadow AI Risk Agent",
    slug: "shadow-ai",
    status: "planned",
    description: "Security narrative builder",
  },
  {
    id: 5,
    name: "Persona Outbound",
    slug: "outbound",
    status: "planned",
    description: "Sequence generator by persona",
  },
  {
    id: 6,
    name: "Discovery Questions",
    slug: "discovery",
    status: "planned",
    description: "Meeting prep question sets",
  },
  {
    id: 7,
    name: "Role-Play Simulator",
    slug: "roleplay",
    status: "planned",
    description: "Buyer conversation practice",
  },
];

export const CONFIDENCE_LABELS = {
  high: "High confidence",
  medium: "Medium confidence",
  low: "Low confidence",
} as const;

export const SIGNAL_TYPE_LABELS = {
  funding: "Funding",
  hiring: "Hiring",
  tech_stack: "Tech stack",
  news: "News",
  leadership: "Leadership",
  partnership: "Partnership",
  security: "Security",
  other: "Other",
} as const;
