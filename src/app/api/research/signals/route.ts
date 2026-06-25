import { NextResponse } from "next/server";
import { generateSignalRadar } from "@/lib/ai/provider";
import type { AccountInput } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AccountInput;

    if (!body.accountName?.trim()) {
      return NextResponse.json(
        { error: "accountName is required" },
        { status: 400 }
      );
    }

    const result = await generateSignalRadar(body);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Signal radar error:", error);
    return NextResponse.json(
      { error: "Failed to generate signal radar" },
      { status: 500 }
    );
  }
}
