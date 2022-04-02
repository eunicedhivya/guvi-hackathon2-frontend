import CartItem from "../components/CartItem";
function Cart({ cartItems, removeItem }) {
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
                          key={cartItm.id}
                          cartItm={cartItm}
                          removeItem={removeItem}
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
                  ></ul>
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
