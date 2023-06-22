import React from "react";
import LineTbHeader from "./LineTbHeader";
const TableHeader = () => {
  return (
    <thead>
      <tr key="" className="h-10">
        <LineTbHeader width={''} title={"Sản phẩm"} />
        <LineTbHeader width={'13%'} title={"Giá gốc"} />
        <LineTbHeader width={'13%'} title={"% Sale"} />
        <LineTbHeader width={'13%'} title={"Loại"} />
        <LineTbHeader width={'10%'} title={"Nổi bật"} />
        <LineTbHeader width={'13%'} title={"Hành động"} />
      </tr>
    </thead>
  );
};

export default TableHeader;
