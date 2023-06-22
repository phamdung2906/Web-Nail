import React from "react";

const LineTbHeader = ({ width, title }) => {
  return (
    <th style={{ width: width }} className="text-left text-lg">
      {title}
    </th>
  );
};

export default LineTbHeader;
