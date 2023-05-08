import React from "react";
import OptionsProduct from "./OptionsProduct";
const InforProduct = () => {
  return (
    <div className=" my-2 grid grid-cols-2 grid-rows-2 text-xl">
      <OptionsProduct price={"Giá"} />
      <OptionsProduct sale={"Sale"} />
      <OptionsProduct type={"Type"} />
      <OptionsProduct hot={"Hot"} />
    </div>
  );
};

export default InforProduct;
