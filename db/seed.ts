import { db } from ".";
import { guestbookEntries } from "./schema";

async function seed() {
  console.log("🌱 Starting guestbook seed...");

  try {
    // Clear existing data (optional)
    await db.delete(guestbookEntries);
    console.log("🗑️  Cleared existing guestbook entries");

    // Sample guestbook data
    const sampleEntries = [
      {
        name: "Alice Johnson",
        message: "Great website! Really enjoying the clean design and UX.",
      },
      {
        name: "Bob Smith",
        message:
          "Thanks for creating this. Looking forward to seeing more updates!",
      },
      {
        name: "Carol Davis",
        message:
          "This is exactly what I was looking for. Keep up the excellent work!",
      },
      {
        name: "David Lee",
        message: "Super cool project 🚀 Excited to see where this goes!",
      },
      {
        name: "Ella Brown",
        message: "Love the vibe here. Simple, clean, and fun!",
      },
      {
        name: "Frank Wright",
        message: "Amazing work! Learned a lot just by browsing around.",
      },
      {
        name: "Grace Kim",
        message: "You’ve done a fantastic job, keep pushing forward!",
      },
      {
        name: "Henry Clark",
        message: "The attention to detail is impressive 👏",
      },
      {
        name: "Ivy Martinez",
        message: "I’ll definitely be recommending this to friends.",
      },
      {
        name: "Jack Wilson",
        message: "Signed the guestbook 😎 Love what you’re doing!",
      },
    ];

    // Insert guestbook entries
    const insertedEntries = await db
      .insert(guestbookEntries)
      .values(
        sampleEntries.map((entry) => ({
          ...entry,
          createdAt: new Date(), // ensure timestamp is set
        }))
      )
      .returning();

    console.log(
      `✅ Successfully created ${insertedEntries.length} guestbook entries:`
    );
    insertedEntries.forEach((entry, index) => {
      console.log(`   ${index + 1}. ${entry.name}: "${entry.message}"`);
    });

    // Verify total count
    const allEntries = await db.select().from(guestbookEntries);
    console.log(`\n📊 Total guestbook entries in DB: ${allEntries.length}`);

    console.log("\n🎉 Guestbook seed completed successfully!");
  } catch (error) {
    console.error("❌ Error seeding guestbook:", error);
    process.exit(1);
  }
}

// Run the seed function
seed()
  .then(() => {
    console.log("🏁 Guestbook seed script finished");
    process.exit(0);
  })
  .catch((error) => {
    console.error("💥 Guestbook seed script failed:", error);
    process.exit(1);
  });
