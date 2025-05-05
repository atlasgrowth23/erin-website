import { db } from "./index";
import * as schema from "@shared/schema";

async function seed() {
  try {
    console.log("🌱 Seeding database...");
    
    // Check if users table is empty
    const usersCount = await db.query.users.findMany();
    
    if (usersCount.length === 0) {
      console.log("Adding default admin user...");
      
      await db.insert(schema.users).values({
        username: "admin",
        password: "adminpassword" // In a real application, this would be hashed
      });
      
      console.log("Default admin user added.");
    } else {
      console.log("Users table already has data, skipping seed.");
    }
    
    console.log("✅ Seed completed successfully!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  }
}

seed();
