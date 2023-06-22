import React, { useContext, useRef, useState } from "react";
import ImageItem from "./ImageItem";
import { BsPlusLg } from "react-icons/bs";
import { upLoadInfor } from "../AddModal";

const ImagesProduct = () => {
  const { state, dispatch } = useContext(upLoadInfor);

  const [files, setFiles] = useState(state.images || []);

  const handleFileChange = (event) => {
    const filesUpload = Array.from(event.target.files); //file list
    if (files.length + filesUpload.length <= 4) {
      const uploadImages = filesUpload.map((file) => {
        dispatch({ type: "AddImg", img: file });
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise((resolve) => {
          reader.onload = () => {
            resolve({
              name: file.name,
              url: reader.result,
            });
          };
        });
      });
      Promise.all(uploadImages).then((newImgs) => {
        setFiles((prevState) => [...prevState, ...newImgs]);
      });
    } else {
      alert(`Bạn chỉ được thêm ${4 - files.length} hình ảnh nữa`);
    }
  };

  const handleDeleteImg = (index) => {
    const newArr = files.filter((e, i) => i !== index);
    dispatch({ type: "DeleteImg", newListImg: newArr });
    setFiles(newArr);
  };
  const fileInput = useRef();

  return (
    <div className="my-2">
      <h1 className="text-xl mb-2">Ảnh sản phẩm</h1>
      <div className="flex flex-row gap-2 flex-wrap ">
        {files.map((file, index) => {
          return (
            <ImageItem
              index={index}
              key={index}
              file={file}
              handleDeleteImg={handleDeleteImg}
            ></ImageItem>
          );
        })}
        <div
          style={files.length < 4 ? { display: "block" } : { display: "none" }}
          className="w-[22%] h-32 border-2 border-gray-300 border-dotted rounded-xl relative"
        >
          <label className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center flex-col">
            <BsPlusLg />
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept="image/*"
              ref={fileInput}
              multiple
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                fileInput.current.click();
              }}
              className="flex flex-col items-center text-lg"
            >
              Hình ảnh
              <span>{files.length + "/4"}</span>
            </button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ImagesProduct;
