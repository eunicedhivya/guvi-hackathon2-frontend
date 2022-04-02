import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Cart from "./pages/Cart";
import Store from "./pages/Store";
import productData from "./product-data";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  const [productList, setProductList] = useState([]);

  const url = "http://localhost:4000/products/";

  const getProducts = () => {
    fetch(url, { method: "GET" })
      .then((data) => data.json())
      .then((prdt) => setProductList(prdt));
  };

  useEffect(getProducts, []);

  // console.log(productList);

  const [cartItems, setCartItems] = useState([]);

  const addItem = (item, otherdata) => {
    const getData = productList.filter((inp) => inp._id === item);
    setCartItems([...cartItems, ...getData]);
    console.log("cartItems", cartItems);
  };

  const removeItem = (item) => {
    const fData = cartItems.filter((obj) => obj._id !== item);
    setCartItems([...fData]);
  };

  return (
    <div className="App">
      <NavBar cartItems={cartItems} />
      <Switch>
        <Route path="/" exact>
          <Store productList={productList} addItem={addItem} />
        </Route>
        <Route path="/cart">
          <Cart cartItems={cartItems} removeItem={removeItem} />
        </Route>
        <Route path="/login">
          <p>Login</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
