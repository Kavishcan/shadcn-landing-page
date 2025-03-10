import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-muted/50">
    <div className="container px-12 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl -rotate-6"></div>
            <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-3"></div>
            <div className="relative h-full w-full bg-background rounded-2xl overflow-hidden border">
              <div className="flex items-center justify-center h-full">
                <Image
                  src="/ArmorcoreLogobyDesigner.png"
                  alt="ArmorCore Security"
                  width={200}
                  height={200}
                  className="dark:hidden"
                />
                <Image
                  src="/ArmorcoreLogo-white.png"
                  alt="ArmorCore Security"
                  width={200}
                  height={200}
                  className="hidden dark:block"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">About ArmorCore</h2>
          <p className="text-muted-foreground">
            Founded in 2013, ArmorCore has been at the forefront of cybersecurity innovation, providing cutting-edge
            solutions to businesses of all sizes. Our mission is to create a safer digital environment through
            advanced technology and expert services.
          </p>
          <p className="text-muted-foreground">
            With a team of certified security professionals and a commitment to staying ahead of emerging threats,
            we deliver comprehensive protection that adapts to the evolving cybersecurity landscape.
          </p>
          <div className="pt-4">
            <Button>Our Story</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}; 