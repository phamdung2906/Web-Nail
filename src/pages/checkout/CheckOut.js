import React from "react";
import Information from "./components/Information";
import Bill from "./components/Bill";

const CheckOut = () => {

  return (
    <section className="w-full h-screen">
      <div className="max-w-7xl h-full mx-auto flex lg:flex-row flex-col overflow-auto">
        <Information></Information>
        <Bill></Bill> 
      </div>
    </section>
  );
};

export default CheckOut;
