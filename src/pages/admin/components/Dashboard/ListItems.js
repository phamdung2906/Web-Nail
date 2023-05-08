import React from "react";
import LineItem from "./LineItem";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";

const ListItems = () => {
  return (
    <ul className="mt-4 px-4">
      <LineItem title={"Sản Phẩm"} icon={<FaShoppingBag />} />
      <LineItem title={"Đơn Hàng"} icon={<FaShoppingCart />} />
    </ul>
  );
};

export default ListItems;
