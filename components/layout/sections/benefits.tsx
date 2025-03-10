import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons, Shield, Lock, Server, LineChart, Zap, Database } from "lucide-react";
import Image from "next/image";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Shield",
    title: "Enhanced Protection",
    description:
      "Our military-grade security systems provide comprehensive protection against evolving cyber threats, safeguarding your critical infrastructure and sensitive data.",
  },
  {
    icon: "LineChart",
    title: "Reduced Risk Exposure",
    description:
      "Proactive threat monitoring and prevention significantly reduces your organization's risk profile and potential financial impact from security breaches.",
  },
  {
    icon: "Lock",
    title: "Regulatory Compliance",
    description:
      "Our solutions ensure your organization meets industry security standards and regulatory requirements including GDPR, HIPAA, PCI DSS, and SOC 2.",
  },
  {
    icon: "Zap",
    title: "Operational Continuity",
    description:
      "Minimize downtime with rapid incident response and recovery protocols that keep your business operations running smoothly even under threat conditions.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-10 -z-10"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-[120px] -z-10"></div>
      
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24 mb-16">
        <div>
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm px-3 py-1 text-sm mb-4">
            <Shield className="w-4 h-4 mr-2 text-primary" />
            <span className="text-primary">ADVANCED PROTECTION</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Organizations Trust Armorcore
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our cybersecurity solutions deliver measurable benefits to organizations 
            of all sizes, protecting critical assets while enabling secure digital transformation.W
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-background/30 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all delay-75 group/number shadow-md"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-primary/10 font-medium transition-all delay-75 group-hover/number:text-primary/20">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
