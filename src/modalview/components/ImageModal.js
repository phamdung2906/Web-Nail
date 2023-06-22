import React from "react";
import { useState } from "react";
import { URLBE } from "../../BackendURL";
const ImageModal = ({ images }) => {
 
  const [mainImg, setMainImg] = useState(images[0]);
  return (
    <div className="flex flex-col">
      <div className="w-full h-[420px] sm:h-[80%]">
        <img
          className="w-full h-full p-2 rounded-2xl mx-auto"
          src={`${URLBE}${mainImg}`}
          alt="anhsp"
        ></img>
      </div>
      <div className="h-24 md:h-32 items-center flex flex-row justify-evenly p-2">
        {images.map((e, i) => {
          const URL = `${URLBE}${e}`
          return (
            <img
              key={i}
              className="rounded-xl w-[20%] h-full hover:opacity-80"
              src={URL}
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
