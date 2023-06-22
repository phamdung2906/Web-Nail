import React from "react";

const WhyUsing = () => {
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
  return (
    <section
      id="whyusingnailbox"
      className="max-w-[1300px] mx-auto p-4 my-5 flex flex-col items-center"
    >
      <h1 className="font-medium lg:text-4xl text-center text-3xl p-4">
        TẠI SAO NÊN SỬ DỤNG NAILBOX ?
      </h1>
      <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 gap-10 mt-10 md:grid-rows-2 p-4 lg:grid-rows-1 lg:grid-cols-3">
        {usable.map((e, i) => {
          return (
            <div key={i} className="h-auto flex flex-col items-center">
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
  );
};

export default WhyUsing;
