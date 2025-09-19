import React from "react";
import Card from "../components/Card";
import Pill from "../components/Pill";
import Button from "../components/Button";

const Landing = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Landing Page</h1>

      {/* Task 4: Use Card */}
      <Card />

      {/* Task 5: Use Pill */}
      <div className="mt-4 flex gap-2">
        <Pill title="Next.js" />
        <Pill title="Tailwind" />
        <Pill title="TypeScript" />
      </div>

      {/* Task 6: Use Buttons */}
      <div className="mt-6 flex gap-2">
        <Button title="Small Rounded" size="small" shape="sm" />
        <Button title="Medium Rounded" size="medium" shape="md" />
        <Button title="Large Circle" size="large" shape="full" />
      </div>
    </div>
  );
};

export default Landing;
