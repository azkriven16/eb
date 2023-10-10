"use client";

import { certData } from "@/constants/certs";
import { Button } from "./ui/button";
import Link from "next/link";
import TestDomeCertificate from "./cert-card";

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
      </div>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-fit">
        {certData.map((cert) => (
          <TestDomeCertificate
            key={cert.href}
            title={cert.text}
            externalLink={cert.href}
          />
        ))}
      </div>
    </section>
  );
}
