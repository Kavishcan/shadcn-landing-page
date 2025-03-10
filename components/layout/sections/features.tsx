import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "ShieldAlert",
    title: "Real-time Monitoring",
    description:
      "Our advanced threat detection system continuously monitors your systems to identify and neutralize potential security breaches before they occur.",
  },
  {
    icon: "LockKeyhole",
    title: "End-to-End Encryption",
    description:
      "Industry-leading encryption protocols ensure your sensitive data remains protected both at rest and during transmission.",
  },
  {
    icon: "Brain",
    title: "AI-Powered Protection",
    description:
      "Harness the power of artificial intelligence to predict, identify, and respond to emerging cyber threats with unprecedented accuracy.",
  },
  {
    icon: "ShieldCheck",
    title: "Compliance Management",
    description:
      "Stay compliant with industry regulations like GDPR, HIPAA, and PCI DSS with our comprehensive security framework and documentation.",
  },
  {
    icon: "Layers",
    title: "Multi-layered Defense",
    description:
      "Implement a robust security architecture with multiple defensive layers to ensure protection even if one layer is compromised.",
  },
  {
    icon: "BadgeAlert",
    title: "Incident Response",
    description:
      "Rapid response protocols and expert team ready to mitigate damage and restore operations quickly in the event of a security incident.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider ">
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm px-3 py-1 text-sm">
          <span className="text-primary">ADVANCED PROTECTION</span>
        </div>
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Enterprise-Grade Security
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Our comprehensive cyber security platform offers cutting-edge features to protect 
        your organization from today's most sophisticated digital threats.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
