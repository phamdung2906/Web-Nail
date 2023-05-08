import React, { useState } from "react";
import DashBoard from "./components/Dashboard/DashBoard";
import MainDash from "./components/MainDash";
import AddModal from "./components/AddModal/AddModal";
const Admin = () => {
  const [addModal, setAddModal] = useState(false);
  const handleAddModal = () => {
    setAddModal(!addModal);
  };
  return (
    <div className="max-w-[1380px] mx-auto h-screen relative">
      {addModal && <AddModal handleAddModal={handleAddModal} />}
      <DashBoard />
      <MainDash handleAddModal={handleAddModal}/>
    </div>
  );
};

export default Admin;
