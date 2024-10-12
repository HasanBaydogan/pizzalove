import React, { useEffect } from "react";
//components
import ScrollBtn from "../../helpers/ScrollBtn";
import EmptyCart from "./EmptyCart";

const Cart = ({ cartItems, CartItem }) => {
  useEffect(() => {
    document.title = "Alışveriş sepeti | Pizza Love";
  }, []);
  return (
    <main className="cart">
      <h2>Alışveriş sepeti</h2>
      <article className="cart-content">
        {cartItems.length === 0 ? <EmptyCart /> : CartItem}
      </article>
      <ScrollBtn />
    </main>
  );
};

export default Cart;
