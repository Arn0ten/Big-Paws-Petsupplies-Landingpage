// filepath: /c:/Users/Arn.DESKTOP-P6BGPH2/Documents/Big-Paws-Petsupplies-Landingpage/types/mailgun-js.d.ts
declare module "mailgun.js" {
  import FormData from "form-data";

  class Mailgun {
    constructor(formData: typeof FormData);
    client(options: { username: string; key: string }): MailgunClient;
  }

  interface MailgunClient {
    messages: {
      create(
        domain: string,
        data: { from: string; to: string[]; subject: string; text: string },
      ): Promise<any>;
    };
  }

  export default Mailgun;
}
