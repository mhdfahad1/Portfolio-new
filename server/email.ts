import nodemailer from "nodemailer";

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  const email = process.env.EMAIL_USER;
  const password = process.env.EMAIL_PASSWORD;
  const host = process.env.EMAIL_HOST || "smtp.gmail.com";
  const port = parseInt(process.env.EMAIL_PORT || "587", 10);

  if (!email || !password) {
    throw new Error(
      "Email configuration is missing. Please set EMAIL_USER and EMAIL_PASSWORD environment variables."
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for other ports
    auth: {
      user: email,
      pass: password,
    },
  });
};

export async function sendEmail(options: EmailOptions): Promise<void> {
  try {
    const transporter = createTransporter();
    const fromEmail =
      options.from || process.env.EMAIL_USER || "noreply@example.com";

    const mailOptions = {
      from: `"Portfolio Contact" <${fromEmail}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error(
      "Failed to send email. Please check your email configuration."
    );
  }
}

export function formatContactEmail(
  name: string,
  email: string,
  message: string
): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
          }
          .content {
            background: #f9f9f9;
            padding: 30px;
            border-radius: 0 0 10px 10px;
          }
          .info {
            background: white;
            padding: 15px;
            margin: 15px 0;
            border-left: 4px solid #667eea;
            border-radius: 4px;
          }
          .message {
            background: white;
            padding: 20px;
            margin: 15px 0;
            border-radius: 4px;
            white-space: pre-wrap;
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            color: #666;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
          <div class="info">
            <strong>Name:</strong> ${name}
          </div>
          <div class="info">
            <strong>Email:</strong> <a href="mailto:${email}">${email}</a>
          </div>
          <div class="message">
            <strong>Message:</strong><br>
            ${message}
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from your portfolio contact form.</p>
        </div>
      </body>
    </html>
  `;
}
