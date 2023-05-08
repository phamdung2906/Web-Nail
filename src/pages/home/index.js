
import MySlider from "../../slickSlider/slick";

import HotProducts from "./components/HotProducts/HotProducts";
import Diamond from "./components/Diamond";
import WhyUsing from "./components/WhyUsing";
import FormsNail from "./components/FormsNail";
import Slogan from "./components/Slogan";
export default function HomePage() {
  
  return (
    <main className="text-4xl bg-[#f8f7f4]">
      
      <div
        style={{
          backgroundImage: `url(${require("../../images/cover.jpg")})`,
          backgroundRepeat: "no-repeat",
        }}
        className="w-100% h-[550px] bg-cover bg-center md:h-[700ox] lg:h-[770px]"
      ></div>
      <HotProducts />
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
