// All Rights Reserved. © disgin.website

import React from "react";
import currency from "./Currency";
import { useCartContext } from "./context/CartContext";

const StoreItem = ({ id, name, desc, price, features }) => {
  const { getItems, plusItems, minusItems, removeItems } = useCartContext();
  const quantity = getItems(id);

  return (
    <>
      <h3>{name}</h3>
      <small>{desc}</small>
      <h1>{currency(price)} /mo</h1>
      <h4>Features</h4>
      {features.map(({ feature, available }, index) => (
        <p key={index} className={!available ? "disabled" : ""}>
          {feature}
        </p>
      ))}
      <div>
        {quantity === 0 ? (
          <button className="btn lg" onClick={() => plusItems(id)}>
            Choose Plan
          </button>
        ) : (
          <div className="all__div__cart">
            <div className="div__button__cart">
              <button className="button__cart" onClick={() => minusItems(id)}>
                -
              </button>
              <p>{quantity} In Cart</p>
              <button className="button__cart" onClick={() => plusItems(id)}>
                +
              </button>
            </div>
            <button className="btn lg red" onClick={() => removeItems(id)}>
              Remove
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default StoreItem;
