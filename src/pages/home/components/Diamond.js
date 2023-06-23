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
        className="w-100% h-[550px] bg-cover bg-center md:h-[700px] lg:h-[770px] relative"
      >
        <div className="absolute h-40 sm:h-48 right-5 bottom-5 sm:right-10 sm:h-46 sm:bottom-10 md:bottom-20 lg:right-16 lg:top-[28rem] p-4 lg:h-56 flex justify-between flex-col sm:items-start">
          <div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-medium">Diamond Nail</h1>
            <p className="text-lg sm:text-xl lg:text-2xl mt-2">
              Chuyên thiết kế nailbox
            </p>
          </div>
          <Link
            to={"/allproducts"}
            className="text-lg sm:text-xl lg:text-2xl border-solid border-black border-2 px-6 py-1 sm:px-8 sm:py-3 hover:bg-black hover:text-[#f8f7f4] "
          >
            KHÁM PHÁ NGAY
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Diamond;
