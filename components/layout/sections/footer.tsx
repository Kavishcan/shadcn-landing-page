"use client";

import { Separator } from "@/components/ui/separator";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export const FooterSection = () => {
  const { theme, resolvedTheme } = useTheme();
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
    <footer id="footer" className="container py-12 sm:py-16">
      <div className="p-6 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center mb-4">
            <Image 
              src={logoSrc}
              width={48} 
              height={48} 
              alt="Armorcore Logo" 
              className="mr-2"
            />
            <h3 className="text-2xl font-bold">Armorcore</h3>
          </div>
          
          <p className="text-muted-foreground max-w-md mb-4">
            Protecting your digital assets with military-grade cyber security solutions.
          </p>
          
          <Separator className="my-4 w-full max-w-md" />
          
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Armorcore Security. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
