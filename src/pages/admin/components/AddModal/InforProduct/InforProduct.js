import React from "react";
// import OptionsProduct from "./OptionsProduct";
import { SlArrowDown } from "react-icons/sl";
import DropdownType from "./DropdownType";
import { useContext, useState } from "react";
import { upLoadInfor } from "../AddModal";

const InforProduct = () => {
  const { state, dispatch } = useContext(upLoadInfor);
  const [isChecked, setIsChecked] = useState(false);
  const [selector, setSelector] = useState("Select type");
  const handleSelector = (e) => {
    dispatch({ type: "AddType", tpe: e });
    setSelector(e);
  };
  const [drop, setDrop] = useState(false);
  const dropdown = () => {
    setDrop(!drop);
  };
  const listType = ["Mat meo", "Sang trong", "Nhu flash", "Luxury"];
  function handleCheckboxChange(event) {
    console.log(event.target.checked);
    dispatch({ type: "AddHot", hot: event.target.checked });
    setIsChecked(event.target.checked);
  }

  const PricePart = () => {
    return (
      <div>
        <label>Price : </label>
        <input
          type="number"
          className="w-3/5 px-2 py-1 bg-inherit rounded-md ml-1 border-2 border-gray-300 text-base"
          placeholder={"Nhap gia tien"}
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
        <label>Sale</label>
        <input
          type="number"
          className="w-3/5 px-2 py-1 bg-inherit rounded-md ml-1 border-2 border-gray-300 text-base"
          placeholder={"Nhap gia tien"}
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
      <div className="flex flex-row mt-1">
        <label>Type : </label>
        <div className="relative w-3/5">
          <span
            onClick={dropdown}
            className="flex flex-row items-center justify-center text-base font-normal gap-2 px-2 cursor-pointer h-full"
          >
            {selector}
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
      <div className="mt-1 flex items-center">
        <span className="mr-2">Hot : </span>
        <label className="text-base translate-y-[1px]">
          {isChecked ? "Yes" : "No"}
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="ml-2 w-4 h-4 translate-y-[3px]"
          />
        </label>
      </div>
    );
  };

  return (
    <div className=" my-2 grid grid-cols-2 grid-rows-2 text-xl">
      {PricePart()}
      {SalePart()}
      <TypePart />
      <HotPart />
    </div>
  );
};

export default InforProduct;
