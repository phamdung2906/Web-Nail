import React from "react";
import { addedOrder } from "../../features/orders/orderSlice";
import { useDispatch } from "react-redux";
import Options from "./Options";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { VND } from "../../VND";
const InforModal = ({ product }) => {
  const dispatch = useDispatch();
  const notify = () =>
    toast.success(<p className="text-base">Thêm thành công</p>, {
      position: "top-right",
      autoClose: 2000,
      pauseOnHover: false,
    });
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (type) => {
    if (type === "minus") {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
    if (type === "plus") setQuantity(quantity + 1);
  };

  const [size, setSize] = useState("");
  const [form, setForm] = useState("");
  const newOrder = {
    id: product._id,
    img: product.img,
    name: product.name,
    size: size,
    form: form,
    quantity: quantity,
    price: product.price,
    sale: product.sale,
  };
  const handleAddOrder = (event) => {
    if (size !== "" && form !== "") {
      dispatch(addedOrder({ order: newOrder }));
      notify();
    } else {
      event.preventDefault();
      alert("vui long nhap");
    }
  };
  return (
    <div className=" p-4 flex flex-col lg:overflow-y-scroll ">
      <ToastContainer></ToastContainer>
      <h1 className="text-3xl md:text-[2.5rem] mr-8">
        {product.name} | Móng Sơn Gel
      </h1>
      <p className="text-base underline text-gray-600 my-4">Diamond nailbox</p>
      <Options
        title="Kích thước"
        items={["Size XS", "Size S", "Size M", "Size L"]}
        setSize={setSize}
      ></Options>
      <Options
        title="Dạng móng"
        items={["Nhọn", "Tròn Nhọn", "Vuông", "Thang"]}
        setForm={setForm}
      ></Options>
      <div className="my-4">
        <h1 className="text-2xl mb-2">Ghi chú</h1>
        <textarea
          className="w-full h-28 text-xl p-2 border-2 border-black rounded-xl"
          placeholder="Ghi chú size tay từ ngón cái Vd: 1.2/1.1/1.0/0.9/0.8"
        ></textarea>
      </div>
      <div className="text-2xl mb-4">
        Giá : <span className="font-medium">{VND.format(product.price)}</span>{" "}
        <span className="text-xl line-through text-gray-600 ml-2">
          {VND.format(product.sale)}
        </span>
      </div>
      <div className="text-2xl flex flex-row">
        Số Lượng :
        <div className="flex flex-row items-center gap-2 ml-2 ">
          <AiOutlineMinus
            onClick={() => handleQuantity("minus")}
            className=" cursor-pointer select-none hover:bg-gray-300"
          />
          <span>{quantity}</span>
          <AiOutlinePlus
            onClick={() => handleQuantity("plus")}
            className=" cursor-pointer select-none hover:bg-gray-300"
          />
        </div>
      </div>
      <div className=" flex-1 flex sm:flex-row flex-col items-center justify-between text-2xl sm:text-3xl gap-2 my-4 ">
        <div
          onClick={handleAddOrder}
          className="sm:w-1/2 w-[90%] text-center text-2xl border-solid border-2 border-black py-2 px-4 cursor-pointer hover:opacity-70 hover:border-gray-400"
        >
          Thêm vào giỏ
        </div>
        <Link
          to={"/checkout"}
          onClick={(e) => {
            handleAddOrder(e);
          }}
          className="sm:w-1/2 w-[90%] text-center text-2xl border-solid border-2 border-black py-2 px-4 bg-[#111111] text-white cursor-pointer hover:opacity-70 hover:border-gray-400"
        >
          Thanh toán ngay
        </Link>
      </div>
      <div className="text-xl mb-4">
        <h1>Mô tả sản phẩm</h1>
        <ul>
          <li> Nailbox thiết kế thủ công ( kèm deo dũa )</li>
          <li>
            Khách đo chuẩn size tay nha. Nếu size tay không ứng với bảng size
            vui lòng ghi rõ size tay từng ngón theo thứ tự ngón cái trước{" "}
          </li>
          <li>( Ví dụ : trái 1.1/1/0.9/0.8/0.7 phải 1.1/1/0.9/0.8/0.7 )</li>
          <li>
            <ul>
              Thiết kế NailBox theo yêu cầu size 1 bộ gồm :
              <li>•10 ngón úp thiết kế</li>
              <li> •1 chai keo </li>
              <li>•1 dũa mini •Giấy cồn lau</li>
              <li> •Card HDSD</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InforModal;
