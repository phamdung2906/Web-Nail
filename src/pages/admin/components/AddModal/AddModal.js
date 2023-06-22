import React, { useContext } from "react";
import ImagesProduct from "./ImagesProduct/ImagesProduct";
import InforProduct from "./InforProduct/InforProduct";
import { AddInforReducer } from "./AddInforReducer";
import { newProductStore } from "../../Admin";
import { addModal } from "../../Admin";
import { submitNewProduct } from "./submitNewProduct";
import DescriptPart from "./DescriptPart";

export const upLoadInfor = React.createContext();
const AddModal = ({ productEdited }) => {
  const { products, setProducts } = useContext(newProductStore);
  const { viewModal, setViewModal } = useContext(addModal);
  let initState = productEdited || {
    name: "",
    images: [],
    price: 0,
    sale: 0,
    type: "",
    hot: false,
    description: "",
  };
  const [state, dispatch] = React.useReducer(AddInforReducer, initState);
  const contextValue = { state, dispatch };

  return (
    <upLoadInfor.Provider value={contextValue}>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-20">
        <div
          className="w-full h-full bg-gray-400 opacity-40 "
          onClick={() => setViewModal(!viewModal)}
        ></div>

        <div className="bg-gray-50 absolute top-20 bottom-20 left-[30%] right-[30%] max-w-[1380px] mx-auto p-4 shadow-xl">
          <div className={"flex flex-col h-full justify-between"}>
            <h1 className="text-2xl font-medium self-center">
              {productEdited ? "Sửa sản phẩm" : "Thêm sản phẩm"}{" "}
            </h1>
            <div className={"my-2"}>
              <label className={"text-xl"} htmlFor="nameproduct">
                Tên sản phẩm :
              </label>
              <input
                id={"nameproduct"}
                placeholder={"Nhập tên sản phẩm"}
                type="text"
                className={"border-2 rounded-lg mt-1 px-2 py-1 w-full text-lg"}
                onChange={(e) =>
                  dispatch({ type: "AddName", name: e.target.value })
                }
                value={state.name}
              />
            </div>
            <ImagesProduct />
            <InforProduct />
            <DescriptPart state={state} dispatch={dispatch} />
            <div className={"flex-grow flex items-center justify-center"}>
              <button
                className={"bg-sky-600 px-8 py-3 rounded-md text-xl"}
                onClick={(e) => {
                  let method = productEdited ? "Update" : "Add";
                  submitNewProduct({
                    method,
                    state,
                    products,
                    setProducts,
                    productEdited,
                    setViewModal,
                  });
                }}
              >
                {productEdited ? "Sửa sản phẩm" : "Thêm sản phẩm"}{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </upLoadInfor.Provider>
  );
};

export default AddModal;
