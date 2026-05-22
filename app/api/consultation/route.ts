import { NextResponse } from "next/server";

type ConsultationPayload = {
  firstName: string;
  lastName: string;
  workEmail: string;
  company: string;
  role?: string;
  message: string;
};

function isPayload(input: unknown): input is ConsultationPayload {
  if (!input || typeof input !== "object") {
    return false;
  }

  const value = input as Record<string, unknown>;

  return (
    typeof value.firstName === "string" &&
    typeof value.lastName === "string" &&
    typeof value.workEmail === "string" &&
    typeof value.company === "string" &&
    typeof value.message === "string"
  );
}

export async function POST(request: Request) {
  const endpoint = process.env.CONSULTATION_FORM_ENDPOINT;

  if (!endpoint) {
    return NextResponse.json(
      {
        error:
          "CONSULTATION_FORM_ENDPOINT is not configured yet. Add it when your server URL is ready.",
      },
      { status: 503 },
    );
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  if (!isPayload(payload)) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const normalizedPayload = {
    firstName: payload.firstName.trim(),
    lastName: payload.lastName.trim(),
    workEmail: payload.workEmail.trim(),
    company: payload.company.trim(),
    role: payload.role?.trim() ?? "",
    message: payload.message.trim(),
    submittedAt: new Date().toISOString(),
    source: "datatriad-landing",
  };

  if (
    !normalizedPayload.firstName ||
    !normalizedPayload.lastName ||
    !normalizedPayload.workEmail ||
    !normalizedPayload.company ||
    normalizedPayload.message.length < 20
  ) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  }

  try {
    const upstreamResponse = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(normalizedPayload),
      cache: "no-store",
    });

    if (!upstreamResponse.ok) {
      return NextResponse.json(
        {
          error: "Submission server rejected the request.",
          status: upstreamResponse.status,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to reach submission server." },
      { status: 502 },
    );
  }
}
