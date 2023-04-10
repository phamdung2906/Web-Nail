import React from "react";

const ModalView = ({ handleModal }) => {
  return (
    <section className="h-screen fixed right-0 left-0 top-0 bottom-0 z-10">
      <div
        onClick={handleModal}
        className="bg-slate-200 w-full h-full opacity-40 "
      ></div>
      <div className="bg-white xl:top-14 xl:bottom-14 xl:right-20 xl:left-20 sm:top-20 sm:bottom-10 sm:right-14 sm:left-14 absolute top-0 right-0 left-0 bottom-0 grid grid-cols-2">
        <div className="flex flex-col">
          <img
            className="w-full h-4/5 p-2 rounded-2xl"
            src="./imagespublic/sp1.jpg"
            alt="anhsp"
          ></img>
          <div className="flex-1 items-center flex flex-row justify-evenly">
            <img className="xl:w-32 xl:h-32 rounded-2xl w-24 h-24" src="./imagespublic/sp1.jpg" alt="anhsp"></img>
            <img className="xl:w-32 xl:h-32 rounded-2xl w-24 h-24" src="./imagespublic/sp1.jpg" alt="anhsp"></img>
            <img className="xl:w-32 xl:h-32 rounded-2xl w-24 h-24" src="./imagespublic/sp1.jpg" alt="anhsp"></img>
            <img className="xl:w-32 xl:h-32 rounded-2xl w-24 h-24" src="./imagespublic/sp1.jpg" alt="anhsp"></img>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default ModalView;
