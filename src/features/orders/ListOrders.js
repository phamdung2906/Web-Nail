import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";

import { deleteOrder, handleQuantity } from "./orderSlice";
import { useDispatch } from "react-redux";
const ListOrders = ({ order, checkout }) => {
  const dispatch = useDispatch();
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  let width = "100%";
  let className = "";
  if (checkout === 1) {
    width = "80%";
    className = "md:text-2xl text-xl";
  }
  return (
    <div className="grid grid-cols-3 grid-rows-1 px-4 py-2">
      <div>
        <img
          src={`http://127.0.0.1:5000/images/${order.img}`}
          alt="anhsp"
          className="h-full rounded-xl"
          width={width}
        ></img>
      </div>
      <div className="col-start-2 col-end-4 flex flex-row">
        <div className="w-[65%] px-2 flex flex-col justify-between">
          <h3 className={className}>{order.name}</h3>
          <p>{order.size}</p>
          <p>{order.form}</p>
        </div>
        <div className=" flex-1 items-end flex flex-col justify-between">
          <RiDeleteBinLine
            onClick={() => {
              dispatch(deleteOrder({ id: order.id }));
            }}
            className="cursor-pointer"
            title="Xóa"
          ></RiDeleteBinLine>
          <div className="text-right">
            <p className="text-lg font-medium">
              {VND.format(
                order.price -
                  (order.price * (order.sale === 0 ? 1 : order.sale)) / 100
              )}
            </p>
            <p className="text-base line-through">{VND.format(order.price)}</p>
          </div>

          <div className="flex flex-row text-base items-center justify-between w-full">
            <AiOutlineMinus
              onClick={() =>
                dispatch(handleQuantity({ orderId: order.id, type: 0 }))
              }
              className="rounded-full bg-gray-400 cursor-pointer"
            ></AiOutlineMinus>
            <p>Qty: {order.quantity}</p>
            <AiOutlinePlus
              onClick={() =>
                dispatch(handleQuantity({ orderId: order.id, type: 1 }))
              }
              className="rounded-full bg-gray-400 cursor-pointer"
            ></AiOutlinePlus>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOrders;
