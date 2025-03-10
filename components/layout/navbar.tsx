"use client";
import { Github, Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";
import { useTheme } from "next-themes";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "#services",
    label: "Services",
  },
  {
    href: "#contact",
    label: "Contact",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];


export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Initially show white logo, then update based on theme after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // The logo source depends on whether we've mounted yet
  const logoSrc = !mounted 
    ? "/ArmorcoreLogo-white.png" 
    : resolvedTheme === "dark" 
      ? "/ArmorcoreLogo-white.png" 
      : "/ArmorcoreLogobyDesigner.png";
  
  return (
    <div className="w-full flex justify-center fixed top-3 z-50">
      <header className="shadow-lg w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl mx-auto rounded-full flex justify-between items-center py-2 px-6 backdrop-blur-md bg-background/30 border border-primary/20">
        <Link href="/" className="font-bold text-lg flex items-center">
          <Image 
            src={logoSrc}
            width={40} 
            height={40} 
            alt="Armorcore Logo" 
            className="mr-2"
          />
          Armorcore
        </Link>
        {/* <!-- Mobile --> */}
        <div className="flex items-center lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Menu
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer lg:hidden"
              />
            </SheetTrigger>

            <SheetContent
              side="left"
              className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
            >
              <div>
                <SheetHeader className="mb-4 ml-4">
                  <SheetTitle className="flex items-center">
                    <Link href="/" className="flex items-center">
                      <Image 
                        src={logoSrc}
                        width={40} 
                        height={40} 
                        alt="Armorcore Logo" 
                        className="mr-2"
                      />
                      Armorcore
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-2">
                  {routeList.map(({ href, label }) => (
                    <Button
                      key={href}
                      onClick={() => setIsOpen(false)}
                      asChild
                      variant="ghost"
                      className="justify-start text-base"
                    >
                      <Link href={href}>{label}</Link>
                    </Button>
                  ))}
                </div>
              </div>

              <SheetFooter className="flex-col sm:flex-col justify-start items-start">
                <Separator className="mb-2" />

                <ToggleTheme />
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        {/* <!-- Desktop --> */}
        <NavigationMenu className="hidden lg:block mx-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              {routeList.map(({ href, label }) => (
                <NavigationMenuLink key={href} asChild>
                  <Link href={href} className="text-base px-4 py-2 hover:text-primary transition-colors">
                    {label}
                  </Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex items-center space-x-2">
          <ToggleTheme />

          <Button asChild size="sm" variant="ghost" aria-label="Contact Us">
            <Link
              aria-label="Contact Us"
              href="#contact"
            >
              Contact
            </Link>
          </Button>
        </div>
      </header>
    </div>
  );
};
