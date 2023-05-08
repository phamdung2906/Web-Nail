import React from "react";
import { useState } from "react";
const ImageModal = ({ img }) => {
  const data = [img, "./form/1.png", "./form/2.png", "./form/3.jpeg"];
  const [mainImg, setMainImg] = useState(data[0]);
  return (
    <div className="flex flex-col">
      <div className="w-full h-[420px] sm:h-[85%]">
        <img
          className="w-full h-full p-2 rounded-2xl mx-auto"
          src={mainImg}
          alt="anhsp"
        ></img>
      </div>
      <div className="flex-1 items-center flex flex-row justify-evenly p-2">
        {data.map((e, i) => {
          return (
            <img
              key={i}
              className="rounded-xl w-[20%] h-full hover:opacity-80"
              src={e}
              alt="anhsp"
              onClick={() => setMainImg(e)}
              style={
                mainImg === e
                  ? { outline: "3px solid black" }
                  : { outline: "none" }
              }
            ></img>
          );
        })}
      </div>
    </div>
  );
};

export default ImageModal;
