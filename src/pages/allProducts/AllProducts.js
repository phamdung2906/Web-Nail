import React, { useState } from "react";
import TitleElement from "./components/TitleElement";
import ItemProduct from "../home/components/HotProducts/ItemProduct";
import ModalView from "../../modalview/ModalView";
import { useEffect } from "react";
import axios from "axios";
export const SortType = React.createContext();
const AllProducts = () => {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("Mặc định");
  const [modal, setModal] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const handleModal = () => {
    setModal(!modal);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
    const getData = async () => {
      const response = await axios.get("http://localhost:5000/allproducts");
      setData(response.data.data);
    };
    getData();
  }, []);
  const Macdinh = data.map((e, i) => {
    return (
      <ItemProduct
        setModalItem={setModalItem}
        key={i}
        product={e}
        handleModal={handleModal}
      />
    );
  });
  const Tangdan = data.slice();
  const listTangdan = Tangdan.sort(
    (a, b) =>
      a.price -
      (a.price * (a.sale === 0 ? 1 : a.sale)) / 100 -
      (b.price - (b.price * (b.sale === 0 ? 1 : b.sale)) / 100)
  );

  const ListTang = listTangdan.map((e, i) => {
    return (
      <ItemProduct
        setModalItem={setModalItem}
        key={i}
        product={e}
        handleModal={handleModal}
      />
    );
  });
  const listGiamdan = Array.from(listTangdan).reverse();
  const ListGiam = listGiamdan.map((e, i) => {
    return (
      <ItemProduct
        setModalItem={setModalItem}
        key={i}
        product={e}
        handleModal={handleModal}
      />
    );
  });
  return (
    <SortType.Provider value={{ sortType, setSortType }}>
      <main className="max-w-[1500px] mx-auto">
        {modal && (
          <ModalView product={modalItem} handleModal={handleModal}></ModalView>
        )}
        <div
          style={{
            backgroundImage: `url(${require("../../images/products.jpg")})`,
            backgroundRepeat: "no-repeat",
          }}
          className="w-100% h-[550px] bg-cover bg-center lg:h-[570px] my-6"
        ></div>
        <section id="allproducts" className="max-w-[1380px] mx-auto mt-14 p-6">
          <TitleElement />
          <div className="grid grid-cols-1 w-full place-items-center mt-5 sm:grid-cols-2 lg:grid-cols-4">
            {sortType === "Mặc định"
              ? Macdinh
              : sortType === "Giá tăng dần"
              ? ListTang
              : ListGiam}
          </div>
        </section>
      </main>
    </SortType.Provider>
  );
};

export default AllProducts;
