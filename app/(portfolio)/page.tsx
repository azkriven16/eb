import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
  AvatarStatus,
} from "@/components/ui/avatar";
import { Experience } from "@/components/ui/experience";
import { TextLoop } from "@/components/ui/text-loop";

export default function IndexPage() {
  return (
    <main
      className="container mx-auto max-w-xl p-4 flex flex-col scroll-smooth"
      id="top"
    >
      <Experience />

      {/* Header Section */}
      <div className="mx-auto space-y-6 w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold font-apparat">
              Euger Bonete Jr.
            </h1>
            <div className="flex items-center mt-1">
              <span className="text-lg font-medium mr-1">
                Digital Craftsman
              </span>
              (
              <TextLoop className="mx-1 text-lg font-medium">
                <span>Web</span>
                <span>Software</span>
                <span>Fullstack</span>
              </TextLoop>
              <span className="text-lg font-medium">/ Developer</span>)
            </div>
          </div>

          <Avatar className="size-20 self-center">
            <AvatarImage
              src="https://github.com/azkriven16.png"
              alt="Euger Bonete Jr."
            />
            <AvatarFallback>EB</AvatarFallback>
            <AvatarIndicator className="-end-px -top-px">
              <AvatarStatus variant="online" className="size-3" />
            </AvatarIndicator>
          </Avatar>
        </div>
      </div>

      {/* Dummy sections for smooth scrolling */}
      <section id="about" className="h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold">About Section</h2>
      </section>

      <section
        id="projects"
        className="h-screen flex items-center justify-center bg-muted"
      >
        <h2 className="text-3xl font-bold">Projects Section</h2>
      </section>

      <section
        id="contact"
        className="h-screen flex items-center justify-center"
      >
        <h2 className="text-3xl font-bold">Contact Section</h2>
      </section>
    </main>
  );
}
