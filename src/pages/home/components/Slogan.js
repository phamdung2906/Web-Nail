import React from "react";

const Slogan = () => {
  return (
    <section
      id="spotlight"
      className="max-w-[1300px] mx-auto p-4 my-10 flex flex-col items-center"
    >
      <h1 className="px-10 py-4 relative text-center font-normal text-3xl">
        <i class="fa-solid fa-quote-left absolute top-0 left-3 opacity-20 md:left-0  text-4xl"></i>
        Hãy tỏa sáng theo cách riêng của bạn
        <i class="fa-solid fa-quote-right absolute right-3 top-0 opacity-20 md:right-0 text-4xl"></i>
      </h1>
      <p className="p-4 text-center text-xl lg:text-2xl font-light">
        Các sản phẩm được thiết kế đa đạng để phù hợp với nhiều phong cách khác
        nhau. Vì Diamond Nailbox tin rằng bất kỳ ai cũng có thể tỏa sáng theo
        phong cách riêng của mình.
      </p>
    </section>
  );
};

export default Slogan;
