import { VND } from "../../../../../../VND";

export default function TotalOrder({ order }) {
  let total = 0;
  order.orders.map(
    (order) =>
      (total +=
        (order.price - (order.price * order.sale) / 100) * order.quantity)
  );

  return (
    <td className="align-top px-4 text-base">
      <div className="mb-3 mt-2">
        <label>Tổng : </label>
        <span> {VND.format(total >= 200000 ? total : total + 30000)}</span>
      </div>
      <div>{order.times}</div>
    </td>
  );
}
