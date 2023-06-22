import React, { useContext } from "react";

import { HiOutlinePlus } from "react-icons/hi";

import { addModal } from "../../Admin";
import { editProductById } from "../../Admin";
const DashHeader = () => {
  const { setEditProduct } = useContext(editProductById);
  const { viewModal, setViewModal } = useContext(addModal);
  return (
    <header className=" h-[68px] flex items-center justify-between -mt-2 -ml-2">
      <h1 className="text-4xl ml-10 pb-4 border-b-2 px-2 font-normal">Diamond Nail</h1>
      <span
        onClick={() => {
          setViewModal(!viewModal);
          setEditProduct({});
        }}
        className="flex flex-row items-center gap-2 bg-black text-white text-lg px-4 py-2 rounded-2xl mr-8 cursor-pointer hover:opacity-50"
      >
        Thêm sản phẩm
        <HiOutlinePlus />
      </span>
    </header>
  );
};

export default DashHeader;
