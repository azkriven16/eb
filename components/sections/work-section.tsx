import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function WorkSection() {
  return (
    <section className="mt-10 flex flex-col">
      <h2 className="text-xl font-semibold font-work-sans">Work</h2>

      <Button
        size="lg"
        className="rounded-full pl-2 mt-10 w-fit self-center group"
      >
        <Avatar className="size-6">
          <AvatarImage
            src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png"
            alt="Hallie Richards"
          />
          <AvatarFallback className="text-foreground text-xs">
            HR
          </AvatarFallback>
        </Avatar>
        My Projects
        <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
      </Button>
    </section>
  );
}
