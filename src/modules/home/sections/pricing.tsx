import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for trying out Designo",
      popular: false,
      price: "$0/month",
      features: ["3 subaccounts", "2 Team members", "Unlimited Pipelines"],
    },
    {
      name: "Pro",
      description: "For small teams and startups",
      popular: true,
      price: "$19/month",
      features: [
        "Priority support",
        "Unlimited subaccounts",
        "Unlimited team members",
        "Unlimited pipelines",
      ],
    },
    {
      name: "Enterprise",
      popular: false,
      description: "The ultimate agency kit",
      price: "$49/month",
      features: [
        "Rebilling",
        "24/7 support",
        "Unlimited subaccounts",
        "Unlimited team members",
        "Unlimited pipelines",
      ],
    },
  ];
  return (
    <section id="pricing" className="my-16">
      <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-4 py-16 mt-16">
        <h2 className="text-3xl sm:text-4xl text-center">
          {" "}
          Choose what fits you right
        </h2>
        <p className="mt-2 text-sm text-muted-foreground text-center w-full">
          Our straightforward pricing plans are tailored to meet your needs. If
          you&apos;re not ready to commit you can get started for free.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto px-4">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative ${
              plan.popular && "border-2 border-indigo-600"
            }`}
          >
            {plan.popular && (
              <Badge className="absolute top-0 right-0 text-xs px-2 py-1 rounded-br-none rounded-tl-none ">
                Most Popular
              </Badge>
            )}
            <CardHeader>
              <CardTitle className="text-2xl font-medium">
                {plan.name}
              </CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-4">{plan.price}</div>
              <ul className="list-disc pl-5 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="relative bottom-0 flex-1 flex items-end justify-center">
              <Link
                href={`/agency/sign-in?plan=${plan.name.toLowerCase()}`}
                className="w-full"
              >
                <Button className="w-full">Get Started</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
