import React, { useEffect, useState } from "react";
import Information from "./components/Information";
import Bill from "./components/Bill";
import { useSelector } from "react-redux";
import { allOrder } from "../../features/orders/orderSlice";
export const orderBill = React.createContext();
const CheckOut = () => {
  const productsOfOrder = useSelector(allOrder);
  const [bill, setBill] = useState({
    name: "",
    phone: "",
    diachi: "",
    city: "",
    quanhuyen: "",
    ghichu: "",
    status: "loading",
    orders: productsOfOrder,
  });
  useEffect(() => {
    setBill((pre) => {
      return { ...pre, orders: productsOfOrder };
    });
  }, [productsOfOrder]);
  console.log(productsOfOrder);
  return (
    <orderBill.Provider value={{ bill, setBill }}>
      <section className="w-full h-screen">
        <div className="max-w-7xl h-full mx-auto flex lg:flex-row flex-col overflow-auto">
          <Information></Information>
          <Bill productsOfOrder={productsOfOrder}></Bill>
        </div>
      </section>
    </orderBill.Provider>
  );
};

export default CheckOut;
