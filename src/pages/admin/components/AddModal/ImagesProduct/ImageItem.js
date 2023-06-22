import React from "react";
import { FiEye } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { URLBE } from "../../../../../BackendURL";
const ImageItem = ({ file ,handleDeleteImg , index}) => {
  const img =
  typeof file === "string"
    ? `${URLBE}${file}`
    : file.url;
  return (
    <div className="group w-[23%] h-32 relative">
      <img src={img} alt="anhsp" className="w-full h-full rounded-xl" />
      <div className="absolute top-0 bottom-0 left-0 right-0 hidden group-hover:block ">
        <div className="w-full h-full bg-gray-400 opacity-30 rounded-xl"></div>
        <div className="text-white text-xl gap-3 absolute flex flex-row items-center justify-center top-0 bottom-0 left-0 right-0 ">
          <FiEye className="cursor-pointer" />
          <RiDeleteBin2Line onClick={()=>{handleDeleteImg(index)}} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ImageItem;
