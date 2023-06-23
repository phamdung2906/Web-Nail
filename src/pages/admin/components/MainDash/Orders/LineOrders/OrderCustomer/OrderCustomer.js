import { VND } from "../../../../../../../VND";
import { URLBE } from "../../../../../../../BackendURL";
export default function OrderOfCustomer({ orderOfCustomer }) {
  const ProductOfOrder = ({ inforOfOrder }) => {
    return (
      <div className="flex flex-row gap-3 text-base ">
        <div className="h-20 w-20">
          <img
            className="w-full h-full"
            src={`${URLBE}images/${inforOfOrder.img}`}
            alt={inforOfOrder.name}
          />
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="text-base">
            <div>{inforOfOrder.name}</div>
            <div>
              {inforOfOrder.size} , {inforOfOrder.form}
            </div>
            <div className="flex flex-row items-center justify-center">
              <p className="font-medium">
                Giá :{" "}
                {VND.format(
                  inforOfOrder.price -
                    (inforOfOrder.price *
                      (inforOfOrder.sale === 0 ? 1 : inforOfOrder.sale)) /
                      100
                )}
              </p>
              <p className="line-through opacity-60 ml-2 text-sm">
                {VND.format(inforOfOrder.price)}
              </p>
            </div>
          </div>
          <div>x{inforOfOrder.quantity}</div>
        </div>
      </div>
    );
  };
  return (
    <td className="flex flex-col gap-2">
      {orderOfCustomer.map((order, index) => (
        <ProductOfOrder key={index} inforOfOrder={order}></ProductOfOrder>
      ))}
    </td>
  );
}
