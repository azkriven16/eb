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
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={`#home`}>Home</Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Link href={`#works`}>Works</Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Link href={`#bio`}>Bio</Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Link href={`#certs`}>Certs</Link>
              </DropdownMenuItem>

              <DropdownMenuItem></DropdownMenuItem>
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
