const personas = [
  {
    name: "CTO",
    pain: "innovation velocity without weakening architecture or governance",
    value: "Cursor accelerates engineering throughput while preserving enterprise controls, model choice, and codebase context.",
    cues: ["architecture", "velocity", "risk", "strategy"],
  },
  {
    name: "CIO",
    pain: "standardizing AI tools across teams with measurable adoption and security",
    value: "Cursor gives IT a governed AI coding platform with deployment controls, usage visibility, and enterprise support.",
    cues: ["standardize", "adoption", "portfolio", "governance"],
  },
  {
    name: "VP Engineering",
    pain: "shipping roadmap commitments with fewer developer bottlenecks",
    value: "Cursor helps teams move from issue to pull request faster by keeping AI assistance inside the developer workflow.",
    cues: ["roadmap", "cycle time", "quality", "team"],
  },
  {
    name: "Head of Developer Productivity",
    pain: "removing friction across build, test, review, and onboarding workflows",
    value: "Cursor improves developer flow by combining repo-aware assistance, agents, and IDE-native collaboration.",
    cues: ["developer experience", "onboarding", "workflow", "measurement"],
  },
  {
    name: "Platform Engineering Leader",
    pain: "enabling teams without creating unmanaged tool sprawl",
    value: "Cursor can be rolled out with centralized controls while still fitting individual engineering workflows.",
    cues: ["platform", "enablement", "standards", "self-service"],
  },
  {
    name: "Staff Engineer",
    pain: "trusting AI on complex code changes without losing technical control",
    value: "Cursor keeps expert engineers in the loop with codebase-aware context, reviewable diffs, and iterative agent workflows.",
    cues: ["codebase", "refactor", "review", "control"],
  },
  {
    name: "Engineering Manager",
    pain: "improving team output while maintaining quality and coaching junior engineers",
    value: "Cursor helps managers reduce delivery drag and ramp engineers faster without replacing engineering judgment.",
    cues: ["team", "quality", "coaching", "delivery"],
  },
  {
    name: "CISO",
    pain: "protecting source code, secrets, and policy compliance as AI coding tools spread",
    value: "Cursor supports enterprise security reviews with privacy controls, admin policies, and governance-ready deployment options.",
    cues: ["security", "privacy", "policy", "compliance"],
  },
  {
    name: "Head of AppSec",
    pain: "preventing vulnerable AI-generated code from reaching production",
    value: "Cursor keeps security inside the development loop by supporting secure coding workflows, review, and controlled adoption.",
    cues: ["vulnerability", "secure coding", "review", "risk"],
  },
  {
    name: "Security Architect",
    pain: "understanding data flows, identity, logging, and model boundaries",
    value: "Cursor can be evaluated against enterprise architecture requirements for identity, data handling, and auditability.",
    cues: ["identity", "logging", "data", "architecture"],
  },
  {
    name: "Procurement",
    pain: "justifying spend, vendor risk, and commercial terms",
    value: "Cursor connects usage and productivity gains to a business case that supports vendor consolidation and ROI.",
    cues: ["price", "terms", "vendor", "roi"],
  },
  {
    name: "CFO",
    pain: "funding AI investment with credible productivity impact",
    value: "Cursor can be tied to measurable cycle-time, onboarding, retention, and engineering capacity outcomes.",
    cues: ["roi", "cost", "capacity", "business case"],
  },
  {
    name: "Skeptical developer",
    pain: "avoiding hype, interruptions, and low-quality AI suggestions",
    value: "Cursor gives developers controllable, context-aware help in the editor instead of forcing a separate chatbot workflow.",
    cues: ["workflow", "trust", "quality", "control"],
  },
  {
    name: "Existing Copilot power user",
    pain: "knowing whether Cursor is meaningfully better than a familiar assistant",
    value: "Cursor differentiates through deeper codebase context, agentic workflows, and IDE-native iteration beyond autocomplete.",
    cues: ["copilot", "autocomplete", "agent", "context"],
  },
  {
    name: "CLI-native engineer using Claude Code or Codex",
    pain: "deciding when an IDE-native agent is better than a terminal-first flow",
    value: "Cursor complements agentic coding with visual diffs, editor context, and collaboration where engineers already review code.",
    cues: ["cli", "terminal", "agent", "diff"],
  },
  {
    name: "Enterprise buyer evaluating Windsurf or Devin",
    pain: "choosing the AI coding platform that best balances adoption, capability, and control",
    value: "Cursor positions around developer-loved adoption, mature IDE workflows, enterprise controls, and practical agent experiences.",
    cues: ["windsurf", "devin", "evaluation", "platform"],
  },
];

const scenarios = [
  {
    name: "First discovery call",
    question: "Before we go deep, tell me why this is worth my team's time right now.",
    focus: "uncover current initiatives, pain, stakeholders, and success metrics",
  },
  {
    name: "Technical evaluation",
    question: "How would we prove this works on our real codebase instead of a toy demo?",
    focus: "define repo selection, technical success criteria, workflow fit, and champions",
  },
  {
    name: "Security review",
    question: "What exactly happens to our source code and prompts when engineers use this?",
    focus: "clarify data handling, controls, policy requirements, and security stakeholders",
  },
  {
    name: "Executive business case",
    question: "Productivity tools sound nice, but how does this become a board-level business case?",
    focus: "connect engineering outcomes to revenue, cost, risk, and capacity",
  },
  {
    name: "Competitive displacement",
    question: "We already have another AI coding tool. Why should we consider switching?",
    focus: "compare workflow gaps, adoption, measurable outcomes, and migration risk",
  },
  {
    name: "Pilot design",
    question: "What would a serious pilot look like, and how do we avoid a science project?",
    focus: "set scope, participants, metrics, enablement, governance, and decision process",
  },
  {
    name: "Deal review",
    question: "What are the biggest risks that could stop this from closing?",
    focus: "identify blockers, mutual plan gaps, decision criteria, and next actions",
  },
  {
    name: "Tree House-style interview simulation",
    question: "I am going to be blunt: show me you can interview like a strategic seller, not pitch like a vendor.",
    focus: "demonstrate crisp discovery, synthesis, curiosity, and executive presence",
  },
];

const competitors = [
  {
    name: "No named competitor",
    objection: "I am not sure AI coding tools are a priority yet.",
    cues: [],
  },
  {
    name: "GitHub Copilot",
    objection: "We already have Copilot and developers like it.",
    cues: ["copilot", "github", "autocomplete"],
  },
  {
    name: "Claude Code",
    objection: "Our strongest engineers prefer Claude Code in the terminal.",
    cues: ["claude", "cli", "terminal"],
  },
  {
    name: "Codex",
    objection: "Codex is already part of how some teams experiment with agents.",
    cues: ["codex", "agent", "openai"],
  },
  {
    name: "Windsurf",
    objection: "Windsurf is also in the evaluation and looks similar on paper.",
    cues: ["windsurf", "evaluation"],
  },
  {
    name: "Devin",
    objection: "Leadership is interested in Devin because it sounds more autonomous.",
    cues: ["devin", "autonomous"],
  },
];

const scoreDimensions = [
  {
    key: "discoveryDepth",
    label: "Discovery depth",
    note: "Asks about pain, current state, impact, and success criteria.",
    cues: ["why", "how", "what", "current", "today", "success", "criteria", "pain", "impact"],
  },
  {
    key: "businessAcumen",
    label: "Business acumen",
    note: "Connects engineering work to ROI, revenue, cost, risk, or capacity.",
    cues: ["roi", "revenue", "cost", "risk", "capacity", "business", "board", "margin", "time"],
  },
  {
    key: "technicalCuriosity",
    label: "Technical curiosity",
    note: "Explores workflows, codebase, architecture, tools, and evaluation design.",
    cues: ["repo", "codebase", "workflow", "architecture", "stack", "pull request", "test", "review"],
  },
  {
    key: "personaRelevance",
    label: "Persona relevance",
    note: "Uses language and priorities that fit the selected buyer.",
    cues: [],
  },
  {
    key: "competitiveClarity",
    label: "Competitive clarity",
    note: "Differentiates without dismissing alternatives.",
    cues: ["different", "compare", "tradeoff", "copilot", "claude", "codex", "windsurf", "devin", "cursor"],
  },
  {
    key: "objectionHandling",
    label: "Objection handling",
    note: "Acknowledges the concern, reframes it, and validates with evidence.",
    cues: ["understand", "fair", "makes sense", "concern", "validate", "prove", "test", "evidence"],
  },
  {
    key: "selfAwareness",
    label: "Self-awareness",
    note: "Avoids overclaiming and names assumptions or unknowns.",
    cues: ["assume", "might", "could", "learn", "validate", "not sure", "depends", "hypothesis"],
  },
  {
    key: "bottomUpTopDown",
    label: "Bottom-up/top-down thinking",
    note: "Balances developer adoption with executive sponsorship.",
    cues: ["developer", "engineer", "leader", "executive", "sponsor", "adoption", "team", "stakeholder"],
  },
  {
    key: "securityGovernance",
    label: "Security/governance understanding",
    note: "Addresses privacy, policy, compliance, admin controls, and review.",
    cues: ["security", "privacy", "governance", "compliance", "admin", "policy", "data", "audit"],
  },
  {
    key: "nextStepControl",
    label: "Next-step control",
    note: "Ends with a concrete mutual next step.",
    cues: ["next step", "schedule", "pilot", "workshop", "align", "decision", "mutual", "follow up"],
  },
];

const state = {
  currentResult: null,
};

const personaSelect = document.querySelector("#personaSelect");
const scenarioSelect = document.querySelector("#scenarioSelect");
const competitorSelect = document.querySelector("#competitorSelect");
const startButton = document.querySelector("#startButton");
const resetButton = document.querySelector("#resetButton");
const scoreButton = document.querySelector("#scoreButton");
const sampleButton = document.querySelector("#sampleButton");
const saveButton = document.querySelector("#saveButton");
const exportButton = document.querySelector("#exportButton");
const answerInput = document.querySelector("#answerInput");
const buyerPrompt = document.querySelector("#buyerPrompt");
const personaTag = document.querySelector("#personaTag");
const scenarioTag = document.querySelector("#scenarioTag");
const competitorTag = document.querySelector("#competitorTag");
const scorecard = document.querySelector("#scorecard");
const scoreSummary = document.querySelector("#scoreSummary");
const feedback = document.querySelector("#feedback");
const progressLabel = document.querySelector("#progressLabel");
const progressBar = document.querySelector("#progressBar");
const savedCount = document.querySelector("#savedCount");
const savedResults = document.querySelector("#savedResults");

function populateSelect(select, items) {
  select.innerHTML = items
    .map((item, index) => `<option value="${index}">${item.name}</option>`)
    .join("");
}

function getSelection() {
  return {
    persona: personas[Number(personaSelect.value)],
    scenario: scenarios[Number(scenarioSelect.value)],
    competitor: competitors[Number(competitorSelect.value)],
  };
}

function updatePrompt(step = 2) {
  const { persona, scenario, competitor } = getSelection();
  personaTag.textContent = persona.name;
  scenarioTag.textContent = scenario.name;
  competitorTag.textContent = competitor.name;
  buyerPrompt.textContent = `${scenario.question} ${competitor.objection}`;
  updateProgress(step);
}

function updateProgress(step) {
  progressLabel.textContent = `Step ${step} of 4`;
  progressBar.style.width = `${step * 25}%`;
}

function normalize(text) {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

function countCueMatches(answer, cues) {
  return cues.reduce((count, cue) => {
    return normalize(answer).includes(cue) ? count + 1 : count;
  }, 0);
}

function scoreForDimension(answer, dimension, selection) {
  const words = normalize(answer).split(" ").filter(Boolean);
  const questionMarks = (answer.match(/\?/g) || []).length;
  const personaCueMatches =
    dimension.key === "personaRelevance"
      ? countCueMatches(answer, selection.persona.cues)
      : countCueMatches(answer, dimension.cues);
  const competitorCueMatches =
    dimension.key === "competitiveClarity"
      ? countCueMatches(answer, selection.competitor.cues)
      : 0;

  let score = 1;
  if (words.length >= 35) score += 1;
  if (personaCueMatches >= 1) score += 1;
  if (personaCueMatches >= 3 || competitorCueMatches >= 1) score += 1;

  if (dimension.key === "discoveryDepth" && questionMarks >= 2) score += 1;
  if (dimension.key === "nextStepControl" && /next|pilot|workshop|schedule|decision|follow/.test(normalize(answer))) score += 1;
  if (dimension.key === "objectionHandling" && /understand|fair|makes sense|hear you|concern/.test(normalize(answer))) score += 1;
  if (dimension.key === "securityGovernance" && selection.persona.name.match(/CISO|AppSec|Security/)) score += 1;
  if (dimension.key === "businessAcumen" && selection.persona.name.match(/CFO|CIO|CTO|Procurement/)) score += 1;

  return Math.max(1, Math.min(5, score));
}

function scoreAnswer(answer, selection) {
  const scores = scoreDimensions.map((dimension) => ({
    ...dimension,
    score: scoreForDimension(answer, dimension, selection),
  }));
  const average =
    scores.reduce((total, item) => total + item.score, 0) / scores.length;
  return { scores, average: Number(average.toFixed(1)) };
}

function scoreClass(score) {
  if (score >= 4) return "score-high";
  if (score >= 3) return "score-mid";
  return "score-low";
}

function renderScores(scored) {
  scoreSummary.textContent = `Overall score: ${scored.average}/5`;
  scoreSummary.className = `score-summary ${scoreClass(Math.round(scored.average))}`;
  scorecard.innerHTML = scored.scores
    .map(
      (item) => `
        <article class="score-item">
          <div>
            <span class="score-name">${item.label}</span>
            <span class="score-note">${item.note}</span>
          </div>
          <span class="score-value ${scoreClass(item.score)}">${item.score}/5</span>
        </article>
      `,
    )
    .join("");
}

function lowestScore(scored) {
  return [...scored.scores].sort((a, b) => a.score - b.score)[0];
}

function buildFeedback(answer, scored, selection) {
  const low = lowestScore(scored);
  const askedQuestion = answer.includes("?");
  const strong =
    scored.average >= 3.8
      ? "You balanced discovery, value, and next-step control well."
      : "You addressed the buyer, and there is a foundation to build from.";
  const shallow =
    low.score <= 2
      ? `${low.label} was shallow. Add more buyer-specific detail and proof.`
      : `The answer can still be sharper on ${low.label.toLowerCase()}.`;
  const followUp = askedQuestion
    ? `A stronger follow-up: "What would have to be true in ${selection.scenario.name.toLowerCase()} for your team to sponsor a broader rollout?"`
    : `You should have asked: "What is the current pain behind ${selection.persona.pain}, and how will you measure whether this changes it?"`;
  const strongerAnswer = `That is a fair concern. Before I pitch Cursor, I would want to understand how your team handles ${selection.persona.pain} today, what is working, and where the current approach breaks down. If the gap is meaningful, we can design a focused ${selection.scenario.name.toLowerCase()} using one real repo, clear success metrics, developer feedback, and security checkpoints. Cursor's value is ${selection.persona.value} If that maps to your priorities, the next step I would suggest is a 45-minute working session with engineering, security, and the business owner to define success criteria and the pilot decision path.`;

  return [
    ["What was strong", strong],
    ["Where the answer was shallow", shallow],
    ["Follow-up question to ask", followUp],
    ["Cursor value proposition mapped to pain", selection.persona.value],
    ["Stronger version of the answer", strongerAnswer],
  ];
}

function renderFeedback(items) {
  feedback.className = "feedback-list";
  feedback.innerHTML = items
    .map(
      ([title, body]) => `
        <article class="feedback-card">
          <h3>${title}</h3>
          <p>${body}</p>
        </article>
      `,
    )
    .join("");
}

function buildSampleAnswer() {
  const { persona, scenario, competitor } = getSelection();
  return `That is a fair concern, especially if ${competitor.name.toLowerCase()} is already in the conversation. How are developers using AI coding tools today, and where do they still lose time across codebase understanding, implementation, tests, and review? For this ${scenario.name.toLowerCase()}, I would want to define success with your team around adoption, cycle time, quality, security requirements, and executive impact. If we can prove Cursor helps with ${persona.pain}, then the business case is stronger than another tool comparison. A good next step would be a focused pilot workshop with an engineering champion, security, and the budget owner so we can agree on repos, metrics, governance, and the decision process.`;
}

function handleScore() {
  const answer = answerInput.value.trim();
  if (!answer) {
    answerInput.focus();
    return;
  }

  const selection = getSelection();
  const scored = scoreAnswer(answer, selection);
  const feedbackItems = buildFeedback(answer, scored, selection);
  state.currentResult = {
    createdAt: new Date().toISOString(),
    persona: selection.persona.name,
    scenario: selection.scenario.name,
    competitor: selection.competitor.name,
    prompt: buyerPrompt.textContent,
    answer,
    overallScore: scored.average,
    scores: scored.scores.map(({ key, label, score }) => ({ key, label, score })),
    feedback: Object.fromEntries(feedbackItems),
  };

  renderScores(scored);
  renderFeedback(feedbackItems);
  saveButton.disabled = false;
  exportButton.disabled = false;
  updateProgress(4);
}

function savedSimulations() {
  try {
    return JSON.parse(localStorage.getItem("aiGtmSimulatorResults") || "[]");
  } catch {
    return [];
  }
}

function renderSavedResults() {
  const saved = savedSimulations();
  savedCount.textContent = saved.length;
  savedResults.innerHTML = saved
    .map(
      (item) => `
        <article class="saved-result">
          <strong>${item.persona} - ${item.scenario}</strong>
          <small>${new Date(item.createdAt).toLocaleString()} | Score: ${item.overallScore}/5 | ${item.competitor}</small>
        </article>
      `,
    )
    .join("");
}

function handleSave() {
  if (!state.currentResult) return;
  const saved = savedSimulations();
  saved.unshift(state.currentResult);
  localStorage.setItem("aiGtmSimulatorResults", JSON.stringify(saved.slice(0, 20)));
  renderSavedResults();
}

function handleExport() {
  if (!state.currentResult) return;
  const payload = JSON.stringify(state.currentResult, null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `ai-gtm-simulation-${Date.now()}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function handleReset() {
  answerInput.value = "";
  state.currentResult = null;
  scoreSummary.textContent = "Complete a role-play answer to see your score.";
  scoreSummary.className = "score-summary";
  scorecard.innerHTML = "";
  feedback.className = "feedback-empty";
  feedback.textContent = "Your feedback will appear after scoring.";
  saveButton.disabled = true;
  exportButton.disabled = true;
  updatePrompt(1);
}

populateSelect(personaSelect, personas);
populateSelect(scenarioSelect, scenarios);
populateSelect(competitorSelect, competitors);
updatePrompt();
renderSavedResults();

startButton.addEventListener("click", updatePrompt);
resetButton.addEventListener("click", handleReset);
scoreButton.addEventListener("click", handleScore);
sampleButton.addEventListener("click", () => {
  answerInput.value = buildSampleAnswer();
  answerInput.focus();
  updateProgress(3);
});
saveButton.addEventListener("click", handleSave);
exportButton.addEventListener("click", handleExport);
personaSelect.addEventListener("change", updatePrompt);
scenarioSelect.addEventListener("change", updatePrompt);
competitorSelect.addEventListener("change", updatePrompt);
answerInput.addEventListener("input", () => {
  if (answerInput.value.trim()) updateProgress(3);
});
