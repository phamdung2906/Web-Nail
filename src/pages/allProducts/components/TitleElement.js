import React from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { BsCheck2 } from "react-icons/bs";
const TitleElement = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold mb-4">TẤT CẢ SẢN PHẨM</h1>
      <div className="flex flex-row justify-between text-lg">
        <span>Nailbox - tăng sự sang trọng cho đôi tay của bạn</span>
        <div className="group relative">
          <button className="flex flex-row items-center gap-2 text-base">
            SẮP XẾP THEO <SlArrowDown></SlArrowDown>
          </button>
          <div className="bg-white absolute right-0 hidden group-hover:block shadow-lg">
            <ul className="w-36">
              <li className="p-3 hover:bg-gray-300">
                Mặc định<BsCheck2></BsCheck2>
              </li>
              <li className="p-3 hover:bg-gray-300">Giá tăng dần</li>
              <li className="p-3 hover:bg-gray-300">Giá giảm dần</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleElement;
