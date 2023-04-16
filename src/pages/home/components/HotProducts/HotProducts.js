import React from "react";
import ItemProduct from "./ItemProduct";
const HotProducts = ({ handleModal }) => {
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
    }
  ];
  return (
    <section
      id="hotproduct"
      className="max-w-[1300px] mx-auto p-4 my-5 flex flex-col items-center"
    >
      <h1 className="text-4xl font-light text-center sm:text-[2.5rem] p-6 ">
        Sản Phẩm Nổi Bật
      </h1>
      <div className="grid grid-cols-1 w-full place-items-center mt-5 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((e, i) => {
          return <ItemProduct product={e} handleModal={handleModal} />;
        })}
      </div>
    </section>
  );
};

export default HotProducts;
