import React from "react";

const Card = () => {
  return (
    <div className="border rounded-lg shadow p-4 max-w-sm">
      <img src="/assets/images/house.png" alt="House" className="w-32 mx-auto" />
      <h2 className="text-xl font-bold mt-2">Card Title</h2>
      <p className="text-gray-600">This is a card component example.</p>
    </div>
  );
};

export default Card;
