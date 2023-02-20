import { createContext, useContext, useState } from "react";


const Cart = createContext();

const Context = ({ children }) => {
  const [cartItem, setCartItem] = useState(0);

  return (
    <Cart.Provider value={{ cartItem, setCartItem}}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
