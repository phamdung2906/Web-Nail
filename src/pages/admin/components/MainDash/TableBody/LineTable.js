import React from "react";
import LineTableItem from "./LineTableItem";
const LineTable = ({ name, img, type, price, sale, status, hot }) => {
  return (
    <>
      <tr key="" className="h-28 bg-gray-400">
        <LineTableItem img={img} title={name} />
        <LineTableItem price={price} />
        <LineTableItem sale={sale} />
        <LineTableItem title={type} />
        <LineTableItem status={status} />
        <LineTableItem hot={hot} />
        <LineTableItem hanhdong={{ edit: "Edit", remove: "Xoa" }} />
      </tr>
      <div className="bg-white w-full h-3"></div>
    </>
  );
};

export default LineTable;
