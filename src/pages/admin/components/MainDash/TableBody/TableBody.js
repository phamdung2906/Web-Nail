import React from "react";
import LineTable from "./LineTable";
const TableBody = () => {
  const data = [
    {
      img: "/imagespublic/sp1.jpg",
      name: "Nailbox Ma 001",
      type: "Mat meo",
      price: 50000,
      sale: 70000,
      status: "Running",
      hot: "No",
    },
    {
      img: "/imagespublic/sp2.jpg",
      name: "Nailbox Ma 002",
      type: "Nhu Flash",
      price: 60000,
      sale: 70000,
      status: "Running",
      hot: "No",
    },
    {
      img: "/imagespublic/sp3.jpg",
      name: "Nailbox Ma 003",
      type: "Sang trong",
      price: 70000,
      sale: 70000,
      status: "Running",
      hot: "No",
    },
    {
      img: "/imagespublic/sp4.jpg",
      name: "Nailbox Ma 004",
      type: "Sang trong",
      price: 80000,
      sale: 70000,
      status: "Running",
      hot: "No",
    },
    {
      img: "/imagespublic/sp5.jpg",
      name: "Nailbox Ma 005",
      type: "Mat meo",
      price: 50000,
      sale: 70000,
      status: "Running",
      hot: "No",
    },
  ];
  return (
    <tbody className="overflow-auto h-[50px]">
      {data.map((line, i) => (
        <LineTable
          key={i}
          name={line.name}
          img={line.img}
          type={line.type}
          price={line.price}
          sale={line.sale}
          status={line.status}
          hot={line.hot}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
