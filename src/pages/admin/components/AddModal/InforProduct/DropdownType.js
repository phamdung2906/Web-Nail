import React from "react";

const DropdownType = ({ title, handleSelector , drop }) => {
  return (
    <li
      onClick={() => {
        handleSelector(title);
        drop()
      }}
      className="px-2 py-1 w-full text-center hover:bg-gray-300"
    >
      {title}
    </li>
  );
};

export default DropdownType;
