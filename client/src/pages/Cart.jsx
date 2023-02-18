import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { CartState } from "../Context";

const Cart = () => {
  const [items, setItem] = useState([]);
  const [user, setuser] = useState("");
  const { setCartItem } = CartState();
  const [total, setTotal] = useState(0);
  const filteredCart = items.filter((item) => item.user === user._id);
  useEffect(() => {
    axios
      .get("http://localhost:7000/api/cart/")
      .then((res) => setItem(res.data))
      .catch((err) => console.log(err));

    const User = JSON.parse(localStorage.getItem("userInfo"));
    setuser(User);
    let all = filteredCart.reduce((acc, curValue) => acc + curValue.price, 0);
    setTotal(all);
    setCartItem(filteredCart.length);
  }, [filteredCart, setCartItem]);

  return (
    <div>
      <div>
        total:: ${total}
        {filteredCart.map((res) => (
          <div className="key" key={res._id}>
            <div className="images">
              <img src={res.image1} alt="" />
            </div>

            <div className="price">{res.price}</div>
            <div className="decr">{res.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
