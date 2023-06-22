export default function TableHeader({ title }) {
  return (
    <tr className="text-base">
      <th className="w-[35%]">Đơn hàng</th>
      <th className="w-[35%]">Thông tin</th>
      <th >Tổng tiền</th>
      {title === "cancel" ? <></> : <th className="w-[10%]">Hành động</th>}
    </tr>
  );
}
