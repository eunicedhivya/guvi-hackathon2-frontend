import DateTimePicker from "react-datetime-picker";
import { useState } from "react";

function CartItem({ cartItm, removeItem }) {
  const [strtDateTime, setStrtDateTime] = useState(new Date());
  const [endDateTime, setEndDateTime] = useState(new Date());
  const [noItems, setNoItems] = useState(1);

  const OrderTime =
    (Date.parse(endDateTime) - Date.parse(strtDateTime)) / 3600000;
  const costItem = cartItm.productPrice * OrderTime * noItems;

  console.log(costItem);

  //   console.log("start", Date.parse(strtDateTime));
  //   console.log("End", Date.parse(endDateTime));
  //   console.log(
  //     "=",
  //     (Date.parse(endDateTime) - Date.parse(strtDateTime)) / 3600000
  //   );

  return (
    <li className="list-group-item gy-5 mb-2 pb-2">
      <div className="row mb-2">
        <div className="col-sm-3">
          <img style={{ width: "100%" }} src={cartItm.productImg} alt="" />
        </div>
        <div className="col-sm-9">
          <h3 className="card-text">{cartItm.productName}</h3>
          <p>₹{cartItm.productPrice}</p>
          <div style={{ display: "flex", columnGap: "10px" }}>
            <select
              className="mr-2 p-1"
              defaultValue={noItems}
              onChange={(e) => setNoItems(e.target.value)}
            >
              {[...Array(cartItm.quantity)].map((item, i) => {
                const noAvailable = i + 1;
                return (
                  <option key={noAvailable} value={noAvailable}>
                    {noAvailable}
                  </option>
                );
              })}
            </select>
            <button
              onClick={() => removeItem(cartItm._id)}
              className="btn btn-sm btn-primary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", columnGap: "10px" }}>
        <div className="row mb-2">
          <div className="col-md-6">
            <DateTimePicker
              onChange={setStrtDateTime}
              value={strtDateTime}
              format="dd-MM-yy h:mm a"
            />
          </div>
          <div className="col-md-6">
            <DateTimePicker
              onChange={setEndDateTime}
              value={endDateTime}
              format="dd-MM-yy h:mm a"
            />
          </div>
          <div className="mt-3 alert alert-warning">
            No of Hours: {OrderTime} x Price: {cartItm.productPrice} x No of
            Item: {noItems} = ₹{costItem}
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
