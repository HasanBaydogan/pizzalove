import React from "react";
import CheckoutBtn from "../checkout/CheckoutBtn";
import LinkButton from "../../components/Button";
import ResetLocation from "../../helpers/ResetLocation";
import { Link } from "react-router-dom";

const CartTotals = ({
  totalPayment,
  productsQuantity,
  taxes,
  className,
  validLogin,
  showModal,
  activateLoginModal,
}) => {
  return (
    <article className={className}>
      {productsQuantity === 0 ? null : (
        <section className="cart-totals">
          <section className="totals-content">
            <section>
              <h4 className="cart-totals-sum">Vergi %10:</h4>
              <p>₺ {taxes}</p>
            </section>
            <section>
              <h4 className="cart-totals-sum">Miktar:</h4>
              <p> {productsQuantity}</p>
            </section>
            <section>
              <h4 className="cart-totals-sum">Toplam:</h4>
              <p>₺ {totalPayment}</p>
            </section>
          </section>
          {className === "cart-carttotals" ? (
            <section className="cart-interaction-btns">
              <CheckoutBtn
                className="active-button-style"
                validLogin={validLogin}
                showModal={showModal}
                activateLoginModal={activateLoginModal}
              />
              <LinkButton
                onClick={ResetLocation}
                to="/menu"
                className="back-to-menu"
              >
                Menüye geri dön
              </LinkButton>
            </section>
          ) : (
            <section className="checkout-interaction-btns">
              <Link
                to="/payment"
                className="active-button-style"
                onClick={ResetLocation}
              >
                Ödemeye devam edin
              </Link>
              <Link
                to="/menu"
                className="checkout-backtomenu-btn"
                onClick={ResetLocation}
              >
                Menüye geri dön
              </Link>
            </section>
          )}
        </section>
      )}
    </article>
  );
};

export default CartTotals;
