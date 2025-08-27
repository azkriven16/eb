"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import Image from "next/image";

interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  createdAt: string; // matches db schema (timestamp)
}

export function GuestbookSection() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch entries on mount
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const res = await fetch("/api/guestbook", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch guestbook entries");
        const data: GuestbookEntry[] = await res.json();
        setEntries(data);
      } catch (err) {
        console.error(err);
        toast.error("Could not load guestbook messages");
      }
    };
    fetchEntries();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) return;
    setLoading(true);

    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
      });

      if (!res.ok) throw new Error("Failed to post entry");

      const newEntry: GuestbookEntry = await res.json();
      setEntries((prev) => [newEntry, ...prev]);
      setName("");
      setMessage("");
      toast.success("Thank you for signing the guestbook!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit entry");
    } finally {
      setLoading(false);
    }
  };

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(dateString));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-5 max-w-7xl mx-auto">
      {/* Input Form */}
      <div className="lg:w-1/3">
        <Card>
          <CardHeader>
            <CardTitle>Sign the Guestbook</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Leave a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Submitting..." : "Sign Guestbook"}
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="h-40 mt-3 hidden md:flex items-center justify-center bg-secondary rounded-2xl">
          <Image
            src="https://media.tenor.com/FtskoCrIAt8AAAAj/toothless-dance.gif"
            alt="Dancing Gif"
            width={200}
            height={200}
            className="grayscale object-contain"
            draggable={false}
          />
        </div>
      </div>

      {/* Guestbook Entries */}
      <div className="lg:w-2/3">
        <Card>
          <CardHeader>
            <CardTitle>Messages ({entries.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-96">
              <div className="space-y-4 pr-4">
                {entries.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    No messages yet. Be the first to sign the guestbook!
                  </p>
                ) : (
                  entries.map((entry) => (
                    <div
                      key={entry.id}
                      className="flex gap-3 p-4 border rounded-lg"
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {getInitials(entry.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-sm">
                            {entry.name}
                          </h4>
                          <span className="text-xs text-muted-foreground">
                            {formatDate(entry.createdAt)}
                          </span>
                        </div>
                        <p className="text-sm text-foreground leading-relaxed">
                          {entry.message}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
