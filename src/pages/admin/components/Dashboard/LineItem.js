import React from "react";

const LineItem = ({ title, icon }) => {
  return ( 
    <li className="mb-2 flex flex-row items-center gap-2 hover:bg-gray-400 p-4">
      <span className="text-lg">{icon}</span>
      <span className="text-2xl">{title}</span>
    </li>
  );
};

export default LineItem;
