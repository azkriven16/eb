import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import { Button } from "../ui/button";
import AnimatedTabs from "./tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BiMenuAltLeft } from "react-icons/bi";

export default function App() {
  return (
    <Navbar>
      <NavbarContent>
        <NavbarBrand>
          <p className="hidden md:inline font-black font-sans text-xl">EUG.</p>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <BiMenuAltLeft className="h-8 w-8 inline md:hidden" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="ml-5">
              <Link href={`#home`} className="w-full p-2">
                Home
              </Link>
              <Link href={`#works`} className="w-full p-2">
                Works
              </Link>

              <Link href={`#bio`} className="w-full p-2">
                Bio
              </Link>

              <Link href={`#certs`} className="w-full p-2">
                Certs
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <AnimatedTabs />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <a href="#contact">
            <Button variant="default">Contact me</Button>
          </a>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
