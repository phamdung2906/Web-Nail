import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { HiOutlinePlus } from "react-icons/hi";
import { useState } from "react";
import { addModal } from "../../Admin";
const DashHeader = () => {
  const [value, setValue] = useState("");
  const { viewModal, setViewModal } = useContext(addModal);
  return (
    <header className=" h-[68px] flex items-center justify-between ml-[256px]">
      <form className="relative inline-block ml-8 w-96">
        <input
          className="px-4 py-2 w-full rounded-2xl border-2 border-gray-700"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter Name's Product"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-xl"
        >
          <BsSearch />
        </button>
      </form>
      <span
        onClick={() => setViewModal(!viewModal)}
        className="flex flex-row items-center gap-2 bg-black text-white px-4 py-2 rounded-2xl mr-8 cursor-pointer"
      >
        Thêm sản phẩm
        <HiOutlinePlus />
      </span>
    </header>
  );
};

export default DashHeader;
