// Detail.js
import React from "react";
import { useParams } from "react-router-dom";

import data from "../data/product.json";
import NotFound from "./NotFound";

const Detail = () => {
  const { id } = useParams();
  const selectedItem = data.find((item) => item.id === id);
  if (!selectedItem) {
    return <NotFound />;
  }

  return (
    <div className="Details-container">
      <h2>Detail Page</h2>
      <p>ID: {selectedItem.id}</p>
      <p>Email: {selectedItem.email}</p>
      <p>Full Name: {selectedItem.fullname}</p>
      <p>Phone: {selectedItem.phone}</p>
    </div>
  );
};

export default Detail;
