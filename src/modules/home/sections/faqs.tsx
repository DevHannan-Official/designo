import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";
import React from "react";

const FaqsSection = () => {
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
