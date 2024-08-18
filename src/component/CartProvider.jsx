import React, { useReducer, createContext } from "react";
import { reducer } from "../Utility/CartReducer";

const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, []);

  return (
    <>
      <div>
        <cartContext.Provider value={{ cart, dispatch }}>
          {children}
        </cartContext.Provider>
      </div>
    </>
  );
};

export default cartContext;
