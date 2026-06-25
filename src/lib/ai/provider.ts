import { getMockAccountPlan, getMockSignalRadar } from "@/lib/mock-data";
import type {
  AccountInput,
  AccountPlanResult,
  SignalRadarResult,
} from "@/lib/types";

const SYSTEM_RULES = `You are an enterprise sales research assistant for strategic account executives.
CRITICAL RULES:
- Separate sourced facts from hypotheses. Never mix them.
- NEVER invent customer claims, logos, quotes, or "Customer X saw Y results".
- Every fact must include a source label and confidence (high/medium/low).
- Hypotheses must include reasoning and validation questions.
- If you cannot verify something, mark it as a hypothesis with lower confidence.
- Return valid JSON only, matching the requested schema exactly.`;

export function isLiveMode(): boolean {
  return Boolean(process.env.OPENAI_API_KEY || process.env.ANTHROPIC_API_KEY);
}

async function callOpenAI(prompt: string): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error("OPENAI_API_KEY not configured");

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_RULES },
        { role: "user", content: prompt },
      ],
      response_format: { type: "json_object" },
      temperature: 0.3,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`OpenAI API error: ${response.status} ${err}`);
  }

  const data = await response.json();
  return data.choices[0].message.content as string;
}

function buildSignalPrompt(input: AccountInput): string {
  return `Research account signals for strategic selling.

Account: ${input.accountName}
Domain: ${input.domain ?? "unknown"}
Industry: ${input.industry ?? "unknown"}
Seller notes: ${input.notes ?? "none"}

Return JSON with this shape:
{
  "summary": "2-3 sentence executive summary",
  "facts": [{
    "id": "f1",
    "claim": "specific verifiable statement",
    "source": "source name",
    "sourceUrl": "optional url",
    "confidence": "high|medium|low",
    "dateObserved": "YYYY-MM-DD or omit",
    "signalType": "funding|hiring|tech_stack|news|leadership|partnership|security|other"
  }],
  "hypotheses": [{
    "id": "h1",
    "statement": "inferred statement",
    "reasoning": "why you infer this",
    "confidence": "high|medium|low",
    "relatedFactIds": ["f1"],
    "validationQuestions": ["question 1", "question 2"]
  }]
}

Include 4-8 facts and 2-4 hypotheses. Only include facts you can reasonably source. Use seller notes as context, not as facts.`;
}

function buildPlanPrompt(
  input: AccountInput,
  signals: SignalRadarResult
): string {
  return `Generate an account plan for a strategic seller.

Account: ${input.accountName}
Industry: ${input.industry ?? "unknown"}
Signal research (facts + hypotheses):
${JSON.stringify(signals, null, 2)}

Return JSON:
{
  "executiveSummary": "paragraph",
  "whyNow": { "label": "short trigger", "type": "fact|hypothesis", "referenceId": "f1 or h1" },
  "sections": [{
    "title": "section name",
    "content": "paragraph",
    "checklist": ["actionable item"]
  }],
  "nextActions": [{ "action": "specific task", "priority": "high|medium|low", "owner": "AE" }],
  "riskHypothesisIds": ["h1"]
}

Include 4-6 sections with checklists. Do not invent customer references.`;
}

export async function generateSignalRadar(
  input: AccountInput
): Promise<SignalRadarResult> {
  if (!isLiveMode()) {
    return getMockSignalRadar(input);
  }

  try {
    const raw = await callOpenAI(buildSignalPrompt(input));
    const parsed = JSON.parse(raw);

    return {
      accountName: input.accountName,
      domain: input.domain,
      researchedAt: new Date().toISOString(),
      mode: "live",
      summary: parsed.summary,
      facts: parsed.facts,
      hypotheses: parsed.hypotheses,
    };
  } catch {
    const mock = getMockSignalRadar(input);
    return { ...mock, summary: `${mock.summary} (Live API unavailable — showing mock data.)` };
  }
}

export async function generateAccountPlan(
  input: AccountInput,
  signals: SignalRadarResult
): Promise<AccountPlanResult> {
  if (!isLiveMode()) {
    return getMockAccountPlan(input, signals);
  }

  try {
    const raw = await callOpenAI(buildPlanPrompt(input, signals));
    const parsed = JSON.parse(raw);

    const riskIds: string[] = parsed.riskHypothesisIds ?? [];
    const risks = signals.hypotheses.filter((h) => riskIds.includes(h.id));

    return {
      accountName: input.accountName,
      generatedAt: new Date().toISOString(),
      mode: "live",
      executiveSummary: parsed.executiveSummary,
      whyNow: parsed.whyNow,
      sections: parsed.sections,
      nextActions: parsed.nextActions,
      risks: risks.length > 0 ? risks : signals.hypotheses.filter((h) => h.confidence === "low"),
    };
  } catch {
    return getMockAccountPlan(input, signals);
  }
}
