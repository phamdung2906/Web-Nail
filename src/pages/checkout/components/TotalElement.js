import React from "react";
import { VND } from "../../../VND";
const TotalElement = ({ title, price, sub }) => {
  return (
    <div className="flex flex-row justify-between my-3">
      <span>
        {title} <span className="text-base text-gray-500">{sub}</span>
      </span>
      <span className="text-lg font-medium">{VND.format(price)}</span>
    </div>
  );
};

export default TotalElement;
