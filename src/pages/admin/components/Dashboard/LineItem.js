import React, { useContext } from "react";
import { titleLayout } from "../../Admin";
const LineItem = ({ title, icon }) => {
  const { layout, setLayout } = useContext(titleLayout);
  return (
    <li
      style={
        title === layout
          ? { backgroundColor: "#d2c9c9" }
          : { backgroundColor: "transparent" }
      }
      className="mb-2 flex flex-row items-center gap-2 hover:opacity-50 p-4 select-none cursor-pointer"
      onClick={() => setLayout(title)}
    >
      <span className="text-lg">{icon}</span>
      <span className="text-2xl">{title}</span>
    </li>
  );
};

export default LineItem;
