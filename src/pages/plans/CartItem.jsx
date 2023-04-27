// All Rights Reserved. © disgin.website

import { Offcanvas, Stack } from "react-bootstrap";
import React from "react";
import { useCartContext } from "./context/CartContext";
import ItemInCart from "./ItemInCart";
import currency from "./Currency";
import plans from "./data.json";

const CartItem = ({ isOpen }) => {
  const { cartItems, closeCart } = useCartContext();
  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => {
            return <ItemInCart key={item.id} {...item} />;
          })}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {currency(
              cartItems.reduce((total, cartItems) => {
                const item = plans.find((i) => i.id === cartItems.id);
                return total + (item?.price || 0) * cartItems.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartItem;
