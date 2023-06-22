import React from "react";
// import OptionsProduct from "./OptionsProduct";
import { SlArrowDown } from "react-icons/sl";
import DropdownType from "./DropdownType";
import { useContext, useState } from "react";
import { upLoadInfor } from "../AddModal";

const InforProduct = () => {
  const { state, dispatch } = useContext(upLoadInfor);
  const [isChecked, setIsChecked] = useState(state.hot || false);

  const [selector, setSelector] = useState("Chọn loại sản phẩm");

  const handleSelector = (e) => {
    dispatch({ type: "AddType", tpe: e });
    setSelector(e);
  };
  const [drop, setDrop] = useState(false);
  const dropdown = () => {
    setDrop(!drop);
  };
  const listType = ["Mắt mèo", "Sang trọng", "Dễ thương", "Tối màu"];
  function handleCheckboxChange(event) {
    dispatch({ type: "AddHot", hot: event.target.checked });
    setIsChecked(event.target.checked);
  }
  let booleanVal = JSON.parse(isChecked);
  const PricePart = () => {
    return (
      <div>
        <label>Giá : </label>
        <input
          type="number"
          className="w-3/5 px-2 py-1 bg-inherit rounded-md ml-1 border-2 border-gray-300 text-base"
          placeholder={"Nhập giá tiền"}
          onChange={(e) =>
            dispatch({ type: "AddPrice", price: parseInt(e.target.value) })
          }
          value={state.price === 0 ? "" : state.price}
        />
      </div>
    );
  };

  const SalePart = () => {
    return (
      <div>
        <label>Sale (%) : </label>
        <input
          type="number"
          className="w-2/5 px-2 py-1 bg-inherit rounded-md ml-1 border-2 border-gray-300 text-base"
          placeholder={"Phần trăm sale"}
          onChange={(e) =>
            dispatch({ type: "AddSale", sale: parseInt(e.target.value) })
          }
          value={state.sale === 0 ? "" : state.sale}
        />
      </div>
    );
  };
  const TypePart = () => {
    return (
      <div className="flex flex-row ">
        <label>Loại : </label>
        <div className="relative w-3/5">
          <span
            onClick={dropdown}
            className="flex flex-row items-center justify-center text-base font-normal gap-2 px-2 cursor-pointer h-full"
          >
            {state.type || selector}
            <SlArrowDown className="absolute right-0 text-base" />
          </span>
          <ul
            style={drop ? { display: "flex" } : { display: "none" }}
            className="absolute bg-white left-[60%] right-[-60%] flex-col shadow-xl h-32 overflow-y-auto py-2 z-20 text-base"
          >
            {listType.map((type, i) => {
              return (
                <DropdownType
                  key={i}
                  title={type}
                  handleSelector={handleSelector}
                  drop={dropdown}
                ></DropdownType>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };
  const HotPart = () => {
    return (
      <div className="flex items-center">
        <span className="mr-2">Nổi bật : </span>
        <label className="text-base translate-y-[1px]">
          <input
            type="checkbox"
            checked={booleanVal}
            onChange={handleCheckboxChange}
            className="mr-2 w-4 h-4 translate-y-[3px]"
          />
          {booleanVal ? "Có" : "Không"}
        </label>
      </div>
    );
  };

  return (
    <div className=" my-2 grid grid-cols-2 grid-rows-2 text-lg">
      {PricePart()}
      {SalePart()}
      <TypePart />
      <HotPart />
    </div>
  );
};

export default InforProduct;
