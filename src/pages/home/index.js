import { useState } from "react";
import MySlider from "../../slickSlider/slick";
import ModalView from "../../modalview/ModalView";
export default function HomePage() {
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const data = [
    {
      img: "./imagespublic/sp1.jpg",
      name: "Nailbox Mã 001",
      price: "20000",
    },
    {
      img: "./imagespublic/sp2.jpg",
      name: "Nailbox Mã 002",
      price: "30000",
    },
    {
      img: "./imagespublic/sp3.jpg",
      name: "Nailbox Mã 003",
      price: "40000",
    },
    {
      img: "./imagespublic/sp4.jpg",
      name: "Nailbox Mã 004",
      price: "50000",
    },
    {
      img: "./imagespublic/sp4.jpg",
      name: "Nailbox Mã 004",
      price: "50000",
    },
    {
      img: "./imagespublic/sp4.jpg",
      name: "Nailbox Mã 004",
      price: "50000",
    },
    {
      img: "./imagespublic/sp4.jpg",
      name: "Nailbox Mã 004",
      price: "50000",
    },
    {
      img: "./imagespublic/sp4.jpg",
      name: "Nailbox Mã 004",
      price: "50000",
    },
  ];
  const usable = [
    {
      icon: "fa-solid fa-house",
      title: "Khả năng sử dụng",
      descript:
        "Không muốn tốn nhiều thời gian làm nail tại các salon hay spa, hoặc đơn giản chỉ muốn hạn chế hóa chất bám trên móng. Móng giả từ Diamond Nailbox chính là vị cứu tinh dành cho bạn!",
    },
    {
      icon: "fa-solid fa-clock",
      title: "Tiết Kiệm Thời Gian",
      descript: "Bạn chỉ mất khoảng 10-15 phút để dán xong móng tay giả",
    },
    {
      icon: "fa-solid fa-recycle",
      title: "Tái sử dụng",
      descript:
        "Bạn đã góp một phần công sức vào việc bảo vệ môi trường. Số lần tái sử dụng tùy theo mong muốn và sở thích của mỗi người.",
    },
  ];
  const formNail = [
    {
      img: "./imagespublic/sp1.jpg",
      title: "Móng Tròn Nhọn",
    },
    {
      img: "./imagespublic/sp2.jpg",
      title: "Móng Nhọn",
    },
    {
      img: "./imagespublic/sp3.jpg",
      title: "Móng Vuông",
    },
    {
      img: "./imagespublic/sp4.jpg",
      title: "Móng Thang",
    },
  ];
  const [modal,setModal] = useState(false)
  const handleModal = ()=>{
    setModal(!modal)
  }
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
      <section
        id="hotproduct"
        className="max-w-[1300px] mx-auto p-4 my-5 flex flex-col items-center"
      >
        <h1 className="text-4xl font-light text-center sm:text-[2.5rem] p-6 ">
          Sản Phẩm Nổi Bật
        </h1>
        <div className="grid grid-cols-1 w-full place-items-center mt-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((e, i) => {
            return (
              <div onClick={handleModal} className=" gap-2 w-full h-96 sm:w-full grid grid-rows-5 hover:shadow-[0px_0px_40px_rgba(0,0,0,0.15)] duration-200 mb-4">
                <div className="h-full w-5/6 sm:w-full p-2  row-start-1 row-end-5 mx-auto relative">
                  <img
                    src={e.img}
                    alt={e.name}
                    className="w-full h-full rounded-xl"
                  ></img>
                </div>

                <div className="text-center text-xl px-3 font-normal">
                  <h2 className="text-2xl font-light">{e.name}</h2>
                  <div className="flex flex-row items-center justify-center">
                    <p className="font-medium">Giá : {VND.format(e.price)}</p>
                    <p className="line-through opacity-60 ml-2 text-lg">
                      {VND.format(50000)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section id="diamond-nail" className="my-14">
        <div
          style={{
            backgroundImage: `url(${require("../../images/whynail.jpg")})`,
            backgroundRepeat: "no-repeat",
          }}
          className="w-100% h-[550px] bg-cover bg-center md:h-[700ox] lg:h-[770px] relative"
        >
          <div className="absolute h-48 right-0 bottom-5 sm:right-10 sm:h-46 sm:top-80 lg:right-16 lg:top-[28rem] p-4 lg:h-56 w-[30rem flex justify-between flex-col sm:items-start">
            <div>
              <h1 className="sm:text-4xl lg:text-5xl">Diamond Nail</h1>
              <p className="text-lg sm:text-xl lg:text-2xl mt-2">
                Chuyên thiết kế nailbox
              </p>
            </div>
            <button className="text-lg sm:text-xl lg:text-2xl border-solid border-black border-2 px-8 py-3 hover:bg-black hover:text-[#f8f7f4] ">
              KHÁM PHÁ NGAY
            </button>
          </div>
        </div>
      </section>
      <section
        id=""
        className="max-w-[1300px] mx-auto p-4 my-5 flex flex-col items-center"
      >
        <h1 className="font-light lg:text-4xl text-center text-3xl p-4">
          TẠI SAO NÊN SỬ DỤNG NAILBOX ?
        </h1>
        <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 gap-10 mt-10 md:grid-rows-2 p-4 lg:grid-rows-1 lg:grid-cols-3">
          {usable.map((e, i) => {
            return (
              <div className="h-auto flex flex-col items-center">
                <div className="flex flex-col items-center h-2/6 justify-center text-2xl gap-3 mb-3">
                  <i class={e.icon}></i>
                  <h1 className="font-normal text-center">{e.title}</h1>
                </div>
                <p className="text-lg text-justify flex-1 items-center flex text-slate-600">
                  {e.descript}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section
        id="form-mong"
        className="max-w-[1300px] mx-auto p-4 my-5 flex flex-col items-center"
      >
        <h1 className="font-light lg:text-4xl text-center text-3xl p-4">
          CÁC DẠNG MÓNG NAILBOX
        </h1>
        <div className="my-5 grid grid-cols-1 grid-rows-4 p-4 gap-8 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1">
          {formNail.map((e, i) => {
            return (
              <div className="h-80 flex flex-col">
                <img
                  src={e.img}
                  alt="1"
                  className="rounded-3xl h-5/6 w-full"
                ></img>
                <h1 className="flex-1 items-center flex justify-center text-xl font-light">
                  {e.title}
                </h1>
              </div>
            );
          })}
        </div>
      </section>
      <section
        id="spotlight"
        className="max-w-[1300px] mx-auto p-4 my-10 flex flex-col items-center"
      >
        <h1 className="px-10 py-4 relative text-center font-light text-3xl">
          <i class="fa-solid fa-quote-left absolute top-0 left-3 opacity-20 md:left-0  text-4xl"></i>
          Hãy tỏa sáng theo cách riêng của bạn
          <i class="fa-solid fa-quote-right absolute right-3 top-0 opacity-20 md:right-0 text-4xl"></i>
        </h1>
        <p className="p-4 text-center text-xl lg:text-2xl font-light">
          Các sản phẩm được thiết kế đa đạng để phù hợp với nhiều phong cách
          khác nhau. Vì Diamond Nailbox tin rằng bất kỳ ai cũng có thể tỏa sáng
          theo phong cách riêng của mình.
        </p>
      </section>
      <section className="max-w-[1500px] mx-auto p-4 flex flex-col items-center pb-20">
        <MySlider></MySlider>
      </section>
    </main>
  );
}
