import TableHeader from "./TableHeader";
import LineOrder from "./LineOrders/LineOrder";
export default function AcceptedOrder({ fullOrder }) {
  return (
    <>
      {fullOrder.length > 0 ? (
        <table className="w-full">
          <TableHeader title={'accepted'}/>
          {fullOrder && (
            <>
              {fullOrder.map((order, index) =>
                order.status === "accepted" ? (
                  <LineOrder title='accepted' key={index} order={order} />
                ) : (
                  <></>
                )
              )}
            </>
          )}
        </table>
      ) : (
        <div className="mt-2">Chưa có đơn hàng nào đã xác nhận</div>
      )}
    </>
  );
}
