import { useState } from "react";
import CartView from "./cartview";
import MenuView from "./menuview";
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
        <h1 className="text-2xl md:text-3xl">Diamond NailBox</h1>
        <button
          onClick={() => {
            handleView("cart");
          }}
          className="sm:text-xl"
        >
          <span className="hidden md:inline-block">Giỏ Hàng</span>{" "}
          <i class="fa-solid fa-cart-shopping text-xl"></i>
        </button>
        {cart && <CartView onClick={handleView}></CartView>}
        {menu && <MenuView onClick={handleView}></MenuView>}
      </section>
    </header>
  );
}
