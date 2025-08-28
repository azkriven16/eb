"use client";

import { FadeIn } from "@/animations/fade-in";
import { SectionHeader } from "../section-header";
import Lanyard from "../ui/lanyard";
import Link from "next/link";
import {
  profileHeader,
  bioTimeline,
  certifications,
} from "@/constants/profile";
import { MapPinIcon } from "lucide-react";

export function ProfileSection() {
  return (
    <FadeIn>
      <section>
        <div className="flex flex-col-reverse lg:flex-row h-full w-full">
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
        </div>
        {/* map and certs */}
        <div className="flex flex-col-reverse lg:flex-row h-full w-full gap-5 mt-10 md:mt-20">
          <div className="relative rounded-2xl overflow-hidden flex-1">
            <iframe
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=123.1100%2C11.5500%2C123.1500%2C11.5900&layer=mapnik&marker=11.57%2C123.13"
              title="Map showing location at 11.57° N, 123.13° E"
            ></iframe>

            {/* Location Label Overlay */}
            <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md px-3 py-2 flex items-center space-x-2">
              <MapPinIcon className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-gray-700">
                Where I am from
              </span>
            </div>

            {/* City Label */}
            <div className="absolute top-4 right-4 text-gray-700 font-medium text-sm bg-white/80 backdrop-blur-sm rounded px-2 py-1">
              Carles, Iloilo, Philippines
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden bg-secondary p-4 mx-auto flex-1">
            <h3 className="text-lg font-bold mb-4 text-muted-foreground">
              Certificates
            </h3>

            <div className="space-y-3 text-sm">
              {certifications.map((cert, index) => (
                <div key={index} className="flex gap-3">
                  <div className="text-xs font-medium text-gray-500 min-w-12 pt-0.5">
                    {cert.date}
                  </div>
                  <div className="text-muted-foreground leading-relaxed">
                    <span
                      className="font-semibold cursor-pointer hover:text-blue-600 hover:underline transition-colors"
                      onClick={() => window.open(cert.url, "_blank")}
                    >
                      {cert.title}
                    </span>{" "}
                    – {cert.organization}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
