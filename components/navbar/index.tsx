import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Button } from "../ui/button";
import AnimatedTabs from "./tabs";
import Logo from "../logo";
import { useRouter } from "next/navigation";
import { menuItems } from "@/constants/navItems";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  console.log(isMenuOpen);
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBlurred={false}>
      <NavbarContent>
        <NavbarBrand className="space-x-2">
          <Logo />
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
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Button
              onClick={() => {
                setIsMenuOpen(true);
                router.push(`#${item.toLocaleLowerCase()}`);
              }}
              size="lg"
              variant="ghost"
            >
              {item}
            </Button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
