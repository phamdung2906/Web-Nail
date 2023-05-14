import React, { useState } from "react";
import TitleElement from "./components/TitleElement";
import ItemProduct from "../home/components/HotProducts/ItemProduct";
import ModalView from "../../modalview/ModalView";
import { useEffect } from "react";
import axios from "axios";
const AllProducts = () => {
  const [data,setData] = useState([])
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
    const getData = async ()=>{
      const response = await axios.get('http://localhost:5000/allproducts')
      setData(response.data.data)
    }
    getData()
  }, []);
  const [modalItem, setModalItem] = useState({})
  return (
    <main className="max-w-[1500px] mx-auto">
      {modal && <ModalView product={modalItem} handleModal={handleModal} ></ModalView>}
      <div
        style={{
          backgroundImage: `url(${require("../../images/products.jpg")})`,
          backgroundRepeat: "no-repeat",
        }}
        className="w-100% h-[550px] bg-cover bg-center lg:h-[570px] my-6"
      ></div>
      <section id="allproducts" className="max-w-[1380px] mx-auto mt-14 p-6">
        <TitleElement />
        <div className="grid grid-cols-1 w-full place-items-center mt-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((e, i) => {
            return <ItemProduct setModalItem={setModalItem} key={i} product={e} handleModal={handleModal} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default AllProducts;
