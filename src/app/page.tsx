import { Button } from "@/components/ui/button";
import React from "react";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-special">Designo</h1>
      <Button>Click Me</Button>
      <p className="mt-4 text-lg">
        Welcome to Designo, the online website builder for agencies and
        freelancers.
      </p>
    </div>
  );
}
