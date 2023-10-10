"use client";

import { certData } from "@/constants/certs";
import { Button } from "./ui/button";
import Link from "next/link";

interface certDataProps {
  href: string;
  icon: any;
  text: string;
}

export default function Certs() {
  return (
    <section id="certs" className="p-5 md:p-10 space-y-5">
      <div className="my-10"></div>
      <div className="flex flex-col">
        <h1 className="font-semibold text-xl md:text-2xl whitespace-nowrap">
          Licenses & certifications
        </h1>
        <p className="text-muted-foreground">Click to view certificate</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-fit">
        {certData.map((cert) => (
          <CertCard
            key={cert.href}
            href={cert.href}
            icon={cert.icon}
            text={cert.text}
          />
        ))}
      </div>
    </section>
  );
}

const CertCard = (props: certDataProps) => (
  <Link href={props.href} target="_blank">
    <Button>
      <props.icon className="mr-2 h-8 w-8" />
      <p className="w-32">{props.text}</p>
    </Button>
  </Link>
);
