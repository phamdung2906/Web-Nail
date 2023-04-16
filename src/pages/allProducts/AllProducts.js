import React, { useState } from "react";
import TitleElement from "./components/TitleElement";
import ItemProduct from "../home/components/HotProducts/ItemProduct";
import ModalView from "../../modalview/ModalView";
import { useEffect } from "react";
import axios from "axios";
const AllProducts = () => {
  const data = [
    {
      img: "./imagespublic/sp1.jpg",
      name: "Nailbox Mã 001",
      price: "20000",
    },
    {
      img: "./imagespublic/sp2.jpg",
      name: "Nailbox Mã 002",
      price: "30000",
    },
    {
      img: "./imagespublic/sp3.jpg",
      name: "Nailbox Mã 003",
      price: "40000",
    },
    {
      img: "./imagespublic/sp4.jpg",
      name: "Nailbox Mã 004",
      price: "50000",
    },
    {
      img: "./imagespublic/sp4.jpg",
      name: "Nailbox Mã 004",
      price: "50000",
    },
    {
      img: "./imagespublic/sp4.jpg",
      name: "Nailbox Mã 004",
      price: "50000",
    },
    {
      img: "./imagespublic/sp4.jpg",
      name: "Nailbox Mã 004",
      price: "50000",
    },
    {
      img: "./imagespublic/sp4.jpg",
      name: "Nailbox Mã 004",
      price: "50000",
    },
  ];
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
    const getData = async ()=>{
      const data = await fetch('http://localhost:5000/')
      console.log(data)
    }
    getData()
  }, []);
  return (
    <main className="max-w-[1500px] mx-auto">
      {modal && <ModalView handleModal={handleModal}></ModalView>}
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
            return <ItemProduct product={e} handleModal={handleModal} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default AllProducts;
