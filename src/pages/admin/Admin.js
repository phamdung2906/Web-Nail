import React, { useState, useEffect } from "react";
import DashBoard from "./components/Dashboard/DashBoard";
import MainDash from "./components/MainDash";
import AddModal from "./components/AddModal/AddModal";
import axios from "axios";
import LoginPage from "./LoginPage";

export const newProductStore = React.createContext();
export const addModal = React.createContext();
export const editProductById = React.createContext();
export const login = React.createContext();
export const titleLayout = React.createContext();
const Admin = () => {
  const [products, setProducts] = useState([]);
  const [viewModal, setViewModal] = useState(false);
  const [editProduct, setEditProduct] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const [layout, setLayout] = useState("Sản Phẩm");
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
    <login.Provider value={{ isLogin, setIsLogin }}>
      {isLogin ? (
        <newProductStore.Provider
          value={{ products, setProducts }}
          className="max-w-[1380px] mx-auto h-screen relative"
        >
          <addModal.Provider value={{ viewModal, setViewModal }}>
            <editProductById.Provider value={{ editProduct, setEditProduct }}>
              {viewModal && (
                <AddModal productEdited={editProduct[0]}></AddModal>
              )}
              <titleLayout.Provider value={{ layout, setLayout }}>
                <DashBoard />
                <MainDash />
              </titleLayout.Provider>
            </editProductById.Provider>
          </addModal.Provider>
        </newProductStore.Provider>
      ) : (
        <LoginPage></LoginPage>
      )}
    </login.Provider>
  );
};

export default Admin;
