import React from "react";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="max-w-4xl mx-auto p-5 md:p-9 flex flex-col md:flex-row justify-between gap-10 mb-10">
      <div className="space-y-3 flex-1">
        <Logo />
        <p className="text-sm font-semibold">
          Simplifying Complexity, Embracing Progress.
        </p>
        <p className="text-xs text-muted-foreground">
          © Euger Bonete 2023. All rights reserved.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 pt-2 flex-1">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm">Pages</h3>
          <p className="text-xs text-muted-foreground">Home</p>
          <p className="text-xs text-muted-foreground">Works</p>
          <p className="text-xs text-muted-foreground">Bio</p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-sm">Works</h3>
          <p className="text-xs text-muted-foreground">Crunchycool</p>
          <p className="text-xs text-muted-foreground">Orgnaized</p>
          <p className="text-xs text-muted-foreground">Nanga</p>
          <p className="text-xs text-muted-foreground">Ani10</p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-sm">Connect</h3>
          <p className="text-xs text-muted-foreground">Facebook</p>
          <p className="text-xs text-muted-foreground">LinkedIn</p>
          <p className="text-xs text-muted-foreground">Tiktok</p>
          <p className="text-xs text-muted-foreground">Twitter</p>
        </div>
      </div>
    </footer>
  );
}
