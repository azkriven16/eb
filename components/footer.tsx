import React from "react";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="px-5 md:px-8 mt-20 py-5">
      <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row justify-between">
        <div>
          <p className="text-medium font-semibold">
            Simplifying Complexity, Embracing Progress.
          </p>
          <p className="text-sm text-muted-foreground">
            © Euger Bonete 2023. All rights reserved.
          </p>
        </div>
        <Logo />
      </div>
    </footer>
  );
}
