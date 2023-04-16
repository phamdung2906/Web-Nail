import React from "react";
import { useState } from "react";
const Options = ({ title, items, setSize , setForm }) => {
  const [type, setType] = useState("");
  return (
    <div className="my-2">
      <h1 className="text-2xl py-2">{title}</h1>
      <ul className="grid sm:grid-cols-4 sm:grid-rows-1 grid-cols-3 grid-rows-2 gap-5">
        {items.map((e, i) => {
          return (
            <li
              key={i}
              className="flex items-center justify-center text-base sm:text-xl border-black border-solid border-2 rounded-xl p-1  sm:py-1 hover:border-gray-400"
              onClick={() => {
                setType(e);
                if(title==="Dạng móng") setForm(e)
                if(title==="Kích thước") setSize(e)
              }}
              style={
                type === e
                  ? { outline: "2px solid black" }
                  : { backgroundColor: "inherit" }
              }
            >
              {e}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Options;
