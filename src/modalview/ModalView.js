import { IoExit } from "react-icons/io5";
import ImageModal from "./components/ImageModal";
import InforModal from "./components/InforModal";
import React from "react";

const ModalView = ({ handleModal , product}) => {

  return (
    <section className="h-screen fixed right-0 left-0 top-0 bottom-0 z-10 ">
      <div
        onClick={handleModal}
        className="bg-[#7c7b7a] w-full h-full opacity-40 "
      ></div>
      <div className="bg-white overflow-auto lg:overflow-hidden lg:h-[80%] lg:max-w-[1280px] m-auto absolute sm:top-16 sm:right-16 sm:left-16 sm:bottom-16 top-0 bottom-0 right-0 left-0 grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 shadow-[0px_0px_40px_rgba(0,0,0,0.2) relative] p-1 rounded-xl">
        <IoExit
          className="absolute right-1 top-2 hover:opacity-60 cursor-pointer text-3xl text-gray-700"
          onClick={handleModal}
        ></IoExit>
        <ImageModal images={product.images}/>
        <InforModal product={product} handleModal={handleModal} />
      </div>
    </section>
  );
};

export default ModalView;
