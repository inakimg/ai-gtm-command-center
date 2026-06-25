import { NextResponse } from "next/server";
import { generateAccountPlan } from "@/lib/ai/provider";
import type { AccountInput, SignalRadarResult } from "@/lib/types";

interface PlanRequestBody {
  input: AccountInput;
  signals: SignalRadarResult;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as PlanRequestBody;

    if (!body.input?.accountName || !body.signals) {
      return NextResponse.json(
        { error: "input and signals are required" },
        { status: 400 }
      );
    }

    const result = await generateAccountPlan(body.input, body.signals);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Account plan error:", error);
    return NextResponse.json(
      { error: "Failed to generate account plan" },
      { status: 500 }
    );
  }
}
