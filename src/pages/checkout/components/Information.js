import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { orderBill } from "../CheckOut";
import { URLBE } from "../../../BackendURL";
const Information = () => {
  const { bill, setBill } = useContext(orderBill);

  const handleOrder = (event) => {
    const postOrder = async () => {
      const URL = `${URLBE}order`;

      const orderData = {
        name: bill.name,
        phone: bill.phone,
        diachi: bill.diachi,
        city: bill.city,
        ghichu: bill.ghichu,
        status: bill.status,
        quanhuyen: bill.quanhuyen,
        orders: bill.orders,
      };

      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      const rep = await response.json();
      console.log(rep);
    };
    if (bill.name === "") {
      event.preventDefault();
      alert("Vui lòng nhập tên");
    } else if (bill.phone === "") {
      event.preventDefault();
      alert("Vui lòng nhập số điện thoại");
    } else if (bill.diachi === "") {
      event.preventDefault();
      alert("Vui lòng nhập địa chỉ");
    } else if (bill.city === "") {
      event.preventDefault();
      alert("Vui lòng nhập thành phố");
    } else if (bill.quanhuyen === "") {
      event.preventDefault();
      alert("Vui lòng nhập quận huyện");
    } else if (bill.orders.length === 0) {
      event.preventDefault();
      alert("Vui lòng chọn tối thiểu 1 sản phẩm để đặt hàng");
    } else postOrder();
  };

  return (
    <section className="lg:border-r-2 lg:border-black px-10 flex-1 lg:order-1 order-2">
      <div className="flex items-center justify-center flex-col my-8">
        <Link to={"/"}>
          <img src="prev.png" alt="logo" className="w-40 h-40" />
        </Link>
        <h1 className="text-2xl font-semibold">THÔNG TIN KHÁCH HÀNG</h1>
      </div>
      <div className="grid grid-cols-2 grid-rows-6 gap-4 text-base">
        <input
          className="p-2 border-[1px] border-[#e0e2e6]"
          type="text"
          placeholder="Họ và tên"
          required
          value={bill.name}
          onChange={(e) => {
            setBill((pre) => {
              return { ...pre, name: e.target.value };
            });
          }}
        />
        <input
          className="p-2 border-[1px] border-[#e0e2e6]"
          type="number"
          placeholder="Số điện thoại"
          required
          value={bill.phone}
          onChange={(e) => {
            setBill((pre) => {
              return { ...pre, phone: e.target.value };
            });
          }}
        />
        <input
          className="p-2 col-start-1 col-end-3 border-[1px] border-[#e0e2e6]"
          type="text"
          placeholder="Địa chỉ"
          required
          value={bill.diachi}
          onChange={(e) =>
            setBill((pre) => {
              return { ...pre, diachi: e.target.value };
            })
          }
        />
        <input
          className="p-2 border-[1px] border-[#e0e2e6]"
          type="text"
          placeholder="Thành phố"
          required
          value={bill.city}
          onChange={(e) =>
            setBill((pre) => {
              return { ...pre, city: e.target.value };
            })
          }
        />
        <input
          className="p-2 border-[1px] border-[#e0e2e6]"
          type="text"
          placeholder="Quận / Huyện"
          required
          value={bill.quanhuyen}
          onChange={(e) =>
            setBill((pre) => {
              return { ...pre, quanhuyen: e.target.value };
            })
          }
        />
        <textarea
          className="p-2 col-start-1 col-end-3 row-start-5 row-end-7 border-[1px] border-[#e0e2e6]"
          type="text"
          placeholder="Ghi chú nếu cần"
          value={bill.ghichu}
          onChange={(e) =>
            setBill((pre) => {
              return { ...pre, ghichu: e.target.value };
            })
          }
        />
        <p className="col-start-1 col-end-3 text-center flex items-end justify-center">
          *Phương thức vận chuyển là FREESHIP với đơn hàng từ 200.000đ
        </p>
        <div className="h-32 col-start-1 col-end-3 flex items-center justify-center ">
          <Link
            to={"/thankyou"}
            onClick={handleOrder}
            className="flex flex-row items-center gap-1 bg-[#53c66e] p-4 w-3/5 justify-center text-white rounded-xl shadow-lg"
          >
            ĐẶT HÀNG<BsArrowRight></BsArrowRight>
          </Link>
        </div>
      </div>
      <hr className="mt-4" />
    </section>
  );
};

export default Information;
