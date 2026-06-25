import type {
  AccountInput,
  AccountPlanResult,
  SignalRadarResult,
} from "./types";

export function getMockSignalRadar(input: AccountInput): SignalRadarResult {
  const account = input.accountName;
  const domain = input.domain ?? `${account.toLowerCase().replace(/\s+/g, "")}.com`;

  return {
    accountName: account,
    domain,
    researchedAt: new Date().toISOString(),
    mode: "mock",
    summary: `${account} shows multiple buying signals: AI platform hiring, security leadership changes, and public statements about developer productivity. Mock data — connect an API key for live research.`,
    facts: [
      {
        id: "f1",
        claim: `${account} posted 12 open roles for "AI Platform Engineer" and "Developer Experience" in the last 30 days.`,
        source: "LinkedIn Jobs (mock)",
        sourceUrl: `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(account)}`,
        confidence: "high",
        dateObserved: "2026-06-01",
        signalType: "hiring",
      },
      {
        id: "f2",
        claim: `${account} announced a partnership with a cloud provider to modernize internal developer tooling.`,
        source: "Company press release (mock)",
        sourceUrl: `https://${domain}/news`,
        confidence: "medium",
        dateObserved: "2026-05-15",
        signalType: "partnership",
      },
      {
        id: "f3",
        claim: `Job descriptions mention GitHub Copilot, internal LLM gateways, and "shadow AI" policy reviews.`,
        source: "Job posting analysis (mock)",
        sourceUrl: `https://${domain}/careers`,
        confidence: "medium",
        dateObserved: "2026-06-10",
        signalType: "tech_stack",
      },
      {
        id: "f4",
        claim: `A new VP of Application Security joined ${account} within the last 90 days.`,
        source: "LinkedIn profile change (mock)",
        sourceUrl: "https://www.linkedin.com/search/results/people/",
        confidence: "high",
        dateObserved: "2026-04-20",
        signalType: "leadership",
      },
      {
        id: "f5",
        claim: `Industry news coverage references ${account} expanding engineering headcount in Singapore and North America.`,
        source: "Tech news aggregator (mock)",
        sourceUrl: "https://news.google.com",
        confidence: "low",
        dateObserved: "2026-05-28",
        signalType: "news",
      },
    ],
    hypotheses: [
      {
        id: "h1",
        statement: `${account} is standardizing AI-assisted development but lacks centralized governance.`,
        reasoning:
          "Hiring for AI platform roles plus job mentions of LLM gateways and shadow AI policy suggests organic adoption ahead of formal controls.",
        confidence: "medium",
        relatedFactIds: ["f1", "f3"],
        validationQuestions: [
          "Who owns AI tooling decisions across engineering today?",
          "Do you have a single approved path for AI coding assistants?",
          "How are you measuring productivity vs. security risk?",
        ],
      },
      {
        id: "h2",
        statement: "Security leadership change may create a window for developer security tooling evaluation.",
        reasoning:
          "New AppSec VP often reviews toolchain within first 6 months; hiring and partnership signals suggest active transformation.",
        confidence: "medium",
        relatedFactIds: ["f2", "f4"],
        validationQuestions: [
          "What is on your AppSec 100-day plan?",
          "Are you consolidating dev tools under a single platform team?",
        ],
      },
      {
        id: "h3",
        statement: `${account} may be piloting multiple AI vendors without a unified seller narrative.`,
        reasoning:
          "Tech stack signals reference Copilot and internal gateways — common pattern before platform selection.",
        confidence: "low",
        relatedFactIds: ["f3"],
        validationQuestions: [
          "Which AI coding tools are approved vs. tolerated vs. blocked?",
          "Is there an RFI or bake-off planned this quarter?",
        ],
      },
    ],
  };
}

export function getMockAccountPlan(
  input: AccountInput,
  signals: SignalRadarResult
): AccountPlanResult {
  const account = input.accountName;

  return {
    accountName: account,
    generatedAt: new Date().toISOString(),
    mode: "mock",
    executiveSummary: `${account} is in an active transformation window driven by AI platform hiring, new security leadership, and public modernization initiatives. Lead with developer productivity + governance — not generic AI hype. This plan uses mock signal data; validate every hypothesis in discovery.`,
    whyNow: {
      label: "New VP AppSec + AI platform hiring surge in last 30 days",
      type: "fact",
      referenceId: "f1",
    },
    sections: [
      {
        title: "Account context",
        content: `${account} operates in ${input.industry ?? "enterprise software"}. Engineering appears to be scaling AI-assisted development while formalizing security oversight.`,
        checklist: [
          "Confirm primary business unit owning developer tooling",
          "Identify fiscal year and budget cycle",
          "Map existing AI assistant approvals",
        ],
      },
      {
        title: "Pain hypothesis map",
        content:
          "Likely pains: fragmented AI tool adoption, inconsistent code review for AI-generated code, shadow AI usage, and pressure to show productivity gains without increasing risk.",
        checklist: [
          "Validate top 3 pains with a technical champion",
          "Quantify cost of developer context-switching",
          "Document current shadow AI incidents (if any)",
        ],
      },
      {
        title: "Stakeholder map (draft)",
        content:
          "Target personas: VP Engineering (productivity mandate), VP AppSec (governance mandate), Platform/DX team (implementation), procurement (commercial).",
        checklist: [
          "Find 2–3 bottom-up champions on platform team",
          "Identify economic buyer for dev tooling",
          "Locate security reviewer early",
        ],
      },
      {
        title: "Competitive / status quo",
        content:
          "Status quo likely includes GitHub Copilot, chat-based LLMs, and internal policy docs. Do not assume displacement — position as governance + workflow layer.",
        checklist: [
          "Ask what is working with current tools",
          "Ask what breaks at scale",
          "Ask who blocks adoption today",
        ],
      },
      {
        title: "Meeting strategy",
        content:
          "Open with curiosity about their AI SDLC roadmap. Share patterns from similar accounts (without inventing customer claims). Propose a 30-minute technical discovery, not a demo.",
        checklist: [
          "Send 3 tailored discovery questions pre-call",
          "Prepare 1-page shadow AI risk brief",
          "Define success criteria for next meeting",
        ],
      },
    ],
    nextActions: [
      {
        action: `Research 3 platform engineers at ${account} on LinkedIn`,
        priority: "high",
        owner: "AE",
      },
      {
        action: "Draft discovery email referencing AI platform hiring signal",
        priority: "high",
        owner: "AE",
      },
      {
        action: "Build shadow AI talking points tailored to AppSec persona",
        priority: "medium",
        owner: "AE",
      },
      {
        action: "Log sourced facts vs. hypotheses in CRM",
        priority: "medium",
        owner: "AE",
      },
      {
        action: "Schedule internal deal review with SE",
        priority: "low",
        owner: "AE",
      },
    ],
    risks: signals.hypotheses.filter((h) => h.confidence === "low"),
  };
}
