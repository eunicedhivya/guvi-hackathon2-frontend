import React from "react";
import { useHistory } from "react-router-dom";

function Product({ product, addItem }) {
  return (
    <div className="col-md-3 mb-4 rounded">
      <div className="card">
        <div className="text-center">
          <img src={product.productImg} width="100%" alt="" />
        </div>
        <div className="text-center p-3">
          <h5>{product.productName}</h5>
          <p className="text-success">${product.productPrice}</p>
          <button
            type="button"
            className="btn btn-primary mt-2 m-auto"
            style={{ display: "block" }}
            onClick={() => {
              addItem(product.id);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
