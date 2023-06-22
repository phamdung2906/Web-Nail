import React from "react";
import ListOrders from "../../../features/orders/ListOrders";
import TotalElement from "../components/TotalElement";

const Bill = ({ productsOfOrder }) => {
  let total = 0;
  let ship = 30000;

  return (
    <section className="md:px-10 px-4 mt-10 flex-1 order-1 lg:order-2 text-base">
      <h1 className=" text-lg font-semibold py-4">ĐƠN HÀNG</h1>
      <hr />
      <div className="my-5 h-[450px] grid auto-rows-[120px] grid-cols-1">
        {productsOfOrder.map((order, index) => {
          total =
            total +
            (order.price -
              (order.price * (order.sale === 0 ? 1 : order.sale)) / 100) *
              order.quantity;
          if (total > 200000) ship = 0;
          return (
            <ListOrders key={index} checkout={1} order={order}></ListOrders>
          );
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
          price={total + ship}
          sub={"( đã bao gồm thuế VAT )"}
        ></TotalElement>
      </div>
    </section>
  );
};

export default Bill;
