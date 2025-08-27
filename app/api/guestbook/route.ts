import { NextResponse } from "next/server";
import { eq, desc } from "drizzle-orm";
import { db } from "@/db";
import { guestbookEntries } from "@/db/schema";

export async function GET() {
  const entries = await db
    .select()
    .from(guestbookEntries)
    .orderBy(desc(guestbookEntries.createdAt));
  return NextResponse.json(entries);
}

export async function POST(req: Request) {
  const { name, message } = await req.json();

  if (!name || !message) {
    return NextResponse.json(
      { error: "Name and message required" },
      { status: 400 }
    );
  }

  const [entry] = await db
    .insert(guestbookEntries)
    .values({ name, message })
    .returning();

  return NextResponse.json(entry);
}
