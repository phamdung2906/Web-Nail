import React, { useContext } from "react";
import LineTable from "./LineTable";
import { addModal } from "../../../Admin";
import { newProductStore } from "../../../Admin";
import { editProductById } from "../../../Admin";
const TableBody = () => {
  const { products } = useContext(newProductStore);
  const { viewModal, setViewModal } = useContext(addModal);

  const { setEditProduct } = useContext(editProductById);
  const handleEdit = (productId) => {
    const productEdited = products.filter((pro) => pro.idProduct === productId);
    setEditProduct(productEdited);
  };
  return (
    <tbody className="overflow-auto ">
      {products.map((line, i) => {
        const h = JSON.parse(line.hot) === true ? "Có" : "Không"; //convert boolean to String
        const mainImg = line.images[0];
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
            handleEdit={() => {
              setViewModal(!viewModal);
              handleEdit(line.idProduct);
            }}
          />
        );
      })}
    </tbody>
  );
};

export default TableBody;
