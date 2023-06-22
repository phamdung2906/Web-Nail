import React, { useState } from "react";

const DescriptPart = ({ state ,dispatch }) => {
  const [length, setLength] = useState(state.description.length || 0);
  return (
    <div>
      <h1 className="text-xl font-semibold my-4">Mô tả sản phẩm</h1>
      <span className={"relative"}>
        <textarea
          onChange={(e) => {
            setLength(e.target.value.length);
            dispatch({
              type: "AddDescription",
              description: e.target.value,
            });
          }}
          value={state.description}
          className="w-full px-2 py-1 h-36 border-[1px] text-base"
          placeholder="Nhập đặc điểm của sản phẩm"
          maxLength={500}
        ></textarea>
        <span className={"absolute bottom-2 right-2 text-gray-400 text-sm"}>
          {length + "/" + 500}
        </span>
      </span>
    </div>
  );
};

export default DescriptPart;
