import React, { useContext } from "react";
import LineTable from "./LineTable";

import { newProductStore } from "../../../Admin";
const TableBody = () => {
  const { products } = useContext(newProductStore);

  return (
    <tbody className="overflow-auto h-[50px]">
      {products.map((line, i) => {
        const h = line.hot === true ? "Co" : "Khong"; //convert boolean to String
        const mainImg = line.images[0]
        return (
          <LineTable
            idProduct={line.idProduct}
            key={i}
            name={line.name}
            img={mainImg}
            type={line.type}
            price={line.price}
            sale={line.sale}
            status={line.status}
            hot={h}
          />
        );
      })}
    </tbody>
  );
};

export default TableBody;
