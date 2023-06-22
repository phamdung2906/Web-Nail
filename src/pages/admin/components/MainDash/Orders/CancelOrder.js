import React from "react";
import TableHeader from "./TableHeader";
import LineOrder from "./LineOrders/LineOrder";
const CancelOrder = ({fullOrder}) => {
  return (
    <>
      {fullOrder.length > 0 ? (
        <table className="w-full">
          <TableHeader title={"cancel"} />
          {fullOrder && (
            <>
              {fullOrder.map((order, index) =>
                order.status === "cancel" ? (
                  <LineOrder title="cancel" key={index} order={order} />
                ) : (
                  <></>
                )
              )}
            </>
          )}
        </table>
      ) : (
        <div className="mt-2">Không có đơn hàng nào đã hủy</div>
      )}
    </>
  );
};

export default CancelOrder;
