import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Lock, Server, AlertTriangle, Database, Eye } from "lucide-react";

enum ServiceTier {
  STANDARD = 0,
  PREMIUM = 1,
}

interface ServiceProps {
  title: string;
  tier: ServiceTier;
  description: string;
  icon: React.ReactNode;
}

const serviceList: ServiceProps[] = [
  {
    title: "Threat Detection & Response",
    description:
      "24/7 monitoring and rapid response to cyber threats using advanced AI-powered detection systems.",
    tier: ServiceTier.STANDARD,
    icon: <Shield className="h-8 w-8 text-primary mb-2" />,
  },
  {
    title: "Data Encryption Services",
    description:
      "End-to-end encryption solutions to protect sensitive data both at rest and in transit.",
    tier: ServiceTier.STANDARD,
    icon: <Lock className="h-8 w-8 text-primary mb-2" />,
  },
  {
    title: "Network Security",
    description: "Comprehensive firewall configuration and network monitoring to prevent unauthorized access.",
    tier: ServiceTier.STANDARD,
    icon: <Server className="h-8 w-8 text-primary mb-2" />,
  },
  {
    title: "Penetration Testing",
    description: "Professional ethical hacking to identify and fix vulnerabilities before they can be exploited.",
    tier: ServiceTier.PREMIUM,
    icon: <AlertTriangle className="h-8 w-8 text-primary mb-2" />,
  },
  {
    title: "Secure Cloud Infrastructure",
    description: "Robust cloud security architecture design and implementation for your digital assets.",
    tier: ServiceTier.PREMIUM,
    icon: <Database className="h-8 w-8 text-primary mb-2" />,
  },
  {
    title: "Security Consulting",
    description: "Expert guidance on compliance, risk management, and security best practices.",
    tier: ServiceTier.PREMIUM,
    icon: <Eye className="h-8 w-8 text-primary mb-2" />,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32 relative">
      <div className="absolute inset-0 matrix-bg -z-10"></div>
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm px-3 py-1 text-sm">
          <span className="text-primary">SERVICES</span>
        </div>
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Comprehensive Security Solutions
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Protect your business with our cutting-edge cyber security services designed to defend against evolving digital threats.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
        {serviceList.map(({ title, description, tier, icon }) => (
          <Card
            key={title}
            className="bg-card/80 backdrop-blur-sm dark:bg-card/80 dark:backdrop-blur-sm h-full relative border-primary/20 hover:border-primary/50 transition-colors"
          >
            <CardHeader>
              {icon}
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-premium={ServiceTier.PREMIUM === tier}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[premium=false]:hidden bg-primary text-white"
            >
              PREMIUM
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
