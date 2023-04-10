export default function Footer() {
  return (
    <footer className="bg-[#f8f7f4] border-t-[1px] border-solid border-black py-10">
      <div className="max-w-[1300px] mx-auto p-5 md:h-[420px] h-[700px] sm:h-[600px] grid md:grid-rows-1 md:grid-cols-[1fr,2fr] grid-rows-[1fr,2fr] grid-cols-1 box-border">
        <div className="flex flex-col items-center justify-center">
          <img src="prev.png" className="w-40 h-40" alt="logo"></img>
          <div className="text-4xl -mt-2 grid grid-rows-1 grid-cols-4 gap-6">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-tiktok"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-shopify"></i>
          </div>
        </div>
        <div className=" p-4 md:p-8 md:text-lg lg:text-xl text-justify flex items-center justify-center flex-col gap-10">
          <p>
            Diamond Nail không ngừng sáng tạo để khẳng định thương hiệu cũng như
            mang đến những sản phẩm chất lượng đến tay khách hàng. Sứ mệnh của
            chúng tôi là tạo ra những sản phẩm đạt tiêu chuẩn chất lượng cao và
            phổ cập Nailbox đến với đông đảo phụ nữ Việt Nam.
          </p>
          <div>
            <h1 className="text-2xl">Diamond Nailbox Store</h1>
            <ul className="flex flex-col gap-1">
              <li>
                <i class="fa-solid fa-house"></i> Trường Đại học Hà Nội km 30
                Đ.Nguyễn Trãi, Phường Văn Quán, Hà Đông, Hà Nội{" "}
              </li>
              <li>
                <i class="fa-solid fa-phone"></i> Điện thoại : 0327016348
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i> Email :
                jeffpham2906@gmail.com
              </li>
              <li>
                <i class="fa-solid fa-phone"></i> Góp ý & Khiếu nại ( 9h30 -
                17h30 ) 0995125243
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
