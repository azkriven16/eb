"use client";
import { FadeIn } from "@/animations/fade-in";

export function TechStackSection() {
  return (
    <FadeIn>
      <section className="h-full w-full mt-22 space-y-10">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="space-y-5">
            <h1 className="heading">
              A bit of my <strong>craft</strong> 🪔
            </h1>
            <p className="subheading max-w-2xl">
              These are the core tools and technologies I use to build, design,
              and ship projects—from frontend experiences to backend systems.
            </p>
            <div className="flex flex-col md:flex-row gap-5 mt-10">
              {/* Frontend */}
              <div className="flex-1">
                <h3 className="text-xl font-bold">Frontend</h3>
                <div className="flex gap-5 subheading">
                  <p className="font-semibold">React</p>
                  <p className="text-xs md:text-sm ">
                    Modern UI framework for building interactive web apps.
                  </p>
                </div>
                <div className="flex gap-5 subheading">
                  <p className="font-semibold">Next.js</p>
                  <p className="text-xs md:text-sm ">
                    Fullstack framework with SSR, routing, and optimizations.
                  </p>
                </div>
                <div className="flex gap-5 subheading">
                  <p className="font-semibold">Tailwind</p>
                  <p className="text-xs md:text-sm ">
                    Utility-first CSS framework for rapid UI styling.
                  </p>
                </div>
                <div className="flex gap-5 subheading">
                  <p className="font-semibold">TypeScript</p>
                  <p className="text-xs md:text-sm ">
                    Strongly typed JavaScript for safer, scalable code.
                  </p>
                </div>
              </div>

              {/* Backend */}
              <div className="flex-1">
                <h3 className="text-xl font-bold">Backend</h3>
                <div className="flex gap-5 subheading">
                  <p className="font-semibold">Node.js</p>
                  <p className="text-xs md:text-sm ">
                    JavaScript runtime for scalable backend services.
                  </p>
                </div>
                <div className="flex gap-5 subheading">
                  <p className="font-semibold">Express</p>
                  <p className="text-xs md:text-sm ">
                    Lightweight web framework for REST APIs.
                  </p>
                </div>
                <div className="flex gap-5 subheading">
                  <p className="font-semibold">PostgreSQL</p>
                  <p className="text-xs md:text-sm ">
                    Reliable relational database for structured data.
                  </p>
                </div>
                <div className="flex gap-5 subheading">
                  <p className="font-semibold">MongoDB</p>
                  <p className="text-xs md:text-sm ">
                    NoSQL database for flexible and scalable data storage.
                  </p>
                </div>
              </div>

              {/* Other Tools */}
              <div className="flex-1">
                <h3 className="text-xl font-bold">Other Tools</h3>
                <div className="flex gap-5 subheading">
                  <p className="font-semibold">Git & GitHub</p>
                  <p className="text-xs md:text-sm ">
                    Version control and collaboration platform.
                  </p>
                </div>
                <div className="flex gap-5 subheading">
                  <p className="font-semibold">Docker</p>
                  <p className="text-xs md:text-sm ">
                    Containerization for consistent deployments.
                  </p>
                </div>
                <div className="flex gap-5 subheading">
                  <p className="font-semibold">Figma</p>
                  <p className="text-xs md:text-sm ">
                    Design and prototyping for UI/UX.
                  </p>
                </div>
                <div className="flex gap-5 subheading">
                  <p className="font-semibold">Vercel</p>
                  <p className="text-xs md:text-sm ">
                    Fast hosting & deployment for Next.js apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
