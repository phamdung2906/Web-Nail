import React, { useContext } from "react";
import { VND } from "../../../../../VND";
import { AiTwotoneEdit, AiOutlineDelete } from "react-icons/ai";
import { newProductStore } from "../../../Admin";
import axios from "axios";

const LineTable = ({
  name,
  img,
  type,
  price,
  sale,
  status,
  hot,
  idProduct,
}) => {
  const imgURL = "http://localhost:5000/images/" + img;
  const ImagePart = () => {
    return (
      <td className="flex h-full items-center">
        <img src={imgURL} alt="anhsp" className="w-24 h-20 rounded-xl ml-2" />
        <span className="ml-2">{name}</span>
      </td>
    );
  };
  const PricePart = () => <td>{VND.format(price)}</td>;
  const SalePart = () => <td>{VND.format(sale)}</td>;
  const TypePart = () => <td>{type}</td>;
  const StatusPart = () => <td>{status}</td>;
  const HotPart = () => <td>{hot}</td>;
  //use context list of product
  const { products, setProducts } = useContext(newProductStore);

  //function

  const handleRemove = (idProduct) => {
    const arrClone = products.slice();
    const newArr = arrClone.filter((e) => e.idProduct !== idProduct);
    setProducts(newArr);
    const URL = `http://localhost:5000/product/${idProduct}`;
    const deleteOnServer = async () => {
      const response = await axios.delete(URL);
      console.log(response.data);
    };
    deleteOnServer();
  };

  const handleEdit = (idProduct)=>{
    console.log(idProduct);
  }
  const HanhDongPart = () => {
    return (
      <td className="">
        <button
          onClick={() => handleEdit(idProduct)}
          className="mr-3 flex flex-row items-center gap-2 mb-2"
        >
          Edit
          <AiTwotoneEdit />
        </button>
        <button
          onClick={() => handleRemove(idProduct)}
          className="mr-3 flex flex-row items-center gap-2"
        >
          Xoa
          <AiOutlineDelete />
        </button>
      </td>
    );
  };
  return (
    <>
      <tr key="" className="h-28 bg-gray-200 ">
        <ImagePart></ImagePart>
        <PricePart />
        <SalePart />
        <TypePart></TypePart>
        <StatusPart />
        <HotPart />
        <HanhDongPart />
      </tr>
      <div className="bg-white w-full h-1"></div>
    </>
  );
};

export default LineTable;
