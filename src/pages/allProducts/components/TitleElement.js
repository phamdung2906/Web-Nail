import React from "react";
import { SlArrowDown } from "react-icons/sl";
import { BsCheck2 } from "react-icons/bs";
import { SortType } from "../AllProducts";
import { useContext } from "react";
const TitleElement = () => {
  const { sortType, setSortType } = useContext(SortType);
  const s = ["Mặc định", "Giá tăng dần", "Giá giảm dần"];
  return (
    <div>
      <h1 className="text-4xl font-semibold mb-4">TẤT CẢ SẢN PHẨM</h1>
      <div className="flex flex-row justify-between text-lg">
        <span>Nailbox - tăng sự sang trọng cho đôi tay của bạn</span>
        <div className="md:block hidden group relative">
          <button className="flex flex-row items-center gap-2 text-base">
            {sortType === "Mặc định" ? "SẮP XẾP THEO" : sortType}{" "}
            <SlArrowDown></SlArrowDown>
          </button>
          <div className="bg-white absolute right-0 hidden group-hover:block shadow-lg">
            <ul className="w-36">
              {s.map((s) => {
                return (
                  <li
                    className="p-3 hover:bg-gray-300"
                    onClick={() => setSortType(s)}
                  >
                    {s} {sortType === s ? <BsCheck2></BsCheck2> : <></>}
                  </li>
                );
              })}
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleElement;
