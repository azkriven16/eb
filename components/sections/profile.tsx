"use client";

import { FadeIn } from "@/animations/fade-in";
import { FaFacebookMessenger, FaXTwitter } from "react-icons/fa6";
import { Highlighter } from "../ui/highlighter";
import Lanyard from "../ui/lanyard";

export function ProfileSection() {
  return (
    <FadeIn>
      <section className="flex flex-col-reverse lg:flex-row h-full w-full">
        <div className="flex-1 pt-[350px] sm:pt-[450px] md:pt-[700px] lg:pt-20">
          <div className="space-y-5">
            <h1 className="heading">
              A short <strong>introduction</strong>
            </h1>
            <p className="subheading">
              I started coding about{" "}
              <Highlighter
                action="underline"
                padding={4}
                multiline={false}
                color="oklch(79.5% 0.184 86.047)"
                className="text-foreground"
              >
                {new Date().getFullYear() - 2021} years ago
              </Highlighter>{" "}
              — and recently graduated with an Bachelor of Science in
              Information Technology degree in 2025 . Over the years, I’ve
              gained experience through internships and part-time work at
              companies like{" "}
              <Highlighter
                action="box"
                color="oklch(72.3% 0.219 149.579)"
                className="text-foreground"
              >
                Digipay , Rocketshyft
              </Highlighter>
              , and others.
            </p>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Bio</h3>

              <div className="flex gap-5 subheading">
                <p className="font-medium">2003</p>
                <p>Born in Roxas City, Philippines</p>
              </div>

              <div className="flex gap-5 subheading">
                <p className="font-medium">2022</p>
                <p>
                  Software Engineering Intern at{" "}
                  <a
                    target="_blank"
                    href="https://www.digipay.ph/"
                    className="cursor-target external-link"
                  >
                    Digipay
                  </a>
                </p>
              </div>

              <div className="flex gap-5 subheading">
                <p className="font-medium">2024</p>
                <p>
                  Part-time Software Developer at{" "}
                  <a
                    target="_blank"
                    href="https://rocketshyft.com/"
                    className="cursor-target external-link"
                  >
                    Rocketshyft
                  </a>
                </p>
              </div>

              <div className="flex gap-5 subheading">
                <p className="font-medium">2025</p>
                <p>
                  Graduated with a Bachelor of Science in Information Technology
                  at{" "}
                  <a
                    target="_blank"
                    href="https://rocketshyft.com/"
                    className="cursor-target external-link"
                  >
                    Northern Iloilo State University
                  </a>
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">On the web</h3>

              <a
                href="https://x.com/EugerBonete"
                target="_blank"
                className="flex gap-5 subheading external-link cursor-target w-fit"
              >
                <div className="flex items-center justify-center">
                  <FaXTwitter />
                </div>
                <p>Twitter @ EugerBonete</p>
              </a>
              <a
                href="https://x.com/EugerBonete"
                target="_blank"
                className="flex gap-5 subheading external-link cursor-target w-fit"
              >
                <div className="flex items-center justify-center">
                  <FaFacebookMessenger />
                </div>
                <p>Facebook @ euger.bonete.9</p>
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <Lanyard />
        </div>
      </section>
    </FadeIn>
  );
}
