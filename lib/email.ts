import formData from "form-data";
import Mailgun from "mailgun.js";

const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN!;
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY!;

const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: "api", key: MAILGUN_API_KEY });

export async function sendEmail(
  to: string,
  subject: string,
  htmlContent: string,
) {
  return client.messages.create(MAILGUN_DOMAIN, {
    from: `Big Paws Pet Hotel <noreply@${MAILGUN_DOMAIN}>`,
    to: [to],
    subject: subject,
    html: htmlContent,
  });
}
