import React from "react";
import DashHeader from "./MainDash/DashHeader";
import TableHeader from "./MainDash/TableHeader/TableHeader";
import TableBody from "./MainDash/TableBody/TableBody";
const MainDash = () => {
  return (
    <section className=" w-full h-full">
      <DashHeader></DashHeader>
      <main className=" w-[calc(100%-256px)] h-[calc(100%-68px)] p-4 float-right">
        <h1 className="text-3xl font-semibold border-b-2 border-black py-4">
          Tất cả sản phẩm
        </h1>
        <table className=" my-4 w-full h-96">
          <TableHeader />
          <TableBody />
        </table>
      </main>
    </section>
  );
};

export default MainDash;
