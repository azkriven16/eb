"use client";

import type React from "react";

import { useState } from "react";
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
  timestamp: Date;
}

export function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([
    {
      id: "1",
      name: "Alice Johnson",
      message:
        "Great website! Really enjoying the clean design and user experience.",
      timestamp: new Date("2024-01-15T10:30:00"),
    },
    {
      id: "2",
      name: "Bob Smith",
      message:
        "Thanks for creating this. Looking forward to seeing more updates!",
      timestamp: new Date("2024-01-14T15:45:00"),
    },
    {
      id: "3",
      name: "Carol Davis",
      message:
        "This is exactly what I was looking for. Keep up the excellent work!",
      timestamp: new Date("2024-01-13T09:20:00"),
    },
  ]);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) return;

    const newEntry: GuestbookEntry = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date(),
    };

    setEntries((prev) => [newEntry, ...prev]);
    setName("");
    setMessage("");

    toast.success("Thank you for signing the guestbook!");
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-5 max-w-7xl mx-auto mt-10 md:mt-20">
      {/* Input Form - Left side on large screens */}
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
              <Button type="submit" className="w-full">
                Sign Guestbook
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className=" mt-13 hidden md:flex items-center justify-center bg-secondary rounded-2xl">
          <Image
            src="https://media.tenor.com/Qm68f5zQrakAAAAj/dance-cute.gif"
            alt="Dancing Gif"
            width={200}
            height={200}
            className="grayscale object-contain"
            draggable={false}
          />
        </div>
      </div>

      {/* Guestbook Entries - Right side on large screens */}
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
                            {formatDate(entry.timestamp)}
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
