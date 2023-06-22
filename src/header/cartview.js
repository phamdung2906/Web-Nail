import ListOrders from "../features/orders/ListOrders";
import { useSelector } from "react-redux";
import { allOrder } from "../features/orders/orderSlice";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { VND } from "../VND";
export default function CartView(props) {
  const orders = useSelector(allOrder);
  console.log(orders);
  let total = 0;
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
      <div className="bg-white z-30 absolute right-0 w-full sm:w-[430px] h-full text-black flex flex-col">
        <div className="bg-black text-white p-5 sm:h-[64px] md:h-[68px] flex items-center justify-between">
          <h1>Giỏ Hàng Của Bạn</h1>
          <i
            onClick={() => {
              props.onClick("cart");
            }}
            class="fa-solid fa-x text-2xl cursor-pointer"
          ></i>
        </div>
        {orders.length > 0 ? (
          <div className="h-[calc(100%-68px)] flex flex-col">
            <div className="grid auto-rows-[120px] h-[600px] md:h-4/5 overflow-auto my-2">
              {orders.map((order, index) => {
                total =
                  total +
                  (order.price -
                    (order.price * (order.sale === 0 ? 1 : order.sale)) / 100) *
                    order.quantity;
                return <ListOrders key={index} order={order}></ListOrders>;
              })}
            </div>
            <div className=" flex-1 border-t-[1px] border-solid border-gray-900 p-6">
              <div className="flex flex-row items-center justify-between mb-4">
                <p>Thành tiền : </p>
                <p>{VND.format(total)}</p>
              </div>
              <Link
                to={"/checkout"}
                className="bg-[#53c66e] flex flex-row items-center gap-1 justify-center font-medium py-4 cursor-pointer hover:opacity-70"
              >
                THANH TOÁN NGAY<BsArrowRight></BsArrowRight>
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-[#ffffff] h-72 flex flex-col items-center justify-evenly box-border p-10 mt-20">
            <p className="text-center">
              Hiện đang chưa có sản phẩm nào trong giỏ hàng của bạn.
            </p>
            <button
              onClick={() => {
                props.onClick("cart");
              }}
              className="bg-gray-900 text-white w-full py-4 text-center"
            >
              Mua hàng ngay
              <BsArrowRight className="inline-block ml-3" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
