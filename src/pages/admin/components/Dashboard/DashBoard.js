import React from "react";
import ListItems from "./ListItems";

const DashBoard = () => {
  return (
    <section className="bg-gray-50 float-left w-64 h-full fixed select-none">
      <h1 className="text-3xl p-4 border-b-2 border-gray-800">DashBoard</h1>
      <ListItems />
    </section>
  );
};

export default DashBoard;
