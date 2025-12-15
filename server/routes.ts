import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendEmail, formatContactEmail } from "./email";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactSchema.parse(req.body);

      // Get recipient email from environment variable (defaults to EMAIL_USER if not set)
      const recipientEmail =
        process.env.CONTACT_EMAIL || process.env.EMAIL_USER;

      if (!recipientEmail) {
        return res.status(500).json({
          message:
            "Email configuration error. Please set CONTACT_EMAIL or EMAIL_USER environment variable.",
        });
      }

      // Format and send email
      const emailHtml = formatContactEmail(
        validatedData.name,
        validatedData.email,
        validatedData.message
      );

      await sendEmail({
        to: recipientEmail,
        subject: `New Contact Form Message from ${validatedData.name}`,
        html: emailHtml,
      });

      res.json({
        success: true,
        message: "Your message has been sent successfully!",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors,
        });
      }

      console.error("Contact form error:", error);
      res.status(500).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again later.",
      });
    }
  });

  return httpServer;
}
