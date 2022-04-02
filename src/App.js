import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Cart from "./pages/Cart";
import Store from "./pages/Store";
import productData from "./product-data";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    const getData = productData.filter((inp) => inp.id === item);
    setCartItems([...cartItems, ...getData]);
  };

  const removeItem = (item) => {
    const fData = cartItems.filter((obj) => obj.id !== item);
    setCartItems([...fData]);
  };

  return (
    <div className="App">
      <NavBar cartItems={cartItems} />
      <Switch>
        <Route path="/" exact>
          <Store productData={productData} addItem={addItem} />
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
