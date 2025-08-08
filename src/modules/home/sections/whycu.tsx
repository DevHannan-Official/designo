import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LayoutDashboard,
  LetterText,
  LucideScreenShare,
  MessageCircleDashed,
  Pointer,
  Rocket,
} from "lucide-react";
import React from "react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Rocket,
      title: "Fast and Efficient",
      description:
        "Designo is built with a focus on speed and efficiency, ensuring that you can create stunning websites quickly and easily.",
    },
    {
      icon: LucideScreenShare,
      title: "Modern & Intuitive Design",
      description:
        "Our platform features a modern and intuitive design that makes it easy for developers, designers, and businesses to create beautiful websites without any hassle.",
    },
    {
      icon: Pointer,
      title: "Powerful Drag-and-Drop Editor",
      description:
        "Our intuitive drag-and-drop editor allows you to design your website without any coding knowledge, making it accessible to everyone.",
    },
    {
      icon: LayoutDashboard,
      title: "Comprehensive Dashboard",
      description:
        "Designo provides a comprehensive dashboard that gives you complete control over your projects, team members and pipelines.",
    },
    {
      icon: MessageCircleDashed,
      title: "24/7 Support",
      description:
        "Our dedicated support team is available 24/7 to assist you with any issues or questions you may have.",
    },
    {
      icon: LetterText,
      title: "Rebilling",
      description:
        "Designo offers rebilling features, making it easy to manage your clients' billing and subscriptions.",
    },
  ];
  return (
    <section id="whycu" className="my-10 md:py-10">
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl sm:text-4xl text-center mb-8">Why Choose Us</h2>
        <div
          className="
      columns-1
      sm:columns-2
      lg:columns-3
      gap-6
      [column-fill:_balance]
    "
        >
          {reasons.map((reason) => (
            <Card key={reason.title} className="mb-6 break-inside-avoid w-full">
              <CardHeader>
                <reason.icon className="h-10 w-10 text-primary" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-2xl font-medium">
                  {reason.title}
                </CardTitle>
                <CardDescription>{reason.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
          <p className="text-primary text-center text-sm mt-10">
            And Much More...
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
