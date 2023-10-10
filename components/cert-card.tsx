"use client";
import Link from "next/link";
import { FormEvent, useEffect } from "react";

interface TestDomeCertificateProps {
  title: string;
  externalLink: string;
}

function TestDomeCertificate({
  title,
  externalLink,
}: TestDomeCertificateProps) {
  useEffect(() => {
    // This script will be executed when the component mounts
    var stylesheet =
      "https://www.testdome.com/content/source/stylesheets/embed.css";
    var link = document.createElement("link");
    link.href = stylesheet;
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";
    document.getElementsByTagName("head")[0].appendChild(link);

    // Clean up the script when the component unmounts
    return () => {
      document.getElementsByTagName("head")[0].removeChild(link);
    };
  }, []);

  const handleClick = (e: FormEvent) => {
    e.preventDefault(); // Prevent the default behavior of the link
  };

  return (
    <Link
      href={externalLink}
      target="_blank"
      className="flex flex-col items-center group"
    >
      <div
        className={`testdome-certificate-stamp ${
          title === "HTML" || title === "CSS" ? "silver" : "gold"
        } `}
      >
        <span className="testdome-certificate-name">Euger C Bonete Jr.</span>
        <span className="testdome-certificate-test-name">{title}</span>
        <span className="testdome-certificate-card-logo">
          {title === "Internship" ? "Digipay" : "TestDome"}
          <br />
          Certificate
        </span>
      </div>
      <p className="text-xs text-muted-foreground group-hover:underline">
        Click to view certificate
      </p>
    </Link>
  );
}

export default TestDomeCertificate;
