import React from "react";
import { VND } from "../../../../VND";
const ItemProduct = ({ product, handleModal, setModalItem }) => {
  
  const IMGURL = `http://127.0.0.1:5000/images/${product.images[0]}`
  return (
    <div
      onClick={() => {
        handleModal();
        setModalItem(product);
      }}
      className="group gap-2 w-full h-96 sm:w-full grid grid-rows-5 hover:shadow-[0px_0px_40px_rgba(0,0,0,0.15)] duration-200 mb-4"
    >
      <div className="h-full w-5/6 sm:w-full p-2  row-start-1 row-end-5 mx-auto ">
        <img
          src={IMGURL}
          alt={product.name}
          className="w-full h-full rounded-xl"
        ></img>
      </div>

      <div className="text-center text-xl px-3 font-normal">
        <h2 className="text-2xl font-light">{product.name}</h2>
        <div className="flex flex-row items-center justify-center">
          <p className="font-medium">Giá : {VND.format(product.price)}</p>
          <p className="line-through opacity-60 ml-2 text-lg">
            {VND.format(product.sale)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;
