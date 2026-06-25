export type ConfidenceLevel = "high" | "medium" | "low";

export type SignalType =
  | "funding"
  | "hiring"
  | "tech_stack"
  | "news"
  | "leadership"
  | "partnership"
  | "security"
  | "other";

export type DataMode = "live" | "mock";

export interface AccountInput {
  accountName: string;
  domain?: string;
  industry?: string;
  notes?: string;
}

export interface SourcedFact {
  id: string;
  claim: string;
  source: string;
  sourceUrl?: string;
  confidence: ConfidenceLevel;
  dateObserved?: string;
  signalType: SignalType;
}

export interface Hypothesis {
  id: string;
  statement: string;
  reasoning: string;
  confidence: ConfidenceLevel;
  relatedFactIds: string[];
  validationQuestions: string[];
}

export interface SignalRadarResult {
  accountName: string;
  domain?: string;
  researchedAt: string;
  mode: DataMode;
  facts: SourcedFact[];
  hypotheses: Hypothesis[];
  summary: string;
}

export interface PlanAction {
  action: string;
  priority: "high" | "medium" | "low";
  owner?: string;
}

export interface AccountPlanSection {
  title: string;
  content: string;
  checklist?: string[];
}

export interface AccountPlanResult {
  accountName: string;
  generatedAt: string;
  mode: DataMode;
  executiveSummary: string;
  whyNow: {
    label: string;
    type: "fact" | "hypothesis";
    referenceId?: string;
  };
  sections: AccountPlanSection[];
  nextActions: PlanAction[];
  risks: Hypothesis[];
}

export interface ResearchSession {
  input: AccountInput;
  signals?: SignalRadarResult;
  plan?: AccountPlanResult;
}

export type WorkflowStep = "input" | "signals" | "review" | "plan" | "complete";

export interface PhaseStatus {
  id: number;
  name: string;
  slug: string;
  status: "active" | "planned" | "complete";
  description: string;
}
