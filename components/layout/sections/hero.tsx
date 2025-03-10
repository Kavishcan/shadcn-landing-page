"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Server } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden digital-rain min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Circuit Pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      
      {/* Glowing Orb Effect */}
      <div className="absolute top-[20%] left-[15%] w-64 h-64 bg-primary/20 rounded-full blur-[80px] animate-pulse"></div>
      <div className="absolute bottom-[20%] right-[15%] w-80 h-80 bg-primary/30 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      
      {/* Hero Background Image */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src={"/b.jpg"}
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 w-full">
        <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto">
          <div className="text-center space-y-8">
            <Badge variant="outline" className="text-sm py-2 backdrop-blur-sm bg-background/30">
              <span className="mr-2 text-primary">
                <Badge>Elite</Badge>
              </span>
              <span> Cyber Defense Systems </span>
            </Badge>

            <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
              <h1 className="drop-shadow-md">
                Secure Your Digital
                <span className="text-transparent px-2 bg-gradient-to-r from-[#32CD32] to-primary bg-clip-text">
                  Infrastructure
                </span>
              </h1>
            </div>

            <p className="max-w-screen-sm mx-auto text-xl text-foreground backdrop-blur-sm bg-background/10 p-4 rounded-lg">
              {`Armorcore delivers military-grade protection for your critical systems. Defending your digital assets against the most sophisticated cyber threats.`}
            </p>

            <div className="space-y-4 md:space-y-0 md:space-x-4 pt-4">
              <Button className="w-5/6 md:w-1/4 font-bold group/arrow border border-primary/20 shadow-lg">
                Get Protected
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>

              <Button
                asChild
                variant="secondary"
                className="w-5/6 md:w-1/4 font-bold backdrop-blur-sm bg-background/30 shadow-lg"
              >
                <Link href="#services">
                  Our Solutions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};
