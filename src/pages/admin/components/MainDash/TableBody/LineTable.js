import React, { useContext } from "react";
import { VND } from "../../../../../VND";
import { AiTwotoneEdit, AiOutlineDelete } from "react-icons/ai";
import { newProductStore } from "../../../Admin";
import { URLBE } from "../../../../../BackendURL";
const LineTable = ({
  name,
  img,
  type,
  price,
  sale,
  status,
  hot,
  idProduct,
  handleEdit,
}) => {
  const imgURL = `${URLBE}images/` + img;
  const ImagePart = () => {
    return (
      <td className="flex h-full items-center">
        <img src={imgURL} alt="anhsp" className="w-24 h-20 rounded-xl ml-2" />
        <span className="ml-2">{name}</span>
      </td>
    );
  };

  const PricePart = () => <td>{VND.format(price)}</td>;
  const SalePart = () => <td>{sale + " %"}</td>;
  const TypePart = () => <td>{type}</td>;

  const HotPart = () => <td>{hot}</td>;
  //use context list of product
  const { products, setProducts } = useContext(newProductStore);

  //function

  const handleRemove = (idProduct) => {
    const arrClone = products.slice();
    const newArr = arrClone.filter((e) => e.idProduct !== idProduct);
    setProducts(newArr);
    const URL = `${URLBE}product/${idProduct}`;
    
    console.log(idProduct);
    const deleteOnServer = async () => {
      const response = await fetch(URL, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
    };
    deleteOnServer();
  };

  const HanhDongPart = () => {
    return (
      <td className="">
        <button
          onClick={() => {
            handleEdit();
          }}
          className="mr-3 flex flex-row items-center gap-2 mb-2"
        >
          Chỉnh sửa
          <AiTwotoneEdit />
        </button>
        <button
          onClick={() => {
            handleRemove(idProduct);
          }}
          className="mr-3 flex flex-row items-center gap-2"
        >
          Xóa
          <AiOutlineDelete />
        </button>
      </td>
    );
  };
  return (
    <>
      <tr key="" className="h-28 bg-gray-100 hover:bg-gray-200 text-base">
        <ImagePart></ImagePart>
        <PricePart />
        <SalePart />
        <TypePart></TypePart>
        <HotPart />
        <HanhDongPart />
      </tr>
      <div className="bg-white w-full h-1"></div>
    </>
  );
};

export default LineTable;
