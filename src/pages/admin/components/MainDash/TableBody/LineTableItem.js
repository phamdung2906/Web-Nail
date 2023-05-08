import React from "react";
import { VND } from "../../../../../VND";
import { AiTwotoneEdit, AiOutlineDelete } from "react-icons/ai";
const LineTableItem = ({ title, img, hanhdong, price, sale, status, hot }) => {
  return (
    <td className="h-20">
      <div className="flex flex-row items-center gap-2 justify-start">
        {img && (
          <img src={img} alt="anhsp" className="w-24 h-20 rounded-xl ml-2" />
        )}
        {title}
        {price && VND.format(price)}
        {sale && VND.format(sale)}
        {status && status}
        {hot && hot}
        {hanhdong && (
          <div>
            <button className="mr-3 flex flex-row items-center gap-2 mb-2">
              {hanhdong.edit}
              <AiTwotoneEdit />
            </button>
            <button className="mr-3 flex flex-row items-center gap-2">
              {hanhdong.remove}
              <AiOutlineDelete />
            </button>
          </div>
        )}  
      </div>
    </td>
  );
};

export default LineTableItem;
