import React, {useContext, useState} from "react";
import {SlArrowDown} from "react-icons/sl";
import DropdownType from "./DropdownType";
import {upLoadInfor} from "../AddModal";

const OptionsProduct = ({price, sale, type, hot}) => {
    const {state,dispatch} = useContext(upLoadInfor)
    const [selector, setSelector] = useState("Select type");
    const handleSelector = (e) => {
        dispatch({type:'AddType',tpe:e})
        setSelector(e);
    };
    const [isChecked, setIsChecked] = useState(false);

    function handleCheckboxChange(event) {
        console.log(event.target.checked)
        dispatch({type:'AddHot',hot:event.target.checked})
        setIsChecked(event.target.checked);
    }

    const [drop, setDrop] = useState(false)
    const dropdown = () => {
        setDrop(!drop)
    }
    const listType = [
        'Mat meo',
        'Sang trong',
        'Nhu flash',
        'Luxury'
    ]
    return (
        <div className="flex flex-row items-center p-2">
      <span className="w-1/5">
        {price}
          {sale}
          {type}
          {hot}
      </span>
            <span className="mx-2">:</span>
            {price && (
                <input
                    type="number"
                    className="w-3/5 px-2 py-1 bg-inherit rounded-md ml-1 border-2 border-gray-300 text-base"
                    placeholder={'Nhap gia tien'}
                    onChange={(e)=>dispatch({type:'AddPrice',price:parseInt(e.target.value)})}
                />
            )}
            {sale && (
                <input
                    type="number"
                    className="w-3/5 px-2 py-1 bg-inherit rounded-md ml-1 border-2 border-gray-300 text-base"
                    placeholder={'Nhap gia tien'}
                    onChange={(e)=>dispatch({type:'AddSale',sale:parseInt(e.target.value)})}
                />
            )}
            {type && (
                <div className="relative w-3/5 ">
          <span
              onClick={dropdown}
              className="flex flex-row items-center text-base font-normal gap-2 px-2 cursor-pointer w-70% relative translate-y-[2px]">
            {selector}
              <SlArrowDown className="absolute right-0 text-base text-xs"/>
          </span>
                    <ul style={drop ? {display: 'flex'} : {display: 'none'}}
                        className="absolute bg-white left-[60%] right-[-60%] hidden flex-col shadow-xl h-32 overflow-y-auto py-2 z-20">
                        {listType.map(type => {
                            return <DropdownType title={type} handleSelector={handleSelector} drop={dropdown}></DropdownType>
                        })}
                    </ul>
                </div>
            )}
            {hot && (
                <div>
                    <label>
                        {isChecked ? "Yes" : "No"}
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className="ml-2 w-4 h-4 translate-y-[2px]"
                        />
                    </label>
                </div>
            )}
        </div>
    );
};

export default OptionsProduct;
