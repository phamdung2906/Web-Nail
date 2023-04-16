import React from "react";

const FormsNail = () => {
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
  return (
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
            <div key={i} className="h-80 flex flex-col">
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
  );
};

export default FormsNail;
