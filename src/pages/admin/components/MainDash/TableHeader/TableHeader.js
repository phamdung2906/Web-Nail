import React from "react";
import LineTbHeader from "./LineTbHeader";
const TableHeader = () => {
  return (
    <thead>
      <tr key="" className="h-10">
        <LineTbHeader title={"Sản phẩm"} />
        <LineTbHeader title={"Giá"} />
        <LineTbHeader title={"Sale"} />
        <LineTbHeader title={"Type"} />
        <LineTbHeader title={"Status"} />
        <LineTbHeader title={"Hot"} />
        <LineTbHeader title={"Hành động"} />
      </tr>
    </thead>
  );
};

export default TableHeader;
