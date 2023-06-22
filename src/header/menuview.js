import { Link } from "react-router-dom";

export default function MenuView(props) {
  return (
    <section
      id="menuview"
      className="h-screen absolute right-0 left-0 top-0 bottom-0 "
    >
      <div
        onClick={() => {
          props.onClick("menu");
        }}
        className="bg-slate-800 absolute z-30 opacity-30 w-full h-full"
      ></div>
      <div className="bg-white z-30 absolute left-0 w-full sm:w-[350px] h-full text-black">
        <div className="bg-black text-white p-5 sm:h-[64px] md:h-[68px] flex items-center justify-between">
          <h1>Menu</h1>
          <i
            onClick={() => {
              props.onClick("menu");
            }}
            class="fa-solid fa-x text-2xl cursor-pointer"
          ></i>
        </div>
        <div className=" p-4 text-2xl flex flex-col gap-2">
          <Link
            onClick={() => {
              props.onClick("menu");
            }}
            className="hover:bg-gray-300 p-4"
            to={"/"}
          >
            Trang chủ
          </Link>
          <Link
            onClick={() => {
              props.onClick("menu");
            }}
            className="hover:bg-gray-300 p-4"
            to={"/allproducts"}
          >
            Tất cả sản phẩm
          </Link>
          <a
            onClick={() => {
              props.onClick("menu");
            }}
            href="#footer"
            className="hover:bg-gray-300 p-4"
          >
            Về DiamondNail
          </a>
        </div>
      </div>
    </section>
  );
}
