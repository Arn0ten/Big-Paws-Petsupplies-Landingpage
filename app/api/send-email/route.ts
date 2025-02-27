// import { NextResponse } from "next/server";
// import formData from "form-data";
// import Mailgun from "mailgun.js";

// // TODO: Replace with your Mailgun domain and API key
// const MAILGUN_DOMAIN = "your-domain.mailgun.org";
// const MAILGUN_API_KEY = "your-mailgun-api-key";

// const mailgun = new Mailgun(formData);
// const client = mailgun.client({ username: "api", key: MAILGUN_API_KEY });

// export async function POST(request: Request) {
//   const { to, subject, text } = await request.json();

//   try {
//     const result = await client.messages.create(MAILGUN_DOMAIN, {
//       from: `Big Paws Pet Hotel <noreply@${MAILGUN_DOMAIN}>`,
//       to: [to],
//       subject: subject,
//       text: text,
//     });

//     return NextResponse.json({ success: true, result });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json(
//       { success: false, error: "Failed to send email" },
//       { status: 500 },
//     );
//   }
// }
