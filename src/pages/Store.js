import { useState, useEffect } from "react";
import Product from "../components/Product";

function Store({ productList, addItem }) {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span>Hottest Giveaways</span>
        <span className="custom-badge text-uppercase">See More</span>
      </div>
      <div className="row">
        {productList.map((product) => {
          return (
            <Product key={product._id} product={product} addItem={addItem} />
          );
        })}
      </div>
    </div>
  );
}

export default Store;
