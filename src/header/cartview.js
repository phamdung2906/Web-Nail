import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function CartView(props) {
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return (
    <section
      id="cartview"
      className="h-screen absolute right-0 left-0 top-0 bottom-0 "
    >
      <div
        onClick={() => {
          props.onClick("cart");
        }}
        className="bg-slate-800 absolute z-30 opacity-30 w-full h-full"
      ></div>
      <div className="bg-white z-30 absolute right-0 w-full sm:w-[380px] h-full text-black">
        <div className="bg-black text-white p-5 sm:h-[64px] md:h-[68px] flex items-center justify-between">
          <h1>Giỏ Hàng Của Bạn</h1>
          <i
            onClick={() => {
              props.onClick("cart");
            }}
            class="fa-solid fa-x text-2xl cursor-pointer"
          ></i>
        </div>
        <div className="h-full grid auto-rows-[120px]">
          <div className="grid grid-cols-3 grid-rows-1 p-1 mt-1">
            <div>
              <img
                src="./imagespublic/sp1.jpg"
                alt="anhsp"
                className="w-full h-full"
              ></img>
            </div>
            <div className="col-start-2 col-end-4 flex flex-row">
              <div className="w-[65%] px-2 flex flex-col justify-between">
                <h3>Nailbox Ma 001</h3>
                <p>Size S</p>
                <p>Form Vuong</p>
              </div>
              <div className=" flex-1 items-end flex flex-col justify-between">
                <div className="text-right">
                  <p className="text-lg font-medium">{VND.format(200000)}</p>
                  <p className="text-base line-through">{VND.format(200000)}</p>
                </div>
                <div className="flex flex-row text-base items-center justify-between w-full">
                  <AiOutlinePlus className="rounded-full bg-gray-400 cursor-pointer"></AiOutlinePlus>
                  <p>Qty: 1</p>
                  <AiOutlineMinus className="rounded-full bg-gray-400 cursor-pointer"></AiOutlineMinus>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
