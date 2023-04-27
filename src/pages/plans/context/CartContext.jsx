// All Rights Reserved. © disgin.website

import React, { createContext, useContext, useEffect, useState } from "react";
import CartItem from "../CartItem";

const CartContext = createContext({});

const initoalCartItem = localStorage.getItem("item")
  ? JSON.parse(localStorage.getItem("item"))
  : [];

const CartContextprovider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setcartItems] = useState(initoalCartItem);

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(cartItems));
  }, [cartItems]);

  const getItems = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const plusItems = (id) => {
    setcartItems((currItems) => {
      if (currItems.find((item) => item.id == id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const minusItems = (id) => {
    setcartItems((currItems) => {
      if (currItems.find((item) => item.id == id) == null) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItems = (id) => {
    setcartItems((currItems) => currItems.filter((item) => item.id !== id));
  };

  const openCart = () => {
    setIsOpen(true);
  };

  const closeCart = () => {
    setIsOpen(false);
  };

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  
  return (
    <CartContext.Provider
      value={{
        cartItems,
        getItems,
        plusItems,
        minusItems,
        removeItems,
        openCart,
        closeCart,
        cartQuantity,
      }}
    >
      {children}
      <CartItem isOpen={isOpen} />
    </CartContext.Provider>
  );
};

export default CartContextprovider;

export const useCartContext = () => {
  return useContext(CartContext);
};
