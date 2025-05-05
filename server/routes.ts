import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API prefix
  const apiPrefix = "/api";

  // Contact form endpoint
  app.post(`${apiPrefix}/contact`, async (req, res) => {
    try {
      // Validate the request body against our schema
      const validatedData = contactSchema.parse(req.body);
      
      // Store the contact form submission
      const newContact = await storage.createContact({
        ...validatedData,
        createdAt: new Date()
      });
      
      // Return success response
      return res.status(201).json({
        message: "Contact form submitted successfully",
        contact: newContact
      });
    } catch (error) {
      console.error("Error handling contact form submission:", error);
      
      // Handle validation errors
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: "Validation error",
          errors: error.errors
        });
      }
      
      // Handle generic errors
      return res.status(500).json({
        message: "An error occurred while processing your request"
      });
    }
  });

  // Get all contacts endpoint (could be admin-only in a real app)
  app.get(`${apiPrefix}/contacts`, async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      return res.status(200).json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      return res.status(500).json({
        message: "An error occurred while fetching contacts"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
