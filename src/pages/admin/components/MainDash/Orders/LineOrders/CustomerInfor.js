export default function CustomerInfor({ order }) {
  return (
    <td className="align-top px-4 text-base">
      <div className="">
        <label>Tên : </label>
        <span>{order.name}</span>
      </div>
      <div>
        <label>Địa chỉ : </label>
        <span>
          {order.diachi} , {order.quanhuyen} , {order.city}
        </span>
      </div>
      {order.ghichu === "" ? (
        <div></div>
      ) : (
        <div>
          <label>Ghi chú : </label>
          <span>{order.ghichu}</span>
        </div>
      )}
    </td>
  );
}
