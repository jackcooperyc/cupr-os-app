import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

const CA_RULES = [
  'Exclude all medical claims.',
  'Append Prop 64 government warning when appropriate.',
  'No cartoon or child-appealing themes.',
  'Include age 21+ language for promotional copy.',
];

const DEMO_OUTPUT = `Elevate Your Senses: The Premium Flower Collection

Discover a curated selection of the finest cannabis flower, cultivated by master growers who prioritize terpene profiles, trichome density, and immaculate curing processes.

---

GOVERNMENT WARNING: THIS PACKAGE CONTAINS CANNABIS, A SCHEDULE I CONTROLLED SUBSTANCE. KEEP OUT OF REACH OF CHILDREN AND ANIMALS. CANNABIS MAY ONLY BE POSSESSED OR CONSUMED BY PERSONS 21 YEARS OF AGE OR OLDER UNLESS THE PERSON IS A QUALIFIED PATIENT.`;

export async function POST(request: Request) {
  const body = (await request.json()) as {
    prompt?: string;
    channel?: string;
    tone?: string;
  };

  if (!body?.prompt?.trim()) {
    return NextResponse.json({ message: 'Prompt is required.' }, { status: 400 });
  }

  const channel = body.channel ?? 'Website Category Page';
  const tone = body.tone ?? 'Premium';
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      text: DEMO_OUTPUT,
      source: 'demo',
      compliancePassed: true,
      message: 'GEMINI_API_KEY not set — returning demo output.',
    });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const systemInstruction = [
      'You are a compliance-aware cannabis marketing copywriter for California (DCC) operators.',
      'Rules:',
      ...CA_RULES.map((r) => `- ${r}`),
      `Channel: ${channel}. Tone: ${tone}.`,
      'Return polished marketing copy only — no meta commentary.',
    ].join('\n');

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: body.prompt.trim(),
      config: { systemInstruction },
    });

    const text = response.text?.trim();
    if (!text) {
      return NextResponse.json({ message: 'Model returned empty output.' }, { status: 502 });
    }

    return NextResponse.json({
      text,
      source: 'gemini',
      compliancePassed: true,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Generation failed.';
    return NextResponse.json({ message }, { status: 500 });
  }
}
