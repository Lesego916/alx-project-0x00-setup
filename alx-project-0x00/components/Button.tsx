import React from "react";

interface ButtonProps {
  title: string;
  size: "small" | "medium" | "large";
  shape: "sm" | "md" | "full";
}

const Button = ({ title, size, shape }: ButtonProps) => {
  let padding = "";
  if (size === "small") padding = "px-2 py-1 text-sm";
  if (size === "medium") padding = "px-4 py-2";
  if (size === "large") padding = "px-6 py-3 text-lg";

  let rounded = "";
  if (shape === "sm") rounded = "rounded-sm";
  if (shape === "md") rounded = "rounded-md";
  if (shape === "full") rounded = "rounded-full";

  return (
    <button className={`bg-green-500 text-white ${padding} ${rounded}`}>
      {title}
    </button>
  );
};

export default Button;
