import React from "react";
import { Link } from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";
const Information = () => {
  return (
    <section className="lg:border-r-2 lg:border-black px-10 flex-1 lg:order-1 order-2">
      <div className="flex items-center justify-center flex-col my-8">
        <Link to={'/'}><img src="prev.png" alt="logo" className="w-40 h-40" /></Link>
        <h1 className="text-2xl font-semibold">THÔNG TIN KHÁCH HÀNG</h1>
      </div>
      <form className="grid grid-cols-2 grid-rows-7 gap-4 ">
        <input
          className="p-2 col-start-1 col-end-3 border-[1px] border-[#e0e2e6]"
          type="text"
          placeholder="Email"
          required
        />
        <input
          className="p-2 border-[1px] border-[#e0e2e6]"
          type="text"
          placeholder="Họ và tên"
          required
        />
        <input
          className="p-2 border-[1px] border-[#e0e2e6]"
          type="number"
          placeholder="Số điện thoại"
        />
        <input
          className="p-2 col-start-1 col-end-3 border-[1px] border-[#e0e2e6]"
          type="text"
          placeholder="Địa chỉ"
          required
        />
        <input
          className="p-2 border-[1px] border-[#e0e2e6]"
          type="text"
          placeholder="Thành phố"
          required
        />
        <input
          className="p-2 border-[1px] border-[#e0e2e6]"
          type="text"
          placeholder="Quận / Huyện"
          required
        />
        <textarea
          className="p-2 col-start-1 col-end-3 row-start-5 row-end-7 border-[1px] border-[#e0e2e6]"
          type="text"
          placeholder="Ghi chú nếu cần"
          required
        />
        <p className="col-start-1 col-end-3 text-center flex items-end justify-center">
          *Phương thức vận chuyển là FREESHIP với đơn hàng từ 200.000đ
        </p>
        <div className="h-32 col-start-1 col-end-3 flex items-center justify-center ">
          <button className="flex flex-row items-center gap-1 bg-[#53c66e] p-4 w-3/5 justify-center text-white rounded-xl shadow-lg">
            ĐẶT HÀNG<BsArrowRight></BsArrowRight>
          </button>
        </div>
      </form>
      <hr className="mt-4" />
    </section>
  );
};

export default Information;
