import { useState } from "react";
import MySlider from "../../slickSlider/slick";
import ModalView from "../../modalview/ModalView";
import HotProducts from "./components/HotProducts/HotProducts";
import Diamond from "./components/Diamond";
import WhyUsing from "./components/WhyUsing";
import FormsNail from "./components/FormsNail";
import Slogan from "./components/Slogan";
export default function HomePage() {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  modal
    ? document.body.classList.add("active-modal-view")
    : document.body.classList.remove("active-modal-view");
  return (
    <main className="text-4xl bg-[#f8f7f4]">
      {modal && <ModalView handleModal={handleModal}></ModalView>}
      <div
        style={{
          backgroundImage: `url(${require("../../images/cover.jpg")})`,
          backgroundRepeat: "no-repeat",
        }}
        className="w-100% h-[550px] bg-cover bg-center md:h-[700ox] lg:h-[770px]"
      ></div>
      <HotProducts handleModal={handleModal} />
      <Diamond />
      <WhyUsing />
      <FormsNail />
      <Slogan />
      <section className="max-w-[1500px] mx-auto p-4 flex flex-col items-center pb-20">
        <MySlider></MySlider>
      </section>
    </main>
  );
}
