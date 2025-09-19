import React from "react";
import Card from "@/components/Card";
import Pill from "@/components/Pill";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <Card />

      <div className="mt-4 flex gap-2">
        <Pill title="Next.js" />
        <Pill title="Tailwind" />
        <Pill title="TypeScript" />
      </div>

      <div className="space-x-4 p-6">
      <Button styles="rounded-sm">Small Rounded</Button>
      <Button styles="rounded-md">Medium Rounded</Button>
      <Button styles="rounded-full">Fully Rounded</Button>
      {/* Keep your existing rounded-lg button if you already had it */}
      <Button styles="rounded-lg">Large Rounded</Button>
    </div>
    </div>
  );
};

export default Landing;
