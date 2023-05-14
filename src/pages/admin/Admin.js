import React, { useState, useEffect } from "react";
import DashBoard from "./components/Dashboard/DashBoard";
import MainDash from "./components/MainDash";
import AddModal from "./components/AddModal/AddModal";
import axios from "axios";

export const newProductStore = React.createContext();
export const addModal = React.createContext();
const Admin = () => {
  const [products, setProducts] = useState([]);
  const [viewModal, setViewModal] = useState(false);
  
  // fetch data from DB
  useEffect(() => {
    const URL = "http://localhost:5000/uploadproduct";
    const fechtData = async () => {
      const response = await axios.get(URL);
      const data = response.data.data;
    
      setProducts(data);
    };
    fechtData();
  }, []);
  return (
    <newProductStore.Provider
      value={{ products, setProducts }}
      className="max-w-[1380px] mx-auto h-screen relative"
    >
      <addModal.Provider value={{ viewModal, setViewModal }}>
        {viewModal && <AddModal></AddModal>}
        <DashBoard />
        <MainDash />
      </addModal.Provider>
    </newProductStore.Provider>
  );
};

export default Admin;
