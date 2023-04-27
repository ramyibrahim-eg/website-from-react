// All Rights Reserved. © disgin.website

import React from "react";
import { Stack, Button } from "react-bootstrap";
import plans from "./data.json";
import currency from "./Currency";
import { useCartContext } from "./context/CartContext";

const ItemInCart = ({ id, quantity }) => {
  const { removeItems } = useCartContext();
  const item = plans.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-item-center">
      <div className="me-auto">
        <div className="align-item-center">
          {item.name}{" "}
          {quantity > 1 && <span className="text-muted">X{quantity}</span>}
        <div className="text-muted">{currency(item.price)}</div>
        </div>
      </div>
        <div>{currency(item.price * quantity)}</div>
      <button className="circle__remove"
        variant="outline-danger"
        size="sm"
        onClick={() => removeItems(id)}
      >
        &times;
      </button>
    </Stack>
  );
};

export default ItemInCart;
