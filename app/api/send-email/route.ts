import { NextResponse } from "next/server";
import formData from "form-data";
import Mailgun from "mailgun.js";

const MAILGUN_DOMAIN = "big-paws-petsupplies.tech";
const MAILGUN_API_KEY = "7cd3aff21d3a3ed5d60e63f37b80f243-3af52e3b-be9fa8d9";

const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: "api", key: MAILGUN_API_KEY });

export async function POST(request: Request) {
  const { to, subject, html } = await request.json();

  try {
    const result = await client.messages.create(MAILGUN_DOMAIN, {
      from: `Big Paws Pet Hotel <noreply@${MAILGUN_DOMAIN}>`,
      to: [to],
      subject: subject,
      html: html,
    });

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 },
    );
  }
}
