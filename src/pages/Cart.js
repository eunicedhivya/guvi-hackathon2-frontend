import CartItem from "../components/CartItem";
import { useState } from "react";
function Cart({ cartItems, removeItem }) {
  const totalItem = cartItems.length;
  const [itemCostList, setItemCostList] = useState([]);
  const sumTotalItems =
    totalItem === 0
      ? "0"
      : cartItems
          .map((items) => parseFloat(items.productPrice))
          .reduce((a, b) => a + b);
  const shipping = totalItem === 0 ? "0" : 20.0;

  return (
    <div className="container">
      <h2>Cart</h2>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-5">
            <div className="col-md-8">
              <div className="card">
                <h5 className="card-header">Cart</h5>
                <div className="card-body">
                  <ul
                    className="list-group list-group-flush"
                    style={{ minHeight: "140px" }}
                  >
                    {cartItems.map((cartItm) => {
                      console.log(cartItm);
                      return (
                        <CartItem
                          key={cartItm._id}
                          cartItm={cartItm}
                          removeItem={removeItem}
                          setItemCostList={setItemCostList}
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h5 className="card-header">Cart</h5>
                <div className="card-body">
                  <ul
                    className="list-group list-group-flush"
                    style={{ minHeight: "140px" }}
                  >
                    <li className="d-flex justify-content-between">
                      <span>Total Items</span>
                      <span>{totalItem}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <span>Subtotal</span>
                      <span>${sumTotalItems}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <span>Shipping</span>
                      <span>${shipping}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <span>Total(Incl. taxes)</span>
                      <span>
                        ${totalItem === 0 ? "0" : sumTotalItems + shipping}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
