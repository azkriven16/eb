"use client";

import { Button } from "./ui/button";
import { BiSolidFileHtml } from "react-icons/bi";
import Link from "next/link";
import { SiCreatereactapp } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
interface certDataProps {
  href: string;
  icon: any;
  text: string;
}

const certData = [
  {
    href: "https://www.testdome.com/certificates/5faeb9a601474a2a906f712f40dfab6f",
    icon: BiSolidFileHtml,
    text: "HTML / CSS",
  },
  {
    href: "https://www.testdome.com/certificates/530156ebb39f43c5a407bb157b414413",
    icon: RiJavascriptFill,
    text: "Javascript",
  },
  {
    href: "https://www.testdome.com/certificates/b42958b8c828498782f72c304e0f7d24",
    icon: TbBrandTypescript,
    text: "Typescript",
  },
  {
    href: "https://www.testdome.com/certificates/da2507e9432941068913931a9ce1dc47",
    icon: SiCreatereactapp,
    text: "React",
  },
];

export default function Certs() {
  return (
    <section id="bio" className="p-5 md:p-10 space-y-5">
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
