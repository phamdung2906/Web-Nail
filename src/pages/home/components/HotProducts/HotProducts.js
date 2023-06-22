import React, { useEffect, useState } from "react";
import ItemProduct from "./ItemProduct";
import ModalView from "../../../../modalview/ModalView"
import axios from "axios";
const HotProducts = () => {
  const URL = "http://127.0.0.1:5000/hotproducts";
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchHotProducts() {
      const response = await axios.get(URL);
      setData(response.data.data);
    }
  
    fetchHotProducts();
  }, []);
  
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  modal
    ? document.body.classList.add("active-modal-view")
    : document.body.classList.remove("active-modal-view");

  const [modalItem, setModalItem] = useState({})
  return (
    <section
      id="hotproduct"
      className="max-w-[1300px] mx-auto p-4 my-5 flex flex-col items-center"
    >
      {modal && <ModalView product={modalItem} handleModal={handleModal}></ModalView>}
      <h1 className="text-4xl font-medium text-center sm:text-[2.5rem] p-6 ">
        Sản Phẩm Nổi Bật
      </h1>
      <div className="grid grid-cols-1 w-full place-items-center mt-5 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((e) => {
          return (
            <ItemProduct key={e._id} product={e} setModalItem={setModalItem} handleModal={handleModal} />
          );
        })}
      </div>
    </section>
  );
};

export default HotProducts;
