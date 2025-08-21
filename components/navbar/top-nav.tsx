import { ModeToggle } from "../mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const TopNav = () => {
  return (
    <header className="container max-w-6xl mx-auto p-4 flex justify-between sticky top-0 z-[100]">
      <Avatar className="size-10">
        <AvatarImage
          draggable={false}
          src="https://pbs.twimg.com/profile_images/1897311929028255744/otxpL-ke_400x400.jpg"
        />
        <AvatarFallback>AK</AvatarFallback>
      </Avatar>
      <nav></nav>
      <ModeToggle />
    </header>
  );
};
