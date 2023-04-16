import React from "react";
import ListOrders from "../../../features/orders/ListOrders";
import TotalElement from "../components/TotalElement";

import { useSelector } from "react-redux";
import { allOrder } from "../../../features/orders/orderSlice";
const Bill = () => {
  const orders = useSelector(allOrder);
  let total = 0;
  let ship = 30000;
  return (
    <section className="md:px-10 px-4 mt-10 flex-1 order-1 lg:order-2">
      <h1 className=" text-[1.7rem] font-semibold py-4">ĐƠN HÀNG</h1>
      <hr />
      <div className="my-5 h-[470px] grid auto-rows-[120px] grid-cols-1">
        {orders.map((order) => {
          total += order.price * order.quantity;
          if (total > 200000) ship = 0;
          return <ListOrders key={order.id} checkout={1} order={order}></ListOrders>;
        })}
      </div>
      <hr />
      <div className="py-6">
        <TotalElement title={"Thành tiền : "} price={total}></TotalElement>
        <TotalElement title={"Phí vận chuyển :"} price={ship}></TotalElement>
      </div>
      <hr />
      <div className="pb-8">
        <TotalElement
          title={"TỔNG : "}
          price={total+ship}
          sub={"( đã bao gồm thuế VAT )"}
        ></TotalElement>
      </div>
    </section>
  );
};

export default Bill;
