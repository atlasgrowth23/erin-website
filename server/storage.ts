import { db } from "@db";
import { contacts } from "@shared/schema";
import { eq } from "drizzle-orm";
import { type Contact, type ContactInsert } from "@shared/schema";

export const storage = {
  // Contact form submissions
  async createContact(contact: ContactInsert): Promise<Contact> {
    const [newContact] = await db.insert(contacts).values(contact).returning();
    return newContact;
  },

  async getContactById(id: number): Promise<Contact | null> {
    const contact = await db.query.contacts.findFirst({
      where: eq(contacts.id, id)
    });
    return contact || null;
  },

  async getAllContacts(): Promise<Contact[]> {
    return await db.query.contacts.findMany({
      orderBy: (contacts, { desc }) => [desc(contacts.createdAt)]
    });
  }
};
