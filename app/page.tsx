"use client";
import React, { useState, useEffect } from "react";
import About from "@/components/bio";
import Hero from "@/components/hero";
import Works from "@/components/works";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 3-second delay
    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(loaderTimeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="min-h-screen relative flex justify-center items-center">
          <div className="flex flex-col gap-5">
            <p className="text-xl">Euger's Portfolio</p>
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          </div>
        </div>
      ) : (
        <>
          <Hero />
          <Works />
          <About />
        </>
      )}
    </>
  );
}
