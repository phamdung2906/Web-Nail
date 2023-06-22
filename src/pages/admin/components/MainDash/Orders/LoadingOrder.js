import TableHeader from "./TableHeader";
import LineOrder from "./LineOrders/LineOrder";
export default function LoadingOrder({ fullOrder }) {
  return (
    <>
      {fullOrder.length > 0 ? (
        <table className="w-full">
          <TableHeader title="loading" />
          {fullOrder && (
            <>
              {fullOrder.map((order, index) =>
                order.status === "loading" ? (
                  <LineOrder title='loading' key={index} order={order} />
                ) : (
                  <></>
                )
              )}
            </>
          )}
        </table>
      ) : (
        <div className="mt-2">Không có đơn hàng cần xử lý</div>
      )}
    </>
  );
}
