"use client";
import emailjs from "@emailjs/browser";
import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { BsArrowRightShort } from "react-icons/bs";
import { useToast } from "./ui/use-toast";
import { CgSpinnerTwoAlt } from "react-icons/cg";

export default function Contact() {
  const form = React.useRef<HTMLFormElement | null>(null);
  const { toast } = useToast();
  const [loading, setLoading] = React.useState<boolean>(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_k73iuhd",
          "template_7yqv51p",
          form.current,
          "user_s9kcAcIs0xEN53FZGdHoi"
        )
        .then(
          () => {
            toast({
              title: "Message Send!",
              variant: "success",
            });
          },
          () => {
            toast({
              title: "An error occurred!",
              variant: "destructive",
            });
          }
        );
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
        <p>If you're interested to work together, please leave a message.</p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="flex-1 space-y-4">
        <Input type="text" placeholder="Name" name="user_name" required />
        <Input placeholder="Email" type="email" name="user_email" required />
        <Textarea
          placeholder="Your Message"
          name="message"
          className="resize-none"
          required
        />
        <Button disabled={loading} type="submit" className="flex items-center">
          {loading ? " Sending your message" : " Send me a message"}

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
