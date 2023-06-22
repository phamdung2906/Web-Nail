import React, { useEffect, useState } from "react";
import LoadingOrder from "./LoadingOrder";
import AcceptedOrder from "./AcceptedOrder";
import CancelOrder from "./CancelOrder";
export const titleOrder = React.createContext();
const AllOrders = () => {
  const [title, setTitle] = useState("loading");
  const URL = "http://localhost:5000/orders";
  const [fullOrder, setFullOrder] = useState([]);
  useEffect(() => {
    const fecthData = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      setFullOrder(data.data);
    };
    fecthData();
  }, []);

  const HeaderOfOrder = ({ header }) => {
    let a = 0;
    let b = 0;
    let c = 0;
    fullOrder.map((order) =>
      order.status === "loading"
        ? (a += 1)
        : order.status === "accepted"
        ? (b += 1)
        : (c += 1)
    );
    let t =
      header === "loading"
        ? `Chờ xử lý ${a === 0 ? "" : `(${a})`}`
        : header === "accepted"
        ? `Đã xác nhận ${b === 0 ? "" : `(${b})`}`
        : `Đã Hủy ${c === 0 ? "" : `(${c})`}`;
    return (
      <div
        onClick={() => setTitle(header)}
        style={title === header ? { backgroundColor: "#d2c9c9" } : {}}
        className="py-3 px-14 cursor-pointer"
      >
        {t}
      </div>
    );
  };
 
  return (
    <titleOrder.Provider value={{ fullOrder, setFullOrder }}>
      <div className="bg-gray-100 ">
        <h1 className="text-4xl mb-5 border-b-2 pb-4">Đơn hàng</h1>
        <div className="flex flex-row justify-between pb-4 border-b-2">
          <HeaderOfOrder header="loading"></HeaderOfOrder>
          <HeaderOfOrder header="accepted"></HeaderOfOrder>
          <HeaderOfOrder header="cancel"></HeaderOfOrder>
        </div>
        {title === "loading" ? (
          <LoadingOrder fullOrder={fullOrder}></LoadingOrder>
        ) : title === "accepted" ? (
          <AcceptedOrder fullOrder={fullOrder}></AcceptedOrder>
        ) : title === "cancel" ? (
          <CancelOrder fullOrder={fullOrder}></CancelOrder>
        ) : (
          <></>
        )}
      </div>
    </titleOrder.Provider>
  );
};

export default AllOrders;
