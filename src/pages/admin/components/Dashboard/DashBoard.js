import React from "react";
import ListItems from "./ListItems";

const DashBoard = () => {
  return (
    <section className="bg-slate-300 float-left w-64 h-full fixed ">
      <h1 className="text-3xl p-4 border-b-2 border-gray-800">DashBoard</h1>
      <ListItems />
    </section>
  );
};

export default DashBoard;
