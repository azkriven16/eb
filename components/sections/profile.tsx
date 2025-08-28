"use client";

import { FadeIn } from "@/animations/fade-in";
import { SectionHeader } from "../section-header";
import Lanyard from "../ui/lanyard";
import Link from "next/link";
import { profileHeader, bioTimeline } from "@/constants/profile";

export function ProfileSection() {
  return (
    <FadeIn>
      <section className="flex flex-col-reverse lg:flex-row h-full w-full">
        <div className="flex-1 pt-[350px] sm:pt-[450px] md:pt-[700px] lg:pt-0">
          <div className="space-y-5">
            <SectionHeader
              icon={profileHeader.icon}
              title={profileHeader.title}
              highlight={profileHeader.highlight}
              description={profileHeader.description}
            />

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Bio</h3>
              {bioTimeline.map((item, index) => (
                <div key={index} className="flex gap-5 subheading">
                  <p className="font-medium">{item.year}</p>
                  <p>
                    {item.link ? (
                      <>
                        {item.description.split(item.link.label)[0]}
                        <Link
                          target="_blank"
                          href={item.link.href}
                          className="cursor-target external-link"
                        >
                          {item.link.label}
                        </Link>
                        {item.description.split(item.link.label)[1]}
                      </>
                    ) : (
                      item.description
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 relative hover:grayscale-0 md:grayscale transition duration-300">
          <Lanyard />
        </div>
      </section>
    </FadeIn>
  );
}
