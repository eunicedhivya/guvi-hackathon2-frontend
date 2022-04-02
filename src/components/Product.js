import React from "react";
import { useHistory } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";
import { useState } from "react";

function Product({ product, addItem }) {
  const [strtDateTime, setStrtDateTime] = useState(new Date());
  const [endDateTime, setEndDateTime] = useState(new Date());
  return (
    <div className="col-md-4 mb-4 rounded">
      <div className="card">
        <div className="text-center">
          <img src={product.productImg} width="100%" alt="" />
        </div>
        <div className="text-center p-3">
          <h5>{product.productName}</h5>
          <p className="text-success">${product.productPrice}</p>
          <div style={{ display: "flex", columnGap: "10px" }}>
            <div className="row mb-2">
              <div className="col-md-12">
                <DateTimePicker
                  onChange={setStrtDateTime}
                  value={strtDateTime}
                  format="dd-MM-yy h:mm a"
                />
              </div>
              <div className="col-md-12">
                <DateTimePicker
                  onChange={setEndDateTime}
                  value={endDateTime}
                  format="dd-MM-yy h:mm a"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary mt-2 m-auto"
            style={{ display: "block" }}
            onClick={() => {
              addItem(product._id);
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
