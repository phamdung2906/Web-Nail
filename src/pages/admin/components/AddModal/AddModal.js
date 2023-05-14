import React, { useContext, useEffect, useState } from "react";
import ImagesProduct from "./ImagesProduct/ImagesProduct";
import InforProduct from "./InforProduct/InforProduct";
import { AddInforReducer } from "./AddInforReducer";
import { newProductStore } from "../../Admin";
import { nanoid } from "nanoid";
import { addModal } from "../../Admin";
export const upLoadInfor = React.createContext();
const AddModal = () => {
  const URL = "http://localhost:5000/uploadproduct";
  const [length, setLength] = useState(0);
  const { setProducts } = useContext(newProductStore);
  const { viewModal, setViewModal } = useContext(addModal);
  const [state, dispatch] = React.useReducer(AddInforReducer, {
    idProduct: nanoid(),
    name: "",
    images: [],
    price: 0,
    sale: 0,
    type: "",
    hot: false,
    description: "",
  });
  const contextValue = { state, dispatch };

  const submitNewProduct = () => {
    if (state.name === "") {
      alert("Vui lòng nhâp tên sản phẩm");
    } else if (state.images.length < 1) {
      alert("Vui lòng thêm ít nhất 1 ảnh sản phẩm");
    } else if (state.price === 0) {
      alert("Vui lòng nhập giá tiền của sản phẩm");
    } else if (state.type === "") {
      alert("Vui lòng chọn phân loại sản phẩm");
    } else if (state.description === "") {
      alert("Vui lòng nhập mô tả sản phẩm");
    } else {
      const formData = new FormData();
      formData.append("idProduct", state.idProduct);
      formData.append("name", state.name);
      formData.append("price", state.price);
      formData.append("sale", state.sale);
      formData.append("type", state.type);
      formData.append("hot", state.hot);
      formData.append("status", "Running");
      formData.append("description", state.description);
      state.images.forEach((img, index) => {
        formData.append(`image[${index}]`, img);
      });

      const fecthData = async () => {
        const response = await fetch(URL, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        console.log(data);
        await setProducts((pre) => {
          const newP = {
            ...state,
            images: name,
            status: "Running",
          };
          return [...pre, newP];
        });
      };
      fecthData();
    }
  };

  // set name for image to render on client immediately
  const [name, setName] = useState("");
  useEffect(() => {
    Object.keys(state.images).forEach((key) => {
      setName(state.images[0].name);
    });
  }, [state.images]);

  return (
    <upLoadInfor.Provider value={contextValue}>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-20">
        <div
          className="w-full h-full bg-gray-400 opacity-40 " 
          onClick={() => setViewModal(!viewModal)}
        ></div>
        <div className="bg-slate-100 absolute top-20 bottom-20 left-[30%] right-[30%] max-w-[1380px] mx-auto p-4 shadow-xl">
          <div className={"flex flex-col justify-evenly"}>
            <h1 className="text-2xl font-medium">Thêm sản phẩm </h1>
            <form action="" className={"my-2"}>
              <label className={"text-xl"} htmlFor="nameproduct">
                Ten san pham :
              </label>
              <input
                id={"nameproduct"}
                placeholder={"Enter name product"}
                type="text"
                className={"border-2 rounded-lg mt-1 px-2 py-1 w-full"}
                onChange={(e) =>
                  dispatch({ type: "AddName", name: e.target.value })
                }
                value={state.name}
              />
            </form>
            <ImagesProduct />
            <InforProduct />
            <div>
              <h1 className="text-xl font-semibold mb-2">Description</h1>
              <span className={"relative"}>
                <textarea
                  onChange={(e) => {
                    setLength(e.target.value.length);
                    dispatch({
                      type: "AddDescription",
                      description: e.target.value,
                    });
                  }}
                  className="w-full px-2 py-1 h-32 border-[1px]"
                  placeholder="Mo ta san pham"
                  maxLength={500}
                ></textarea>
                <span
                  className={"absolute bottom-2 right-2 text-gray-400 text-sm"}
                >
                  {length + "/" + 500}
                </span>
              </span>
            </div>
            <div className={"flex-grow flex items-center justify-center"}>
              <button
                className={"bg-sky-600 px-3 py-1.5 rounded-md"}
                onClick={(e) => {
                  e.preventDefault();
                  submitNewProduct();
                }}
              >
                Them san pham
              </button>
            </div>
          </div>
        </div>
      </div>
    </upLoadInfor.Provider>
  );
};

export default AddModal;
