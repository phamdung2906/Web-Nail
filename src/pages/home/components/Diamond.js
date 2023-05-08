import React from "react";
import { Link } from "react-router-dom";
const Diamond = () => {
  return (
    <section id="diamond-nail" className="my-14">
      <div
        style={{
          backgroundImage: `url(${require("../../../images/whynail.jpg")})`,
          backgroundRepeat: "no-repeat",
        }}
        className="w-100% h-[550px] bg-cover bg-center md:h-[700ox] lg:h-[770px] relative"
      >
        <div className="absolute h-48 right-0 bottom-5 sm:right-10 sm:h-46 sm:top-80 lg:right-16 lg:top-[28rem] p-4 lg:h-56 w-[30rem] flex justify-between flex-col sm:items-start">
          <div>
            <h1 className="sm:text-4xl lg:text-5xl">Diamond Nail</h1>
            <p className="text-lg sm:text-xl lg:text-2xl mt-2">
              Chuyên thiết kế nailbox
            </p>
          </div>
          <Link
            to={"/allproducts"}
            className="text-lg sm:text-xl lg:text-2xl border-solid border-black border-2 px-8 py-3 hover:bg-black hover:text-[#f8f7f4] "
          >
            KHÁM PHÁ NGAY
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Diamond;
