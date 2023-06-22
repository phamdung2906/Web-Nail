import OrderOfCustomer from "./OrderCustomer/OrderCustomer";
import CustomerInfor from "./CustomerInfor";
import TotalOrder from "./TotalOrder";
import { titleOrder } from "../AllOrders";
import { useContext } from "react";
export default function LineOrder({ order, title }) {
  const { fullOrder, setFullOrder } = useContext(titleOrder);
  const handleAccept = () => {
    const newFullOrder = fullOrder.map((ord) =>
      ord._id === order._id ? { ...ord, status: "accepted" } : ord
    );
    const updateOnServer = async () => {
      const URL = `http://localhost:5000/updateOrders/${order._id}`;
      const response = await fetch(URL, {
        method: "POST",
      });
      const rep = await response.json();
      console.log(rep);
    };
    updateOnServer();
    setFullOrder(newFullOrder);
  };
  const handleCancel = () => {
    const newFullOrder = fullOrder.map((ord) =>
      ord._id === order._id ? { ...ord, status: "cancel" } : ord
    );
    const cancelOnServer  = async () =>{
      const URL = `http://localhost:5000/cancelOrder/${order._id}`
      const response = await fetch(URL,{
        method:'POST'
      })
      const rep = await response.json()
      console.log(rep);
    }
    cancelOnServer()
    setFullOrder(newFullOrder);
  };
  return (
    <tr className="py-4 border-y-4 border-white">
      <OrderOfCustomer orderOfCustomer={order.orders}></OrderOfCustomer>
      <CustomerInfor order={order}></CustomerInfor>
      <TotalOrder order={order}></TotalOrder>
      {title === "cancel" ? (
        <></>
      ) : (
        <td className="align-top">
          <div className="flex flex-col gap-2 text-base mt-2">
            {title === "loading" ? (
              <button onClick={handleAccept}>Xác nhận</button>
            ) : (
              <></>
            )}
            <button onClick={handleCancel}>Hủy đơn</button>
          </div>
        </td>
      )}
    </tr>
  );
}
