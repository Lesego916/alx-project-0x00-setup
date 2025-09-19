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

      <div className="mt-6 flex gap-2">
        <Button title="Small Button" styles="rounded-sm" />
        <Button title="Medium Button" styles="rounded-md" />
        <Button title="Large Button" styles="rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
