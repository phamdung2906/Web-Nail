import { useState } from "react";
import CartView from "./cartview";
import MenuView from "./menuview";
import { allOrder } from "../features/orders/orderSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Header() {
  const [cart, setCart] = useState(false);
  const [menu, setMenu] = useState(false);
  const handleView = (type) => {
    if (type === "cart") {
      setCart(!cart);
    }
    if (type === "menu") {
      setMenu(!menu);
    }
  };

  cart
    ? document.body.classList.add("active-cart-view")
    : document.body.classList.remove("active-cart-view");
  menu
    ? document.body.classList.add("active-menu-view")
    : document.body.classList.remove("active-menu-view");

  const number = useSelector(allOrder).length
  return (
    <header className="bg-[#f8f7f4] text-black sticky top-0 z-10 border-b-2 border-black">
      <section className="max-w-[1500px] mx-auto p-4 flex flex-row justify-between items-center text-xl">
        <button
          onClick={() => {
            handleView("menu");
          }}
          className="sm:text-xl"
        >
          <i class="fa-solid fa-bars text-xl"></i>{" "}
          <span className="hidden  md:inline-block">Menu</span>
        </button>
        <Link to={'/'} className="text-2xl md:text-3xl">Diamond NailBox</Link>
        <button
          onClick={() => {
            handleView("cart");
          }}
          className="sm:text-xl"
        >
          <span className="hidden md:inline-block">Giỏ Hàng</span>{" "}
          <i class="fa-solid fa-cart-shopping text-xl"></i>
          <span className="absolute top-3 text-base">{number > 0 ? number :''}</span>
        </button>
        {cart && <CartView onClick={handleView}></CartView>}
        {menu && <MenuView onClick={handleView}></MenuView>}
      </section>
    </header>
  );
}
