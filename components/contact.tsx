"use client";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { BsArrowRightShort } from "react-icons/bs";
import { useToast } from "./ui/use-toast";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { Social } from "@/constants/social";
import Link from "next/link";

export default function Contact() {
  const form = React.useRef<HTMLFormElement | null>(null);
  const { toast } = useToast();
  const [loading, setLoading] = React.useState<boolean>(false);

  // State variables for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      setLoading(true);
      emailjs
        .sendForm(
          "service_k73iuhd",
          "template_yoyxwma",
          form.current,
          "user_s9kcAcIs0xEN53FZGdHoi"
        )
        .then(() => {
          toast({
            title: "Message Sent!",
            variant: "success",
          });
          // Reset the form and clear the state variables
          form.current?.reset();
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch(() => {
          toast({
            title: "An error occurred!",
            variant: "destructive",
          });
        });
    }
    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="p-5 md:p-10 space-y-5 flex flex-col md:flex-row gap-10"
    >
      <div className="space-y-2 flex-1 mt-10">
        <h1 className="font-semibold text-xl md:text-2xl whitespace-nowrap">
          Let's Work Together
        </h1>
        <p>If you're interested in working together, please leave a message.</p>
        <div className="flex gap-2 self-center md:self-start">
          {Social.map((social) => (
            <Link key={social.text} href={social.href} target="_blank">
              <Button size="icon" variant="ghost">
                <social.icon className="h-4 w-4" />
              </Button>
            </Link>
          ))}
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail} className="flex-1 space-y-4">
        <Input
          type="text"
          placeholder="Name"
          name="user_name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          type="email"
          name="user_email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Textarea
          placeholder="Your Message"
          name="message"
          className="resize-none"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button disabled={loading} type="submit" className="flex items-center">
          {loading ? "Sending your message" : "Send me a message"}

          {loading ? (
            <CgSpinnerTwoAlt className="ml-2 h-4 w-4 animate-spin" />
          ) : (
            <BsArrowRightShort className="ml-2 w-5 h-5" />
          )}
        </Button>
      </form>
    </section>
  );
}
