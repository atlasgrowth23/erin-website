import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// Users table (keeping from template)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact form submissions
export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contactSchema = createInsertSchema(contacts, {
  name: (schema) => schema.min(2, "Please enter your name"),
  email: (schema) => schema.email("Please enter a valid email address"),
  message: (schema) => schema.min(10, "Please enter a message with at least 10 characters")
}).omit({ id: true, createdAt: true });

export type ContactInsert = z.infer<typeof contactSchema> & { createdAt: Date };
export type Contact = typeof contacts.$inferSelect;
