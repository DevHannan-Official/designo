import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const FaqsSection = () => {
  const faqs = [
    {
      question: "What is Designo?",
      answer:
        "Designo is a powerful website builder platform that enables users to design, build, and deploy modern websites with ease. It is built for both developers and non-technical users.",
    },
    {
      question: "Do I need to know how to code to use Designo?",
      answer:
        "Not at all. Designo offers an intuitive drag-and-drop interface. However, developers can access code export and integrate custom components for advanced workflows.",
    },
    {
      question: "Can I see my site previews before publishing?",
      answer:
        "Yes, Designo provides a custom sub-domain for preview that allows you to see your site in real-time before publishing.",
    },
    {
      question: "Can I check my site responsiveness?",
      answer:
        "Yes, Designo provides a built-in responsive design checking through different pre-defined devices screens that allows you to preview your site on different devices and screen sizes.",
    },
    {
      question: "Is there a free plan?",
      answer:
        "Yes, Designo offers a free tier so you can explore the platform and publish a basic site with core features.",
    },
  ];
  return (
    <section id="faqs" className="my-8 sm:my-16 py-4 px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl text-center">
        Frequently Asked Questions
      </h2>
      <div className="mt-14 sm:mt-16">
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-2xl mx-auto mt-8"
        >
          {faqs.map((faq, index) => (
            <AccordionItem value={faq.question} key={index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqsSection;
