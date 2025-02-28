export function getEmailTemplate(formType: string, formData: any) {
  if (formType === "contact") {
    return getContactEmailTemplate(formData);
  } else if (formType === "book-service") {
    return getBookServiceEmailTemplate(formData);
  }
  throw new Error("Invalid form type");
}

function getContactEmailTemplate(formData: any) {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Customer Inquiry</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
          .logo { text-align: center; margin-bottom: 20px; }
          .content { background-color: #ffffff; padding: 20px; border-radius: 5px; }
          .footer { margin-top: 20px; text-align: center; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="logo">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BigPawsLogo-tgQYrArFSfOX9irwlrG1D93gEjB9yr.png" alt="Big Paws Pet Hotel" width="120">
          </div>
          <div class="content">
            <h2>New Customer Inquiry</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <h3>Message:</h3>
            <p>${formData.message}</p>
          </div>
          <div class="footer">
            &copy; ${new Date().getFullYear()} Big Paws Pet Hotel. All rights reserved.
          </div>
        </div>
      </body>
      </html>
    `;
}

function getBookServiceEmailTemplate(formData: any) {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Home Service Booking</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
          .logo { text-align: center; margin-bottom: 20px; }
          .content { background-color: #ffffff; padding: 20px; border-radius: 5px; }
          .footer { margin-top: 20px; text-align: center; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="logo">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BigPawsLogo-tgQYrArFSfOX9irwlrG1D93gEjB9yr.png" alt="Big Paws Pet Hotel" width="120">
          </div>
          <div class="content">
            <h2>New Home Service Booking</h2>
            <h3>Customer Information:</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Address:</strong> ${formData.address}</p>
            <h3>Pet Information:</h3>
            <p>${formData.petInfo}</p>
            <h3>Service Details:</h3>
            <p><strong>Service Type:</strong> ${formData.serviceType}</p>
            <p><strong>Preferred Date:</strong> ${formData.preferredDate}</p>
            <p><strong>Preferred Time:</strong> ${formData.preferredTime}</p>
            <h3>Additional Notes:</h3>
            <p>${formData.additionalNotes || "No additional notes provided."}</p>
          </div>
          <div class="footer">
            &copy; ${new Date().getFullYear()} Big Paws Pet Hotel. All rights reserved.
          </div>
        </div>
      </body>
      </html>
    `;
}
