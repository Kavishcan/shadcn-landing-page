import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield } from "lucide-react";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What cybersecurity services does Armorcore offer?",
    answer: "Armorcore provides a comprehensive suite of cybersecurity services including threat detection and response, data encryption, network security, penetration testing, secure cloud infrastructure, and security consulting. Our solutions are designed to protect organizations of all sizes from evolving cyber threats with military-grade protection systems.",
    value: "item-1",
  },
  {
    question: "How can Armorcore help protect my organization from ransomware attacks?",
    answer: "Armorcore employs a multi-layered defense strategy against ransomware attacks. This includes real-time threat monitoring, advanced endpoint protection, regular data backups, employee security awareness training, and incident response planning. Our systems are designed to detect and neutralize ransomware threats before they can encrypt your critical data, and we implement robust recovery protocols to minimize downtime in case of a breach.",
    value: "item-2",
  },
  {
    question: "What makes Armorcore different from other cybersecurity providers?",
    answer: "Armorcore distinguishes itself through our military-grade protection systems, AI-powered threat detection capabilities, and holistic security approach. Unlike many providers who offer piecemeal solutions, we provide end-to-end security architecture designed specifically for your organization's unique needs. Our team includes certified security experts with backgrounds in national defense and critical infrastructure protection, bringing unparalleled expertise to every client engagement.",
    value: "item-3",
  },
  {
    question: "How does Armorcore's threat detection system work?",
    answer: "Our advanced threat detection system uses a combination of AI-powered behavioral analysis, signature-based detection, and anomaly detection algorithms to identify potential threats in real-time. The system continuously monitors network traffic, endpoints, and cloud resources, analyzing patterns to distinguish between normal operations and malicious activity. When threats are detected, our system automatically implements countermeasures and alerts our 24/7 security operations center for human verification and response.",
    value: "item-4",
  },
  {
    question: "Does Armorcore offer compliance solutions for regulatory requirements?",
    answer: "Yes, Armorcore provides specialized compliance solutions for various regulatory frameworks including GDPR, HIPAA, PCI DSS, SOC 2, and ISO 27001. Our compliance services include gap assessments, implementation of required security controls, documentation development, staff training, and ongoing compliance monitoring. We help organizations not only achieve compliance but maintain it through evolving regulatory landscapes while strengthening their overall security posture.",
    value: "item-5",
  },
  {
    question: "How quickly can Armorcore respond to a security incident?",
    answer: "Armorcore maintains a 24/7/365 incident response capability with guaranteed response times based on incident severity. For critical incidents, our initial response begins within 15 minutes of detection, with our emergency response team fully engaged within one hour. Our incident response process follows industry-standard frameworks and is customized for each client's environment to ensure rapid containment, thorough investigation, and effective remediation with minimal business disruption.",
    value: "item-6",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32 relative">
      <div className="absolute inset-0 cyber-grid opacity-10 -z-10"></div>
      
      <div className="text-center mb-8">
        <div className="flex justify-center items-center gap-2 mb-2 inline-flex items-center rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm px-3 py-1 text-sm">
          <Shield className="h-4 w-4 text-primary" />
          <h2 className="text-primary text-center tracking-wider">
            FAQS
          </h2>
        </div>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Security Questions Answered
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Get answers to the most common questions about our cybersecurity solutions and how we protect your digital assets.
        </p>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot backdrop-blur-sm bg-background/5 p-4 rounded-lg border border-primary/10">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value} className="border-b border-primary/10 last:border-none">
            <AccordionTrigger className="text-left hover:text-primary transition-colors">
              {question}
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
