import { NextResponse } from "next/server";
import formData from "form-data";
import Mailgun from "mailgun.js";

const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN!;
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY!;

console.log("MAILGUN_DOMAIN:", MAILGUN_DOMAIN);
console.log("MAILGUN_API_KEY:", MAILGUN_API_KEY);

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
