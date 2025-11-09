import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
  AvatarStatus,
} from "@/components/ui/avatar";
import { Experience } from "@/components/ui/experience";
import { TextLoop } from "@/components/ui/text-loop";

export default async function IndexPage() {
  return (
    <main className="container mx-auto min-h-screen max-w-xl p-4 flex flex-col">
      <Experience />
      <div className="mx-auto space-y-6 w-full">
        {/* Name and Roles */}
        <div className="flex flex-col md:flex-row  md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold font-apparat">
              Euger Bonete Jr.
            </h1>
            <div className="flex items-center mt-1">
              <span className="text-lg font-medium">Digital Craftsman</span>
              <TextLoop className="ml-1 text-lg font-medium">
                <span>Artist</span>
                <span>Developer</span>
                <span>Designer</span>
              </TextLoop>
            </div>
          </div>
          {/* Avatar */}
          <Avatar className="size-20 self-center">
            <AvatarImage
              src="https://github.com/azkriven16.png"
              alt="Takuya Matsuyama"
            />
            <AvatarFallback>EB</AvatarFallback>
            <AvatarIndicator className="-end-px -top-px">
              <AvatarStatus variant="online" className="size-3" />
            </AvatarIndicator>
          </Avatar>
        </div>
      </div>
    </main>
  );
}
